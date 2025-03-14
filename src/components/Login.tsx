'use client'
import {useFormik} from 'formik';

const Login = () => {

    const formik = useFormik<{
        email: string,
        password: string
        remember: boolean
    }>({
        initialValues: {
            email: '',
            password: '',
            remember: false
        },
        validate: values => {
            const errors = {}
        },
        onSubmit: (values) => {
            console.log('로그인 정보', { values })

        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} autoComplete='off'>
                <fieldset>
                    <legend className='text-4xl font-semibold block pb-8'>Login</legend>
                    <div className='pb-8'>
                        <input
                            id='myEmail'
                            name='email'
                            type='email'
                            placeholder='Email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className='ipt min-h-12 !bg-grey700'
                        />
                    </div>
                    <div>
                        <input
                            id='myPassword'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            className='ipt min-h-12 !bg-red-200'
                        />
                    </div>
                    <div>
                        <label htmlFor='rememberme'>
                            <input
                                id='rememberme'
                                name='remember'
                                type='checkbox'
                                checked={formik.values.remember}
                                onChange={formik.handleChange}
                            />
                            <span>Remember me</span>
                        </label>
                    </div>
                    <div>
                        <button type='submit'>LOGIN</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default Login;