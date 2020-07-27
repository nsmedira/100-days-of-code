import React from "react";
import { db } from '../../utils/firebase'
import BlogPostFirebase from '../blog/blogPost_firebase'

class GetBlogPost extends React.Component {

    state = {
        post: null
    }

    async getDocument(db, id){
        let postRef = db.collection('fl_content').doc(id)
        let doc = await postRef.get()
        if(!doc.exists){
            console.log('No such document!')
        } else {
            console.log('Document data:', doc.data())
        }
        return doc
    }

    componentDidMount(){
        console.log(this.props.id)
        db.collection('fl_content').doc(this.props.id)
            .get()
            .then( doc => {
                let data = doc.data()
                console.log(data)
                this.setState({post: data})
            })
            .catch( error => console.log(error))
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