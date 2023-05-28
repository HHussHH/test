import { setDeletedId } from "./usersData.js";
const deleteUser = async (id) => {
  const request = await fetch(`https://dummyjson.com/users/${id}`, {
    method: "DELETE",
  });
  const data = await request.json();

  // заносим удаленный id в массив удаленных пользователей
  setDeletedId(data.id);
};

export default deleteUser;
