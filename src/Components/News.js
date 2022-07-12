import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    articles = []
    constructor() {
        super()
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            totalResults: 0
        }
    }
    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9a5444131fee4f53b9c4c27d4b112631&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 })
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({ articles: this.state.articles.concat(parseddata.articles), totalResults: parseddata.totalResults, loading: false })
    };
    async updateNews() {
        this.props.setprogress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setprogress(30)
        let data = await fetch(url)
        let parseddata = await data.json()
        this.props.setprogress(70)
        this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false })
        this.props.setprogress(100)
    }
    async componentDidMount() {
        this.updateNews()
    }
    
    render() {
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{ margin: '70px 0px 0px 0px' }}>TOP HEADLINES</h2>
                <h4 className='text-center'>({(this.props.category).toUpperCase()})</h4>
                {/* {this.state.loading && <Spinner />} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.totalResults}
                        loader={<Spinner />}
                    >
                <div className="container">
                        <div className="row">
                            {!this.state.loading && this.state.articles.map((e) => {

                                return <div className="col-md-4" key={e.url}>

                                    <NewsItems title={e.title ? e.title.slice(0.45) : ""} discription={e.description ? e.description.slice(0, 85) : ""} imageUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} />
                                </div>
                            })}


                        </div>
                </div>
                    </InfiniteScroll>
            </div>
        )
    }
}

export default News
