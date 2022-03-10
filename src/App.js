
import './App.css';
import SkillContainer from './Component/SkillContainer/SkillContainer';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import ProjectContainer from './ProjectContainer/ProjectContainer';
import TopContainer from './TopContent/TopContainer';
import Dashboard from './Components/Dashboard';
import Header from './Component/Header';
import AuthPage from './Pages/AuthPage';
import Header1 from './Component/Header/Header1';
import Pro from './Pro/Pro';
import AuthForm from './Auth/AuthForm';
import About from './About/About';




function App() {
  return (
    <div className="App">
   {/* <AuthPage/>
   
   <Header/>
    <Dashboard/>*/}
      <AuthForm/>
      <Header1/>
      <TopContainer/>
      <SkillContainer/>
      <Pro/>
      <Experience/>
      <Contact/>
      
    </div>
  );
}

export default App;
