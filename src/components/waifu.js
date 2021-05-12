import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchWaifu } from '../actions/waifuAction';
import '../App.css';

const Waifu = (props) => {
    const { pic, isFetching, error, dispatch } = props;

    useEffect(() => {
        dispatch(fetchWaifu());
    }, []);

    const handleClick = () => {
        dispatch(fetchWaifu());
    }

    if (error) {
        return <h2>We have an error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Getting doggo!</h2>
    }

    return (
    <div className='container'>
        <h1>Welcome to Random Dog Pics! Click for a new doggo!</h1>
        <img src={pic} alt='doggo'/>
        <button onClick={handleClick}>Click!~</button>
    </div>)
}

const mapStateToProps = state => {
    return {
        pic: state.pic,
        isFetching: state.isFetching,
        error: state.error,
    }
}

export default connect(mapStateToProps)(Waifu);