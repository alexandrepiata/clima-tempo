import "./App.css";

function layout(props) {
  return (
    <div className="App">
      <header className="App-header">{props.children}</header>
    </div>
  );
}

export default layout;
