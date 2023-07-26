import './BoxStyle.css'

function Box({title , link , btn }) {
    return(
        <div className='Box' >
            <div className='descbox'>
                <p>{title}</p>
                <a href="#">{link}</a>
            </div>
            <div className='btnbox'>
                <button>{btn}</button>
            </div>
        </div>
    )
}

export default Box ;