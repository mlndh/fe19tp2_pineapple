import React, { Component } from 'react';
const API = 'https://skatteverket.entryscape.net/rowstore/dataset/fad86bf9-67e3-4d68-829c-7b9a23bc5e42/json';
//const DEFAULT_QUERY = 'redux';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hits: "",
            isLoading: false,
            error: null,
        };
    }
    componentDidMount() {
        this.setState({ isLoading: true });

        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ hits: data.results, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }
    render() {
        const { hits, isLoading, error } = this.state;
        if (error) {
            return <p>{error.message}</p>;
        }
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <ul>
                {hits && hits.map(hit =>
                    <li key={hit.objectID}>
                        <a href={hit.url}>{hit.marke} {hit.modell} {hit.tillverkningsar} Pris: {hit.nybilspris} </a>
                    </li>
                )}
            </ul>
        );
    }
}

export default App;