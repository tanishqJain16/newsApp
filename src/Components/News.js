import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'



export class News extends Component {
    static defaultProps = {
        country:'in',
        pageSize:10,
      }

      static propTypes = {
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
      }

    articles = []
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading:false,
            page: 1,
            totalResults:0
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a5444131fee4f53b9c4c27d4b112631&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults,loading:false })
    }
    handleprevclick = async () => {
        console.log('previous');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a5444131fee4f53b9c4c27d4b112631&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true})
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles,
        
            page: this.state.page - 1,loading:false
        })
    }
    handlenextclick = async () => {
       
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a5444131fee4f53b9c4c27d4b112631&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading:true})
            let data = await fetch(url)
            let parseddata = await data.json()
            this.setState({ articles: parseddata.articles, page: this.state.page + 1,loading:false })
        
    }
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center'>TOP HEADLINES</h2>
                {this.state.loading&&<Spinner/>}
                <div className="row">
                    {!this.state.loading&&this.state.articles.map((e) => {

                        return <div className="col-md-4" key={e.url}>

                            <NewsItems title={e.title?e.title.slice(0.45):""} discription={e.description?e.description.slice(0,85):""} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} />
                        </div>
                    })}

                    <div className="container d-flex justify-content-between">
                        <button type="button" disabled={this.state.page <= 1} className="btn btn-dark mx-1" onClick={this.handleprevclick}>&larr; Previous</button>
                        <button type="button"disabled={this.state.page===Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
