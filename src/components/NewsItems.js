import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
    return (
      <div>
        <div className="container my-3">
        <div className="card" style={{width: "18rem"}}>
          <img src={!imageUrl?"https://fortune.com/img-assets/wp-content/uploads/2024/05/GettyImages-1451217882-e1716064581342.jpg?resize=1200,600":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-title">{description}</p>
              <a href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
        </div>
       
      </div>
    )
  }
}
