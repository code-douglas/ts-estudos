var verifyUser = function (user, sentValue) {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};
var dbUser = {
  username: 'Douglas',
  password: '123123123',
};
var sentUser = {
  username: 'Douglas',
  password: '123123123',
};
var isLogged = verifyUser(dbUser, sentUser);
console.log(isLogged);
