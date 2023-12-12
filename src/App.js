import "./style.css"
import Header from './header';
import Card from "./Card";
import data from './data.js'


function App() {
  return (
    <div >
      <Header />
      <div className="pictures">
        {data.map((item, index) =>
          <Card key={index} item={item} />)
        }


      </div>



    </div>
  );
}

export default App
