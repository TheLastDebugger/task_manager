import React, { useState } from 'react';

const Login = () => {

    const [username, setUserName] = useState("")
    const [password, setPassWord] = useState("")

    const HandleClick = async() => {

        console.log("username : ",username)
        console.log("password : ",password)

        if (username === null || username === "") {

            alert("Username cannot be Empty")
            return
        } 

        if (password === null || password === "") {
            alert("Password Cannot be Empty")
            return
        }

        const response = await fetch("http://localhost:3000/login/authUser",{
            method: "POST",
            headers: {"content-type":"application/json"},
            body : {
                username: username,
                password : password
            }
        })

        const data = await response.json

        if (response.status) {

            alert("Login Successfull",data.message)
        } else {

            alert("Wrong Credentials",data.message)
        }



    }

    return (
        <div className="login_panel">

            <div className='card2'>
                <div className='input-group col-md-3'>
                    
                </div>
                <label htmlFor='username'>Username</label>
                <input onChange={(e) => setUserName(e.target.value)} className="form-control" type="text" name="username" id="username" />
                <br></br>
                <label htmlFor='pwd'>Password</label>
                <input onChange={(e) => setPassWord(e.target.value)} className="form-control" type="password" id="pwd" />
                <br></br>
                <button className="btn btn-success" type="button" onClick={HandleClick} id = "loginBTN">Login</button>
                <a href='#'>New User? Click here to Register</a>
            </div>
            
        </div>
    )
}

export default Login