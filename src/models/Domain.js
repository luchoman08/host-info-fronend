export default class Domain {
  constructor(
    hostName,
    serversChanged,
    sslGrade,
    previousSslGrade,
    logo,
    title,
    isDown,
    servers
  ) {
    this.hostName = hostName;
    this.serversChanged = serversChanged;
    this.sslGrade = sslGrade;
    this.previousSslGrade = previousSslGrade;
    this.logo = logo;
    this.title = title;
    this.isDown = isDown;
    this.servers = servers;
  }
  static fromJson(json) {
    return new Domain(
      json.host_name,
      json.servers_changed,
      json.ssl_grade,
      json.previous_ssl_grade,
      json.logo,
      json.title,
      json.is_down,
      json.servers
    );
  }
}
