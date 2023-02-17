import { Discussions, Form } from "./component"; 
import { useEffect, useState } from 'react';

function App() {
  const domain = "http://localhost:4000";
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    getDiscussion();
  }, []);

  const getDiscussion = () => {
    return fetch(domain + "/discussions")
      .then(res => res.json())
      .then(data => {
        setDiscussions(data);
      });
  };

  const addDiscussion = ({ title, author, bodyText }) => {
    const newDiscussionData = {
      title: title,
      author: author,
      bodyHTML: bodyText,
    };
    fetch(domain + "/discussions/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDiscussionData),
    }).then((res) => {
      if (res.status === 201) {
        getDiscussion();
      }
    });
  };

  return (
    <main>
      <h1>My Agora States</h1>
      <div className="wrapper">
        <Form addDiscussion={addDiscussion}/>
        <Discussions discussions={discussions} />
      </div>
    </main>
  )
}

export default App;
