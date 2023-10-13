import { notFound } from "next/navigation"
import parse from 'html-react-parser';


export async function generateStaticParams() {



    const res = await fetch('http://localhost:4000/blogs')

    const blogs = await res.json()

    return blogs.map((blog) => ({
        id: blog.id
    }))
}

async function getBlogs(id) {

    //await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await fetch('http://localhost:4000/blogs/' + id, {
        next: {
            revalidate: 0
        }
    })
    if (!res.ok) {
        notFound()
    }

    return res.json()
}




export default async function BlogDetails({ params }) {

    const blog = await getBlogs(params.id)
    return (
        <main>
            <div className='card'>
                <h1>{blog.title}</h1>
                <p>Updated in {blog.update_time}</p>
                <div>{parse(`${blog.body}`)}</div>



            </div>


        </main>
    )
}
