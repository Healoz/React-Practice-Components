import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams.get("query");
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query!)}&apikey=${process.env.OMDB_API_KEY}`
    const res = await fetch(url);
    console.log(url);

    console.log("api key: ", process.env.OMDB_API_KEY);

    const data = await res.json();
    return NextResponse.json(data);
}