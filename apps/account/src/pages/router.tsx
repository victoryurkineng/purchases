import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@idme/styles';

import { Purchases } from '@idme/features-purchases';

// const basename = import.meta.env.BASE_URL || '/';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Purchases />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
