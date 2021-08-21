const mongoose = require("mongoose");

const translateSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    translatedText: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Translator = mongoose.model("Translator", translateSchema);

module.exports = Translator;
