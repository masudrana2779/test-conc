import React, {Component} from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className={'aboutPageWrap'}>
<p>About</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <i className="fa fa-facebook"></i></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default About;