import ReactDom from 'react-dom';
import {
  HashRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { App } from './App';

ReactDom.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/help" element={<h1>Help</h1>} />
        <Route path="/chat" element={<h1>Chat</h1>} />
        <Route path="/sportsbook" element={<h1>Sports Book</h1>} />
        <Route path="/e-sports" element={<h1>E-Sports</h1>} />
        <Route path="/virtual-sports" element={<h1>Virtual Sports</h1>} />
        <Route path="/4d" element={<h1>4D</h1>} />
        <Route path="/casino" element={<h1>Casino</h1>} />
        <Route path="games" element={<h1>Games</h1>} />
        <Route path="keno" element={<h1>Promotions</h1>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);
