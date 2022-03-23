import React  from 'react'


const Newscomp =(props)=> {

  
    let { title, description, imUrl, newsUrl, author, date, source, color } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:'flex',position:'absolute',right:'0',justifyContent:'flex-end'}}>
          <span className={`badge rounded-pill bg-${color}`} >{source}</span>
          </div>
          
          <img src={imUrl ? imUrl : "https://thehill.com/sites/default/files/ca_familydollar_5420istock_0.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Learn More</a>
            <p className="card-text"><small className="text-muted">By- {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>

          </div>
        </div>
      </div>


    )
  
}

export default Newscomp
