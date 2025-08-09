export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
          <div className="contact-left-title">
            <h2>Get in touch</h2>
            <hr />
          </div>
          <input type="hidden" name="access_key" value="41a36971-7dd7-4d39-9c74-51e7f9c8d64e" />
          <input className="contact-inputs" type="text" name="name" id="name" placeholder="Name" required />
          <input className="contact-inputs" type="email" name="email" id="email" placeholder="Email" required />
          <textarea className="contact-inputs" name="message" placeholder="Message..." required />
          <button type="submit">Submit <img src="/images/arrow_icon.png" alt="" /></button>
        </form>
        <div className="contact-right">
          <img src="/images/Text Bubble Float.webp" alt="" />
        </div>
      </div>
    </section>
  )
}
