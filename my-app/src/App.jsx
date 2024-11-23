import React, { useState } from "react";
import "./App.css";

// Navbar Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyApp</div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

// Card Component
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  const cards = [
    { title: "Card 1", description: "This is the first card.", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 2", description: "This is the second card.", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 3", description: "This is the third card.", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 4", description: "This is the fourth card.", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 5", description: "This is the fifth card.", imageUrl: "https://via.placeholder.com/150" },
    { title: "Card 6", description: "This is the sixth card.", imageUrl: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="app">
      <Navbar />
      <h1>My Cards</h1>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
