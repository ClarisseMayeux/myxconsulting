import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

const Insta = () => {
    return (
        <div>
            <InstagramEmbed
            url='https://www.instagram.com/p/CWbFE70qq0u/?hl=fr'
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            />
        </div>
    )
}

export default Insta;
