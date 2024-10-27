import { useState } from 'react';
import './Subsecribe.css';

export default function Subsecribe() {

        const [inputContent, setInputContent] = useState("");
        const [message, setMessage] = useState("");
      
        const checkInputContent = () => {
          const wordsToCheck = ["@gmail.com", "@hotmail.com", "@outlook.com","@example.com"]; // قم بتعريف الكلمات التي ترغب في التحقق من وجودها
      
          let containsWord = false;
          for (let i = 0; i < wordsToCheck.length; i++) {
            if (inputContent.includes(wordsToCheck[i])) {
              containsWord = true;
              break;
            }
          }
      
          if (containsWord) {
            setMessage("Congratulations! You're now subscribed");
          } else {
            setMessage("Ensure your email address follows the format name@example.com");
          }
        }

    return (
        <section className='Subsecribe'>
            <div className='Content'>
                <h2 className='title'>
                    Wherever you are, X academy reach you
                </h2>
                <p>Subscribe to the newsletter to stay in latest news</p>
                <div className='inputArea'>
                    <input id='SubValue' 
                    type='email' placeholder='Enter your E-mail' value={inputContent} 
                    onChange={(e) => setInputContent(e.target.value)}
                    />
                    <button
                        
                        onClick={() => checkInputContent()}
                    >Subscribe</button>
                </div>
                { message && <span className='Dinamic'>{message}</span>}
            </div>
        </section>
    )
}
