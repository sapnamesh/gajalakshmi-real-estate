import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaArrowRight,
  FaTimes,
  FaWhatsapp,
} from "react-icons/fa";

import { plotSchemes } from "../data/properties";
import "../App.css";

const WHATSAPP_NUMBER = "919209079807";

function openWhatsApp(message) {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function Plots() {
  const [selectedPlot, setSelectedPlot] = useState(null);

  return (
    <main className="properties-page">

      {/* PAGE HEADER */}
      <section className="properties-header">
        <p>GAJALAKSHMI REAL ESTATE</p>

        <h1>Our Plot Schemes</h1>

        <span>
          Explore residential plots available for your dream
          home and future investment.
        </span>
      </section>


      {/* PLOT SCHEMES */}
      <section className="property-list-section">

        <div className="property-list-grid">

          {plotSchemes.map((plot) => (

            <article className="scheme-card" key={plot.id}>

              {/* IMAGE PLACEHOLDER */}
              <div className="scheme-image plot-image">

                {plot.resale && (
                  <span className="resale-badge">
                    RESALE
                  </span>
                )}

                <span>PLOTS</span>

              </div>


              {/* CARD CONTENT */}
              <div className="scheme-content">

                <p className="scheme-type">
                  {plot.type}
                </p>

                <h2>{plot.name}</h2>

                <p className="scheme-location">
                  <FaMapMarkerAlt />
                  {plot.location}
                </p>


                <div className="scheme-short-details">

                  <span>
                    {plot.plotSize}
                  </span>

                  <span>
                    {plot.status}
                  </span>

                </div>


                <button
                  className="details-button"
                  onClick={() => setSelectedPlot(plot)}
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
      {selectedPlot && (

        <div
          className="property-modal-overlay"
          onClick={() => setSelectedPlot(null)}
        >

          <div
            className="property-modal"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}
            <button
              className="modal-close"
              onClick={() => setSelectedPlot(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>


            {/* PROPERTY IMAGE */}
            <div className="modal-property-image plot-image">

              {selectedPlot.resale && (
                <span className="resale-badge">
                  RESALE PLOT
                </span>
              )}

              <span>PLOTS</span>

            </div>


            {/* DETAILS */}
            <div className="modal-property-content">

              <p className="scheme-type">
                {selectedPlot.type}
              </p>

              <h2>{selectedPlot.name}</h2>

              <p className="scheme-location">
                <FaMapMarkerAlt />
                {selectedPlot.location}
              </p>


              <div className="property-detail-grid">

                <div>
                  <span>Plot Size</span>

                  <strong>
                    {selectedPlot.plotSize}
                  </strong>
                </div>


                <div>
                  <span>Price</span>

                  <strong>
                    {selectedPlot.price}
                  </strong>
                </div>


                <div>
                  <span>Status</span>

                  <strong>
                    {selectedPlot.status}
                  </strong>
                </div>

              </div>


              {/* DESCRIPTION */}
              <div className="property-description">

                <h3>About This Property</h3>

                <p>
                  {selectedPlot.description}
                </p>

              </div>


              {/* WHATSAPP */}
              <button
                className="modal-whatsapp-button"
                onClick={() =>
                  openWhatsApp(
                    `Hello Gajalakshmi Real Estate, I am interested in the ${selectedPlot.name} plot scheme. Please share more details.`
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

export default Plots;