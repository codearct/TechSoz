const BaseService = require("./base-service");
const SourceTerm = require("../models/source-term");

class SourceTermService extends BaseService {}

module.exports = new SourceTermService(SourceTerm);
