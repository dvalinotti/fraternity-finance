const {User, validate} = require('../mongo/usersSchema');
const {Session} = require('../mongo/sessionsSchema');
const auth = require("./authMiddleware");
const bcrypt = require("bcrypt");

async function logout(key) {
    try {
        let session = await Session.findOne({token: key});
        if (session) {
            const res = await Session.deleteOne({_id: session._id});
            return {
                success: true
            }
        } else {
            return {
                success: false,
                error: 'Session does not exist'
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: error
        }
    }
}

async function authUser(body) {
    console.log(body);
    // const {error} = validate(body, true);
    // if (error) return { success: false, error: "Invalid submission" }; 
    
    try {
        let user = await User.findOne({ username: body.username });

        if (user) {
            bcrypt.genSalt();
            let compare = await bcrypt.compare(body.password, user.password);
            console.log(compare);
            if (compare) {
                const existingSession = await Session.findOne({ username: body.username })
                
                if (existingSession) {
                    return {
                        success: true,
                        token: existingSession.token
                    };
                } else {
                    const token = user.generateAuthToken();
                    let session = new Session({
                        token: token,
                        username: user.username,
                        timestamp: new Date()
                    });
                    await session.save();

                    return {
                        success: true,
                        username: user.username,
                        token: token
                    }
                }
            } else {
                return {
                    success: false,
                    error: "Password auth failed"
                }
            }
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: error.message
        }    
    }
}

async function createUser(body) {
    console.log(body);
    // const {error} = validate(body, false);
    // if (error) return { success: false, error: "Invalid submission" }; 

    try {
        //find an existing user
        let user = await User.findOne({ email: body.email });
        // console.log(user);
        if (user) return { success: false, error: "User already registered." };
        
        user = new User({
            username: body.username,
            email: body.email,
            password: body.password
        }); 
        user.password = await bcrypt.hash(user.password, 10);
        await user.save();
    
        const token = user.generateAuthToken();
        let session = new Session({
            token: token,
            username: user.username,
            timestamp: new Date()
        });
        await session.save();

        return {
            success: true,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email
            },
            token: token
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            error: error.message
        }
    }
}

module.exports = {
    createUser,
    authUser,
    logout
}