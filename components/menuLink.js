import Link from 'next/Link';

export default function MenuLink() {
    return (
        <div>
            <Link href="/posts/allPosts">All articles</Link>
            <Link href="/users">Users</Link>
        </div>
    )
}