const Creator = require("../models/creator");
const UserService = require("./user-service");
const sourceTermService = require("./source-term-service");

class CreatorService extends UserService {
  async createNewTerm(creatorId, sourceTerm) {
    const creator = await this.find(creatorId);

    const newSrcTerm = await sourceTermService.insert({
      description: sourceTerm,
      creator: creator,
    });

    creator.createdTerms.push(newSrcTerm);
    await creator.save();

    return newSrcTerm;
  }
}

module.exports = new CreatorService(Creator);
