import Haze from "react-haze";

import List from "../../showcase/List";
import "../../showcase/style.css";

function App() {
  return (
    <Haze
      orientation="horizontal"
      scrollOffset={20}
      gradientSize={50}
      gradientColor="rgb(255, 254, 249)"
    >
      <List.Horizontal />
    </Haze>
  );
}

export default App;
