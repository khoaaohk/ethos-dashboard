import { useState } from 'react'
import EducationDashboard from './EducationDashboard'
import './App.css'

function App() {
  const [flow, setFlow] = useState(null);

  if (!flow) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <button
            onClick={() => setFlow('new')}
            className="px-8 py-3 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors w-52"
          >
            New User Flow
          </button>
          <button
            onClick={() => setFlow('returning')}
            className="px-8 py-3 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-52"
          >
            Returning User Flow
          </button>
        </div>
      </div>
    );
  }

  return <EducationDashboard initialFlow={flow} />;
}

export default App
