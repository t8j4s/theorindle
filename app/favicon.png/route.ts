export async function GET() {
  const base64 = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAHElEQVR42mNkYGD4z0AAMoZRo4aNoAEYAwXDAAADWBoDPyD28QAAAABJRU5ErkJggg==";
  return new Response(Buffer.from(base64, "base64"), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable"
    },
  });
}
