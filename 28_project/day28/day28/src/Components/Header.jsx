import { useState } from 'react'
import './Header.css'


const Header = () => {
    const [tweet, SetTweet] = useState();
    const [username, SetUsername] = useState();

    const handleSubmit = (e) => {
        const data = {
            user: username,
            tweet: tweet
        }

        e.preventDefault()
        fetch('http://localhost:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(() => SetTweet(''))
        .then(() => window.location.reload())
    }


    return (
        <div className='header'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your Username ... ' value={username} onChange={e => SetUsername(e.target.value)} required/>
                <input type="text" className='Tweetbox__btn' required placeholder='type your tweet...' value={tweet} onChange={e => SetTweet(e.target.value)} />
                <button type='submit' className='submit__btn' > Post Tweet</button>
            </form>
        </div>
    )
}

export default Header
