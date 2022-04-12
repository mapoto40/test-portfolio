/*
import React from 'react';

const Navbar = () => {
    const change1 = (e) => {
        document.querySelectorAll('#navi').forEach(element => element.classList.add('Not_Here'))
        e.target.classList.remove('Not_Here')

        document.getElementById('page').forEach(element => element.classList.add('none'))
        document.getElementById('homepage').forEach(element => element.classList.remove('none'))
    }
    const change3 = (e) => {
        document.querySelectorAll('#navi').forEach(element => element.classList.add('Not_Here'))
        e.target.classList.remove('Not_Here')

        
        document.querySelectorAll('#page').forEach(element => element.classList.add('none'))
        document.querySelectorAll('#aboutpage').forEach(element => element.classList.remove('none'))
    }
    const change4 = (e) => {
        document.querySelectorAll('#navi').forEach(element => element.classList.add('Not_Here'))
        e.target.classList.remove('Not_Here')
        
        document.querySelectorAll('#page').forEach(element => element.classList.add('none'))
        document.querySelectorAll('#examplepage').forEach(element => element.classList.remove('none'))
    }

    return (
        <div>
            <div className="test">
                <a onClick={change1} id="navi">HOME</a>
                <a onClick={change1} id="navi" className="Not_Here" href="#id_exp">EXPERIENCE</a>
                <a onClick={change3} id="navi" className="Not_Here">ABOUT</a>
                <a onClick={change4} id="navi" className="Not_Here">EXAMPLE</a>
            </div>

            <div className="Div_Logo">
                <div>
                    <h1 className="title_logo">Mapoto portfolio</h1>
                    <span className="sur_title_logo"></span>
                </div>
            </div>
        </div>
    );
};
*/
import React from 'react';

const Navbar = () => {
    const change = (e) => {
        document.querySelectorAll('#navi').forEach(element => element.classList.add('Not_Here'));
        e.target.classList.remove('Not_here');

        document.querySelectorAll('#page').forEach(element => element.classList.add('none'));

        switch (this.state.data-id) {
            case 1:
                document.querySelector('#homepage').classList.remove('none');
                break;

            case 2:
                document.querySelector('#aboutpage').classList.remove('none');
                break;

            case 3:
                document.querySelector('#examplepage').classList.remove('none');
                break;

            default: break;
        }
    };

    return (
        <div>
            <div className="test">
                <a onClick={change} data-id={1} id="navi">HOME</a>
                <a onClick={change} id="navi" className="Not_Here" href="#id_exp">EXPERIENCE</a>
                <a onClick={change} data-id={2} id="navi" className="Not_Here">ABOUT</a>
                <a onClick={change} data-id={3} id="navi" className="Not_Here">EXAMPLE</a>
            </div>

            <div className="Div_Logo">
                <div>
                    <h1 className="title_logo">Mapoto portfolio</h1>
                    <span className="sur_title_logo"></span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
/*
class Navbar extends React.Component{
    
    change(e){
        document.querySelectorAll('#navi').forEach(element => element.classList.add('Not_Here'))
        e.target.classList.remove('Not_Here')
        console.log(this.state.s)

        document.querySelectorAll('#page').forEach(element => element.classList.add('none'))
        if(this.state.s == 1){
            document.getElementById('homepage').classList.remove('none');
        }
        else if(this.state.s == 2){
            document.getElementById('aboutpage').classList.remove('none');
        }
        else if(this.state.s == 3){
            document.getElementById('examplepage').classList.remove('none');
        }
        else{
            console.log('error')
        }
    };

    render(){
        return <div>
                    <div className="test">
                        <a onClick={this.change.bind(this)} id="navi">HOME</a>
                        <a onClick={this.change.bind(this)} id="navi" className="Not_Here" href="#id_exp">EXPERIENCE</a>
                        <a onClick={this.change.bind(this)} id="navi" className="Not_Here">ABOUT</a>
                        <a onClick={this.change.bind(this)} id="navi" className="Not_Here">EXAMPLE</a>
                    </div>

                    <div className="Div_Logo">
                        <div>
                            <h1 className="title_logo">Mapoto portfolio</h1>
                            <span className="sur_title_logo"></span>
                        </div>
                    </div>
                </div>
    }
}

export default Navbar;
*/
