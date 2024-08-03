import CardModal from '../components/CardModal.jsx';
import SwitchLabels from '../components/toggles/SwitchButton.jsx';
import MultipleSelectChip from '../components/MultipleSelectChip.jsx';
import NativeSelect from '../components/NativeSelectDemo.jsx';
import StepSlider from '../components/slider/StepSlider.jsx';
import DistanceSlider from '../components/slider/DistanceSlider.jsx';
import Form from '../components/Form.jsx';
import ClickToggle from '../components/toggles/ClickToggle.jsx';
import TikToggle from '../components/toggles/TikToggle.jsx';
import LetterAvatar from '../components/LetterAvatar.jsx';
import SettingIcon from '../components/icons/SettingIcon.jsx';
import ListToggle from '../components/toggles/ListToggle.jsx';
import Alerts from '../components/alerts/Alerts.jsx';
import StateSelection from '../components/StateSelection.jsx';
import AccordionTxt from '../components/AccordionTxt.jsx';
import './Home.css'

const Home = () => {

    return (
        <>
        <div>
            <button>
                sign in
            </button>
        </div>

        <div className="home-wraper">
            <h1> This is my website</h1>

        </div>
        <CardModal/>
        <SwitchLabels/>
        <MultipleSelectChip/>
        <NativeSelect/>
        <StepSlider/>
        <DistanceSlider/>
        <Form/>
        <ClickToggle/>
        <TikToggle/>
        <LetterAvatar/>
        <SettingIcon/>
        <ListToggle/>
        <Alerts/>
        <StateSelection/>
        <AccordionTxt/>

        </>
    )


}


export default Home;
