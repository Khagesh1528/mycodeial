const Friendship = require('../models/friendship');
const Post = require('../models/post');
const User = require('../models/user');



module.exports.home = async function (req, res) {

    try {
        // CHANGE :: populate the likes of each post and comment
        let posts = await Post.find({})
            .sort('-createdAt')
            .populate('user')
            .populate({
                path: 'comments',
                populate: {
                    path: 'user'
                },
                populate: {
                    path: 'likes'
                }
            }).populate('comments')
            .populate('likes');


        let users = await User.find({});
        let friends = await Friendship.find({});
        let fromUser = await User.findOne(friends.from_user)
        console.log('fromUser',fromUser.name);
        console.log('Friends ::',friends);
        

        return res.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users,
            friends: friends
        });

    } catch (err) {
        console.log('Error', err);
        return;
    }

}


// module.exports.actionName = function(req, res){}


// using then
// Post.find({}).populate('comments').then(function());

// let posts = Post.find({}).populate('comments').exec();

// posts.then()
