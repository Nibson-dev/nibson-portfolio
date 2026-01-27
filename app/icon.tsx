import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'
 
// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#10b981', // Cor Emerald do seu tema
          borderRadius: '5px', // Borda levemente arredondada
          fontFamily: 'monospace',
          fontWeight: 900,
        }}
      >
        N
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}