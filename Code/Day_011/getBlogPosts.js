import React from "react";
import { db } from '../../utils/firebase'
import { Link } from 'react-router-dom'
import Moment from "react-moment"

import './getBlogPosts.css'


class GetBlogPosts extends React.Component {

    state = {
        posts: null,
        categories: null
    }

    async getPublishedPosts(db){
        let postsRef = db.collection('fl_content')
        let snapshot = await postsRef.where('_fl_meta_.status', '==', 'publish').where('_fl_meta_.schema', '==', 'posts').get()
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

    async getCategories(db){
        let categoriesRef = db.collection('fl_content')
        let snapshot = await categoriesRef.where('_fl_meta_.schema', '==', 'categories').get()
        if(snapshot.empty){
            console.log('No matching documents.')
            return
        }
        let categories = {}
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            const data = doc.data()
            categories[doc.id] = data.category
        })
        this.setState({ categories: categories })
    }

    componentDidMount(){
        console.log('mounted')
        this.getPublishedPosts(db)
        this.getCategories(db)
    }

    render() {
        return(
            <div>
                <ul>
                    {
                        this.state.posts && this.state.categories ?
                            this.state.posts.map(
                                post =>
                                    <li key={post.id}>
                                        <Link to={`/blog/${post.slug}`}>
                                            <div className="card eggshell hoverable z-depth-2">
                                                <div className="card-content cg-blue-text">

                                                    <span className="card-title cg-blue-text">{post.title}</span>
                                                    <p className="post-summary cg-blue-text">{post.summary}</p>
                                                    <p className="post-date cg-blue-text"><Moment format="MMM Do YYYY">{post.date}</Moment></p>
                                                    <div className="category-chips">
                                                        {
                                                            post.category.map((category, i) => 
                                                                <div key={i} className="chip cg-blue eggshell-text z-depth-2">{this.state.categories[category.id]}</div>
                                                            )
                                                        }
                                                    </div>

                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                            ) :
                            <div className="row">
                                <div className="col s2 offset-s5">
                                    <div className="preloader-wrapper big active">
                                        <div className="spinner-layer spinner-red-only">
                                            <div className="circle-clipper left">
                                                <div className="circle"></div>
                                            </div>
                                            <div className="gap-patch">
                                                <div className="circle"></div>
                                            </div>
                                            <div className="circle-clipper right">
                                                <div className="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }
                </ul>
            </div>
        )
    }
}

export default GetBlogPosts