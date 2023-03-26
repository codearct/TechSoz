const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  externalId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
  },
  createdDate: {
    type: Date,
    default: Date.now,
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
