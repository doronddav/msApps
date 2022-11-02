import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import Button from "../button/Button";
import PhotoCard from "../photoCard/PhotoCard";

import {
  increment,
  decrement,
  chooseEndPoint,
} from "../../store/features/dataSlice";
import { customStyles, options } from "../../utility/inputStyle";
import "./display.style.css";

const Display = ({ data }) => {
  const dataPlace = useSelector((state) => state.data.dataPlace);
  const dispatch = useDispatch();

  //Slice data for 9 objects before render
  let sliceData = data.slice(dataPlace, dataPlace + 9);

  //Target endPoint from categories.
  const chosenValue = (e) => {
    dispatch(chooseEndPoint(e.value));
  };

  return (
    <div>
      <p>Select a category of photos</p>
      <div className="select-category">
        <Select
          options={options}
          onChange={chosenValue}
          width="200px"
          menuColor="red"
          styles={customStyles}
        />
      </div>
      <div className="photos-container">
        {sliceData.map((data) => {
          return <PhotoCard key={data.id} data={data} />;
        })}
      </div>
      <div className="buttons">
        <Button onClick={() => dispatch(decrement())}>prev</Button>
        <Button onClick={() => dispatch(increment())}>next</Button>
      </div>
    </div>
  );
};

export default Display;
