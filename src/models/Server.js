export default class Server {
  constructor(sslGrade, country, owner, address) {
    this.sslGrade = sslGrade;
    this.country = country;
    this.owner = owner;
    this.address = address;
  }
  static fromJson(json) {
    return new Server(json.ssl_grade, json.country, json.owner, json.address);
  }
}
