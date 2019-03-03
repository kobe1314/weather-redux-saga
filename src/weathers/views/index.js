import React, { PureComponent } from 'react';
import ViewContainer from './viewContainer';
import CitySelector from './citySelectorContainer';

class Index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <CitySelector/>
                <ViewContainer/>
            </div>
        );
    }
}

export default Index;