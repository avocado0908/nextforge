import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request) => {

  const url = new URL(request.url)

  const username = url.searchParams.get("username")

  try {
    await connect();

    const filter = username ? { username } : {};
    const posts = await Post.find(filter);

    const formattedPosts = posts.map((post) => ({
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

export const POST = async (request) => {
  try {
    const body = await request.json();
    console.log("POST BODY:", body);

    const requiredFields = ["title", "content", "image", "username"];
    const missing = requiredFields.filter(
      (f) => !body[f] || body[f].toString().trim() === ""
    );

    if (missing.length) {
      return NextResponse.json(
        { message: "Missing required fields", missing },
        { status: 400 }
      );
    }

    await connect();

    const savedPost = await Post.create({
      title: body.title,
      content: body.content,
      image: body.image,
      username: body.username,
    });

    return NextResponse.json(savedPost, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Database Error" }, { status: 500 });
  }
};

