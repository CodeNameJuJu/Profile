import React, { useState } from 'react';
import './Footer.css';

const FORM_ENDPOINT = "https://public.herotofu.com/v1/f6888f80-ebdc-11ec-94cd-436cd72d679b"; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(false);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  window. scrollTo(0, 0);

  return (
  <body class='body-text center-again'>
    <div>
      <h2>Contact Details</h2>
      <p>All contact details and relevant social medias can be found below:</p>

      <table class="table table-dark table-active table-hover table-responsive shadow p-3 mb-5 rounded">
        <thead class='table-dark'>
          <tr>
            <th title='Email'><i class='bx bxs-envelope' ></i>Email</th>
            <th title='Linkedin'><i class='bx bxl-linkedin-square'></i>Linkedin</th>
            <th title='Github'><i class='bx bxl-github' ></i>Github</th>
            <th title='Cellphone'><i class='bx bxs-phone'></i>Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href='mailto:julianstone98@gmail.com' title='Email Link'>julianstone98@gmail.com</a></td>
            <td><a href='https://www.linkedin.com/in/julian-stone-b80837215/' title='Linkedin URL'>Julian Stone</a></td>
            <td><a href='https://github.com/Fishpuke' title='Github URL'>Fishpuke</a></td>
            <td title='Cellphone'>073 132 1496</td>
          </tr>
        </tbody>
      </table>
    </div>
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit()}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Message"
          name="message"
          className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="btn btn-primary"
          type="submit"
        >
          Send message
        </button>
      </div>
    </form>
  </body>
  );
}


export default Contact;
