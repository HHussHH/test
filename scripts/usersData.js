import { getUsersInfo } from "./getUsersInfo";

let skipCount = 0;
let usersDataList = await getUsersInfo();
let usersDeletedId = [];

export const getUsersList = async (skip) => {
  usersDataList = await getUsersInfo(skip);
  usersDataList = usersDataList.filter(
    (user) => !usersDeletedId.includes(user.id)
  );
  return usersDataList;
};

export const setUsersList = (newData) => {
  usersDataList = newData;
};

export const getDeletedId = () => {
  return usersDeletedId;
};

export const setDeletedId = (newId) => {
  usersDeletedId.push(newId);
};

export const setSkip = (newSkip) => {
  skipCount = skipCount + newSkip;
};

export const getSkip = () => {
  return skipCount;
};
