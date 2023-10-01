import { handleProfileSignup } from "./utils";

handleProfileSignup().then((responses) => {
  for (const response of responses) {
    console.log(`${response.body.firstName} ${response.body.lastName}`);
  }
}).catch((error) => {
  console.log("Signup system offline");
});
