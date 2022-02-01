import React from 'react'
import Menu from './Menu'
import './Contactus.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Search from './Search';
function Contactus(props) {
    if (props.loginIs === false) {
        console.log("inside");
        return <Redirect to="/login" />;
    }
    return (
        <div className='contactus'>
            <Menu search={props.search} setSearchTrue={props.setSearchTrue} LoginIs={props.loginIs} handleLogout={props.handleLogout}></Menu>
            {!props.search ? <div className="contactusChild">
                <div className="contactusChild1">
                    <h1>What Actually are we?</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium, saepe ducimus in aut illum fugit necessitatibus. Quo velit mollitia inventore error, iure consectetur consequuntur similique, possimus quis ipsa laudantium?
                </div>
                <div className="contactusChild1">
                    <h1>What do We Aim?</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eligendi nam molestiae corporis nisi? Enim beatae eveniet maiores a inventore doloribus, voluptate earum sit deserunt molestiae sed eos debitis reprehenderit!
                </div>
                <div className="contactusChild1">
                    <h1>Why You Should Invest Your Precious Time in us?</h1>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque nobis, doloribus impedit ad veniam, nesciunt laborum dolor rem ratione quod dolore esse nemo odio consequuntur quae corrupti iusto consectetur ab?
                </div>
                <div className="contactusChild2">
                    <h2>Contact Us</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil soluta minima veniam eos praesentium? Facere enim sit debitis animi quod reprehenderit nulla dolore recusandae commodi, minima, mollitia exercitationem eius tenetur.
                </div>
            </div> : <Search/>}
        </div>
    )
}

export default Contactus
