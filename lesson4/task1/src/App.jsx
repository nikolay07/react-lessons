import React from "react";
import Counter from "./Counter.jsx";

const App = ()=> {
  return (
    <>
  <Counter start={17} interval={5000} />
      <Counter start={17} interval={3000}/>
      <Counter start={17} interval={500} />
    </>
  )
}
 export default App;