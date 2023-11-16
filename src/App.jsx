
import axios from "axios";

function App() {

  //const [data, setData] = useState()

  const api = axios.create({
    baseURL: "https://api-node-iult.onrender.com" 
  })
  
  const fetchData = () => {
    return api.get("/extenses").then((a) => console.log(a))

  }

  return (
    <div>
      <button onClick={() => fetchData()}></button>
      
    </div>
  )
}

export default App
