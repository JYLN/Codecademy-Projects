import Root from './components/root';
import PetDetailsPage from './pages/detail';
import HomePage from './pages/home';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import SearchPage from './pages/search';

// Add react-router-dom imports
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

// create router with JSX Route elements
const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path=':type' element={<HomePage />} />
      <Route path=':type/:id' element={<PetDetailsPage />} />
      <Route path='search' element={<SearchPage />} />
      <Route path='pet-details-not-found' element={<PetDetailsNotFound />} />
    </Route>
  )
);

function App() {
  return (
    // replace below with a Router Provider
    <RouterProvider router={appRouter} />
  );
}

export default App;
