const mongoose = require("mongoose");

const SourceTermSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Creator",
    autopopulate: { maxDepth: 1 },
  },
  destinationTerms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DestinationTerm",
      autopopulate: { maxDepth: 2 },
    },
  ],
});

SourceTermSchema.plugin(require("mongoose-autopopulate"));
module.exports = mongoose.model("SourceTerm", SourceTermSchema);
