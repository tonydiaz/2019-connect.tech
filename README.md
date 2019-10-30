# Connect.tech 2019 talk
## Starting out in React Native

You will need to install the Expo CLI. Please look at the getting started guide for installation https://facebook.github.io/react-native/docs/getting-started

### Setup IBM Watson Assistant https://www.ibm.com/cloud/watson-assistant/
1. Sign up for an [IBM Cloud](https://cloud.ibm.com/login) account
2. Once you login to the dashboard  search from Watson Assistant in the header
3. Select Watson Assistant and sign up for the `Lite` plan. Click `Create`
4. Click `Launch Watson Assistant`
5. Click on the `Skills` icon on the left hand side
6. On the My first skill card. Click on the three dots and select `View API Details`. Copy an paste the Username, Password and Skill ID in the Assistant.js file
6. Click on `My first skill`
7. In the upper right of the screen click on the three dots to `Import`
8. Use the `skill-Are-you-Rob-Base.json` file in the text to upload. It should give you the same dialog and intents from the demo

### Start the Expo server
```
npm install
npm start
```

### Are you Rob Base? (flowchart)
![robBase](https://user-images.githubusercontent.com/7145340/67034394-976a1680-f0e5-11e9-82d0-0ff659954eec.jpg)
