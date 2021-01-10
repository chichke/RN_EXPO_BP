import produce from 'immer';
import { ADD, EDIT, FETCH, REMOVE } from '../types/todo';

const initialState = {
  todos: [],
  isFetching: false,
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case FETCH:
        draft.isFetching = true;
        break;
      case EDIT:
        draft.todos = payload;
        draft.isFetching = false;
        break;
      case ADD:
        draft.todos.push(payload);
        draft.isFetching = false;
        break;
      case REMOVE:
        draft.isFetching = false;
        draft.todos.filter((element) => element !== payload);
        break;
      default:
        break;
    }
    return draft;
  });

export default reducer;
