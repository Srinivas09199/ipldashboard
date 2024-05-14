// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {itemDetails} = props
  const {id, teamImageUrl, name} = itemDetails

  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <li className="team-card-container">
        <img className="img" alt={name} src={teamImageUrl} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard