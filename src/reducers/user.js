export const USER_JOIN_REQUEST = "USER_JOIN_REQUEST";
export const USER_JOIN_SUCCESS = "USER_JOIN_SUCCESS";
export const USER_JOIN_FAILURE = "USER_JOIN_FAILURE";

export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE";

const initialState = {
  userJoinLoading: false,
  userJoinError: false,
  userList: [
    {
      email: "asdas@sada",
      nickname: "sasa",
    },
    {
      email: "asdas@sada",
      nickname: "sasa",
    },
    {
      email: "asdas@sada",
      nickname: "sasa",
    },
  ],
  isLogInLoading: false,
  isLogInDone: null,
  isLogInError: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case USER_JOIN_REQUEST:
      return {
        ...state,
        userJoinLoading: true,
      };
    case USER_JOIN_SUCCESS:
      return {
        ...state,
        userJoinLoading: false,
        userList: [...state.userList, action.payload],
      };
    case USER_JOIN_FAILURE:
      return {
        ...state,
        userJoinLoading: false,
        userJoinError: true,
      };
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLogInLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLogInLoading: false,
        isLogInDone: action.payload,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLogInLoading: false,
        isLogInError: action.error,
      };
    default:
      return state;
  }
};

export default user;
