import Link from 'next/link';

export default function Home() {
    return (
        <div className="p-4">
            <h1>Welcome to the School Management App</h1>
            <nav>
                <ul>
                    <li><Link href="/addSchool">Add School</Link></li>
                    <li><Link href="/showSchools">Show Schools</Link></li>
                </ul>
            </nav>
        </div>
    );
}
