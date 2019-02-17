import React from 'react'
import Link from 'next/link'

const Button = ({text,location}) => (
    <div className="buttons has-addons is-centered">
      <Link href="/" href={location}>
        <a className="btn">
          {text}
        </a>
      </Link>
    </div>
)
export default Button
