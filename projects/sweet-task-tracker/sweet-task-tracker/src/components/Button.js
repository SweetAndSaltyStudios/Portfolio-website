import PropTypes from 'prop-types'

const Button = ({targetGraphic, color, label, onClickEvent}) => 
{
    return (
        <button 
        style={{backgroundColor: color}} 
        onClick={onClickEvent}
        className='btn'>{label}{targetGraphic}</button>
    )
}

Button.defaultProps = 
{
    color: 'black',
    label: 'label',
    onClickEvent: () => {console.log("On click event invoked!")},
}

Button.propTypes = 
{
    targetGraphic: PropTypes.string,
    color: PropTypes.string,
    label: PropTypes.string,
    onClickEvent: PropTypes.func,
}

export default Button
