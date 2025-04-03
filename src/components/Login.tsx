'use client'

import {useFormik} from 'formik';
import Checkbox from "@/components/icons/Checkbox";
import CheckedBox from "@/components/icons/CheckedBox";



const Login = () => {

    const formik = useFormik<{
        username: string,
        password: string
        remember: boolean
    }>({
        initialValues: {
            username: '',
            password: '',
            remember: false
        },
        validate: (values) => {
            const errors: {
                username?: string
                password?: string
            } = {}

            if(!values.username) {
                errors.username = '아이디를 입력해주세요.'
            }

            if(!values.password) {
                errors.password = '비밀번호를 입력해주세요.'
            }

            return errors

        },
        onSubmit: async (values, { resetForm }) => {
            console.log('Clicked')
            console.log('로그인 정보', values)
            const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth`, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            // const data = await result.json();
            // resetForm()
        }
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit} >
                <fieldset>
                    <legend className='text-4xl font-semibold block pb-8'>Login</legend>
                    <div className='pb-8'>
                        <input
                            id='username'
                            name='username'
                            type='text'
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className='ipt px-[28px] min-h-12 rounded-[10px] !bg-formColor &::placeholder font-bold focus:border-brandcolor focus:border-[1px] focus:border-solid'
                            autoComplete='new-email'
                            placeholder='ID'
                        />
                        { formik.errors.username && formik.touched.username ? <div className='notice error pl-4 pt-1'>{formik.errors.username}</div> : null }
                    </div>
                    <div className='pb-8'>
                        <input
                            id='myPassword'
                            name='password'
                            type='password'
                            placeholder='Password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            autoComplete='new-password'
                            className='ipt px-[28px] min-h-12 rounded-[10px] !bg-formColor &::placeholder font-bold focus:border-brandcolor focus:border-[1px] focus:border-solid'
                        />
                        { formik.errors.password && formik.touched.password ? <div className='notice error pl-4 pt-1'>{formik.errors.password}</div> : null }
                    </div>
                    <div className='pb-8'>
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
                        <button
                            type='submit'
                            className='rounded-[10px] bg-grey900 px-[35px] text-white min-h-16 font-bold'
                        >LOGIN</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
};

export default Login;