import "./App.css";
import MyController from "./MyController";

function App() {
  return (
    <>
      <MyController
        render={({ field }) => (
          <input value={field.value} onChange={field.onChange} />
        )}
      />
    </>
  );
}

export default App;
