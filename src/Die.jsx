

export default function Die(props) {
    const stylesFace = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    const dotStyle = {
        backgroundColor: 'black',
        borderRadius: '50%',
        width: '10px',
        height: '10px',
    }
    return (
        <div 
            className="die-face" 
            style={stylesFace}
            onClick={props.holdDice}
        >
            {props.value === 1 && <h2 style={dotStyle} className="die-one"></h2>}

            {props.value === 2 && <><h2 style={dotStyle} className="die-two-a"></h2>
                                            <h2 style={dotStyle} className="die-two-b"></h2></>}

            {props.value === 3 && <><h2 style={dotStyle} className="die-three-a"></h2>
                                            <h2 style={dotStyle} className="die-three-b"></h2>
                                                    <h2 style={dotStyle} className="die-three-c"></h2></>}

            {props.value === 4 && <><h2 style={dotStyle} className="die-four-a"></h2>
                                            <h2 style={dotStyle} className="die-four-b"></h2>
                                                    <h2 style={dotStyle} className="die-four-c"></h2>
                                                            <h2 style={dotStyle} className="die-four-d"></h2></>}

            {props.value === 5 && <><h2 style={dotStyle} className="die-five-a"></h2>
                                            <h2 style={dotStyle} className="die-five-b"></h2>
                                                    <h2 style={dotStyle} className="die-five-c"></h2>
                                                            <h2 style={dotStyle} className="die-five-d"></h2>
                                                                    <h2 style={dotStyle} className="die-five-e"></h2></>}

            {props.value === 6 && <><h2 style={dotStyle} className="die-six-a"></h2>
                                            <h2 style={dotStyle} className="die-six-b"></h2>
                                                    <h2 style={dotStyle} className="die-six-c"></h2>
                                                            <h2 style={dotStyle} className="die-six-d"></h2>
                                                                    <h2 style={dotStyle} className="die-six-e"></h2>
                                                                        <h2 style={dotStyle} className="die-six-f"></h2></>}
            
        </div>
    )
}