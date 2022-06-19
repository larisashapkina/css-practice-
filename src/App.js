import './App.css';
// import EditorLists from './data/EditorLists.js';
import prof1 from './images/profile1.png';
import prof2 from './images/profile2.png';
import prof3 from './images/profile3.png';
import prof4 from './images/profile4.png';
import prof5 from './images/profile5.png';
import prof6 from './images/profile6.png';
import prof7 from './images/profile7.png';


function App() {
  return (
    <div className="practiceCard">
    <div className="title">
      VIEWS FROM OUR COLUMNISTS
    </div>
    <div className="sevenColumns">
      <div className="pro1">
        <div className="name">YVONNE ABRAHAM</div>
        <div className="text">Nativity School of Worcester now prohibited from <br/>calling itself a Catholic school</div>
        <div className="image">
          <img src = {prof1} alt="Yvonne Abraham"></img>
        </div>
      </div>  
      <div className="pro2">
        <div className="name">JENEÉ OSTERHELDT</div>
        <div className="text">Our children don't feel safe. Gun control, not <br/>more guns, is the way forward.</div>
        <div className="image">
          <img src = {prof2} alt="Jeneé Osterheldt"></img>
        </div>
      </div>
      <div className="pro3">
        <div className="name">ADRIAN WALKER</div>
        <div className="text">How did Patrick Rose keep his badge? And who <br/> decided?</div>
        <div className="image">
          <img src = {prof3} alt="Adrian Walker"></img>
        </div>
      </div>
      <div className="pro4">
        <div className="name">SHIRLEY LEUNG</div>
        <div className="text">A new park is unfolding in the Seaport. Is it what <br/>the neighborhood needs?</div>
        <div className="image">
          <img src = {prof4} alt="Shirley Leung"></img>
        </div>
      </div>
      <div className="pro5">
        <div className="name">THOMAS FARRAGHER</div>
        <div className="text">A half century of vigilance in the big poolside chair</div>
        <div className="image">
        <img src = {prof5} alt ="Thomas Farragher"></img>
        </div>
      </div>
      <div className="pro6">
        <div className="name">KEVIN CULLEN</div>
        <div className="text">Gun violence visits a small, idyllic Vermont town</div>
        <div className="image">
        <img src = {prof6} alt="Kevin Cullen"></img>
        </div>
      </div>
      <div className="pro7">
        <div className="name">DAN MCGOWAN</div>
        <div className="text">What it was like to dine with Buddy Cianci at the <br/>Old Canteen in Providence</div>
        <div className="image">
        <img src = {prof7} alt="Dan McGowan"></img>
        </div>
      </div>
    </div>  
  </div>
  );
}

export default App;
