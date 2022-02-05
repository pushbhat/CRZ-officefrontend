import {FileUploader} from './components/FileUploader';
import  './App.css';
import {ToastContainer} from'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <FileUploader/>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
