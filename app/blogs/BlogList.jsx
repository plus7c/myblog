
import React from 'react';
import Link from 'next/link';
import parse from 'html-react-parser';


async function getBlogs() {

    //await new Promise(resolve=>setTimeout(resolve,3000))

    const res = await fetch('http://localhost:4000/blogs', {
        next: {
            revalidate: 0
        }
    })

    return res.json()
}


export default async function BlogList() {

    const blogs = await getBlogs()



    return (
        <main>
            {
                blogs.map((blog) => (
                    <div key={blog.id} className='card my-5'>
                        <Link href={`/blogs/${blog.id}`}>
                            <h1>{blog.title}</h1>
                            <div className='info'>
                                
                                <small>{blog.update_time}</small>
                                <small>{blog.tag}</small>
                            </div>
                            {parse(`${blog.body.slice(0,200)}...`)}

                           
                        </Link>


                    </div>
                ))
            }
            {blogs.length === 0 && (
                <p className='text-center'>目前还没有博客</p>
            )}


        </main>



    )
}
