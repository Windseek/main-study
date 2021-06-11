
import { connect } from 'react-redux';
function plus(props) {
  props.dispatch({type: "plus"})
}
function minute(props) {
  props.dispatch({type: "minute"})
}
function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.state}
      </header>
      <button onClick={plus.bind(this, props)}>
        加
      </button>
      <button onClick={minute.bind(this, props)}>
        减
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {state};
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);
