// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formattedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({teamCardList: formattedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state

    return (
      <div className="bg-team-matches-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <div className="logo-container">
              <img
                className="logo"
                alt="ipl logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
              />
              <h1 className="heading">IPL Dashboard</h1>
            </div>
            <ul className="list-container">
              {teamCardList.map(each => (
                <TeamCard key={each.id} itemDetails={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
