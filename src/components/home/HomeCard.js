import "./cardstyles.css";
import CardData from "./CardData";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";

function HomeCard() {
    return (
        <div className="card">
            <div className="cardcard">
                <CardData
                    image={card1}
                    heading="Swastha Medical"
                    text= "Mobile medical unit for Vitals & more advanced tests including CBC."
                />
                <CardData
                    image={card2}
                    heading="SwaSeva Hospital"
                    text= "Hospital kiosk for Patient Registration & Lab Report Printing."

                />
                <CardData
                    image={card3}
                    heading="Swastha Stree"
                    text= "Mahila Kiosk for Dispensing of Sanitary Pads."
                />
                <CardData
                    image={card4}
                    heading="Swastha Vahan"
                    text= "Mobile medical unit for Vitals & more advanced tests including CBC."
                />
            </div>
        </div>
    );
}

export default HomeCard;