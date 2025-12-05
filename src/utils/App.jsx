import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { RestaurantProvider } from './context/RestaurantContext';
import Layout from './components/layout/Layout';
import About from './pages/About';
import TopRestaurants from './pages/TopRestaurants';
import RecommendForm from './pages/RecommendForm';

/**
 * Main application component with routing configuration
 */
function App() {
  return (
    <BrowserRouter>
      <RestaurantProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/top-10" element={<TopRestaurants />} />
            <Route path="/recommend" element={<RecommendForm />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </RestaurantProvider>
    </BrowserRouter>
  );
}

export default App;