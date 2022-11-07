import "./App.css";
import Login from "./Login";

function App() {
  const styles = {
    overall: `h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500 m-auto`,
  };

  return (
    <div className={styles.overall}>
      <Login />
    </div>
  );
}

export default App;
