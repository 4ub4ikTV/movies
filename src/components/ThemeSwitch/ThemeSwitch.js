import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

const ThemeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.documentElement.classList.remove('dark-theme');
            applyLightThemeStyles();
        } else {
            document.documentElement.classList.add('dark-theme');
            applyDarkThemeStyles();
        }
    };

    const applyDarkThemeStyles = () => {
        document.body.style.backgroundColor = '#222222';
        document.body.style.color = '#ffffff';
    };

    const applyLightThemeStyles = () => {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#333333';
    };

    return (
        <button className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`} onClick={toggleTheme}>
            {isDarkMode ?
                <FontAwesomeIcon icon={faMoon}/>
                :
                <FontAwesomeIcon icon={faSun}/>}
        </button>
    );
};

export {
    ThemeSwitch
}
