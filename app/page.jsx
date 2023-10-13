'use client';
import { Suspense, useState } from "react"
import BlogList from "./blogs/BlogList"
import Loading from "./loading"
import Link from "next/link"

export default function Blogs() {


  return (
    <main>
      <nav>
        <div>
          <h2>Blogs</h2>
          <p><small>这里是我的主页</small></p>
        </div>
        <Link href="/blogs/create" className="ml-auto">
          <button className="btn-primary">添加博客</button>
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <BlogList />
      </Suspense>
    </main>
  )
}


  