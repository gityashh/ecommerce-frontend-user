import React from 'react';
import { Bs0Circle, BsTelephoneFill, BsFillEnvelopeFill, BsGeoAltFill  } from 'react-icons/bs';


const Contact = () => {
  return (
    <div className="contact-wrapper home-wrapper-2 py-5 bg-zinc-100">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3456.048521012616!2d77.4670116147588!3d23.250777736934822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1732247038262!5m2!1sen!2sin" width="100%" height="400px" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="row">
          <div className="col-6 mt-5">
            <div className="contact-form">
              <p className="contact-form-title text-xl mb-3">Contact Us</p>
              <form action="">
                <div>
                  <input type="text" placeholder="Email" />
                </div>
                <div>
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <input type="text" placeholder="Title" />
                </div>
                <div>
                  <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                </div>
                <button className="button border-0">Submit</button>
              </form>
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className="contact-info py-2 px-2">
                <h4 className="contact-info-title text-xl mb-3 ">Get in touch with Us</h4>
                <div className="contact-info-item d-flex align-items-center gap-15">
                  <BsTelephoneFill />
                  <p>Call Us: +91 9826000000</p>
                </div>
                <div className="contact-info-item d-flex align-items-center gap-15">
                  <BsFillEnvelopeFill />
                  <p>Mail Us: example@gmail.com</p>
                </div>
                <div className="contact-info-item d-flex align-items-center gap-15">
                  <BsGeoAltFill />
                  <p>Address: 1234 Main Street, Anytown, USA</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;