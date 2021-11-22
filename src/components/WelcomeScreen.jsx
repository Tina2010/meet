import React from "react";
import '../css/WelcomeScreen.css';

function WelcomeScreen(props) {
    return props.showWelcomeScreen ?
    (
    <div className="WelcomeScreen">
        <h1>Welcome to the Meet app</h1>

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
        <a
            href="https://Tina2010.github.io/meet/privacy.html"
            rel="nofollow noopener"
            style={{textDecoration: 'none'}}
            >
            Privacy policy
        </a>
    </div>
    )
    : null
}

export default WelcomeScreen;