import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import RegistrationForm from './Pages/Registration/RegistrationForm';
import StudentTables from './Pages/Students/StudentTables';
import StudentDetails from './Pages/Students/StudentDetails';
import StudentsRecord from './Pages/Students/StudentsRecord';
import StudentSucess from './Pages/Students/StudentSucess';
import AddClass from './Pages/StudyMaterials/AddClass';
import BooksPdf from './Pages/StudyMaterials/BooksPdf';
import VideosPdf from './Pages/StudyMaterials/VideosPdf';
import TestHome from './Pages/Test/TestHome';
import AddTest from './Pages/Test/AddTest';
import MarkList from './Pages/Test/MarkList';
import TestList from './Mentor/test/TestList';
import FAQ from './Pages/TermsAndConditions/FAQ';
import PrivacyPolicy from './Pages/TermsAndConditions/PrivacyPolicy';
import TermsAndConditions from './Pages/TermsAndConditions/TermsAndConditions';
import Profile from './Pages/Profile/Profile';
import EditProfile from './Pages/Profile/EditProfile';
import MentorHome from './Mentor/MentorHome';
import MentorAccess from './Mentor/MentorAccess';
import MentorRegistrationForm from './Mentor/RegistrationForm';
import Payment from './Mentor/Payment';
import PaymentSuccess from './Mentor/PaymentSuccess';
import PaymentDetails from './Mentor/PaymentDetails';
import StudyMaterialsList from './Mentor/StudyMaterialsList';
import StudyMaterialSuccess from './Mentor/StudyMaterialSuccess';
import RegistrationSucess from './Pages/Registration/RegistrationSucess';
import MentorTestList from './Mentor/test/TestList';
import MentorTest from './Mentor/test/Test';
import MentorTestSuccess from './Mentor/test/Success';
import Progress from './Mentor/test/Progress';
import Information from './Mentor/informations/Information';
import InformationTypes from './Mentor/informations/InformationTypes';
import AdminHome from './Admin/AdminHome';
import IncentivesList from './Admin/IncentivesList';
import InternshipList from './Admin/InternshipList';
import MentorDetails from './Admin/MentorDetails';
import MentorList from './Admin/MentorList';
import MentorRecords from './Admin/MentorRecords';
import MentorSuccess from './Admin/MentorSuccess';
import InformationDetails from './Mentor/informations/InformationDetails';
import JobApply from './Mentor/jobApply/JobApply';
import JobDiscription from './Mentor/jobApply/JobDiscription';
import ApplyForm from './Mentor/jobApply/ApplyForm';
import ApplySuccess from './Mentor/jobApply/ApplySuccess';
import BooksAndVideos from './Pages/StudyMaterials/BooksAndVideos';
import MoreInfoHomes from './Admin/MoreInformations/MoreInfoHomes';
import TestCreate from './Pages/Test/TestCreate';
import AdminInfoTypes from './Admin/MoreInformations/AdminInfoTypes';
import AdminAddJob from './Admin/MoreInformations/AdminAddJob';
import StudentRequest from './Admin/MoreInformations/StudentRequest';
import MentorRequest from './Admin/MoreInformations/MentorRequest';
import Materials from './Mentor/Materials';
import MaterialList from './Mentor/MaterialList';
import MentorMathTest from './Mentor/test/Test';
import { Loan } from './Admin/MoreInformations/loan';
export const HOST='https://ultrafly-student-backend.onrender.com/rural_rise' 
// export const HOST='https://studen-app.onrender.com/rural_rise' 
// export const HOST='http://localhost:8080/rural_rise' 


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<MentorHome/>}/>
        <Route path='/registrationForm' element={<RegistrationForm/>}/>
        <Route path='/studentTables' element={<StudentTables/>}/>
        <Route path='/studentDetails/:id' element={<StudentDetails/>}/>
        <Route path='/studentsRecord' element={<StudentsRecord/>}/>
        <Route path='/studentSucess' element={<StudentSucess/>}/>
        <Route path='/addClass' element={<AddClass/>}/>
        <Route path='/booksPdf' element={<BooksPdf/>}/>
        <Route path='/VideosPdf' element={<VideosPdf/>}/>
        <Route path='/TestHome' element={<TestHome/>}/>
        <Route path='/AddTest' element={<Materials/>}/>
        <Route path='/MarkList' element={<MarkList/>}/>
        <Route path='/TestList' element={<TestList/>}/>
        <Route path='/FAQ' element={<FAQ/>}/>
        <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
        <Route path='/TermsAndConditions' element={<TermsAndConditions/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='/EditProfile' element={<EditProfile/>}/>
        <Route path='/MentorHome' element={<Home/>}/>
        <Route path='/MentorAccess' element={<MentorAccess/>}/>
        <Route path='/MentorRegistrationForm/:id/:id1' element={<MentorRegistrationForm/>}/>
        <Route path='/Payment/:id/:id1' element={<Payment/>}/>
        <Route path='/PaymentSuccess' element={<PaymentSuccess/>}/>
        <Route path='/PaymentDetails' element={<PaymentDetails/>}/>
        <Route path='/StudyMaterialsList' element={<StudyMaterialsList/>}/>
        <Route path='/StudyMaterialSuccess' element={<StudyMaterialSuccess/>}/>
        <Route path='/RegistrationSucess' element={<RegistrationSucess/>}/>
        <Route path='/MentorTestList' element={<MentorTestList/>}/>
        <Route path='/MentorTest/:role' element={<MentorTest/>}/>
        <Route path='/Progress' element={<Progress/>}/>
        <Route path='/Information' element={<Information/>}/>
        <Route path='/InformationTypes' element={<InformationTypes/>}/>
        <Route path='/AdminHome' element={<AdminHome/>}/>
        <Route path='/IncentivesList' element={<IncentivesList/>}/>
        <Route path='/InternshipList' element={<InternshipList/>}/>
        <Route path='/MentorDetails/:id' element={<MentorDetails/>}/>
        <Route path='/MentorList' element={<MentorList/>}/>
        <Route path='/MentorRecords' element={<MentorRecords/>}/>
        <Route path='/MentorSuccess/:title' element={<MentorSuccess/>}/>
        <Route path='/InformationTypes/:title' element={<InformationTypes/>}/>
        <Route path='/MentorTestSuccess/:role' element={<MentorTestSuccess/>}/>
        <Route path='/InformationDetails/:title' element={<InformationDetails/>}/>
        <Route path='/JobApply' element={<JobApply/>}/>
        <Route path='/JobDiscription/:id' element={<JobDiscription/>}/>
        <Route path='/ApplyForm' element={<ApplyForm/>}/>
        <Route path='/ApplySuccess' element={<ApplySuccess/>}/>
        <Route path='/BooksAndVideos' element={<BooksAndVideos/>}/>
        <Route path='/MoreInfoHomes' element={<MoreInfoHomes/>}/>
        <Route path='/TestCreate' element={<TestCreate/>}/>
        <Route path='/AdminInfoTypes/:title' element={<AdminInfoTypes/>}/>
        <Route path='/AdminAddJob' element={<AdminAddJob/>}/>
        <Route path='/Approvedmentors' element={<StudentRequest/>}/>
        <Route path='/MentorRequest/:id' element={<MentorRequest/>}/>
        <Route path='/mentorMaterials' element={<AddClass/>}/>
        <Route path='/mentorMaterialList/:title' element={<MaterialList/>}/>
        <Route path='/mentorMathTest' element={<MentorMathTest/>}/>
        <Route path='/loanForm' element={<Loan/>}/>
      </Routes>
    </>
  )
}

export default App
