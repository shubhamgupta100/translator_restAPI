const Translator = require("../models/Translate");
module.exports.home = async function (request, response) {
  const translate = require("@vitalets/google-translate-api");
  const { from, to, text } = request.query;
  translate(text, { from, to })
    .then((res) => {
      Translator.find({ text, from, to }, function (err, translate) {
        if (err) {
          response.json(err);
        }
        console.log(translate);
        if (translate == "") {
          console.log(res);
          Translator.create({
            from,
            to,
            text,
            translatedText: res.text,
          });
          response.json({
            status: 200,
            message: "Task Completed !!",
            text,
            translatedText: res.text,
          });
        } else {
          response.json({
            status: 200,
            message: "Task Completed !!",
            text: translate[0].text,
            translatedText: translate[0].translatedText,
          });
        }
      });
    })
    .catch((err) => {
      response.json(err);
      console.error(err);
    });
};
