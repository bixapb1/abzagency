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

const initStore = {
  token: "",
  users: [],
  positions: [],
  name: "",
  email: "",
  phone: "",
  position_id: "",
  photo: "",
  validation: "" || {},
  success: false,
  page: 1,
  btnShowMore: true,
  loading: true,
};

export const reducer = (state = initStore, action) => {
  switch (action.type) {
    case TOKEN: {
      return { ...state, token: action.payload };
    }
    case USERS: {
      return { ...state, users: action.payload };
    }
    case PAGE: {
      return { ...state, page: ++action.payload };
    }
    case BTN_SHOW_MORE: {
      return { ...state, btnShowMore: action.payload };
    }
    case POSITIONS: {
      return { ...state, positions: action.payload };
    }
    case NAME: {
      return { ...state, name: action.payload };
    }
    case EMAIL: {
      return { ...state, email: action.payload };
    }
    case PHONE: {
      return { ...state, phone: action.payload };
    }
    case ID_POSITION: {
      return { ...state, position_id: action.payload };
    }
    case PHOTO: {
      return { ...state, photo: action.payload };
    }
    case VALIDATION: {
      return { ...state, validation: action.payload };
    }
    case SUCCESS: {
      return { ...state, success: action.payload };
    }
    case LOADING: {
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};
