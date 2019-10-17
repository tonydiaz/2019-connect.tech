import base64 from "react-native-base64";

const USERNAME = "<USERNAME>";
const PASSWORD = "<PASSWORD>";
const SKILL_ID = "<SKILL-ID>";

module.exports = MessageRequest = (input, context = {}) => {
  let body = {
    input: {
      text: input
    }
  };
  if (context) {
    body.context = context;
  }
  return fetch(
    "https://gateway.watsonplatform.net/conversation/api/v1/workspaces/" +
      SKILL_ID +
      "/message?version=2018-09-20",
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + base64.encode(USERNAME + ":" + PASSWORD),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  )
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });
};
