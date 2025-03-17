import './App.css';
import { useState } from 'react';

const Header = () => <h1>Study tracking for students</h1>;

function description(work, breakT) {
  return `You go through ${work} minutes of focused hard work without distractions, followed by a ${breakT}-minute break.`;
}

const types = [
  { title: "Pomodoro Technique", work: 25, break: 5, repeat: 8, description: description(25, 5) },
  { title: "50/10 Technique", work: 50, break: 10, repeat: 4, description: description(50, 10) },
  { title: "90-Minute Focus Sessions", work: 90, break: 30, repeat: 2, description: description(90, 30) },
  { title: "52/17 Method", work: 52, break: 17, repeat: 3, description: description(52, 17) },
  { title: "The 2-Hour Focus Block", work: 120, break: 40, repeat: 2, description: description(120, 40) },
  { title: "30/5 Cycle", work: 30, break: 5, repeat: 2, description: description(30, 5) }
];

const clock = "00-00-00"

function App() {

  // function updateClock(){
  //   const now=new Date;
  //   const hours=now.getHours;
  //   const minutes=now.getMinutes;
  //   const seconds=now.getSeconds;

  //   {clock= hours + minutes + seconds;}
  // }

  // updateClock();
  // setInterval(updateClock(), 1000)

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  function findType(selected) {
    return types.find(type => type.title === selected);
  }

  const selectedMethod = findType(selectedOption); 

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <section className="creating">
          <p>Please enter a study session and choose a method:</p>
          <label>Choose an option:</label>
          <select id="choices" value={selectedOption} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Pomodoro Technique">Pomodoro Technique</option>
            <option value="50/10 Technique">50/10 Technique</option>
            <option value="90-Minute Focus Sessions">90-Minute Focus Sessions</option>
            <option value="52/17 Method">52/17 Method</option>
            <option value="The 2-Hour Focus Block">The 2-Hour Focus Block</option>
            <option value="30/5 Cycle">30/5 Cycle</option>
          </select>
        </section>
        <br/>
        {selectedOption && selectedMethod && (
          <section className="selected">
            <h2 className="header">The used method: {selectedMethod.title}</h2>
            <p>Please put away your phone and anything that could take your attention</p>
            <p>Description: {selectedMethod.description}</p>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;