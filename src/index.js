import React from 'react';
import ReactDOM from 'react-dom';

function Comment(props){
  return (
    <div className="comment">
      <div className="user-info">
        <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
        <div className="user-name">{props.author.name}</div>
      </div>
      <div className="comment-text">{props.Text}</div>
      <div className="comment-date">{formatDate(props.date)}</div>
    </div>
  )
}

function formatDate(date) {
  return date.toLocaleDateString();
}
const comment ={
  date: new Date(),
  Text: "열심히 할수록 기회는 따른다.",
  author: {
    name: "wlstjr519",
    avatarUrl:
      "http://wlstjr519.dothome.co.kr/portfolio/assets/img/aboutImg02.jpg"
  }
}

ReactDOM.render(<Comment date={comment.date} text={comment.Text} author={comment.author}/>,document.getElementById('root'));

