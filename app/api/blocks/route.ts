import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("modern-website")
    const blocks = await db.collection("blocks").find({}).toArray()
    return NextResponse.json(blocks)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blocks" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("modern-website")
    const data = await request.json()
    const result = await db.collection("blocks").insertOne(data)
    return NextResponse.json({ id: result.insertedId, ...data })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create block" }, { status: 500 })
  }
}

export async function PUT(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("modern-website")
    const { id, ...data } = await request.json()
    const result = await db.collection("blocks").updateOne({ _id: new ObjectId(id) }, { $set: data })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update block" }, { status: 500 })
  }
}

export async function DELETE(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("modern-website")
    const { id } = await request.json()
    const result = await db.collection("blocks").deleteOne({ _id: new ObjectId(id) })
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete block" }, { status: 500 })
  }
}

