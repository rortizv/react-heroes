import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {

  const navigate = useNavigate();

  const onLogin = () => {
    navigate('/', { replace: true });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <form>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="
            Enter email"
          />
        </div>
        <button className="btn btn-primary" onClick={onLogin}>Login</button>
      </form>
    </div>
  )
}
