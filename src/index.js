import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {

  return (
   <div className="ui container comments">
     <CommentDetail author="Sem" />
     <CommentDetail author="Kurac" />
     <CommentDetail author="Palac" />
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
