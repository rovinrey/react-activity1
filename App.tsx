import { useState } from 'react'
import './App.css'

function App() {
  const [likes, setLikes] = useState(0);
  const [dislike, setDislike] = useState(0);
  const totalrating = likes + dislike;

  return (
    <>
      {/* text */}
      <p> Charles Francis Padua, BSIT 3 of CCDI Sorsogon for wins Gold Medal
        in IT Software Solutions for Business category of the recent Philippine
        National Skills Competition or World Skills Philippines held last 
        August 21-25, 2024 at World Trade Center
      </p>
        {/* like button*/}
        <div className='button-container'>
          <div className="like-button">
            <button onClick={() => setLikes((countLikes) => countLikes + 1)}>
              like {likes}
            </button>
          </div>

          {/* dislike button */}
          <div className="dislike-button">
            <button onClick={() => setDislike((countDislike) => countDislike + 1)}>
              dislike {dislike}
            </button>
          </div>
        </div>
        
      {/* the rating should be number of like plus dislike*/}
      <div className="ratings">
        <p>total rating: {totalrating}</p>
      </div>
    </>
  )
}
export default App