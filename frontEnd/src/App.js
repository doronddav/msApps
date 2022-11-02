// import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setData } from "./store/features/dataSlice";
import Display from "./components/display/Display";

import "./App.css";

function App() {
  const data = useSelector((state) => state.data.data);
  const endPoint = useSelector((state) => state.data.endPoint);

  const dispatch = useDispatch();

  //The Fetch async data gets the endPoint from the Redux store.
  const getData = async (endPoint) => {
    const requestOptions = {
      method: "GET",
      headers: {
        q: endPoint,
      },
    };

    try {
      const res = await fetch(
        `http://localhost:8000/dataEndPoint`,
        requestOptions
      );

      const resJson = await res.json();
      console.log(resJson);
      dispatch(setData(resJson.hits));
    } catch (err) {
      console.log(err);
    }
  };

  //the useEffect will run at the first render and every time endPoint will change by the user.
  useEffect(() => {
    getData(endPoint);
  }, [endPoint]);
  console.log(data);
  return <Display data={data} />;
}

export default App;
