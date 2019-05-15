import { ApiService } from "./ApiService";

export class HostInfoService {
  static getHostInfo(hostUrl) {
    return ApiService.get(`analyze?host=${hostUrl}`);
  }
}
