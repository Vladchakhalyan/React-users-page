export const getUsers = (state) => {
  return state.usersReducer.users;
};

export const getPageSize = (state) => {
  return state.usersReducer.pageSize;
};

export const getUsersTotalCount = (state) => {
  return state.usersReducer.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersReducer.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersReducer.isFetching;
};

export const getFollowingProgress = (state) => {
  return state.usersReducer.toggleFLUN;
};
