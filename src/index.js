import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {

  return (
   <div className="ui container comments">
     <CommentDetail
      author="Sem"
      timeAgo="Today at 6pm"
      postText="First comment blah blah"
      avatar={ faker.image.avatar() }
     />
     <CommentDetail
      author="Kurac"
      timeAgo="Today at 16pm"
      postText="Second comment blah blah"
      avatar={ faker.image.avatar() }
      />
     <CommentDetail
      author="Palac"
      timeAgo="Today at 10pm"
      postText="Third comment blah blah"
      avatar={ faker.image.avatar() }
      />
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
