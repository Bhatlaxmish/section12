import React,{Component} from 'react'
import ErrorBoundry from './ErrorBoundry';


class Users extends Component{
constructor(){
    super();
    this.state={
        showUsers:true,
        // data:[]
        // id:23
    };/* its an object  */
}

// componentDidUpdate(){
//     if(this.props.users.length===0)
//     {
//         throw new Error('NO users provided');
//     }
// }


toogleUserHandler(){

this.setState((curState)=>{
    return {showUsers:!curState.showUsers};
});

}
    render(){
return (
    <ErrorBoundry>
<div className="{classes.users}">

    <button onClick={this.toggleUserHandler}>

    </button>
</div>
</ErrorBoundry>
    
)
    }
}











// export default function Users() {
//   return (
//     <div>
      
//     </div>
//   )
// }
