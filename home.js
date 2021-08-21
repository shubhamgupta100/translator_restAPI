const Translator = require("../models/Translate");
module.exports.home = async function (request, response) {
  const translate = require("@vitalets/google-translate-api");
  const { from, to, text } = request.query;
  translate(text, { from, to }).then((res) => {
    Translator.find(request.query, (err, translate) => {
      if (err) {
        response.json({
          status: 400,
          message: err,
        });
      }
      if (translate) {
        response.json({
          status: 200,
          message: "Task Done",
          msg: translate,
        });
      } else {
        Translator.create({
          from,
          to,
          text,
          translatedText: res.text,
        });
        console.log("Response", res.text);
        response.json({
          status: 200,
          message: "Task Completed !!",
          data: res.text,
        });
      }
    });
  });
};
