import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import Home from './pages/Home';
import FindJobs from './pages/FindJobs';
import Employers from './pages/Employers';
import Candidates from './pages/Candidates';
import About from './pages/About';
import Modal from './components/Modal';
import TemplateInFindJobs from './components/FindJobsComponents/TemplateInFindJobs';
import TemplateInEmployers from './components/EmployersComponents/TemplateInEmployers';
import TemplateInCandidates from './components/CandidatesComponents/TemplateInCandidates';
// import ScrollToTop from './components/ScrollToTop';
import ScrollToTop from './ScrollToTop';
import ApplyJobModal from './components/ApplyJobModal';
import PrivateMessageModal from './components/PrivateMessageModal';



function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <div className='exceptModal'>

        <Routes>
          <Route path='/' element={<MainHeader />}>
            <Route index element={<Home />} />
            <Route path='/findjobs' element={<FindJobs />} />
            <Route path='/employers' element={<Employers />} />
            <Route path='/candidates' element={<Candidates />} />
            <Route path='/about' element={<About />} />
            <Route path='/findjobs/template' element={<TemplateInFindJobs  />}/>
            <Route path='/employers/template' element={<TemplateInEmployers />} />
            <Route path='/candidates/template' element={<TemplateInCandidates />} />
          </Route>
        </Routes>


        <Footer />
      </div>
      <Modal />
      <ApplyJobModal />
      <PrivateMessageModal />
      


    </div>
  );
}

export default App;
