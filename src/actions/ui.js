import * as uiTypes from './../constants/ui';

export const showLoading = () => ({
  type: uiTypes.SHOW_LOADING
});

export const hideLoading = () => ({
  type: uiTypes.HIDE_LOADING
});

export const hideSizeBar = () => ({
  type: uiTypes.HIDE_SIDEBAR
});
