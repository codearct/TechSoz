const mongoose = require("mongoose");
const Member = require("./member");

const CreatorSchema = new mongoose.Schema({
  createdTerms: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SourceTerm",
    },
  ],
});

CreatorSchema.plugin(require("mongoose-autopopulate"));
module.exports = Member.discriminator("Creator", CreatorSchema);
