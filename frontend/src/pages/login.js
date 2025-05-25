import React from 'react';

const login = () => {

    const HandleClick = () => {

        alert("Button CLicked")
    }

    return (
        <div className="login_panel">

            <div className='card2'>
                <label htmlFor='username'>Username</label>
                <input className="form-control" type="text" name="username" id="username" />
                <br></br>
                <label htmlFor='pwd'>Password</label>
                <input className="form-control" type="password" id="pwd" />
                <br></br>
                <button className="btn btn-success" type="button" onClick={HandleClick} id = "loginBTN">Login</button>
            </div>
            
        </div>
    )
}

export default login