import './HeroStyle.css';

function Hero({title , span , dec , btn}) {
    return (
      <section className='Herosec'>
        <h2>
             {title}
            <br />
            <span>{span}</span>
        </h2>
        <p>{dec}</p>
        <button>{btn}</button>
      </section>
    );
  }
  
  export default Hero;