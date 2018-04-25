import * as AT from "../actions/actionTypes";

const initialState = [
  {
    title: "0th Sample Title",
    content: "Sample content of this note"
  },
  {
    title: "1st Sample Title",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    title: "2nd Sample Title",
    content: "SO WOW MUCH COOL"
  },
  {
    title: "3rd Sample Title",
    content: "SO WOW MUCH COOL"
  },
  {
    title: "4th Sample Title",
    content: "SO WOW MUCH COOL"
  }
];

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case AT.CREATE_NOTE:
      return [...state, action.payload];
    case AT.DELETE_NOTE:
      state.splice(action.payload, 1);
      return state;

    case AT.EDIT_NOTE:
      return null;
    default:
      return state;
  }
};

export default noteReducer;
