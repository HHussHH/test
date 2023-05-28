//получаем данные о пользователях + лимит пользователей.
export const getUsersInfo = async (skip = 0) => {
  const request = await fetch(
    `https://dummyjson.com/users?&limit=100&skip=${skip}&select=firstName,id,image,phone,email`
  );
  const data = await request.json();

  let usersInfo = data.users;
  return usersInfo;
};
