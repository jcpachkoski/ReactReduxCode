import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// (dispatch, getState) inputs are both functions.
// The dispatch(fetchPosts()) is us manually dispatching a an action.
// The dispatch(fetchUser(id)) is us manuallly dipatching an action.
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

// When using async, await, need to do it this way.
// We use thunk middleware to help us do this.
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

// When using async, await, need to do it this way.
// We use thunk middleware to help us do this.
export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);

//   dispatch({ type: 'FETCH_USER', payload: response.data });
// });
