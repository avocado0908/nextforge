import { NextResponse } from "next/server";

export const GET = async () => {

    return new NextResponse("Works", { status: 200 });
}