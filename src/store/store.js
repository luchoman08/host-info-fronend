import Vue from "vue";
import Vuex from "vuex";
import { ActionTypes } from "./ActionTypes";
import { HostInfoService } from "../services/HostInfoService";
import MutationTypes from "./MutationTypes";
import Server from "../models/Server";
import Domain from "../models/Domain";
import { setWindowTitle } from "../common/util";
Vue.use(Vuex);
const defaultState = {
  domain: null, // object nullable
  pages: 1,
  currentPage: 1,
  pagesCount: 1,
  servers: [],
  latestSearchedDomains: [],
  loading: false
};
export default new Vuex.Store({
  state: defaultState,
  getters: {},
  mutations: {
    [MutationTypes.SET_DOMAIN](state, domain) {
      state.domain = domain;
      setWindowTitle(domain.title);
    },
    [MutationTypes.SET_LATEST_SEARCHED_DOMAINS](state, servers) {
      state.latestSearchedDomains = servers;
    },
    [MutationTypes.SET_PAGES_COUNT](state, pagesCount) {
      state.pagesCount = pagesCount;
    },
    [MutationTypes.SET_SERVERS](state, servers) {
      state.servers = servers;
    },
    [MutationTypes.SET_CURRENT_PAGE](state, currentPage) {
      state.currentPage = currentPage;
    }
  },
  actions: {
    [ActionTypes.GET_LATEST_SEARCHED_DOMAINS]({ state, commit }) {
      return HostInfoService.getLatestSearched(state.currentPage).then(
        ({ data }) => {
          commit(
            MutationTypes.SET_LATEST_SEARCHED_DOMAINS,
            data.domains.map(Domain.fromJson)
          );
          commit(MutationTypes.SET_PAGES_COUNT, data.pages);
        }
      );
    },
    [ActionTypes.GET_HOST_INFO]({ commit }, hostName) {
      return HostInfoService.getHostInfo(hostName)
        .then(({ status, data }) => {
          if (status === 200) {
            commit(
              MutationTypes.SET_SERVERS,
              data.servers.map(Server.fromJson)
            );
            commit(MutationTypes.SET_DOMAIN, Domain.fromJson(data));
          }
          return status;
        })
        .catch(err => {
          commit(MutationTypes.SET_DOMAIN, null);
          commit(MutationTypes.SET_SERVERS, []);
          console.log(err, "error at get host info");
          throw err;
        });
    }
  }
});
