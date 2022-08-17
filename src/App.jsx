import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [quote, setQuote] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(perv => !perv);
  }
  useEffect(() => {
    fetch('https://programming-quotes-api.herokuapp.com/Quotes/random')
        .then(response => response.json())
        .then(data => setQuote(data))
  },[isLoading])

  return (
    <div className="App d-flex flex-column min-vh-100 justify-content-center align-items-center p-5">
      <figure id="quote-box" className="text-center">
        <blockquote id="text" className="blockquote">
          <p>{quote.en}</p>
        </blockquote>
        <figcaption id="author" className="blockquote-footer">
          {quote.author}
        </figcaption>
        <div className="d-flex justify-content-between">
          <button id="new-quote" className="btn btn-outline-dark" onClick={handleClick}>
            New quote
          </button>
          <a 
          href={`https.//twitter.com/intent/tweet?text=${quote.en}`} 
          id="tweet-quote" className="btn btn-outline-dark">
            Tweet this
          </a>
        </div>
      </figure>
    </div>
  )
}

export default App
// $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=' + $('.message').text());
