import "./popUp.css";

//The component gets "setOpen" as a prop to close the pop-up window from this component by a toggle from true to false
const PopUP = ({ data, setOpen }) => {
  console.log(data);

  console.log(data);
  return (
    <div
      className="model"
      onClick={() => {
        setOpen("flase");
      }}
    >
      <div className="form-container">
        <p>
          <strong>tags:</strong> {data.tags}
        </p>
        <p>
          <strong>Downloads:</strong> {data.downloads}
        </p>
        <p>
          <strong>views:</strong> {data.views}
        </p>
        <p>
          <strong>collections:</strong> {data.views}
        </p>
      </div>
    </div>
  );
};

export default PopUP;
