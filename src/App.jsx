import { useState, useEffect } from 'react'
import { IconFb, IconPt, IconIg} from './assets/svgIcons.jsx';
import { Timer } from './components/Timer.jsx';

import './App.css'

function App() {
  const secondDuration = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const hoursInDay = 24;
  
  const countdownDays = 14;

  const daysToHours = d => d * hoursInDay;
  const daysToMinutes = d => d * hoursInDay * minutesInHour;
  const daysToSeconds = d => d * hoursInDay * minutesInHour * secondsInMinute;

  const [days, setDays] = useState(countdownDays);
  const [hours, setHours] = useState(daysToHours(countdownDays));
  const [minutes, setMinutes] = useState(daysToMinutes(countdownDays));
  const [seconds, setSeconds] = useState(daysToSeconds(countdownDays));
  
  const [showSeconds, setShowSeconds] = useState(secondsInMinute - 1);
  const [showMinutes, setShowMinutes] = useState(minutesInHour - 1);
  const [showHours, setShowHours] = useState(hoursInDay - 1);
  const [showDays, setShowDays] = useState(countdownDays);

  useEffect(() => {
    if (days > 0) {
      setDays(countdownDays - 1);
      setShowDays(showDays - 1);
    }

  }, []);

  useEffect(() => {
    
    if (seconds > 1 && minutes > 0) {
      
      if (showSeconds === 0) {
        setShowMinutes(showMinutes - 1)
        setMinutes(minutes - 1);
      }
      
      const show = (showSeconds < 1) ? secondsInMinute - 1 : showSeconds - 1;

      setTimeout(() => {
        setShowSeconds(show);
        setSeconds(seconds - 1);
      }, secondDuration);

    }
  }, [seconds]);

  useEffect(() => {
    
      if (showMinutes < 0 && hours > 0) {
        setShowMinutes(minutesInHour - 1);
        setHours(hours - 1);
        setShowHours(showHours - 1);
      }
    
  }, [minutes]);

  useEffect(() => {
    if (showHours < 0 && days > 0) {
      setShowHours(hoursInDay - 1);
      setDays(days - 1);
      setShowDays(showDays - 1);
    }
  }, [hours]);

  return (
    <div className="App">
      <main className="main">

        <h1 className="main__title">We're launching soon</h1>

        <section className="countdown">
          <Timer value={showDays} label="Days"></Timer>
          <Timer value={showHours} label="Hours"></Timer>
          <Timer value={showMinutes} label="Minutes"></Timer>
          <Timer value={showSeconds} label="Seconds"></Timer>
          
        </section>
      </main>

      <footer className="footer">
        <div className="social-links">
          <a className="social-link" href="https://facebook.com" target="_blank" rel="noopener">
            <IconFb />
          </a>
          <a className="social-link" href="https://pinterest.com" target="_blank" rel="noopener">
            <IconPt />
          </a>
          <a className="social-link" href="https://instagram.com" target="_blank" rel="noopener">
            <IconIg />
          </a>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener">Frontend Mentor</a>. 
          Coded by <a href="https://www.frontendmentor.io/profile/Soleguia" target="_blank" rel="noopener">Soleguia</a>.
        </div>
      </footer>
    </div>
  )
}

export default App
