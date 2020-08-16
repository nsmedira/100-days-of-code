import React from "react";
import { db } from '../../utils/firebase'
import BlogPostFirebase from '../blog/blogPost_firebase'

class GetBlogPost extends React.Component {

    state = {
        post: null,
        noPosts: false
    }

    async getDocument(db, slug){
        let postRef = db.collection('fl_content')
        let snapshot = await postRef.where('slug', '==', slug).where('_fl_meta_.status', '==', 'publish').get()
        if(snapshot.empty){
            // console.log('No matching document(s).')
            this.setState({noPosts: true})
            return
        }
        let post = []
        snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data())
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
            <div className="container">
                {

                    // HAS THE POST BEEN LOADED INTO STATE?
                    this.state.post ? 

                        // DISPLAY THE BLOG POST
                        <BlogPostFirebase 
                            title={this.state.post.title}
                            content={this.state.post.content}
                            author={this.state.post.author}
                            date={this.state.post.date}
                            summary={this.state.post.summary}
                            slug={this.props.id}
                        /> :

                        // WERE NO POSTS FOUND BY QUERY?
                        this.state.noPosts ?

                            // DISPLAY 'NO POSTS FOUND'
                            <div className="row" style={{marginTop: "2em"}}>
                                <div className="col s8 offset-s2">
                                    <h2 className="eggshell-text">No blog post found :(</h2>
                                </div>
                            </div> :

                            // OTHERWISE DISPLAY THE LOADER
                            <div className="row">
                                <div className="col s2 offset-s5">
                                    <div class="preloader-wrapper big active">
                                        <div class="spinner-layer spinner-red-only">
                                            <div class="circle-clipper left">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="gap-patch">
                                                <div class="circle"></div>
                                            </div>
                                            <div class="circle-clipper right">
                                                <div class="circle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                }
            </div>
        )
    }

}

export default GetBlogPost