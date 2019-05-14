import Vue from "vue";
import Vuex from "vuex";
import { ActionTypes } from "./ActionTypes";
import { HostInfoService } from "../services/HostInfoService";
import MutationTypes from "./MutationTypes";
import Server from "../models/Server";
import Domain from "../models/Domain";
Vue.use(Vuex);

export default new Vuex.Store({
  domain: {},
  servers: [],
  getters: {},
  mutations: {
    [MutationTypes.SET_DOMAIN](state, domain) {
      state.domain = domain;
    },
    [MutationTypes.SET_SERVERS](state, servers) {
      state.servers = servers;
    }
  },
  actions: {
    [ActionTypes.GET_HOST_INFO]({ commit }, hostName) {
      HostInfoService.getHostInfo(hostName).then(response => {
        console.log(response);
        commit(
          MutationTypes.SET_SERVERS,
          response.servers.map(Server.fromJson)
        );
        commit(MutationTypes.SET_DOMAIN, Domain.fromJson(response));
      });
    }
  }
});
