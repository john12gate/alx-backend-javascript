import signUpUser from "./4-user-promise";

const userPromise = signUpUser("Bob", "Dylan");

userPromise.then((user) => {
  console.log(user);
});
