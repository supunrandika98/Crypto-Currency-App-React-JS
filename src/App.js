import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { useEffect , useState } from 'react';
import Coin from "./components/Coin.js";
import Background from "./images/third.jpg";  


function App() {

  const[coinList, setCoinList] = useState([]);

  useEffect(() => {

    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=50")
    .then((response) => {
      
      setCoinList(response.data.coins);
    })

  }, []);

  const[searchCoins, setSearchCoins] = useState("");

  const checkCoins = (e) =>{
    setSearchCoins(e.target.value);
  };

  const filterCoins = coinList.filter((coin) =>{

     return coin.name.toLowerCase().includes(searchCoins.toLowerCase());
  })
  
  

  return (
    <div className="App" >

      <div className="cryptoHeader" style={{backgroundColor: "blue", fontFamily:"Karla"}}>
          <h1 style={{color: "white", paddingTop: "3%"}}>Crypto Currency App</h1>
           
          <input placeholder="Enter Coin Type..." type="text" onChange={checkCoins} style={{margin: "3% auto", width: "18rem"}}/>
           
      </div>

      <div className="cryptoDisplay" style={{backgroundImage: "url(" +  Background + ")",
        backgroundPosition: 'center',
        backgroundSize: '100% ',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        height: "100%",
        color: "white"}}>

          {filterCoins.map((coin) => {
              return(
                <div>
                    <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol}/>
                </div>
              )
          })}
      </div>

    </div>
  );
}

export default App;


 