import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-wrapper">
        <img src="src/images/fishtacobowl.jpg" alt="fish taco bowl"></img>
      </div>
      <div className="container">
        <div className="hero-text-wrapper">
          <h1>Farm to table in every bite </h1>
          <p>Come visit the best new restaurant in the city!</p>
          <div className="hero-button-wrapper">
            <Button variant="primary">Make a Reservation</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
