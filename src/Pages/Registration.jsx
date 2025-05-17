import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider'; 

const Registration = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext);

    const handlesignInWithGoogle = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }

    const handleRegistration = e =>{
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        console.log(name, email, photoURL, password);
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegistration}>
                        <fieldset className="fieldset">
                        <label className="fieldset-label">Name</label>
                        <input type="text" className="input" placeholder="Name" name='name' />
                        <label className="fieldset-label">Email</label>
                        <input type="email" className="input" placeholder="Email" name='email' />
                        <label className="fieldset-label">PhotoURL </label>
                        <input type="text" className="input" placeholder="PhotoURL" name='photoURL' />
                        <label className="fieldset-label">Password</label>
                        <input type="password" className="input" placeholder="Password" name='password'/>
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Submit & Register</button>
                        </fieldset>
                    </form>
                    <button onClick={handlesignInWithGoogle} className="btn mt-2">Google Login </button>
    
                    <div className="divider"></div>
                    <p className='text-center'>
                If you have an account please <Link to="/Login">  <span className='font-semibold text-orange-500'>login</span> </Link>
                    </p>
                </div>
                </div> 

                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Registration</h1>
                <p className="py-6">
                You also agree to our use of cookies and other technologies that monitor your use of the Site.Your interactions on the Site may be recorded or monitored by us or a third party with which we work.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;