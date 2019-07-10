import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
			<div><h4>Warning!</h4>Are you sure you want to do this?</div>
			<CommentDetail author="Test" timeAgo="Today at 11:00AM" comment="Nice blog!" avatar={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author="Jazib" timeAgo="Today at 01:00AM" comment="Nice blog!" avatar={faker.image.avatar()}/>
			</ApprovalCard>
			<ApprovalCard>
			<CommentDetail author="Zafar" timeAgo="Today at 02:00AM" comment="Good job!" avatar={faker.image.avatar()}/>
			</ApprovalCard>			
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));