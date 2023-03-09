const BaseService = require("./base-service");

const destinationTermService = require("./destination-term-service");
const sourceTermService = require("./source-term-service");

class UserService extends BaseService {
  async suggestNewTerm(memberId, sourceTermId, destinationTerm) {
    const member = await this.find(memberId);
    const sourceTerm = await sourceTermService.find(sourceTermId);

    const destTerm = await destinationTermService.insert({
      description: destinationTerm,
      sourceTerm: sourceTerm,
      memberSuggested: member,
    });

    member.suggestedTerms.push(destTerm);
    await member.save();

    sourceTerm.destinationTerms.push(destTerm);
    await sourceTerm.save();

    return destTerm;
  }
  async voteTerm(memberId, destTermId) {
    const member = await this.find(memberId);
    const destTerm = await destinationTermService.find(destTermId);

    destTerm.membersVoted.push(member);
    await destTerm.save();

    member.votedTerms.push(destTerm);
    await member.save();
  }
}

module.exports = UserService;
