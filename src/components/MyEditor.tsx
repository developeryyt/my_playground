'use client'
import dynamic from "next/dynamic";
import 'react-quill-new/dist/quill.snow.css';

const LazyQuill = dynamic(() => import('react-quill-new'), {
    ssr: false,
    loading: () => <p>Loading...</p>
})


const MyEditor = () => {

    return <LazyQuill theme='snow' />
};

export default MyEditor;