import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaWhatsapp, FaInstagram, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

const WHATSAPP_NUMBER = ""; 
const INSTAGRAM_URL = "";

function openWhatsApp(message = "Hello Gajalakshmi Real Estate, I am interested in your properties.") {
  if (!WHATSAPP_NUMBER) {
    alert("Please add the Gajalakshmi WhatsApp number in App.jsx");
    return;
  }

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">

            <div className="hero-badge">
              <span></span>
              GAJALAKSHMI REAL ESTATE PVT. LTD.
            </div>

            <h1>
              Find a Place
              <br />
              <span>You'll Love to Call Home.</span>
            </h1>

            <p className="hero-description">
              Discover thoughtfully selected flats and residential
              plots designed for comfortable living, secure
              investment and a better future.
            </p>

            <div className="hero-buttons">

              <Link to="/flats" className="gold-button">
                Explore Flats
                <FaArrowRight />
              </Link>

              <Link to="/plots" className="outline-button">
                Explore Plots
              </Link>

              <button
                className="whatsapp-button"
                onClick={() => openWhatsApp()}
              >
                <FaWhatsapp />
                WhatsApp Us
              </button>

            </div>

            <div className="hero-trust">
              <div>
                <strong>Quality</strong>
                <span>Selected Properties</span>
              </div>

              <div>
                <strong>Value</strong>
                <span>Smart Investments</span>
              </div>

              <div>
                <strong>Trust</strong>
                <span>Customer Focused</span>
              </div>
            </div>

          </div>
        </div>

        <div className="hero-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>


      {/* INTRO SECTION */}
      <section className="intro-section">

        <div className="intro-content">

          <div className="intro-label">
            GAJALAKSHMI
          </div>

          <h2>
            Your Property.
            <br />
            <span>Your Future.</span>
          </h2>

          <p>
            At Gajalakshmi Real Estate Pvt. Ltd., we believe
            that finding the right property is more than just
            buying a space. It is about creating a foundation
            for your family's future.
          </p>

          <p>
            Explore our carefully selected flats and residential
            plots and find a property that matches your dreams,
            requirements and investment goals.
          </p>

          <Link to="/flats" className="text-link">
            Explore Properties <FaArrowRight />
          </Link>

        </div>

        <div className="intro-highlight">

          <div className="gold-frame">
            <div>
              <span>BUILDING</span>
              <strong>DREAMS</strong>
            </div>

            <div>
              <span>CREATING</span>
              <strong>VALUE</strong>
            </div>
          </div>

        </div>

      </section>


      {/* PROPERTY CATEGORIES */}
      <section className="categories section">

        <div className="section-heading">
          <p>EXPLORE</p>
          <h2>Our Properties</h2>
          <span>
            Choose the property that fits your needs.
          </span>
        </div>

        <div className="category-grid">

          <Link
            to="/flats"
            className="category-card flats-card"
          >
            <div className="category-number">01</div>

            <div className="category-content">

              <p>APARTMENTS</p>

              <h3>Flats</h3>

              <span>
                Comfortable homes designed for modern
                family living.
              </span>

              <strong>
                Explore Flats <FaArrowRight />
              </strong>

            </div>
          </Link>


          <Link
            to="/plots"
            className="category-card plots-card"
          >
            <div className="category-number">02</div>

            <div className="category-content">

              <p>LAND</p>

              <h3>Plots</h3>

              <span>
                Residential plots for your dream home
                and future investment.
              </span>

              <strong>
                Explore Plots <FaArrowRight />
              </strong>

            </div>
          </Link>

        </div>

      </section>


      {/* QUICK STATS */}
      <section className="stats-section">

        <div className="stat">
          <strong>100%</strong>
          <span>Customer Focused</span>
        </div>

        <div className="stat">
          <strong>2</strong>
          <span>Property Categories</span>
        </div>

        <div className="stat">
          <strong>✓</strong>
          <span>Document Assistance</span>
        </div>

        <div className="stat">
          <strong>24/7</strong>
          <span>Inquiry Support</span>
        </div>

      </section>


      {/* FEATURED PROPERTIES */}
      <section className="featured section">

        <div className="section-heading">
          <p>FEATURED</p>

          <h2>Properties You'll Love</h2>

          <span>
            Explore our selected property opportunities.
          </span>
        </div>


        <div className="property-grid">

          <div className="property-card">

            <div className="property-image flat-image">
              <span>FLATS</span>
            </div>

            <div className="property-info">

              <p className="property-type">
                APARTMENT
              </p>

              <h3>
                Premium Residential Flats
              </h3>

              <p className="location">
                <FaMapMarkerAlt />
                Location details coming soon
              </p>

              <div className="property-details">
                <span>1 / 2 / 3 BHK</span>
                <span>Modern Living</span>
              </div>

              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello, I am interested in the flats available with Gajalakshmi Real Estate."
                  )
                }
              >
                Enquire Now
              </button>

            </div>

          </div>


          <div className="property-card">

            <div className="property-image plot-image">
              <span>PLOTS</span>
            </div>

            <div className="property-info">

              <p className="property-type">
                RESIDENTIAL PLOT
              </p>

              <h3>
                Premium Residential Plots
              </h3>

              <p className="location">
                <FaMapMarkerAlt />
                Location details coming soon
              </p>

              <div className="property-details">
                <span>Multiple Sizes</span>
                <span>Residential</span>
              </div>

              <button
                onClick={() =>
                  openWhatsApp(
                    "Hello, I am interested in the residential plots available with Gajalakshmi Real Estate."
                  )
                }
              >
                Enquire Now
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* INQUIRY SECTION */}
      <section className="inquiry section" id="inquiry">

        <div className="inquiry-wrapper">

          <div className="inquiry-text">

            <p>PROPERTY INQUIRY</p>

            <h2>
              Tell Us What
              <span> You're Looking For.</span>
            </h2>

            <p>
              Looking for a flat or a plot?
              Share your requirements with us and
              we'll help you find the right property.
            </p>

            <div className="inquiry-highlight">

              <FaWhatsapp />

              <div>
                <strong>Direct WhatsApp Connection</strong>

                <span>
                  Your inquiry can be sent directly
                  to our WhatsApp.
                </span>
              </div>

            </div>

          </div>

          <InquiryForm />

        </div>

      </section>


      {/* CONTACT CTA */}
      <section className="contact-section">

        <div>

          <p>START YOUR PROPERTY JOURNEY</p>

          <h2>
            Your Dream Property
            <br />
            Could Be One Message Away.
          </h2>

        </div>

        <button
          onClick={() =>
            openWhatsApp(
              "Hello Gajalakshmi Real Estate, I would like to know about your available properties."
            )
          }
        >
          <FaWhatsapp />
          Contact Us on WhatsApp
        </button>

      </section>


      {/* FLOATING SOCIAL BUTTONS */}
      <div className="floating-buttons">

        {INSTAGRAM_URL && (
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="instagram-float"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        )}

        <button
          className="whatsapp-float"
          onClick={() => openWhatsApp()}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </button>

      </div>

    </main>
  );
}


function InquiryForm() {

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    const name = form.get("name");
    const phone = form.get("phone");
    const email = form.get("email");
    const property = form.get("property");
    const location = form.get("location");
    const budget = form.get("budget");
    const message = form.get("message");

    const inquiryMessage = `
New Property Inquiry

Name: ${name}
Mobile: ${phone}
Email: ${email || "Not provided"}
Interested In: ${property}
Preferred Location: ${location || "Not specified"}
Budget: ${budget || "Not specified"}

Message:
${message || "No message"}
    `;

    openWhatsApp(inquiryMessage);
  };

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>

      <div className="form-row">

        <div className="form-group">
          <label>Full Name *</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label>Mobile Number *</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter mobile number"
            required
          />
        </div>

      </div>

      <div className="form-row">

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Interested In *</label>
          <select name="property" required>
            <option value="">Select Property</option>
            <option value="Flat">Flat</option>
            <option value="Plot">Plot</option>
          </select>
        </div>

      </div>

      <div className="form-row">

        <div className="form-group">
          <label>Preferred Location</label>
          <input
            name="location"
            type="text"
            placeholder="Enter preferred location"
          />
        </div>

        <div className="form-group">
          <label>Budget</label>
          <input
            name="budget"
            type="text"
            placeholder="e.g. ₹50 Lakhs"
          />
        </div>

      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          rows="4"
          placeholder="Tell us what you are looking for..."
        />
      </div>

      <button type="submit" className="submit-button">
        <FaWhatsapp />
        Submit Inquiry on WhatsApp
      </button>

    </form>
  );
}


function Flats() {
  return (
    <div className="simple-page">
      <h1>Flats</h1>
      <p>Our available flats will appear here.</p>
    </div>
  );
}


function Plots() {
  return (
    <div className="simple-page">
      <h1>Plots</h1>
      <p>Our available plots will appear here.</p>
    </div>
  );
}


function LegalDocuments() {
  return (
    <div className="simple-page">
      <h1>Legal Documents</h1>
      <p>Property legal documents will appear here.</p>
    </div>
  );
}


function Contact() {
  return (
    <div className="simple-page">
      <h1>Contact Gajalakshmi Real Estate</h1>

      <button
        className="gold-button"
        onClick={() => openWhatsApp()}
      >
        <FaWhatsapp />
        Contact on WhatsApp
      </button>
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flats" element={<Flats />} />
        <Route path="/plots" element={<Plots />} />
        <Route
          path="/legal-documents"
          element={<LegalDocuments />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;