
//conditional rendering =allows you to control what gets rendered in your application based on certain conditions (Show, hide or change components)


function UserGreeting(props)
    {
        if(props.isLoggedIn)
        {
           return <h2>Welcome {props.username}</h2> 
        }
    return <h2>Pls login to continue</h2>
    }


export default UserGreeting