import {
  TOKEN,
  USERS,
  POSITIONS,
  NAME,
  EMAIL,
  PHONE,
  ID_POSITION,
  PHOTO,
  VALIDATION,
  SUCCESS,
  PAGE,
  BTN_SHOW_MORE,
  LOADING,
} from "./types";

export function setToken(token) {
  return { type: TOKEN, payload: token };
}

export function setUsers(users) {
  return { type: USERS, payload: users };
}
export function setPage(page) {
  return { type: PAGE, payload: page };
}
export function btnShowMore(state) {
  return { type: BTN_SHOW_MORE, payload: state };
}
export function setPositions(positions) {
  return { type: POSITIONS, payload: positions };
}
export function setName(name) {
  return { type: NAME, payload: name };
}
export function setEmail(email) {
  return { type: EMAIL, payload: email };
}
export function setPhone(phone) {
  return { type: PHONE, payload: phone };
}
export function setidPosition(position_id) {
  return { type: ID_POSITION, payload: position_id };
}
export function setPhoto(photo) {
  return { type: PHOTO, payload: photo };
}
export function setValidation(validation) {
  return { type: VALIDATION, payload: validation };
}
export function setSuccess(success) {
  return { type: SUCCESS, payload: success };
}
export function setLoading(loading) {
  return { type: LOADING, payload: loading };
}

export function getToken() {
  return async (dispatch) => {
    const url = `https://frontend-test-assignment-api.abz.agency/api/v1/token`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setToken(json.token));
  };
}

export function getUsers() {
  return async (dispatch, getState) => {
    const { page, users } = getState();
    dispatch(setLoading(true));
    const url = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`;
    const response = await fetch(url);
    const json = await response.json();
    if (page > 1) {
      dispatch(setUsers(users.concat(json.users)));
      dispatch(setLoading(false));
      if (json.total_pages === page) {
        dispatch(btnShowMore(false));
      }
    } else {
      dispatch(setLoading(false));
      dispatch(setUsers(json.users));
    }
  };
}
export function getPositions() {
  return async (dispatch) => {
    const url = `https://frontend-test-assignment-api.abz.agency/api/v1/positions`;
    const response = await fetch(url);
    const json = await response.json();
    dispatch(setPositions(json.positions));
  };
}

export function sendUser() {
  return async (dispatch, getState) => {
    const { name, email, phone, photo, position_id, token } = getState();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("position_id", position_id);
    if (photo) {
      formData.append("photo", photo, photo.name);
    }
    const option = {
      method: "POST",
      headers: {
        Token: token,
      },
      body: formData,
    };
    try {
      const url =
        "https://frontend-test-assignment-api.abz.agency/api/v1/users";
      const response = await fetch(url, option);
      const json = await response.json();
      if (json.fails) {
        dispatch(setValidation(json.fails));
      } else {
        dispatch(setSuccess(json.success));
        dispatch(getUsers());
        dispatch(setValidation(""));
      }
    } catch (error) {
      console.log("Ошибка:", error);
    }
  };
}
