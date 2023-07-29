import { useEffect, useState } from 'react'
import './Body.css'
import TweetCard from './TweetCard'

const Body = () => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(data => setTweets(data))
    }, [])

    return (
        <div className='body__section'>
            <div className="tweets__Container">
                <div className="tweet">
                    {tweets.map((tweet, index) => (
                        <TweetCard key={index} username={tweet.user} tweet={tweet.tweet} />
                    ))}
                    {/* <TweetCard username="User" tweet="my tweet" /> */}
                </div>
            </div>
        </div>
    )
}

export default Body
