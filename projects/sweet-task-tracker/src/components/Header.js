import PropTypes from 'prop-types'

import Button from './Button.js'

const Header = ({ title, onFormToggle, showTaskForm}) => 
{
    console.log(showTaskForm);
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showTaskForm ? 'grey' : 'green'} 
            label={showTaskForm ? 'Close' : 'New'}
            onClickEvent = {onFormToggle}>
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
