import React from 'react'
import allblogs from '../Components/allBlogs';
import Title from '../Components/Title';

function BlogPage() {
    return (
        <>
        <Title title={'Blogs'} span={'Blogs'}/>
        <div className="BlogsPage">
            {
                allblogs.map((blog) => {
                    return <div className="blog" key={blog.id}>
                        <div className="blog-content">
                            <a href={blog.link}><img src={blog.image} href={blog.link} alt=""/></a>
                            <a href={blog.link} className="blog-link">
                                {blog.title}
                            </a>
                        </div>
                    </div>
                })
            }
        </div>
        </>
    )
}

export default BlogPage;
