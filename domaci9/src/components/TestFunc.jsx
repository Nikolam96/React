import { useSelector, useDispatch } from "react-redux";
import { TestAction, NewAction } from "../action/TestAction";

const TestFunc = () => {
  const dispatch = useDispatch();
  const testing = useSelector((state) => state.TestReducer.test);

  function changeMe() {
    dispatch(TestAction());
  }

  function dontChangeMe() {
    dispatch({
      type: "test",
      payload: "Now im Noob in Redux,jk just a new Action hehe!",
    });
  }

  return (
    <div>
      {testing} <br />
      <br />
      <button onClick={changeMe}>Change ME!</button>
      <br />
      <br />
      <button onClick={dontChangeMe}>Find out what am I!</button>
    </div>
  );
};
export default TestFunc;
