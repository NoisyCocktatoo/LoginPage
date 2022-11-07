import React, {useState, useEffect} from 'react'

function Login() {

    const styles = {
        forms:`flex flex-col items-center max-w-xl shadow-lg shadow-gray-500 bg-white rounded-2xl py-2.5 px-2.5 w-[720px] h-[550px] 
        tablet: max-w-[80vw] shadow-xl`,
        uiproper: `flex flex-col justify-center h-full my-2 mx-auto overflow-hidden p-7 items-center tablet: max-w-[100%] align-center`,
        header: `p-5 text-3xl`,
        fields: `flex flex-col justify-center p-5 w-[400px] tablet: flex max-w-[100%] px-1`,
        button: `bg-blue-600 text-white rounded-2xl p-2 w-[200px] tablet:text-green mt-3 tablet: rounded-2xl`,
        input: `border-2 border-gray-200 p-1 tablet: max-w-[100%]`,
        line: `rounded-2xl border-2 border-gray-300 w-[80%]`,
        error: `text-red-700 text-sm m-0 p-0`,
        success: `bg-white rounded-2xl p-4 text-xl mb-3`
    }

    const initialInputs = {username:"", email:"", password: ""}
    const [formInputs, setFormInputs] = useState(initialInputs)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormInputs({...formInputs, [name]:value});
        console.log(formInputs);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formInputs));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            setFormInputs(initialInputs);
        }
    },[formErrors])

    const validate = (values) => {
        const errors = {};
        const regex= /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
        if(!values.username) {
            errors.username = "Username is required!";
        }
        if(!values.email) {
            errors.email = "Email is required!";
        // } else if(!regex.test(values.email)){
        //     errors.email = "This is not a valid email format!"
        }
        if(!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4 ) {
            errors.password = "Password must be atleast 4 characters!";
        }
        return errors;
    };

  return (
    <>
        {Object.keys(formErrors).length === 0 && isSubmit ? (<div className={styles.success}>Login Successful!</div>) : ""}
        <form 
        className={styles.forms}
        onSubmit={handleSubmit}>
            <h1 className={styles.header}>Login Form</h1>
            <div className={styles.line}></div>
            <div className={styles.uiproper}>
                <div className={styles.fields}>
                    <label>Username</label>
                    <input 
                    type="text" 
                    placeholder='Username' 
                    name="username" 
                    value= {formInputs.username}
                    onChange={handleChange}
                    className={styles.input}/>
                </div>
                <p className={styles.error}>{formErrors.username}</p>
                <div className={styles.fields}>
                    <label>Email</label>
                    <input 
                    type="email" 
                    placeholder="Email" 
                    name="email"
                    value= {formInputs.email} 
                    onChange={handleChange}
                    className={styles.input}/>
                </div>
                <p className={styles.error}>{formErrors.email}</p>
                <div className={styles.fields}>
                    <label>Password</label>
                    <input 
                    type="password" 
                    placeholder='Password' 
                    name="password" 
                    value= {formInputs.password} 
                    onChange={handleChange}
                    className={styles.input} />
                </div>
                <p className={styles.error}>{formErrors.password}</p>
                <button className={styles.button}>Login</button>
            </div>
        </form>
    </>
  )
}

export default Login