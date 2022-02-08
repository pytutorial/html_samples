import { useSelector } from "react-redux";
import { useStore } from "react-redux";

function App() {
  const store = useStore();
  const counter = useSelector(state => state.counter);

  const increase = () => {
    store.dispatch({
      type: 'increase',
      payload: 1
    });
  }

  const decrease = () => {
    store.dispatch({
      type: 'decrease',
      payload: 1
    });
  }

  return (
    <div className="container mt-3">
      Counter: {counter} 
      {" "}

      <button 
        className="btn btn-sm btn-primary" 
        onClick={increase}
      >+</button>

      {" "}
      
      <button 
        className="btn btn-sm btn-danger" 
        onClick={decrease}
      >-</button>

    </div>
  );
}

export default App;