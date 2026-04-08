export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Interested in working together? Let's connect.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div>
        <a href="https://linkedin.com/in/dane-iverson" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/dane-iverson" target="_blank">
          GitHub
        </a>
        <a href="mailto:hyperiondane@gmail.com">Email</a>
      </div>
    </section>
  );
}
