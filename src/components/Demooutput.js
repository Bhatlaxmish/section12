import {Component} from 'react';
import './Demooutput.css';
import React ,{ useMemo } from 'react';

/* instead of using functions in components we can also use class based components  */
class User extends Component{
  render(){/* render is that which searches for what to be displayed it does not accept props instead inport components from 
                   react and write extends Components  now we can use props using this.props.items like that */
return( <li>{this.props.items}</li>)
  }
}
 function Demooutput(props) {

const {items}=props;
// const sortedlist=useMemo(()=>{
//   return items.sort((a,b)=>(a-b));
// },[items]);



  // const sortedlist=props.items.sort((a,b)=>a-b);
  return (
    <div className="demo">
  <p>{props.show? "owe wf wjf":''}</p>
<ul>
  <li>
  {props.items}
  </li>
  {/* {sortedlist.map((item)=>(<li key={item}>{item}</li>))} */}
</ul>
  <p>{props.title}</p>
  </div>
  )
}
export default React.memo(Demooutput);/* React.memo optimises the code i.e if the props changes each time the Demooutput function is 
                                     called it executes otherwise skips  */