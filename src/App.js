import cx from 'classnames';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import publicRoutes from '~/routes';
import { useThemeContext } from './contexts/ThemeContext';

function App() {
    const { isLightTheme, setIsLightTheme } = useThemeContext();

    return (
        <Router>
            <div className={cx('App', isLightTheme ? 'light' : 'dark')}>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Component = route.component;

                        return <Route key={index} path={route.path} element={<Component />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
