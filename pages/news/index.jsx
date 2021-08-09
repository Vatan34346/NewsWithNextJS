import { Fragment } from "react";
import Link from 'next/link'

const NewsPage=()=>{
    return (
        <Fragment>
            <h1>New Page</h1>
            <ul>
                <Link href='/news/NextJs is easy'>
                <li>NextJs is easy</li>
                </Link>
                <Link href="/news/ArticLE">
                <li>ArticLE</li>
                </Link>
            </ul>
        </Fragment>
    )
}

export default NewsPage;