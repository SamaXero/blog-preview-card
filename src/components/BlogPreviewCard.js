import React from 'react'
import Illustration from '../assets/images/illustration-article.svg'
import UserImage from '../assets/images/image-avatar.webp'
import './BlogPreviewCard.css'

function BlogPreviewCard() {
  return (
    <main className='principal-container'>
        <section className='blog-preview-card-container'>
            <img src={Illustration} alt='illustration-image' className='illustration-image'/>
            <div className='blog-preview-card-text-container'>
                <div className='learning-published-container'>
                    <p className='learning'>Learning</p>
                    <p className='published'>Published 21 Dec 2023</p>
                </div>
                <h2 className='blog-preview-card-title'>HTML & CSS foundations</h2>
                <p className='blog-preview-card-description'>
                    These languages are the backbone of every website, defining structure, content, and presentation.
                </p>
                <div className='image-name-user'>
                    <img src={UserImage} alt='image-user' className='image-user' />
                    <p className='name-user'>Greg Hooper</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default BlogPreviewCard