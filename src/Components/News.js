import React, {useState,useEffect } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=> {
    
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=9a5444131fee4f53b9c4c27d4b112631&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url)
        let parseddata = await data.json()
        setArticles(articles.concat(parseddata.articles))
        setTotalResults(parseddata.totalResults)
        setLoading(false)
    };
    const updateNews=async()=> {
        props.setprogress(10)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        props.setprogress(30)
        let data = await fetch(url)
        let parseddata = await data.json()
        props.setprogress(70)
        setArticles(parseddata.articles)
        setTotalResults(parseddata.totalResults)
        setLoading(false)
        props.setprogress(100)
    }
    useEffect(()=>{
        updateNews()
        //eslint-disable-next-line
    },[])
    
        return (
            <div className='container my-3'>
                <h2 className='text-center' style={{ margin: '70px 0px 0px 0px' }}>TOP HEADLINES</h2>
                <h4 className='text-center'>({(props.category).toUpperCase()})</h4>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !==totalResults}
                        loader={<Spinner />}
                    >
                <div className="container">
                        <div className="row">
                            {!loading && articles.map((e) => {

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

News.defaultProps = {
    country: 'in',
    pageSize: 10,
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News
