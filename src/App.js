import logo from './logo.svg';
import './App.css';
import Card from './Component/Card';
import cardContent from './Util/data.json'

function App() {
  
  return (
    <div >
      
    {
    cardContent.map((cardContent)=>{
     return <Card title={cardContent.title} subTitle={cardContent.subtitle}/>
})

    
}
    </div>
  );
}

export default App;
