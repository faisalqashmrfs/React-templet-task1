import { useState } from 'react';
import './FooterStyle.css'

function Footer() {

    const [logo] = useState("Starter")
    const [logoicon] = useState("fa-solid fa-blog")
    const [lastrow] = useState("@ Copyright 2021 Nextjs Starter. Powered With")
    const [company] = useState("CreativeDesignsGuru")
    const [Home] = useState("Home")
    const [About] = useState("About")
    const [Docs] = useState("Docs")
    const [GitHub] = useState("GitHub")
    const [GitHubicon] = useState("fa-brands fa-github")
    const [facebookicon] = useState("fa-brands fa-facebook")
    const [twittericon] = useState("fa-brands fa-twitter")
    const [youtubeicon] = useState("fa-brands fa-youtube")
    const [linkedinicon] = useState("fa-brands fa-linkedin")
    const [aticon] = useState("fa-solid fa-at")
    const [rssicon] = useState("fa-solid fa-rss")
    const [hearticon] = useState("fa-solid fa-heart")
    return(
        <footer className='footer'>
            <div className='row1'>
                <a href="#"><i class={logoicon}></i></a>
                <h2>{logo}</h2>
            </div>
            <div className='row2'>
                <a href="#">{Home}</a>
                <a href="#">{About}</a>
                <a href="#">{Docs}</a>
                <a href="#">{GitHub}</a>
            </div>
            <div className='row3'>
                <a href="#"><i class={GitHubicon}></i></a>
                <a href="#"><i class={facebookicon}></i></a>
                <a href="#"><i class={twittericon}></i></a>
                <a href="#"><i class={youtubeicon}></i></a>
                <a href="#"><i class={linkedinicon}></i></a>
                <a href="#"><i class={aticon}></i></a>
                <a href="#"><i class={rssicon}></i></a>
            </div>
            <p>
                {lastrow} <a href=""><i class={hearticon}></i></a> By
                <span>
                    {company}
                </span>
            </p>
        </footer>
    )
}

export default Footer ;