import React, {Component} from 'react';

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            height: '20px',
            width: this.width
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

export class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(25 38 183)';
        this.width = 'max-content';
    }
}

export class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(163 20 20)';
    }
}

export class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = '#c5bc63';
    }
}