import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Button type="danger" leftIcon={<div>Left</div>} rightIcon={<div>Right</div>}>
        Click
      </Button>
    </>
  );
}

export default App;
