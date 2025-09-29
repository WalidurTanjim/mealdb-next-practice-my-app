import dbConnect, { collectionsNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const DELETE = async(request, { params }) => {
    const { id } = await params;
    const query = { _id: new ObjectId(id) };
    const testUserCollection = await dbConnect(collectionsNames.TEST_USER);
    const result = await testUserCollection.deleteOne(query);

    return Response.json({ result });
}