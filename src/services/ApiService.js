import axios from "axios";
import { API_URL } from "../common/config";

export class ApiService {
  static query(resource, params) {
    return axios.get(resource, params).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }

  static getPaged(resource, page) {
    if (!page) {
      page = 1;
    }
    return axios
        .get(`${API_URL}/${resource}?page=${page}`)
        .catch(error => {
          throw new Error(`[RWV] ApiService ${error}`);
        })
  }

  static get(resource) {
    return axios
      .get(`${API_URL}/${resource}`)
      .catch(error => {
        throw new Error(`[RWV] ApiService ${error}`);
      })
  }

  static post(resource, params) {
    return axios.post(`${API_URL}/${resource}`, params);
  }

  static update(resource, slug, params) {
    return axios.put(`${API_URL}/${resource}/${slug}`, params);
  }

  static put(resource, params) {
    return axios.put(`${API_URL}/${resource}`, params);
  }

  static delete(resource) {
    return axios.delete(`${API_URL}/${resource}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
}
