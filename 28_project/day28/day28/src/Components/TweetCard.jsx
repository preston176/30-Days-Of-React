import './TweetCard.css'

const TweetCard = ({ username, tweet }) => {
    return (
        <div className='tweet__Card'>
            <h2>@{username}</h2>
            <p>{tweet}</p>
        </div>
    )
}

export default TweetCard
