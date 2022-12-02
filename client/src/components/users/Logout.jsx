import React from 'react'

const Logout = () => {
  return (
<div className="container"> 
    <h2 className="logout-header text-center my-5">Are You Sure You Want To Logout</h2>
    <form action="/users/logout" method="post"  className="text-center">
        <button className="btn btn-danger" type="submit">Logout</button>
    </form>
</div>
  )
}

export default Logout