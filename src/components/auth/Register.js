import React , {Fragment, useState} from 'react'
import { Link } from 'react-router-dom';
 
 
export const Register = () => {

  const [formData , setFromData] = useState({
        name:'',
        email:'',
        password:''
    });

const {name , email , password} = formData
const onChange = e => setFromData({ ...formData, [e.target.name]: e.target.value})
const onSubmit = e =>{
    e.preventDefault();
    console.log(formData)
    
}
    return (
        <>
        <section className="container">
        <h1 className="large text-primary">Sign Up</h1>
        <p className="lead"><i className="fas fa-user"></i> Create Your Account</p>

        <form classNameName="form" onSubmit = {e => onSubmit(e)} >

          <div className="form-group">
            <input type="text" 
            placeholder="Name" 
            name="name" 
            value={name} onChange ={ e => onChange(e)}
            required />
          </div>

          <div className="form-group">
            <input type="email" 
            placeholder="Email Address" 
            value={email} onChange ={ e => onChange(e)}
            name="email" 
            required
            />
           
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password} onChange ={ e => onChange(e)}
              minLength="6"
            />
          </div>
   
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="my-1">
          Already have an account? <Link to="login">Sign In</Link>
        </p>
      </section>
        </>
    )
}
