import png from '../../assets/images/png.png'

function Profile() {
  return (
    <div className="card">
        <div className="card-image">
            <img className="activator" src={png} alt='me'/>
        </div>
        <div className="card-content">
            <span className='card-title activator grey-text text-darken-4'> Me </span>
            <p>Mon métier</p>
        </div>
    </div>
  );
}

export default Profile;
