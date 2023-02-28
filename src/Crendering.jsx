import React,{useState} from 'react'

const Crendering = () => {
 let [authorizedUser,setAuthorizedUser]=useState(false)

 let AcceptedUser=()=>{
    return(
        <>
        <nav>
            <ol>
                <li>Logo</li>
                <li>Menu</li>
                <li>Profile</li>
                <li>Search</li>
            </ol>
        </nav>
     </>
    )
 }
 let NotAcceptedUser=()=>{
    return(
        <>
        <nav>
            <ol>
                <li>Login</li>
                <li>SignUp</li>
                <li>ForgotPwd</li>
            </ol>
        </nav>
        </>
    )
 }
 return <> {authorizedUser? <AcceptedUser/> : <NotAcceptedUser/> }</>
}

export default Crendering