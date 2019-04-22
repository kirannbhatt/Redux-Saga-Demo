import React from 'react'
import { connect } from 'react-redux'
const imageStyle = {
    height: 'auto',
    width: '80%',
    border: '4px solid purple',
    borderRadius: '5%'
};

const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}

const NewsItem = ({ article }) =>
  article ? (
    <article style={articleStyle}>
      <div>
        <h1>{article.title}</h1>
        <img style={imageStyle} src={article.urlToImage} alt="" />
        <h4>{article.description}</h4>
        <a href={article.url} rel="noopener noreferrer" target="_blank">
          Read More
        </a>
      </div>
    </article>
  ) : null;
const mapStateToProps = (state) => ({
    article: state.news,
})
export default connect(mapStateToProps)(NewsItem);