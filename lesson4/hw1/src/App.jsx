import React from "react";
import Clock from "./Clock.jsx";

const App = ()=> {
  return (<>
    <Clock location={'Kiyv'} zone={2} interval={1000}/>
    <Clock location={'London'} zone={0} interval={1000}/>
    <Clock location={'New York'} zone={-5} interval={1000}/>
 </>
  )
}
 export default App;

 