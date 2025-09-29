import dbConnect, { collectionsNames } from "@/lib/dbConnect"

export const GET = async () => {
    const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
    const result = await testUserCollection.find().toArray();
 
    return Response.json({ result })
}

export const POST = async (request) => {
    const data = await request.json();
    const testUserCollection = await dbConnect(collectionsNames.TEST_USER);

    const email = data?.email;
    const user = await testUserCollection.findOne({ email });
    if(!user){
        const result = await testUserCollection.insertOne(data);
        return Response.json({ result })
    }

    return Response.json({ message: "User already exist. Please sign in" })
}