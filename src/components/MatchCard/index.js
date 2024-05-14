// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = matchCardDetails

  console.log(matchCardDetails)

  return (
    <li className="match-card-container">
      <div>
        <img
          alt={`competing team ${competingTeam}`}
          className="matchCardImage"
          src={competingTeamLogo}
        />
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{manOfTheMatch}</p>
        <p>{result}</p>
        <p>{matchStatus}</p>
      </div>
    </li>
  )
}
export default MatchCard