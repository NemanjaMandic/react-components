import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {

  return (
   <div className="ui container comments">

   <ApprovalCard>
   <h4>Warning</h4>
   Are u sure you want to blah blah
   </ApprovalCard>
    <ApprovalCard>
      <CommentDetail
       author="Sem"
       timeAgo="Today at 6pm"
       postText="First comment blah blah"
       avatar={ faker.image.avatar() }
      />
    </ApprovalCard>

   <ApprovalCard>
     <CommentDetail
      author="Kurac"
      timeAgo="Today at 16pm"
      postText="Second comment blah blah"
      avatar={ faker.image.avatar() }
      />
  </ApprovalCard>

  <ApprovalCard>
     <CommentDetail
      author="Palac"
      timeAgo="Today at 10pm"
      postText="Third comment blah blah"
      avatar={ faker.image.avatar() }
      />

  </ApprovalCard>
   </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));
