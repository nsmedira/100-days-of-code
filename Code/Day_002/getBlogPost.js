import React from "react";
import { db } from '../../utils/firebase'
import { Link } from 'react-router-dom'
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import renderHTML from 'react-render-html'

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
            <div>
                {
                    this.state.post ? 
                        renderHTML(this.state.post.content) :
                        <p>No blog post found.</p>
                }
            </div>
        )
    }

}

export default GetBlogPost