// Here, the state is an array.
// ... creates a NEW array in memory, so the original array is not mutated.
// Redux sees this as a new state and causes a re-render of our connected component(s).
// Can do same for an object, rather than an array.
// We always want to be returning brand new arrays or brand new objects for the state, specifically.
// The new array, state, below has the payload added to it. 
export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    default:
      return state;
  }
};
