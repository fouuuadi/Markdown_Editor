//import des différentes pages
import Acceuil from '../page/Acceuil'
import UpdateMarkdown from '../page/UpdateMarkdown'
//import des différents mots clee de react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter,
  // Routes,
  // Route,
  // Link,
  // Navigate,
  // Outlet,
  // useParams,
  // useNavigate,
  // useLocation
} from "react-router-dom";



function MarkdownEditorRouter() {

    const router = createBrowserRouter ([
        {
          path: "/",
          element : <Acceuil/>,
          // children: [
          //   { path: "UpdateMarkdown", element: <UpdateMarkdown/>}
          // ],
        },
        { 
          path: "/UpdateMarkdown", 
          element: <UpdateMarkdown /> 
        }, 

      ]);

//render
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default MarkdownEditorRouter
