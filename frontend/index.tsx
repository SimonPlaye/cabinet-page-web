import {BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { MainPage } from 'pages/MainPage';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Router>
        <MainPage />
    </Router>
);