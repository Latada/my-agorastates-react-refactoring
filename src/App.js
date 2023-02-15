import './App.css';
import { Discussions, Form } from "./component"; 
import { useEffect, useState } from 'react';

function App() {
  const domain = "http://localhost:4000";
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussion();
  }, [])

  const getDiscussion = () => {
    return fetch(domain + "/discussions")
    .then(res => res.json())
    .then(data => {
      setDiscussions(data);
    })
  }

  return (
    <main>
      <h1>My Agora States</h1>
      <div className="wrapper">

        <Discussions discussions={discussions} />
      </div>
    </main>
  )
}

export default App;
