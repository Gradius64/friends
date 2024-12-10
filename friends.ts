import { ObjectId } from 'mongoose';

interface User {
    _id: ObjectId; // or string if you prefer
    username: string;
    email: string;
    thoughts: ObjectId[]; // Array of Thought model references
    friends: ObjectId[]; // Array of User model references (self-reference)
    friendCount?: number;
}

