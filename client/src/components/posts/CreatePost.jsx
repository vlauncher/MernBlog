import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import {createpost} from '../../features/slices/postsSlice'

const CreatePost = () => {

    const[formData,setFormData] = useState({
        topic:'',
        message:'',
    })

    const{topic,message}=formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,isSuccess,message2} = useSelector((state)=>state.auth)

  
    const onChange = (e) =>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        if(isError){
            toast.error(message2);
        }
        if(isSuccess){
          toast.success('Post Created');
          navigate('/posts');
        }
        const newpost = {
            topic,message
        }
        dispatch(createpost(newpost));
        setFormData({
          topic:'',
          message:''
        })
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 m-auto">
                <div className="login-container card card-body">
                    <h2 className="login-header text-center my-4"><i className="fas fa-sign-in-alt"></i> New Post</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-2">
                            <label className="form-label">Topic</label>
                            <input type="text" name="topic" className="form-control" value={topic} onChange={onChange} />
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Message</label>
                            <input type="text" name="message" className="form-control" value={message} onChange={onChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Create</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost;