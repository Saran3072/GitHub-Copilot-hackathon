import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="container-contact">
      <div className="team-members">
        <h1 className="section-title">Meet the Team</h1> <br />
        <div className="team-member">
          <img src="saran.jpg" alt="Team member 1" />
          <p>Name: Dammavalam Sai Saran</p>
          <p>Role: Machine Learning Engineer/ Full Stack Developer</p>
          <p>Email: 20211a6615@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="sevanth.JPG" alt="Team member 2" />
          <p>Name: Sevanth Gajula</p>
          <p>Role: Machine Learning Engineer/ IoT Developer</p>
          <p>Email: 20211a6650@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="kusuma.jpeg" alt="Team member 3" />
          <p>Name: Kusumasri</p>
          <p>Role: Machine Learning Engineer/ Frontend Developer</p>
          <p>Email: 20211a6607@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="sanjay.jpeg" alt="Team member 4" />
          <p>Name: Sanjay</p>
          <p>Role: Data Analyst</p>
          <p>Email: 20211a6649@bvrit.ac.in</p>
        </div>
        <div className="team-member">
          <img src="sravya.jpg" alt="Team member 5" />
          <p>Name: Sravya Nekkanti</p>
          <p>Role: Machine Learning Engineer/ Python Developer</p>
          <p>Email: 20211a6638@bvrit.ac.in</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
