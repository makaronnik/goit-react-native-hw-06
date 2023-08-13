export const thunkStatuses = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

/**
 * @param {String} type
 * @param {Array} thunks
 */
export const combineThunksActions = (type, thunks) =>
  thunks.map((thunk) => thunk[type]);
