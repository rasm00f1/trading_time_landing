import { TailSpin } from "react-loader-spinner";
export default function Shop(props) {
  const webshopCopy = [...props.webshop];
  console.log(webshopCopy);
  return (
    <section className="webshop gradient_background">
      <h2>Trading Time Merchandise</h2>

      <div className="webshop_container">
        {props.isFetched === true ? (
          webshopCopy.map((webshopItem) => (
            <div className="webshop_item fade_in" key={webshopItem.itemname}>
              <div style={{ backgroundColor: "#fed218", paddingBottom: "0.5rem", color: "white", textShadow: "0.1rem 0.1rem 0 rgb(150 20 150)" }}>
                <p style={{ fontSize: "2rem" }}>{webshopItem.itemname}</p>
              </div>
              <img src={`./img/${webshopItem.itemimg}.png`} alt={webshopItem.itemname} />
              <div style={{ backgroundColor: "#fed218", padding: "1rem" }} className="side_by_side">
                <button className="webshop_button">Add to Cart</button>
                <button className="webshop_button">+</button>
                <button className="webshop_button">-</button>
              </div>
            </div>
          ))
        ) : (
          <TailSpin ariaLabel="Loading" color="#fed218" height={80} width={80} />
        )}
      </div>
    </section>
  );
}
