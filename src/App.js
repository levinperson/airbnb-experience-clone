import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardData from "./data";

// import swimmer from "./swimmer.png";
// import wedding from "./wedding.png";
// import bike from "./bike.png";

function App() {
  const cardsElement = cardData.map((data) => {
    return (
      <Card
        key={data.id}
        abc={data} //Here I use ABC props to replace all the props below.

        //Another way to do it with ES6 syntax
        //{...data} //this spreads the data into the component props

        // img={data.coverImg}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // country={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards-container">
        {cardsElement}

        {/* <Card
          img={swimmer}
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img={wedding}
          rating="5.0"
          reviewCount={30}
          country="Spain"
          title="Learn Wedding photography"
          price={125}
        />
        <Card
          img={bike}
          rating="4.8"
          reviewCount={2}
          country="Canada"
          title="Group Mountain Biking"
          price={50}
        /> */}
      </div>
    </div>
  );
}

export default App;
