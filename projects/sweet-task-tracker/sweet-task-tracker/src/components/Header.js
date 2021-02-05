import PropTypes from 'prop-types'

import Button from './Button.js'

function onClick()
{
    console.log("New task");
}

const Header = ({ title }) => 
{
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color='green' 
            label='New' 
            onClickEvent = {onClick}>
            </Button>
        </header>
    )
}

Header.defaultProps = 
{
    title: 'Header',
}

Header.propTypes = 
{
    title: PropTypes.string.isRequired,
}

export default Header
