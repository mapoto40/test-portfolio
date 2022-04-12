import React from "react"

const Experience = () =>{
    return (
        <div className="text_exp_contact">
            <div className="Div_center_contact">
                <h2>My experience</h2> <br/>
                <p className="gray_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique. 
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p> <br/><br/>

                <div className="Div_Flex_contact">
                    <div className="Responsive_1_contact">
                        <div className="Responsive_2_contact">
                            <div className="Responsive_3_contact">
                                    <div className="content_div_exp_contact">
                                        <h2>HTML/CSS</h2>
                                        <p className="gray_text">for website</p>
                                    </div>
                                
                                    <div className="content_div_exp_contact">
                                        <h2>JavaScript</h2>
                                        <p className="gray_text">for website interaction</p>
                                    </div>
                            </div>

                            <div className="content_div_exp_contact">
                                <h2>PHP</h2>
                                <p className="gray_text">for connection with data base</p>
                            </div>
                        </div>
                            <div className="content_div_exp_contact">
                                <h2>Node.js</h2>
                                <p className="gray_text">for better websites</p>
                            </div>
                    </div>

                    <div className="content_div_exp_contact">
                        <h2>React.js</h2>
                        <p className="gray_text">for more complete sites</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Form = () =>{
    return (
        <div className="background_form_contact">
            <div className="separation_content_form_contact">
                <div className="width_form_contact">
                    <h2>Want to get in touch with me? <br/> You can drop me a line !</h2>
                    <p className="gray_text">If you prefer to contact me on discord my name is: le criquet#3627</p>
                    
                        <div className="Div_Flex_form_contact">
                            <div>
                                <label>NAME</label> <br/>
                                <input className="input1_name_form_contact" placeholder="Enter your name"/>
                            </div>

                            <div>
                                <label>EMAIL ADDRESS</label> <br/>
                                <input className="input1_name_form_contact" placeholder="Enter your email"/>
                            </div>
                        </div> 

                    <div className="padding_form_contact">
                        <label>EMAIL ADDRESS</label> <br/>
                        <textarea className="textarea2_name_form_contact" placeholder="Enter your email"/>
                    </div>
                        
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div>
            <Experience/>
            <Form/>
        </div>
    )
}

export default Contact;