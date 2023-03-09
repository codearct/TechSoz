const UserService = require("./user-service");
const Member = require("../models/member");

class MemberService extends UserService {}

module.exports = new MemberService(Member);
