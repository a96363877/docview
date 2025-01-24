import { type NextRequest, NextResponse } from "next/server"
import PDFDocument from "pdfkit"
import sharp from "sharp"

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const file = formData.get("file") as File

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  const buffer = Buffer.from(await file.arrayBuffer())

  try {
    const pdfDoc = new PDFDocument()
    const pages: string[] = []

    // Read the PDF and convert each page to an image
    for (let i = 0; i < pdfDoc.bufferedPageRange().count; i++) {
      const page = pdfDoc.getPage(i)
      const pageImage = await sharp(page.getImage().toBuffer())
        .resize(800) // Resize to a reasonable width
        .toBuffer()

      const base64Image = pageImage.toString("base64")
      pages.push(`data:image/png;base64,${base64Image}`)
    }

    return NextResponse.json({ pages })
  } catch (error) {
    console.error("Error processing PDF:", error)
    return NextResponse.json({ error: "Error processing PDF" }, { status: 500 })
  }
}

