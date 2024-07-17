import React from 'react';
import './aboutprofile.css';
import profile1 from '../../assets/images/uday.jpg';
import profile2 from '../../assets/images/cr.jpg';
import profile3 from '../../assets/images/ramesh.jpg';
import profile4 from '../../assets/images/sachidanand.jpg';

const profiles = [
  {
    id: 1,
    name: 'Udayakumar Muttur',
    image: profile1,
    heading: 'Founder and Director',
    description: [
      "Udayakumar Muttur, an Entrepreneur for over three decades, is into the self-serve industry. He has been a pioneer in architecting, designing, and manufacturing state-of-the-art Kiosks since 1995 and gained a deep understanding of providing Kiosk-based solutions to various industries and verticals for domestic and global markets. Currently, he is the Founder and Director at Swastha Technovations, a company that develops advanced technology products and solutions for the health care industry under the atmaParikshan+ range.",
      "atmaParikshan+, an advanced self-serve diagnostic Kiosk, is architected and designed by him to primarily bring a fresh change to the common man's health care. He is an Electrical Engineer from BMS Engineering College Bangalore.",
      "He has traversed the road to success following these principles:",
      "  - Gaining a deep understanding of customer challenges",
      "  - Designing solutions that are easy to use and add value to customers",
      "  - Providing solutions that are unique, innovative, and state-of-the-art",
      "  - Taking pride and ownership in building solutions",
      "  - He believes that leadership has to be earned and strives to kindle the spirit of entrepreneurship amongst employees."
    ],
  },
  {
    id: 2,
    name: 'C R Balaji',
    image: profile2,
    heading: 'Founder and Director',
    description: [
      "C R Balaji, an Entrepreneur & a Consultant with interest in Healthcare and Education sectors. He is currently the Director, Founder at Swastha Technovations, a company that develops advanced technology products and solutions for the Health Care industry.",
      "With atmaParikshan+, he synergizes his expertise in technology, customer delight and roll out of critical Technology systems to deliver a customer-centric product and service in the health care sector. His passion for customer delight helps establish a win-win model for customers and customer's customer. He has over 30 years of experience working with international organizations on product development, continuation engineering and offshore application & technology services management. Previously, he was with Mphasis, an HP Company as Vice President and Head of CIO Applications and HP Professional Services.",
      "  - He was the Principal Co-Investigator for a DOE Funded project - KRIYA Research",
      "  - He worked with a project that studied the computational aspects of Sanskrit language and its advantages in Natural Language Processing & Understanding.",
      "  - He is passionate about technology and its use in social engineering, with Healthcare and Education being his primary areas of interest."
    ],
  },
  {
    id: 3,
    name: 'Dr. Ramesh Makam',
    image: profile3,
    heading: 'Advisor',
    description: [
      "A renowned surgeon with more than 30 years of experience in the field of MAS & Bariatric Surgery. He is one of the pioneers of Basic and Advanced Laparoscopic Surgery in the fields of GI Surgery, Gynaecology, Urology, and Thoracic Surgery in Karnataka & Hand-Assisted Laparoscopic surgery for splenectomy, colectomy, and donor nephrectomy. Having performed more than 1000 Bariatric surgeries in the last 15 years, he is one of the few surgeons who have established Bariatric and Metabolic Surgery in India. The world-renowned Bangalore Endoscopic Surgery Training Institute & Research Centre was established under Dr. Makam's administration. Trained over 1600 practicing surgeons from 5 continents and has been involved in several innovations including BEST Endotrainer, Virtual Reality Laparoscopic Surgery Simulator and Circulation pump used for training in Minimally Invasive Surgery. Established the country's first Fellowship Course in the field of Bariatric and Metabolic surgery affiliated to a Rajiv Gandhi University of Health Sciences. He is also the founder member of the Hernia Society of India.",
      "Professional Qualification: He did his M.B.B.S from Bangalore Medical College in 1984 and further pursued D.N.B. at St. Martha's Hospital in 1989. He trained in Laparoscopic Surgery at Mumbai & Singapore and later started the first Video-laparoscopic Centre in Karnataka State in 1993. He has also been the Director of Bangalore Endoscopic Surgery Training Institute & Research Centre and an Advisor to the Society of Biomedical Technology. Having trained in Bariatric Surgery and obtaining Fellowships in the USA and Germany, Dr. Ramesh is now actively involved in Weight-loss practice.",
    ],
  },
  {
    id: 4,
    name: 'Dr. S. Sachidanand',
    image: profile4,
    heading: 'Advisor',
    description: [
      "Dr. S. Sachidanand, completed his MBBS from JNMC Belgaum (1978 - 1984) with a Gold Medal in Anatomy and an overall 1st class, batch topper in DVD from Mysore Medical College (Feb 1985 - Dec 1986), DHA from ISSR Vellore (1991),batch topper in MD from JNMC Belgaum (1992 - 1994) and bagged FRCP (Glasgow) in 2012.",
      "His sheer determination & hard work led him to climb up on the academic ladder through the posts of Lecturer in 1991 to HOD in 2005, and 2011 to 2014 at the Department of Dermatology, BMCRI & further on through the administrative side to chair various chief posts in Government of Karnataka. ",
      "He is the only dermatologist to have donned the roles of:",
      "  1. To be elected as National President of IADVL from Bengaluru, at the age of 47 years (2008).",
      "  2. To be audited by US-FDA in 2004 (Wyeth sponsored - Tigecycline study).",
      "  3. To establish a Dermatosurgery OT (at Victoria Hospital, BMCRI in 2004).",
      "  4. To establish a Dermatology ICU (at Victoria Hospital, BMCRI in 2005).",
      "  5. To start hair transplantation in a Government college in the country (2004).",
      "  6. To start full - fledged fellowships in Dermatosurgery (2006), Aesthetic Dermatology (2008), Pediatric Dermatology (2010) and Trichology (2018), Dermatopathology (2021)(at Victoria Hospital, BMCRI).",
      "  7. To organize 3 National conferences at Bengaluru -DERMAVISION 2000, DERMACON 2009 and DERMACON INTERNATIONAL 2019, apart from 25 other conferences including 1 on a cruise; for which he is fondly referred to as 'CONMAN' by his colleagues.",
      "  8. Founder Member of Nail Society of India (2012), Founder President of Community Dermatology Society (2013) and AFAASI (2013), Immediate Past President of SARAD (2015 -2017), and President of Association of Cutaneous Surgeons of India (2017-2019).",
      "  9. To have 5 Orations to his credit along with scientific papers presentations in more than 11 International conferences, Fellow of IADVL, Fellow of Asian Academy of Dermatology, 4 Life-time achievement awards and 2 Teacher par excellence awards.",
      " 10. To have been Editor-in-chief for 15 books including 4th and 5th Editions of the prestigious IADVL Textbook of Dermatology, has authored multiple chapters and reviewed many books, has 20 International and 100 National publications, and has also been the Principal Investigator for 18 Drug studies.",
      " 11. He has been conferred the prestigious Dr. B. C. Roy Award from IMA Bengaluru & IMA Karnataka.",
      " 12. He was also awarded Nadaprabhu Kempegowda Award by BBMP, Bengaluru.",
      " 13. He has also received Mother Theresa award.",
      " 14. He has been conferred the highest award: Dr. K. C. Kandhari award for his distinguished career in Dermatology by IADVL."
    ],
  },
];

const AboutProfile = () => {
  return (
    <div className="about-section">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-card">
          <img
            className="profile-image"
            src={profile.image}
            alt={profile.name}
            title={profile.heading}
          />
          <div className="profile-details">
            <h2>{profile.name}</h2>
            <h3>{profile.heading}</h3>
            <ul>
              {profile.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutProfile;