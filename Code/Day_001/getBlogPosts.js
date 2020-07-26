import React from "react";
import { db } from '../../utils/firebase'
import { Link } from 'react-router-dom'
import Moment from "react-moment"


class GetBlogPosts extends React.Component {

    state = {
        posts: null
    }

    componentDidMount(){
        console.log('mounted')
        db.collection('fl_content')
          .get()
          .then( snapshot => {
              const posts = []
              snapshot.forEach( doc => {
                  const data = doc.data()
                  posts.push(data)
              })
            //   console.log(posts)
            this.setState({ posts: posts })
          })
          .catch( error => console.log(error))
    }

    render() {
        return(
            <div>
                {/* <h1>Blog Posts</h1> */}
                <ul>
                    {
                        this.state.posts &&
                        this.state.posts.map(
                            post => 
                            // {
                            //     return (
                            //         <div>
                            //             <p>{post.summary}</p>
                            //         </div>
                            //     )
                            // }
                            <li key={post._id}>
                                <Link to={`/blog/${post._id}`}>
                                    <div className="card cg-blue">
                                        <div className="card-content jet-text">

                                            <span className="card-title eggshell-text">{post.title}</span>
                                            <p className="eggshell-text">{post.summary}</p>
                                            <p className="eggshell-text"><Moment format="MMM Do YYYY">{post.date}</Moment></p>

                                        </div>
                                    </div>
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default GetBlogPosts