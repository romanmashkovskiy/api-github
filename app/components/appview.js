import React from 'react';
import RepositoryList from '../containers/repository-list';
import Details from '../containers/details'


const App = () => (
    <div>
        <h1 className="ui header">Repository list</h1>
        <div className="ui grid">
            <div className="column ten wide">
                <RepositoryList />
            </div>
            <div className="column six wide">
                <h3 className="ui header">Detail information</h3>
                <Details />
            </div>
        </div>
    </div>

);

export default App;