import dbConnect, { collectionsNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const GET = async(request, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
    const result = await testUserCollection.findOne(query);
    if(result){
        return Response.json({ result });
    }

    return Response.json({ message: "Data not found! "})
}


export const DELETE = async(request, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
    const result = await testUserCollection.deleteOne(query);

    return Response.json({ result });
}


export const PUT = async(request, { params }) => {
    const data = await request.json();
    
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
    const user = await testUserCollection.findOne(query);
    if(user){
        const updatedUser = {
            $set: { ...data }
        };
        const result = await testUserCollection.updateOne(query, updatedUser);
        return Response.json({ result });
    }

    return Response.json({ message: "Something went wrong! Please try again." })
}