import Layout from '../components/Layout'
import Button from '../components/Button'

const Index = () => (
  <Layout>
          <div className="column is-marginBottom-25">
            <h3 className="is-biryany is-bold is-marginBottom-25">New website coming soon.</h3>
            <h1 className="is-marginBottom  is-bold">WE BUILD DIGITAL PRODUCTS THAT EXPAND YOUR BRAND AND BUSINESS.</h1>
            <br />
            <p className=" is-marginBottom is-size-5-mobile">
            Custom responsive websites and web applications.  Fixed ongoing prices you can budget for.
            </p>
            <br />
            <Button text="Write to us" location="/contact" />
          </div>
  </Layout>
)

export default Index
