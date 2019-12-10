export const Actions = {
  UPDATE_CONVERTER: "UPDATE_CONVERTER",
  ADD_TRANSACTION: "ADD_TRANSACTION",
  DELETE_TRANSACTION: "DELETE_TRANSACTION",
  FETCH_STATE: "FETCH_STATE"
};

export const updateConverter = value => {
  localStorage.setItem("converter", value);
  return {
    type: Actions.UPDATE_CONVERTER,
    payload: value
  };
};

export const addTransaction = (transaction = {}) => ({
  type: Actions.ADD_TRANSACTION,
  transaction
});

export const deleteTransaction = id => ({
  type: Actions.DELETE_TRANSACTION,
  id
});

export const fetchState = key => {
  const localVal = localStorage.getItem(key);
  let value;
  if (key === "converter") {
    if (localVal.slice(-1) === ".") {
      value = localVal.replace(".", "");
    } else value = localVal;
  } else {
    value = JSON.parse(localStorage.getItem(key));
  }
  return {
    type: Actions.FETCH_STATE,
    value,
    key
  };
};
