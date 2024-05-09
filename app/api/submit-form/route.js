import { latex } from 'latex';
import { Readable } from 'stream';

export async function POST(req) {
  const latx = await req.json()
  console.log(latx,"ltx")

  const readableStream = Readable.from([latx.txt]);
  console.log(readableStream,"ltx")
    const pdfStream = latex(readableStream);
    console.log(pdfStream,"pp")
    const res= new Response
    res.setHeader('Content-Type', 'application/pdf');

    pdfStream.pipe(res);
  return res;
}