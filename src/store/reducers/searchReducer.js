const initialState = {
  all: [],
  selected: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SEARCH_MOVIE_FULFILLED':
      const all = [...state.all];

      all.push(payload.data);
      return { ...state, all };
    default:
      return state;
  }
};
