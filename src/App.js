import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from 'react-router-dom';

function LyricsActivity() {
  const [lyrics, setLyrics] = useState('');
  const [sessions, setSessions] = useState([]);
  const outputBoxRef = useRef(null);

  useEffect(() => {
    if (outputBoxRef.current) {
      outputBoxRef.current.style.height = `${outputBoxRef.current.scrollHeight}px`;
    }
  }, [sessions]);

  const handleButtonClick = (selectedColor) => {
    const newSession = { color: selectedColor, lyrics: '' };
    setSessions([...sessions, newSession]);
    setLyrics('');
  };

  const handleInputChange = (e) => {
    setLyrics(e.target.value);
    const updatedSessions = [...sessions];
    updatedSessions[updatedSessions.length - 1].lyrics = e.target.value;
    setSessions(updatedSessions);
  };

  return (
    <div className='container'>
      <h3>Complete the Lyrics</h3>
      <div className='btn-group'>
        <Link to='/singer/first'>
          <button className='first' onClick={() => handleButtonClick('violet')}>
            FIRST SINGER
          </button>
        </Link>
        <Link to='/singer/second'>
          <button className='second' onClick={() => handleButtonClick('green')}>
            SECOND SINGER
          </button>
        </Link>
        <Link to='/singer/third'>
          <button className='third' onClick={() => handleButtonClick('lightgreen')}>
            THIRD SINGER
          </button>
        </Link>
        <Link to='/singer/fourth'>
          <button className='fourth' onClick={() => handleButtonClick('pink')}>
            FOURTH SINGER
          </button>
        </Link>
      </div>
      <div className='input-box'>
        <input
          type='text'
          placeholder='Enter lyrics'
          value={lyrics}
          onChange={handleInputChange}
          style={{ width: '550px', height: '40px' }}
        />
      </div>
      <div className='container2'>
        <div className='output-box' ref={outputBoxRef}>
          {sessions.map((session, index) => (
            <div
              className='output'
              key={index}
              style={{
                marginTop: '20px',
                backgroundColor: session.color,
                color: 'white',
                padding: '10px',
              }}>
              {session.lyrics}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/singer' element={<LyricsActivity />} />
        <Route path='/singer/first' element={<LyricsActivity />} />
        <Route path='/singer/second' element={<LyricsActivity />} />
        <Route path='/singer/third' element={<LyricsActivity />} />
        <Route path='/singer/fourth' element={<LyricsActivity />} />
      </Routes>
    </Router>
  );
}

export default App;
