import React from "react";
import '../css/WelcomeScreen.css';
import { ModalFooter } from "react-bootstrap";

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
    <div className="WelcomeScreen">
        <h1>Welcome to LetsMeet</h1>

        <h4>
            Log in to see upcoming events around the world for
            full-stack
            developers
        </h4>

        <div className="button_cont" align="center">
            <div className="google-btn">
                <button onClick={() => { props.getAccessToken() }}
                rel="nofollow noopener"
                className="btn-text"
                >
                    <img
                    className="google-icon"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google sign-in"
                    />

                    <b>Sign in with google</b>
                </button>
            </div>
        </div>

        <div className="createGoogleAccount">
            <p>You don´t have a Google account, but want to create one?<br></br>
            Then feel free to create an account over 
            <a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp">here!</a>
            </p>
            
        </div>
        <div className="privacyPolice">
        <a 
            href="https://Tina2010.github.io/meet/privacy.html"
            rel="nofollow noopener"
            style={{textDecoration: 'none'}}
            >
            Privacy policy
        </a>
        </div>
        <ModalFooter className="mt-1" style={{justifyContent: 'center'}}>
          <p style={{color: 'white'}}>Feel free to visit my Portfolio:</p>
          <a href="https://portfolio-tr.000webhostapp.com/" rel="noreferrer" style={{textDecoration: 'none'}} target="_blank">portfolio-tr.000webhostapp.com</a>
          </ModalFooter>
    </div>
    )
    : null
}

export default WelcomeScreen;