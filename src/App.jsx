import './components/Banner/Banner.css'
import {Banner} from "./components/Banner/index.jsx";
import TextField from "./components/TextField/index.jsx";

function App() {

    return (
        <>
            <div>
                <Banner/>
                <TextField label='Name' placeholder='Type your name'/>
                <TextField label='Role' placeholder='Type your role'/>
                <TextField label='Image' placeholder='Provide the image URL'/>
                <TextField label='Team' placeholder='Type your team'/>
            </div>
        </>
    );
}


export default App
