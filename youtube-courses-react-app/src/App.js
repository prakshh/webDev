import logo from './logo.svg';
import './App.css';
// import Header from "./components/Header";
import { Button } from 'reactstrap';
import { ToastContainer, toast} from 'react-toastify';
// import { POSITION } from 'react-toastify/dist/utils';
import 'react-toastify/dist/ReactToastify.css';
import Home from './components/Home';

function App() {

  const btnHandle = () => {
    // toast("this is my first message");
    toast.error("done", {position: 'top-center'});
  };

  return (
    <div>
      <ToastContainer />
      <Home/>
        <p>ootstrap compnoent</p>
        <Button color="warning" outine onClick={btnHandle}>
          react button 
        </Button>

    </div>
  );
}

export default App;
