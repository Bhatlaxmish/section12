import React, {useState,useCallback} from 'react';/* usecallback is a  hook that 
                                                   allows to store across components */
import './App.css';
import Button from './components/Button';
import Demooutput from './components/Demooutput';
function App() {

  const [paragraph,showParagraph]=useState(false);
  const [allowtoggle,toglleParagraph]=useState(false);
  const [listTitle,setlistTitle]=useState("mylist");


  const toggleparagraphHandler=useCallback(()=>{
    if(allowtoggle){
showParagraph(/* !showParagraph  or*/ (prevShowparagraph)=>!prevShowparagraph);
}
  },[allowtoggle]);


  const allowparagraphhandller=()=>{
    toglleParagraph(true);
  };
  return (
    <div  className="app">
      <h1>how rar awer</h1>
{/* {paragraph&& <p>per fnf sfo </p>} */}
   <Demooutput show={paragraph}></Demooutput>
    <Demooutput title={listTitle} items={[1,3,5,12]}/>
     <Button onClick={toggleparagraphHandler}>toggle paragraph</Button> 
     <Button onClick={allowparagraphhandller}>toggle button</Button> 

      
    </div>
  );
}

export default App;
