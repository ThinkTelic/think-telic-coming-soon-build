import React from 'react'
import Link from 'next/link'

class Header extends React.Component {
  render() {
    return (
      <nav className="nav">
        <div className="container">
          <Link href="/">
            <a className="logo">
              <img
                src="/static/assets/img/svg/ThinkTelic-Logo.svg"
                alt="Think Telic Logo"
              />
            </a>
          </Link>
          <ul className="main-nav">
            <li>
              <Link href="/about">
                <a className="nav-links">About</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header
