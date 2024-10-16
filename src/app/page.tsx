
import Link from 'next/link';





export default function Home() {
    return (
        <div className="yeahh">
            <h1>Welcome to my Next.js app!</h1>
            <nav >
              <ul className="nav">
                <li>
            <Link  href="/About">About Us</Link>
            </li>
            <li>
            <Link href="/Contact">Contact Us</Link>
            </li>
            <li>
            <Link href="/service">Service </Link>
            </li>
            </ul>
            </nav>
        </div>
    );
}
/*
export default function Home() {
  return (
    <nav>
      <ul className="menu-bar">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>

      </ul>
      </nav>
  );
}
*/