import Layout from '../components/Layout'
import axios from 'axios'

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    loading: false,
    submitted: false,
    error: {
      name: false,
      email: false,
      message: false,
      main: false
    },
  }

  isValid = email => {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) { return true }
  }

  handleInputs = (e) => {
    this.setState({ submitted: false})

    const { name, value } = e.target
    
    this.setState({
      [name]: value,
      error: {
        [name]: false
      }
    })
  }

  sendEmail = (e, ms = 1000) => {
    e.preventDefault()
  
    const { name, email, message } = this.state

    if(this.isValid(email) && name && message) {
      this.setState({ loading: true })
      axios
        .post('/api/contact', { name, email, message })
        .then((res) =>  {
          res.status === 200 ? this.setState({ 
            submitted: true, 
            loading: false,
            name: '',
            email: '',
            message: ''
          }) : '' && console.log(res)
          document.forms[0].reset()
        })
        .catch((error) => {
          this.setState({ error: { main: true} })
        })
    }else { 
      this.setState({ submitted: false})
      if(!this.isValid(email) && !name && !message) {
        this.setState({ error: { 
          name: true,
          email: true,
          message: true
        } 
        })
      }else if(!name) {
        this.setState({ error: { name: true} })
      }else if(!this.isValid(email)) {
        this.setState({ error: { email: true} })
      }else if(!message){
        this.setState({ error: { message: true} })
      }
    }
   
  }

  render() {
    return (
      <Layout>
            <div className="column is-marginTop">
              <h2 className="is-marginBottom is-bold">Looking for a team to build your digital product,we'd love to talk.</h2>
              <p className="is-marginBottom is-size-4">We'll get back to you within 48 hours.</p>
              {this.state.submitted  && 
              <article class="message is-success">
              <div class="message-body">
                  Thanks. Talk soon.
              </div>
            </article>}

              {this.state.error.main  &&  
              <article class="message is-danger">
                <div className="message-body">
                  Sorry something went wrong. Please try again later.
                </div>
              </article>}
        
              <form className="contact--form is-half" onSubmit={this.sendEmail}>
              <div className="field">
                  <label className="label is-sr-only">Username</label>
                  <div className="control">
                    <input 
                      onChange={this.handleInputs}
                      className={`contact__form--input input is-medium ${this.state.error.name && "is-danger"}`}
                      type="text" 
                      name="name"
                      placeholder="Full name" 
                    />
                  </div>
                  {this.state.error.name && <p className="help is-danger">Hey, your name goes here.</p>}
              </div>

              <div className="field">
                  <label className="label is-sr-only">Email</label>
                  <div className="control ">
                    <input 
                      onChange={this.handleInputs}
                      className={`contact__form--input input is-medium ${this.state.error.email && "is-danger"}`}
                      type="email"
                      name="email"
                      placeholder="Email address" 
                     />
                  </div>
                  {this.state.error.email && <p className="help is-danger">That doen't look like an email.</p>}
              </div>
              <div className="field">
                <label className="label is-sr-only">Message</label>
                <div className="control">
                  <textarea 
                    onChange={this.handleInputs}
                    className={`contact__form--input textarea is-medium ${this.state.error.message && "is-danger"}`}
                    placeholder="Tell us a bit about your project"
                    name="message"
                    >
                  </textarea>
                </div>
                {this.state.error.message  && <p className="help is-danger">Ask us anything. Don't be shy.</p>}
              </div>
                <div className="buttons has-addons is-centered">
                  <button className={"button btn " + (this.state.loading ? "is-loading" : " ")} type="submit">
                    Let's start a conversation
                  </button>
                </div>
              </form>
            </div>
      </Layout>
    )
  }
}

export default Contact
