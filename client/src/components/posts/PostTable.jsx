import React from 'react'

const PostTable = ({post}) => {
  return (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">S/N</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Message</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{post.id}</th>
                  <td>{post.topic}</td>
                  <td>{post.message}</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
  )
}

export default PostTable