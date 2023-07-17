
const Friendship = require('../models/friendship')

const User = require('../models/user')

module.exports.sendFriendRequest = async (req, res) => {
    try {
             
           console.log('sendFriendRequest');
          
            const fromUserId = req.body.fromUserId;
            const toUserId = req.body.toUserId;
            console.log('ids',fromUserId,toUserId);

        // Create a new connection
           const friendship = new Friendship({
               from_user: fromUserId,
               to_user: toUserId
           });
           console.log(friendship);
           await friendship.save();

           const fromUser = await User.findById(fromUserId);
           fromUser.friendships.push(friendship._id);

            const toUser = await User.findById(toUserId);
            toUser.friendships.push(friendship._id);
            console.log('user::',toUser,fromUser);

            await fromUser.save();
            await toUser.save();

        return res.status(200).json({
            message: 'Friend request sent successfully',
            data: {
              fromUser: fromUser,
              toUser: toUser
            }
        })
           

        } catch (error) {
        console.log('Error',error);
        res.status(500).json({ error: 'Failed to send friend request' });
    }
}


module.exports.removeFriend = function (req, res) {

}
