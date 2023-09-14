import React, {useRef} from 'react';
import './Main.css';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y9k7a7e', 'template_vuclici', form.current, 'PrZ7kEJQwuAOirfKf')
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    };

    window.scrollTo(0, 0);

  return (
  <body class='body-text center-again container-fluid'>
    <div class="center-again mt-3">
      <h2>Contact Details</h2>
      <p>All contact details and relevant social medias can be found below:</p>

      <table class="table table-dark table-active table-hover table-responsive shadow p-3 mb-5 rounded">
        <thead class='table-dark'>
          <tr>
            <th title='Email'><i class='bx bxs-envelope' ></i>Email</th>
            <th title='Linkedin'><i class='bx bxl-linkedin-square'></i>Linkedin</th>
            <th title='Github'><i class='bx bxl-github' ></i>Github</th>
            <th title='Codewars'><i class='bx bxs-invader'></i>Codewars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href='mailto:julianstone98@gmail.com' title='Email Link'>julianstone98@gmail.com</a></td>
            <td><a href='https://www.linkedin.com/in/julian-stone-b80837215/' title='Linkedin URL'>Julian Stone(Linkedin)</a></td>
            <td><a href='https://github.com/CodeNameJuJu' title='Github URL'>CodeNameJuJu(Github)</a></td>
            <td><a href='https://www.codewars.com/users/CodeNameJuJu' title='Github URL'>CodeNameJuJu(Codewars)</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="center-again container">
      <div className="row center-again">
        <div className="center-again">
          <form  ref={form} onSubmit={sendEmail}>
            <div className="mb-3 pt-0">
                <input type="text" name="user_name" placeholder="Your Name"
                        className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
            </div>
            <div className="mb-3 pt-0">
                <input type="email" name="user_email" placeholder="Your email address"
                        className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                />
            </div>
            <div className="mb-3 pt-0">
                <textarea name="message" placeholder="Your message"
                          className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                ></textarea>
            </div>
            <br />
            <div className="mb-3 pt-0">
                <button className = "btn btn-primary" type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </body>
  );
}

export default Contact;
