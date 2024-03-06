import { RouteObject } from 'react-router-dom';
import Login from './login';
import ForgotPassord from './forgot-password';
import ResetPassword from './reset-password';

function AuthRouter() {
  return [
    {
      children: [
        {
          path: '',
          element: <Login />,
        },
        {
          path: 'forgot-password',
          element: <ForgotPassord />,
        },
        {
          path: 'reset-password/:token',
          element: <ResetPassword />,
        },
      ],
    },
  ] as RouteObject[];
}

export default AuthRouter;
