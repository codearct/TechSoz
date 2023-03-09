const mongoose = require("mongoose");

const DestinationTermSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  sourceTerm: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "SourceTerm",
  },
  memberSuggested: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Member",
    autopopulate: { maxDepth: 1 },
  },
  membersVoted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Member",
    },
  ],
});

module.exports = mongoose.model("DestinationTerm", DestinationTermSchema);
