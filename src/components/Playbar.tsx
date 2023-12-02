import '../CSS/Playbar.css'
import playbar from '../Images/full-playbar.svg'

const Playbar = () => {

return (
    <div className="playbar">
      <img src={playbar} className="full-playbar-img"></img>
    </div>
  )
}

export default Playbar