// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './Data'
// import img from './images/katie-zaferes.png'
// import img2 from './images/wedding-photography.png'
// import img3 from './images/mountain-bike.png'


function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <section className='cards-list'>
      {
        Data.map(item => {
          return (
            <Card
                key={item.id}
                item={item}
                // {...item}
              />
          )
        })
      }
      </section>
    </div>
  );
}

export default App;

/* <Card
  img={img}
  rating="5.0"
  reviewCount="6"
  location="USA"
  title="Life Lessons with Katie Zaferes"
  price="136"
 />
<Card
  img={img2}
  rating="5.0"
  reviewCount="6"
  location="USA"
  title="Life Lessons with Katie Zaferes"
  price="136"
 />
<Card
  img={img3}
  rating="5.0"
  reviewCount="6"
  location="USA"
  title="Life Lessons with Katie Zaferes"
  price="136"
 /> */
