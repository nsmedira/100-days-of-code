import React from 'react'
import { Link } from 'gatsby'

const PostLink = ( { post } ) => (
    <div>
        <Link to={post.frontmatter.slug}>
            
            <div className="card eggshell hoverable z-depth-2">
                <div className="card-content cg-blue-text">

                    <span className="card-title cg-blue-text">{post.frontmatter.title}</span>
                    <p className="post-summary cg-blue-text">{post.excerpt}</p>
                    <p className="post-date cg-blue-text">{post.frontmatter.date}</p>
                    <div className="category-chips">
                        {
                            post.frontmatter.categories.map((category, i) => 
                                <div key={i} className="chip cg-blue eggshell-text z-depth-2">{category}</div>
                            )
                        }
                    </div>

                </div>
            </div>
            
        </Link>
    </div>
)

export default PostLink