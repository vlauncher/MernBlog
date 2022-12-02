import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { login,reset} from '../../features/slices/authSlice'

const Login = () => {

    const[formData,setFormData] = useState({
        email:'',
        password:'',
    })

    const{email,password}=formData;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user,isError,isSuccess,message} = useSelector((state)=>state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }
        if(user){
            navigate('/')
        }
        dispatch(reset())
    },[isError,isSuccess,message,user,navigate,dispatch])

    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(isError){
            toast.error(message);
        }
        const userData = {
            email,password
        }
        dispatch(login(userData));
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="login-container card card-body">
                    <h2 className="login-header text-center my-4"><i className="fas fa-sign-in-alt"></i> Login</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" className="form-control" value={email} onChange={onChange} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={password} onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <p className="lead mt-4">Dont have an account? <a className="to_login" href="/register">SignUp</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login