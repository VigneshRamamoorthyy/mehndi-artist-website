import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen relative">
      <Home />
      <Analytics />
    </div>
  );
}

export default App;
