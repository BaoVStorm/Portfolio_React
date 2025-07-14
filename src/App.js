import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalHeaderProvider, useGlobalHeaderContext } from '~/contexts/GlobalHeaderContext';
import { ThemeProvider, useThemeContext } from '~/contexts/ThemeContext';
import AnimationStyles from '~/layouts/components/AnimationStyles';
import ElementorStyles from '~/layouts/components/ElementorStyles';

import publicRoutes from '~/routes';

function App() {
    return (
        <ThemeProvider>
            <AnimationStyles>
                <ElementorStyles>
                    <GlobalHeaderProvider>
                        <Router>
                            <div className="App">
                                <Routes>
                                    {publicRoutes.map((route, index) => {
                                        const Component = route.component;

                                        return <Route key={index} path={route.path} element={<Component />} />;
                                    })}
                                </Routes>
                            </div>
                        </Router>
                    </GlobalHeaderProvider>
                </ElementorStyles>
            </AnimationStyles>
        </ThemeProvider>
    );
}

export default App;
