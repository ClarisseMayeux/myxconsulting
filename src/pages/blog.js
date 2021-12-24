import React from 'react'
import ArtcicleSection from '../components/Article'
import {articleOne} from '../components/Article/Data'

const Blog = () => {
    return (
        <>
            <ArtcicleSection {...articleOne}/>
        </>
    )
}

export default Blog;