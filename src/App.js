import Header from "./components/Header/header";
import Thread from "./components/Thread/Thread";
import threadComment from "./components/Thread/threadComment/threadComment";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Thread />
      <threadComment />
    </div>
  );
}

export default App;
