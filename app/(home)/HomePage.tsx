'use client'
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container-fluid min-vh-100">
      <h1 className="p-4 text-center">Find the site!</h1>
      <ul className="nav nav-pills d-flex justify-content-center gap-4">
        <li className="nav-item">
          <a className="nav-link active">Get a random site</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">My Space</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" href="/categories">Categories</Link>
        </li>
      </ul>
    </div>
  )
}
