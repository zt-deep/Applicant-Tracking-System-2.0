import axios from 'axios';
import SecureLocalStorage from '../helpers/SecureLocalStorage';
import appConstant from '../constants/appConstants';
import {
  SUCCESS_MESSAGE_FROM_SERVER,
  ERROR_MESSAGE_FROM_SERVER,
  START_LOADING,
  END_LOADING,
} from '../constants/messages';

export const dispatchError = (data, dispatch, next) => {
  dispatch({ type: ERROR_MESSAGE_FROM_SERVER, payload: data.message });
  if (data?.forceLogin) {
    SecureLocalStorage.removeItem('state');
    setTimeout(() => {
      window.open(
        `${appConstant.url}/?app_callback_url=${window.location.href}`,
        '_self',
      );
    }, 500);
  } else {
    dispatch({ type: END_LOADING });
    next();
  }
};

export const checkError = (e, dispatch, next) => {
  if (e.response?.status === 404 || e.response?.status === '404') {
    dispatch({
      type: ERROR_MESSAGE_FROM_SERVER,
      payload: 'Requested API not found.',
    });
    dispatch({ type: END_LOADING });
    next();
  } else if (e.response?.data) {
    dispatchError(e.response.data, dispatch, () => {
      next();
    });
  } else if (e.message === 'Network Error') {
    dispatch({
      type: ERROR_MESSAGE_FROM_SERVER,
      payload: 'Network Error, Please check your internet connection.',
    });
    dispatch({ type: END_LOADING });
    next();
  } else {
    dispatch({ type: ERROR_MESSAGE_FROM_SERVER, payload: e.message });
    dispatch({ type: END_LOADING });
    next();
  }
};

export const getHeaders = (customHeader = {}) => {
  const headers = {
    app_name: 'ats2.0',
    app_lang: 'en',
    'Content-Type': 'application/json',
  };
  let token = null;
  try {
    let localStore = SecureLocalStorage.getItem('state');
    if (localStore) {
      localStore = JSON.parse(localStore);
    }
    token = localStore?.userReducer?.token || null;
  } catch (err) {
    return err;
  } finally {
    if (token) {
      headers.token = token;
    }
    Object.entries(customHeader).forEach((key) => {
      if (customHeader[key]) {
        headers[key] = customHeader[key];
      }
    });
    // eslint-disable-next-line no-unsafe-finally
    return headers;
  }
};

export const get = (
  dispatch,
  url,
  headers,
  success,
  error = () => {},
  silent = false,
) => {
  if (!silent) {
    dispatch({ type: START_LOADING });
  }
  axios
    .get(`${appConstant.url}/${url}`, {
      headers: getHeaders(headers || {}),
    })
    .then(({ data }) => {
      if (!data.error) {
        if (!silent && data.message && data.message.length > 0) {
          dispatch({
            type: SUCCESS_MESSAGE_FROM_SERVER,
            payload: data.message,
          });
        }
        if (!silent) {
          dispatch({ type: END_LOADING });
        }
        success(data.data);
      } else if (!silent) {
        dispatchError(data, dispatch, () => {
          error();
        });
      }
    })
    .catch((e) => {
      if (!silent) {
        checkError(e, dispatch, () => {
          error();
        });
      }
    });
};

export const post = (
  dispatch,
  url,
  payload,
  headers,
  success,
  error = () => {},
) => {
  dispatch({ type: START_LOADING });
  axios
    .post(`${appConstant.url}/${url}`, payload, {
      headers: getHeaders(headers || {}),
    })
    .then(({ data }) => {
      if (!data.error) {
        if (data.message && data.message.length > 0) {
          dispatch({
            type: SUCCESS_MESSAGE_FROM_SERVER,
            payload: data.message,
          });
        }
        dispatch({ type: END_LOADING });
        success(data.data);
      } else {
        dispatchError(data, dispatch, () => {
          error();
        });
      }
    })
    .catch((e) => {
      checkError(e, dispatch, () => {
        error();
      });
    });
};
