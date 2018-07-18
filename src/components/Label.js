import React from 'react'

const LabelStyle = {
    fontSize: '5vw',
    color: '#a0e8a0'
}

const Label = props => <div id={props.id} style={LabelStyle} >{props.text}</div>

export default Label;
