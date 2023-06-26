import React, { useState, useEffect } from "react";
import EmojiScale from './EmojiScale';

import "./App.css";

interface AppProps { }

export interface FeelingData {
  feeling: string
  feeling_count: number
}

function App({ }: AppProps) {


  // setFeeling(feeling = '😋')
  let defaultfeeling: FeelingData = {
    feeling: '😋',
    feeling_count: 4
  };
  // Create the count state.
  const [count, setCount] = useState(0);
  const [feeling, setFeeling] = useState(defaultfeeling);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    getFeelingData().then((data) => { setFeeling(data as FeelingData); console.log(feeling); });
    return () => clearTimeout(timer);
  });
  // Return the App component.



  async function getFeelingData(): Promise<FeelingData> {
    // For now, consider the data is stored on a static `FeelingData.json` file
    const res = await fetch('http://127.0.0.1:8000/feeling');

    // The response has an `any` type, so we need to cast
    // it to the `User` type, and return it from the promise
    if (!res) {
      console.log(Error)
      return { feeling: '😋', feeling_count: 4 };
    } else {
      const res_1: FeelingData = await res.json() as FeelingData;
      return res_1;
    }
  }

  return (
    <div className="App" >
      <header className="App-header">
        <p className="feeling_line">feelometer</p>
        <p className="feeling_symbol">{feeling.feeling}</p>
        <EmojiScale count={feeling.feeling_count} />
      </header>
    </div>
  );
}

export default App;
