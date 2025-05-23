const footer = `
<div class="footer-column">
            <div class="footer-logo">
                <img src="images/logo.png" alt="Logo" style="max-width: 200px;">
            </div>
            <p>Contact us at: <a href="mailto:mail@mail.com">meridiano0@mail.com</a></p>
            <br>
            <br>
            <p>Social</p>

            <div class="social-icons">
                <a href="https://instagram.com/#" target="_blank" rel="noopener noreferrer" style="color:aquamarine"><i
                        class="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/cecilia-urrutia/" target="_blank" rel="noopener noreferrer"
                    style="color:aquamarine"><i class="fab fa-linkedin"></i></a>
            </div>
        </div>


        <div class="footer-column" id="contact">
            <h3>Send us a message:</h3>
            <form action="https://formspree.io/f/mjkyowag" method="POST">
                <label>
                    Your email:
                    <input type="email" name="email" crossorigin="anonymous" referrerpolicy="no-referrer">
                </label>
                <label>
                    Your message:
                    <textarea name="message"></textarea>
                </label>
                <button type="submit">Send</button>
            </form>
        </div>


        <div class="footer-copyright">
            <a href="#top" class="up-to-top"><i class="fa-solid fa-up-long"></i> Go to the top</a>
            <p>Copyright Urrutia | Talento Tech 2025</p>
            <p id="fecha-actual"></p>

        </div>
`

// Traer el footer
document.addEventListener('DOMContentLoaded', ()=>{
    const footerItem = document.getElementById('footer')
    footerItem.innerHTML = footer
})