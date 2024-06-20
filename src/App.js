import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import List from "./pages/List"
import ListDetail from "./pages/ListDetail"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import ProtectedRoute from "./components/ProtectedRoute"
import ErrorPage from "./pages/ErrorPage"

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Navigate to="/dashboard" />, // Redirect to dashboard or login based on auth state
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		element: <ProtectedRoute />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/list",
				element: <List />,
			},
			{
				path: "/list/details",
				element: <ListDetail />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
		],
	},
])
function App() {
	return <RouterProvider router={routes}></RouterProvider>
}

export default App
