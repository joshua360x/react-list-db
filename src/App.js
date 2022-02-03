import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Workshop from './PhoneList';
import { getPhones, getPizzas, getSpeakers } from './services/fetch-utils';
import PizzaList from './PizzaList';
import SpeakerList from './SpeakerList';
// import your arrays here

function App() {
  const [phoneARR, setPhoneArr] = useState([]);
  const [pizzaARR, setPizzaArr] = useState([]);
  const [speakerARR, setSpeakerArr] = useState([]);

  async function fetchPhones() {
    const data = await getPhones();
    setPhoneArr(data);
  }

  async function fetchPizzas() {
    const data = await getPizzas();
    setPizzaArr(data);
  }

  async function fetchSpeakers() {
    const data = await getSpeakers();
    setSpeakerArr(data);
  }

  useEffect(() => {
    fetchPhones();
    fetchPizzas();
    fetchSpeakers();
  }, []);

  return (
    <div className="App">
      Render all your lists here. Pass the arrays as props.
      <Workshop phones={phoneARR} />
      <PizzaList pizzas={pizzaARR} />
      <SpeakerList speakers={speakerARR} />
    </div>
  );
}

export default App;
