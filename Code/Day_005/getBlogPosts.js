import React from "react";
import { db } from '../../utils/firebase'
import { Link } from 'react-router-dom'
import Moment from "react-moment"


class GetBlogPosts extends React.Component {

    state = {
        posts: null
    }

    async getPublishedPosts(db){
        let postsRef = db.collection('fl_content')
        let snapshot = await postsRef.where('_fl_meta_.status', '==', 'publish').get()
        if(snapshot.empty){
            console.log('No matching documents.')
            return
        }
        let posts = []
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            const data = doc.data()
            posts.push(data)
        })
        this.setState({ posts: posts })
    }

    componentDidMount(){
        console.log('mounted')
        this.getPublishedPosts(db)
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.posts &&
                        this.state.posts.map(
                            post => 
                            <li key={post.id}>
                                <Link to={`/blog/${post.slug}`}>
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