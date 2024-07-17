import Certificate from "./Certificate";
import cert1 from "../../../assets/images/CE.jpg";
import cert2 from "../../../assets/images/FCC.jpg";
import cert3 from "../../../assets/images/idbt.jpg";
import cert4 from "../../../assets/images/registration.jpg";
import cert5 from "../../../assets/images/ROHS.jpg";

function Cert() {
  const galleryImages = [
    {
      img: cert1,
    },
    {
      img: cert2,
    },
    {
      img: cert3,
    },
    {
      img: cert4,
    },
    {
      img: cert5,
    },
  ];

  return (
    <div>
      <br />
      <Certificate galleryImages={galleryImages} />
    </div>
  );
}

export default Cert;
