import { useState } from "react";
import { FaMapMarkerAlt, FaArrowRight, FaTimes, FaWhatsapp } from "react-icons/fa";
import { flatSchemes } from "../data/properties";
import "../App.css";

const WHATSAPP_NUMBER = "919209079807";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function Flats() {
  const [selectedFlat, setSelectedFlat] = useState(null);

  return (
    <main className="properties-page">

      {/* PAGE HEADER */}
      <section className="properties-header">
        <p>GAJALAKSHMI REAL ESTATE</p>

        <h1>Our Flat Schemes</h1>

        <span>
          Explore our residential flat schemes and find a home
          that suits your requirements.
        </span>
      </section>


      {/* FLAT SCHEMES */}
      <section className="property-list-section">

        <div className="property-list-grid">

          {flatSchemes.map((flat) => (

            <article className="scheme-card" key={flat.id}>

              {/* IMAGE PLACEHOLDER */}
              <div className="scheme-image flat-image">
                <span>FLATS</span>
              </div>

              {/* CARD CONTENT */}
              <div className="scheme-content">

                <p className="scheme-type">
                  {flat.type}
                </p>

                <h2>{flat.name}</h2>

                <p className="scheme-location">
                  <FaMapMarkerAlt />
                  {flat.location}
                </p>

                <div className="scheme-short-details">

                  <span>{flat.bhk}</span>

                  <span>{flat.area}</span>

                </div>

                <button
                  className="details-button"
                  onClick={() => setSelectedFlat(flat)}
                >
                  View Details
                  <FaArrowRight />
                </button>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* DETAILS MODAL */}
      {selectedFlat && (

        <div
          className="property-modal-overlay"
          onClick={() => setSelectedFlat(null)}
        >

          <div
            className="property-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              className="modal-close"
              onClick={() => setSelectedFlat(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>


            {/* MODAL IMAGE */}
            <div className="modal-property-image flat-image">
              <span>FLATS</span>
            </div>


            {/* DETAILS */}
            <div className="modal-property-content">

              <p className="scheme-type">
                {selectedFlat.type}
              </p>

              <h2>{selectedFlat.name}</h2>

              <p className="scheme-location">
                <FaMapMarkerAlt />
                {selectedFlat.location}
              </p>


              <div className="property-detail-grid">

                <div>
                  <span>BHK</span>
                  <strong>{selectedFlat.bhk}</strong>
                </div>

                <div>
                  <span>Area</span>
                  <strong>{selectedFlat.area}</strong>
                </div>

                <div>
                  <span>Price</span>
                  <strong>{selectedFlat.price}</strong>
                </div>

                <div>
                  <span>Status</span>
                  <strong>{selectedFlat.status}</strong>
                </div>

              </div>


              <div className="property-description">

                <h3>About This Property</h3>

                <p>
                  {selectedFlat.description}
                </p>

              </div>


              {/* WHATSAPP */}
              <button
                className="modal-whatsapp-button"
                onClick={() =>
                  openWhatsApp(
                    `Hello Gajalakshmi Real Estate, I am interested in the ${selectedFlat.name} flat scheme. Please share more details.`
                  )
                }
              >
                <FaWhatsapp />
                Enquire About This Property
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
}

export default Flats;