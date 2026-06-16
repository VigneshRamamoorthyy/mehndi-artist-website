import React from 'react';
import Home from './pages/Home';
import Maintenance from './pages/Maintenance';

// ─────────────────────────────────────────────────────────────
// MAINTENANCE MODE SWITCH
// Set to `true`  → visitors see the maintenance page only.
// Set to `false` → the normal website loads as usual.
// ─────────────────────────────────────────────────────────────
const maintenanceMode = true;

function App() {
  if (maintenanceMode) {
    return <Maintenance />;
  }

  return (
    <div className="min-h-screen relative">
      <Home />
    </div>
  );
}

export default App;
