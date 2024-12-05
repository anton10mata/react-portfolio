const Contact = () => (
    <section>
      <h1>Contact</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
  
  export default Contact;
  