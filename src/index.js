import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import GlobalStyles from '~/components/GlobalStyles';
import { GlobalHeaderProvider } from '~/contexts/GlobalHeaderContext';
import { ThemeProvider } from '~/contexts/ThemeContext';
import AnimationStyles from '~/layouts/components/AnimationStyles';
import ElementorStyles from '~/layouts/components/ElementorStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <ThemeProvider>
                <AnimationStyles>
                    <ElementorStyles>
                        <GlobalHeaderProvider>
                            <App />
                        </GlobalHeaderProvider>
                    </ElementorStyles>
                </AnimationStyles>
            </ThemeProvider>
        </GlobalStyles>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
