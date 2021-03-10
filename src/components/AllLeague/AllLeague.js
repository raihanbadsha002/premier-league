import React, { useEffect, useState } from 'react';
import './AllLeague.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory} from 'react-router';

const AllLeague = (props) => {
    const{idLeague, strLeague, strSport} = props.league;
    const history = useHistory();

    const [details, setDetails] = useState([]);
    const{ strLogo } = details;
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    }, [idLeague])


    return (
        <div className="col-lg-4 col-md-6">
            <div className="card p-4 text-center mb-4 ">
            <div className="d-flex justify-content-center">
                <img className="img-fluid" src={strLogo} alt=""/>
            </div>
                <h4>{strLeague}</h4>
                <p className="">Sports type: {strSport}</p>
                <div className="">
                    <button onClick={() => history.push(`/details/${idLeague}`)} className="btn btn-primary">Explore <FontAwesomeIcon icon={faLongArrowAltRight}/></button>
                </div>
                
            </div>
        </div>

    );
};

export default AllLeague;