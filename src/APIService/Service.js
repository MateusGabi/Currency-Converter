import {Component} from 'react';

class Service extends Component {

    /**
     * return a Promise within API info
     */
    static getLatest() : Promise<any> {        
        return fetch("http://mgm-currency-converter.herokuapp.com/").then(result => result.json());
    }

    static convert(value: number, from: string, to: string) : Promise<number> {
        return fetch("http://mgm-currency-converter.herokuapp.com/go?value="+ value +"&from="+ from +"&to="+ to).then(result => result.json());
    }

}

export default Service;