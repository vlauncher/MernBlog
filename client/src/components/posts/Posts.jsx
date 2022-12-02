import React, {useEffect} from "react";
import { useDispatch,useSelector } from 'react-redux'
import { Link,useNavigate } from "react-router-dom";
import { listposts,reset } from '../../features/slices/postsSlice'
import PostTable from "./PostTable";


const Posts = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth);
    const {isError,isSuccess,message2,posts} = useSelector((state => state.posts));
  
  useEffect(()=>{
    if(isError){
      console.log(message2);
    }
    if(!user){
      navigate('/login')
    }
    dispatch(listposts())
    return ()=> {
      dispatch(reset());
    }
  },[posts,user,isError,isSuccess,message2,navigate,dispatch])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 m-auto">
          <div className="card card-body">
            <Link to={'/posts/create'} className='btn btn-dark'>Add Post</Link>
            <h3 className="posts-header text-center my-4">Posts</h3>
            { posts.length > 0 ? (
              <div className="posts">
                {posts.map((post)=>(
                  <PostTable key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <h2>No Posts to display</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
