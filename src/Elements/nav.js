import React from 'react';

const Navbar = () => {
    const change = (e) => {
        document.querySelectorAll('.test > a').forEach(el => el.classList.add('Not_Here'));
        e.target.classList.remove('Not_Here');
    };

    return (
        <div>
            <div className="test">
                <a onClick={change}>HOME</a>
                <a onClick={change} className="Not_Here" href="#id_exp">EXPERIENCE</a>
                <a onClick={change} className="Not_Here">ABOUT</a>
                <a onClick={change} className="Not_Here">EXAMPLE</a>
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
