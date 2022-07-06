import React, { Component } from 'react'

export class NewsItems extends Component {
    
    render() {
        let { title, discription, imageUrl,newsUrl,author,date} = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl?imageUrl:'https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA='} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className="card-text"><small className="text-muted">By {author} on {date}</small></p>
                        <a href={newsUrl} target="_blank"rel="noopener noreferrer" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItems
