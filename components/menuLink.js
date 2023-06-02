import Link from 'next/link';

export default function MenuLink() {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/posts/allPosts">All articles</Link>
            <Link href="/users">Users</Link>
        </div>
    )
}