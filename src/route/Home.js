import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Home/Header';
import Main from '../components/Home/Main';
import '../assets/style/Home/main.css';
import '../assets/style/Home/job.css';

function Home(){
    return (
        <>
            <Header />
            <Main />
        </>
    );
};
export default Home;