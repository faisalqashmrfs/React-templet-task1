import './Midpage.css';
import MidPageComponents from './MidPageComponents/MidPageComponents';
import Box from './MidPageComponents/Box';
import Fphoto1 from './../../assets/img/REACT3.png'
import Fphoto2 from './../../assets/img/REACT4.png'
import Fphoto3 from './../../assets/img/REACT5.png'
import { useState } from 'react';


function MidPage() {
    const [firstTitle] = useState("Your title here")
    const [secTitle] = useState("Lorem ipsum dolor sit amet elit. consectetur expedita et, aliquam assumenda ut reiciendis. Omnis repudiandae tempore consequatur odio nihil?")
    return(
        <div className='MidPage'>
            <div className='titleMidpage'>
                <h1>{firstTitle}</h1>
                <p>{secTitle}</p>
            </div>
            <MidPageComponents Fphoto = {Fphoto1} firstTitle = {firstTitle} secTitle = {secTitle} />
            <MidPageComponents Fphoto = {Fphoto2} firstTitle = {firstTitle} secTitle = {secTitle} reverse = {true}/>
            <MidPageComponents Fphoto = {Fphoto3} firstTitle = {firstTitle} secTitle = {secTitle} />
            <Box title = {"Lorem ipsum dolor sit, amet consectetur adipisicing elit."} link = {"Start Your Free Trial."} btn = {"Get started"} />
        </div>
    )
}
export default MidPage ;