import React from "react";
import { db } from '../../utils/firebase'
import BlogPostFirebase from '../blog/blogPost_firebase'

class GetBlogPost extends React.Component {

    state = {
        post: null
    }

    async getDocument(db, slug){
        console.log(slug)
        let postRef = db.collection('fl_content')
        let snapshot = await postRef.where('slug', '==', slug).get()
        if(snapshot.empty){
            console.log('No matching document(s).')
            return
        }
        let post = []
        snapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            const data = doc.data()
            post.push(data)
        })
        this.setState({post: post[0]})
    }

    componentDidMount(){
        this.getDocument(db, this.props.id)
    }

    render() {
        return(
            <div className="dashboard container">
                {
                    this.state.post ? 
                        <BlogPostFirebase 
                            title={this.state.post.title}
                            content={this.state.post.content}
                            author={this.state.post.author}
                            date={this.state.post.date}
                        /> :
                        <p>No blog post found.</p>
                }
            </div>
        )
    }

}

export default GetBlogPost