import './MidPageComponents.css'

function MidPageComponents({Fphoto , secTitle , firstTitle , reverse}) {
    return(
        <section className={(reverse) ? "reverseCompo" : "sectionMidPage"} >
            <div className='title'>
                <div>
                <h2>{firstTitle}</h2>
                <p>{secTitle}</p>
                </div>
            </div>
            <div className='photo' >
                <img src={Fphoto} alt="" />
            </div>
        </section>
    )
}

export default MidPageComponents;