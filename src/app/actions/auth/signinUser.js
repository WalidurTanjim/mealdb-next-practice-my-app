// "use server";

// import dbConnect, { collectionsNames } from "@/lib/dbConnect";
// import bcrypt from "bcrypt";

// const signinUser = async(payload) => {
//     const { email, password } = payload;

//     try{
//         if(!email || !password){
//             return { success: false, message: "All fields are required." }
//         }

//         const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
//         const user = await testUserCollection.findOne({ email });

//         if(!user){
//             return { success: false, message: "User not exist. Try again." }
//         }

//         const isPasswordOK = await bcrypt.compare(password, user?.confirm_password);
//         if(!isPasswordOK){
//             return { success: false, message: "Wrong password." }
//         }

//         return user;
//     }catch(err){
//         console.error(err);
//         return { success: false, message: "Login failed. Try again." };
//     }
// };

// export default signinUser;

"use server";

const signinUser = async(payload) => {
    const { email, password } = payload;
    // console.log("Payload from signin action:", email, password, payload);
};

export default signinUser;