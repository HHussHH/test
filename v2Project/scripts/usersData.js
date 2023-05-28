import { getUsersInfo } from "./getUsersInfo";

const getFirstInitData = async () => {
  return await getUsersInfo();
};

const initialDataList = getFirstInitData();
let usersDataList = getFirstInitData();
let usersDeletedId = [];
let deletedUsersInfo = [];
let selectedId = null;

export const getInitialData = () => {
  return initialDataList;
};
export const getUsersList = () => {
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

export const createNewDeletedId = (newArr) => {
  usersDeletedId = [...newArr];
};

export const getDeletedUsersInfo = () => {
  return deletedUsersInfo;
};

export const setDeletedUsersInfo = (newData) => {
  deletedUsersInfo.push(newData);
};

export const createNewDeletedUsersInfo = (newArr) => {
  deletedUsersInfo = [...newArr];
};

export const getSelectedId = () => {
  return selectedId;
};

export const setSelectedId = (newId) => {
  selectedId = newId;
};

export const filteredUsersList = async (newArr) => {
  setUsersList(
    await newArr.filter((user) => !usersDeletedId.includes(user.id))
  );
};
