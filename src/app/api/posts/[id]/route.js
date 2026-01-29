import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (_request, { params }) => {
  const { id } = await params;

  try {
    await connect();

    const post = await Post.findById(id).lean();

    if (!post) {
      return new NextResponse("Post not found", { status: 404 });
    }

    const formattedPost = {
      userId: post._id.toString(),
      username: post.username,
      title: post.title,
      body: post.content,
      image: post.image,
      desc: post.desc,
    };

    return NextResponse.json(formattedPost, { status: 200 });
  } catch (err) {
    console.error(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};
