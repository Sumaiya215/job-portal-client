import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";


const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user);
        })
        .catch(error =>{
            console.log(error.message);
        })
    }

    return (
        <div className=" text-center">
             <div className="divider my-3 mx-8" >OR</div>
            <button  onClick={handleGoogleSignIn} className="btn mt-4 mb-8">Google</button>
        </div>
    );
};

export default SocialLogin;