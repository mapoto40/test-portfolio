import React from 'react'

const Pres = () => {
    return(
        <div className="text_intro_home">
            <div>
                <p className='Pseudo_home'>Mapoto40</p>
                <p className="gray_text">Web Developer</p>
                <p className='Slogant_text_home'>Hey there! I'm a creative web designer and developer,
                    based in France.</p>
            </div>
        </div>
    )
}

const Project = () => {
    return(
        <div className="projets_div_home">
            <div className='Div_Flex_home'>
                <div className="project1_home">
                        <span></span> <br/>
                        <center>
                            <p  className='Pseudo_home'>Projet 1</p>
                            <p className="gray_text">Name of my project</p>
                        </center>
                    </div>

                    <div className="project2_home">
                        <span></span> <br/>
                        <center>
                            <p  className='Pseudo_home'>Projet 2</p>
                            <p className="gray_text">Name of my project</p>
                        </center>
                    </div>
            </div>

            <div className="project3_home">
                    <span></span> <br/>
                    <center>
                        <p  className='Pseudo_home'>Projet 3</p>
                        <p id="id_exp" className="gray_text">Name of my project</p>
                    </center>
                </div>
        </div>
    )
}

const Home = () => {
    return(
        <div>
            <Pres/> 
            <Project/>
        </div>
    )
}

export default Home;