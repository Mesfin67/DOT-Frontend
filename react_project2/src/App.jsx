import React from 'react';
import './App.css';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';

// Card Component
const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

// CardList Component
const CardList = ({ data }) => {
  return (
    <div className="card-list">
      {data.map((item, index) => (
        <Card 
          key={index} 
          image={item.image} 
          title={item.title} 
          description={item.description} 
        />
      ))}
    </div>
  );
};

// card data
const cardData = [
  {
    image: image1,
    title: "card-one",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, distinctio ad labore aliquid quas ipsam reprehenderit commodi eveniet vitae repellendu"
  },
  {
    image: image2,
    title: "card two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, distinctio ad labore aliquid quas ipsam reprehenderit commodi eveniet vitae repellendu"
  },
  {
    image: image3,
    title: "Card thre",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, distinctio ad labore aliquid quas ipsam reprehenderit commodi eveniet vitae repellendu is the description for card 3."
  }
];

// App Component
const App = () => {
  return (
    <div className="app">
      <h1>Card Collection</h1>
      <CardList data={cardData} />
    </div>
  );
};

export default App;
