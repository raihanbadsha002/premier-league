import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import male from  '../../images/male.png';
import female from '../../images/female.png';

import './LeagueDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlagCheckered, faFutbol, faPodcast, faVenusMars,  faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const LeagueDetails = () => {
    const { idLeague } = useParams();

    const [details, setDetails] = useState([]);
    const{ strLeague, dateFirstEvent, strCountry, strGender, strSport, strDescriptionEN, strDescriptionES, strFacebook, strTwitter, strYoutube, strLogo} = details;

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    }, [idLeague])
    return (
        <div>
        <div className="container-fluid details__banner d-flex justify-content-center align-items-center">
          <div className="details__log d-flex justify-content-center ">
             <img className="img-fluid" img="true" src={strLogo} alt=""/>
          </div>          
        </div>
         <div className="container my-5">
            <div className="row bg-primary details__div p-4">
              <div className="col-md-6 text-white mt-4">
                 <h2 className="mb-4">{strLeague}</h2>
                 <p><FontAwesomeIcon className="mr-2" icon={faPodcast}/> Founded: <span>{dateFirstEvent}</span> </p>
                 <p><FontAwesomeIcon className="mr-2" icon={faFlagCheckered}/>Country: <span>{strCountry}</span> </p>
                 <p><FontAwesomeIcon className="mr-2" icon={faFutbol}/>Sport Type: <span>{strSport}</span></p>
                 <p><FontAwesomeIcon className="mr-2" icon={faVenusMars}/>Gender: <span>{strGender}</span></p>
              </div>
              <div className="col-md-6">
                {strGender && (strGender === 'Male'? <img className="img-fluid" src={male} alt=""/> : <img className="img-fluid" src={female} alt=""/>)  }
              </div>
            </div>
            <div className="row description mt-5">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionES}</p>
            </div>
            <div className="row   mt-5">
              <div>
                 <Link to="/" className="btn btn-info"><FontAwesomeIcon icon={faLongArrowAltLeft}/>  Back to home</Link>
              </div>
              <div className="social d-flex justify-content-center mt-3">
                <a href={`https://${strTwitter}`} className="twitter__link" target="_blank" rel="noreferrer"><FontAwesomeIcon className=" twitter__icon" icon={faTwitter}/></a>
                <a href={`https://${strFacebook}`} className="facebook__link" target="_blank" rel="noreferrer"><FontAwesomeIcon className=" facebook__icon" icon={faFacebookF}/></a>
                <a href={`https://${strYoutube}`} className="youtube__link" target="_blank" rel="noreferrer"><FontAwesomeIcon className=" youtube__icon" icon={faYoutube}/></a>
              </div>
            </div>
          </div>
        </div>      
       
    );
};

export default LeagueDetails;