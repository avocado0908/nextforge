import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();

    const formattedPosts = posts.map((post, index) => ({
      userId: post._id,             
      username: post.username, 
      title: post.title,
      body: post.content,
      image: post.image,
      desc: post.desc,
    }));


    return NextResponse.json(formattedPosts, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
