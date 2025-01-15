import { user_model } from "../DB/user_model.js";
const userReg = () => {
    return async (req, res) => {
        const { username, email, password, user_phone_number, gender, age } = await req.body;

        if (!username || !email || !password || !user_phone_number || !gender || !age) {
            return res.status(400).send("All fields (username, email, password) are required.");
        }

        const user = new user_model({
            username,
            email,
            password,
            user_phone_number,
            gender,
            age
        });

        console.log(user);
        
             
        try {
            const user_created = await user.save();
            res.send("User registered successfully!");
        } catch (error) {
            res.status(500).send("Error creating user: " + error.message);
        }
    };
};
export default userReg;
