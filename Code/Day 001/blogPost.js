import React from "react"
import { useParams } from "react-router"
import GetBlogPost from "../../components/firebaseQueries/getBlogPost"

const Article = () => {
    let { id } = useParams () ;
    return (
        <GetBlogPost id={id} />
    )
}

export default Article