import {
  filteredUsersList,
  getUsersList,
  setDeletedUsersInfo,
} from "./usersData.js";
import { getDeletedId, setDeletedId } from "./usersData.js";
import renderDeletedUsersList from "./renderDeletedUsersList.js";
const deletedId = getDeletedId();
const deleteUser = async (id) => {
  const request = await fetch(
    `https://dummyjson.com/users/${id}?select=firstName,id,image,phone,email`,
    {
      method: "DELETE",
    }
  );
  const data = await request.json();

  // заносим удаленный id в массив удаленных пользователей
  setDeletedId(data.id);
  setDeletedUsersInfo({
    name: data.firstName,
    img: data.image,
    id: data.id,
  });
  renderDeletedUsersList();
  await filteredUsersList(await getUsersList());
};

export default deleteUser;
