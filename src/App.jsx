import './App.css'
import Nav from './components/Nav'
import Card from './components/Card'
import data from './data'



function App() {
  
  const cards = data.map(item => {
      return (
        <Card 
          {...item}
        />
      )
    } 
  )
  
  return (
    <div className="App">
      <Nav />
      <div className='cards-container flex flex-col justify-center items-center'>
        {cards}
      </div>

    </div>
  )
}

export default App
