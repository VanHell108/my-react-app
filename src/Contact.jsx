const Contact = () => {
   return (
      <div className="contact-container-wrapper">
         <div className="contact-container">
            <h2>Contact Me</h2>
            <form className="contact-form">
               <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
               </div>
               <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
               </div>
               <div className="form-group">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Type your message..." />
               </div>
               <button type="submit">Send Message</button>
            </form>
         </div>
      </div>
   );
};

export default Contact;
