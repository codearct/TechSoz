const BaseService = require("./base-service");
const DestinationTerm = require("../models/destination-term");

class DestinationTermService extends BaseService {}

module.exports = new DestinationTermService(DestinationTerm);
