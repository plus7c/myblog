import { Suspense } from "react";
import BlogList from "./BlogList";
import Loading from "../loading";

export default function Blogs() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Blogs</h2>
                    <p><small>我的博客~~~</small></p>
                </div>
            </nav>

            <Suspense fallback={<Loading />}>
                <BlogList />
                
            </Suspense>

        </main>
    )
}