import React from 'react'
import Profile from '../components/Apropos/profile.js'
import Infos from '../components/Apropos/infos.js'
import Competences from '../components/Apropos/competences.js'
import Experiences from '../components/Apropos/experiences.js'

const Blog = () => {
    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='col s12 m4 l3'>
                        <Profile />
                    </div>
                    <div className='col s12 m8 l9'>
                        <Infos />
                        <Competences />
                        <Experiences />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;