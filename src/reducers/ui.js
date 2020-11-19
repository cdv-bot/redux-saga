import * as Types from './../constants/ui';

const initialState = {
  showLoading: false,
  hideSidebar: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_LOADING:
      return {
        ...state,
        showLoading: true
      };
    case Types.HIDE_LOADING:
      return {
        ...state,
        showLoading: false
      };
    case Types.HIDE_SIDEBAR:
      return {
        ...state,
        hideSidebar: !state.hideSidebar
      };
    default:
      return state;
  }
};

export default reducer;
