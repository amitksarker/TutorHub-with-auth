// import { useContext } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthProvider';
// import axios from 'axios';

// const Login = () => {

//     const {signInUser, signInWithGoogle} = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     console.log('in LogIn page',location);
//     const from = location.state || '/';

//     const handlesignInWithGoogle = () =>{
//         signInWithGoogle()
//         .then(result => {
//             const email = result.user.email;
//             console.log('sign in',email);
//             const user = { email: email };
//             axios.post('https://tutor-hub-server-xi.vercel.app/jwt', user, {
//                 withCredentials: true 
//             })
//             .then(data =>{
//                 console.log(data)
//             })
//             navigate(from);
//         })
//         .catch(error => {
//             console.log(error.message)
//         })
//     }

//     const handlelogin = e =>{
//         e.preventDefault();

//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         console.log( email, password);

//         signInUser(email, password)
//         .then(result => {
//             // const email = result.user.email;
//             // console.log('sign in',email);
//             const user = { email: result.user.email };
//             console.log('sign in',user);
//             axios.post('https://tutor-hub-server-xi.vercel.app/jwt', user, {
//                 withCredentials:true
//             })
//             .then(res =>{
//                 console.log(res.data)
//             })
//         navigate(from);
//         })
//         .catch(error =>{
//             console.log(error);
//         })
        
//     }
//     return (
//         <div className="hero bg-base-200 min-h-screen">
//             <div className="hero-content flex-col lg:flex-row-reverse">
//                 <div className="text-center lg:text-left">
//                 <h1 className="text-5xl font-bold">Login now!</h1>
//                 <p className="py-6">
//                 LoginNow allows students to develop their communication skills using easy-to-follow tasks and instructions, real-life situations, and real-world topics.
//                 </p>
//                 </div>
//                 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
//                 <div className="card-body">
//                     <form onSubmit={handlelogin}> 
//                         <fieldset className="fieldset">
//                         <label className="fieldset-label">Email</label>
//                         <input type="email" className="input" placeholder="Email" name='email'/>
//                         <label className="fieldset-label">Password</label>
//                         <input type="password" className="input" placeholder="Password" name='password' />
//                         <div><a className="link link-hover">Forgot password?</a></div>
//                         <button className="btn btn-neutral mt-4">Login</button>
//                         </fieldset>
//                     </form>
//                     <button onClick={handlesignInWithGoogle} className="btn mt-2">Google Login </button>
//                     <div className="divider"></div>
//                     <p className='text-center'>
//                     If you don't have an account please <Link to="/Registration"> <span className='font-semibold text-orange-400'>Registration</span> </Link> 
//                     </p>
//                 </div>
                
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;


import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import axios from 'axios';

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || '/';

  const handlesignInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      const email = result.user.email;

      const user = { email };
      await axios.post('https://tutor-hub-server-xi.vercel.app/jwt', user, {
        withCredentials: true,
      });

      localStorage.setItem('email', email); // ✅ Store email for later use

      navigate(from);
    } catch (error) {
      console.error('Google Sign In Error:', error.message);
    }
  };

  const handlelogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const result = await signInUser(email, password);
      const user = { email: result.user.email };

      await axios.post('https://tutor-hub-server-xi.vercel.app/jwt', user, {
        withCredentials: true,
      });

      localStorage.setItem('email', email); // ✅ Store email

      navigate(from);
    } catch (error) {
      console.error('Email/Password Sign In Error:', error.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            LoginNow allows students to develop their communication skills using easy-to-follow tasks and instructions, real-life situations, and real-world topics.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handlelogin}>
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" name="email" required />
                <label className="fieldset-label">Password</label>
                <input type="password" className="input" placeholder="Password" name="password" required />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            <button onClick={handlesignInWithGoogle} className="btn mt-2">Google Login</button>
            <div className="divider"></div>
            <p className="text-center">
              If you don't have an account please <Link to="/Registration"><span className="font-semibold text-orange-400">Register</span></Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
