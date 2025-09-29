// "use server";

// import dbConnect, { collectionsNames } from "@/lib/dbConnect";
// import bcrypt from "bcrypt";

// const signupUser = async(payload) => {
//     const { email, password, confirm_password } = payload;

//     try{
//         if(!email || !password || !confirm_password){
//             return { success: false, message: "All fields are required" }
//         }

//         if(confirm_password !== password){
//             return { success: false, message: "Passwords do not match" }
//         }

//         const hashedPassword = await bcrypt.hash(confirm_password, 10);
//         payload.password = hashedPassword;
//         payload.confirm_password = hashedPassword;

//         const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
//         const user = await testUserCollection.findOne({ email });
//         // console.log("Exist user:", user);

//         if(user){
//             return { success: false, message: "User already exists." }
//         }

//         const result = await testUserCollection.insertOne(payload);
//         result.insertedId = result?.insertedId.toString();
//         return result;
//     }catch(err){
//         console.error(err);
//         return { success: false, message: "Something went wrong" };
//     }
// };

// export default signupUser;