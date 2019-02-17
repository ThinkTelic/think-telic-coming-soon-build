import Layout from '../components/Layout'
import Button from '../components/Button'

const About = () => (
  <Layout>
        <div className="column is-marginTop">
          <h1 className="is-bold">Have a great digital product idea and nobody to start building it?</h1>
          <h1 className="is-marginBottom is-bold">We’re your team.</h1>
          <br />
          <p className=" is-marginBottom is-size-5-mobile">
          Think Telic is a Digital Product Firm, designing and building websites and web applications.  We're dedicated to creating the best web products and services, without wasting your time or budget.
          </p>
          <br />
          <Button text="Write to us" location="/contact" />
        </div>
  </Layout>
)

export default About
