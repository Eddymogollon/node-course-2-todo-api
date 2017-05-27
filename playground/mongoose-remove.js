const {ObjectID} = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result.result);
// });

// Todo.findOneAndRemove({})


Todo.findByIdAndRemove('5929cb7b8acc6afb3e720c97').then((todo) => {
	console.log(todo);
})