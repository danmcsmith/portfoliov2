import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { caseStudyId, password } = await request.json()

    if (!caseStudyId || !password) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // In a real application, you would verify against stored passwords
    // For demo purposes, we'll accept any password with length > 3
    const isValid = password.length > 3

    if (isValid) {
      // Generate a simple token (in a real app, use a proper JWT)
      const token = btoa(`${caseStudyId}:${Date.now()}`)

      return NextResponse.json({
        success: true,
        token,
      })
    } else {
      return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 })
    }
  } catch (error) {
    console.error("Error verifying password:", error)
    return NextResponse.json({ success: false, error: "Server error" }, { status: 500 })
  }
}
