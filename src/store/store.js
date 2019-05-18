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
    [MutationTypes.SET_SERVERS](state, servers) {
      state.servers = servers;
    }
  },
  actions: {
    [ActionTypes.GET_LATEST_SEARCHED_DOMAINS]({ commit }) {
      return HostInfoService.getLatestSearched().then(response => {
        commit(
          MutationTypes.SET_LATEST_SEARCHED_DOMAINS,
          response.map(Domain.fromJson)
        );
      });
    },
    [ActionTypes.GET_HOST_INFO]({ commit }, hostName) {
      return HostInfoService.getHostInfo(hostName)
        .then(response => {
          commit(
            MutationTypes.SET_SERVERS,
            response.servers.map(Server.fromJson)
          );
          commit(MutationTypes.SET_DOMAIN, Domain.fromJson(response));
        })
        .catch(err => {
          commit(MutationTypes.SET_DOMAIN, null);
          commit(MutationTypes.SET_SERVERS, []);
          throw err;
        });
    }
  }
});
