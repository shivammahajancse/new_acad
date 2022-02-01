import './App.css';
import './Components/Menu'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Me from './Components/Me'
import Notification from './Components/Notification'
import Home from './Components/Home'
import Login from './Components/Login'
import { useState } from 'react';
import imaginecup from './Image/imaginecup.png'
import iit from './Image/iit.png'
import nso from './Image/nso.jpg'
import lilchamps from './Image/lilchamps.jpg'
import Signup from './Components/Signup.js';
import Contactus from './Components/Contactus'
function App() {
  const [LoginIs, setLoginIs] = useState(true);
  const [search,setsearch]=useState(false);
  const postsData=[{name:'Raju Rastogi',bio:'NIMS School',content:'Hello EveryOne i have just won a competetion of NSO and i would like share with you thank you all for supporting me',like:'10',time:'22:56,7th Jan 2022',imageurl:nso},{name:'Gunjan Agarwal',bio:'Learning Enthusiast',content:'Hey Friends, Imagine Cup Junior is an exciting opportunity for students aged 13-18 years old to learn about technology and how it can be used to solve some of the world’s biggest challenges, while participating in a global student challenge.Registration for Imagine Cup Junior will open on February 3rd 2022. Team Leaders must submit projects on behalf of their student teams before the submission deadline, May 12th 2022.',like:'10',time:'22:56,10th Jan 2022',imageurl:imaginecup},{name:'Vikas Sharma',bio:'Belong from a small village',content:'Inspiration ! Inspiration ! Though he was quite younger than me but he inspire me to how to follow your passion and also get succed by indulging in.',like:'97',time:'22:56,1th Jan 2022',imageurl:lilchamps},{name:'Harshita Khandelwal',bio:'Keep Learning and Healthy',content:'Hello Guys, Today is a big day for me as my hardwork and lot of efforts gave me success. I have cleard IIT-JEE Advance Exam with 2500 Global Rank. Thankyou to my mummy and papa for keep supporting me and also my faculties of allen Coaching Institute #allen #studies #jee',like:'97',time:'22:56,25th Jan 2022',imageurl:iit}]
  const notification=["he called multiple times and redarded","concall on the way","mayham viwed your profile","start preparing for new event"]
  const events = ["ISRO Challenge","NSO Nationals","Best physics Contenst,Agra"]
  const nameAbout = [{name:"Vasu Vijayvargiya",bio:"NIMS School",place:'Jaipur Rajasthan'},{about:'I am studying student in NIMS School and national level science olypiard winner 2012'}];
  const experience = [{experience:'NSO Winner',company:'National level Olympiard',time:'2012'},{experience:'NMO Winner',company:'National level Olympiard',time:'2014'}];
  const education = [{education:'Shri Guru Tegh Bahadur Academy',class:'8th std'},{education:'Joseph Academy',class:'5th std-8th std'}]
  const searchData = ["Vasu","Radhey","John","Carlton"];
  const Interests = ["Astrophysics","Yogik World","Stars","Neuroscience"]
  console.log("LoginIs value at start of app " +LoginIs);
  const admin = {id:"VasuVj24",pass:"123"};
  const signupData = (signup)=>{
    console.log("inside app");
    return (<Redirect to='/login'/>);
  }
  const receiveData = (obj)=>{
    if(admin.id===obj.userName && admin.pass===obj.pass){return setLoginIs(true);}
    console.log("LoginIs at receive data "+LoginIs);
    return false;
  }
  const setSearchTrue = ()=>{
    console.log("setting serch true")
    return search ? setsearch(false) : setsearch(true)
  }
  const handleLogout = ()=>{
      if(LoginIs===true){
      setLoginIs(false);
      }
      console.log(LoginIs);
    console.log("error in LogOut");
  }
  return (
    <div className="header">
    <Router>
      <Switch>
        <Route path='/' exact component={()=><Home Interests={Interests} searchData={searchData} search={search} setSearchTrue={setSearchTrue} loginIs={LoginIs} events={events} handleLogout={handleLogout} postsData={postsData}/>} />
        <Route path='/Notification' component={()=><Notification events={events} Interests={Interests} searchData={searchData} search={search} setSearchTrue={setSearchTrue} notification={notification} loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/me' component={()=><Me searchData={searchData} search={search} setSearchTrue={setSearchTrue} nameAbout={nameAbout} experience={experience} education={education} loginIs={LoginIs} handleLogout={handleLogout}/>} />
        <Route path='/login' component={()=><Login searchData={searchData} search={search} setSearchTrue={setSearchTrue} LoginIs={LoginIs} handleLogout={handleLogout} receiveData={receiveData}/>}/>
        <Route path='/signup' component={()=><Signup signupData={signupData}/>}/>
        <Route path='/contact' component={()=><Contactus searchData={searchData} search={search} setSearchTrue={setSearchTrue} loginIs={LoginIs} handleLogout={handleLogout}/>}/>
        <Redirect to='/'/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
