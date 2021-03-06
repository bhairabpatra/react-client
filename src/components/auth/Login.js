import React, {Fragment ,useState} from 'react'
import { Link } from 'react-router-dom';
export const Login = () => {

  const [LformData , setFromData] = useState({
        email:'',
        password:''
  });

  const { email , password} = LformData
 
const onChange = e => setFromData({ ...LformData, [e.target.name]: e.target.value})
const onSubmit = e =>{
    e.preventDefault();
    console.log(LformData)
    
}

    return (
      <Fragment> 
        <section className="container">
 
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form"  onSubmit = {e => onSubmit(e)} >
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email} onChange ={ e => onChange(e)}
            required 
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password} onChange ={ e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="register">Sign Up</Link>
      </p>
    </section>
    </Fragment>
    )
}
