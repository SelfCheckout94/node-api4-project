import "./App.css";

import UsersList from "./components/UsersList";

function App() {
  return (
    <div className="App">
      <h1>Super Simple Not Great Front End Page</h1>
      <h2>
        This is just for the purpose of displaying information from the backend
        that I built.
      </h2>
      <h3>USERS:</h3>
      <UsersList />
    </div>
  );
}

export default App;
