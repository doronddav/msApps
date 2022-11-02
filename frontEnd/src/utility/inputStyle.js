//Custom style for the category input

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),

  control: (_, { selectProps: { width } }) => ({
    width: width,
  }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};

//Input options. the value of each object will be the end point in fetch
const options = [
  { value: "animals", label: "animals" },
  { value: "books", label: "books" },
  { value: "dogs", label: "dogs" },
  { value: "models", label: "models" },
  { value: "music", label: "music" },
  { value: "nature", label: "nature" },
  { value: "sports", label: "sports" },
  { value: "view", label: "view" },
  { value: "work", label: "work" },
];

module.exports = { customStyles, options };
