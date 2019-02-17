import React from 'react'
import Header from './Header'
// import Footer from './Footer'
import Head from 'next/head'
import '../resources/sass/styles.scss'

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Head>
          <title>Think Telic | Responsive Websites | Web Apps</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
          <link rel="icon" type="image/x-icon" href="static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <Header />
          <main>
            <div className="container">
                <section>
                  <div className="columns level">
                    {children}
                    <div className="column svg-image">
                      <img src="/static/assets/img/svg/Background-CS.svg"/>
                    </div>
                  </div>
                </section>
              </div>
          </main>
          <footer>
            <div className="has-text-centered">
              <small className="is-marginBottom-25" >Copyright © 2019 Think Telic, LLC</small>
            </div>
          </footer>
      </>
    )
  }
}

export default Layout
