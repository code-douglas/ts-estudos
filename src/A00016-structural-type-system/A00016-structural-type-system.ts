type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = {
  username: 'Douglas',
  password: '123123123',
};

const sentUser = {
  username: 'Douglas',
  password: '123123123',
};

const isLogged = verifyUser(dbUser, sentUser);
console.log(isLogged);
