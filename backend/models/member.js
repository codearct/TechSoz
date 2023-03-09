const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  externalId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  suggestedTerms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DestinationTerm",
    },
  ],
  votedTerms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DestinationTerm",
    },
  ],
});

module.exports = mongoose.model("Member", MemberSchema);
