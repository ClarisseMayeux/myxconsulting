
function Competences() {
    return (
      <div className="card">
          <div className="card-content">
            <h6><strong>Compétences professionnelles</strong></h6>
            <div className="row mt-top">
                <div className="col s6">
                    <p>Marketing digital</p>
                    <div className="progress grey lighten-1">
                        <div className="determinate blue" style={{width: '84%'}}></div>
                    </div>
                </div>
                <div className="col s6">
                    <p>Référencement</p>
                    <div className="progress grey lighten-1">
                        <div className="determinate blue" style={{width: '92%'}}></div>
                    </div>
                </div>
                <div className="col s6">
                    <p>Communication</p>
                    <div className="progress grey lighten-1">
                        <div className="determinate blue" style={{width: '69%'}}></div>
                    </div>
                </div>
                <div className="col s6">
                    <p>Street cred</p>
                    <div className="progress grey lighten-1">
                        <div className="determinate blue" style={{width: '72%'}}></div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    );
  }
  
  export default Competences;