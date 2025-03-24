'use client'

import {useFormik} from 'formik';
import Checkbox from "@/components/icons/Checkbox";
import CheckedBox from "@/components/icons/CheckedBox";

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
            <form onSubmit={formik.handleSubmit} >
                <fieldset>
                    <legend className='text-4xl font-semibold block pb-8'>Login</legend>
                    <div className='pb-8'>
                        <input
                            id='myEmail'
                            name='email'
                            type='email'
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className='ipt px-[28px] min-h-12 rounded-[10px] !bg-formColor &::placeholder font-bold focus:border-brandcolor focus:border-[1px] focus:border-solid'
                            autoComplete='new-email'
                            placeholder='Username or Email'
                        />
                    </div>
                    <div className='pb-8'>
                        <input
                            id='myPassword'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            className='ipt px-[28px] min-h-12 rounded-[10px] !bg-formColor &::placeholder font-bold focus:border-brandcolor focus:border-[1px] focus:border-solid'
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
                                className='hidden'
                            />
                            <span className='inline-block align-middle pr-2'>
                                {formik.values.remember ? <CheckedBox /> : <Checkbox/>}
                            </span>
                            <span className='inline-block align-middle text-grey400 text-[14px] font-semibold'>Remember me</span>
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