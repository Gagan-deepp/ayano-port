import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Ayano | Architecture & Systems';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse HTML element
      <div
        style={{
          fontSize: 128,
          background: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle Architecture Grid */}
        <div style={{ position: 'absolute', top: 126, width: '100%', height: 1, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', top: 252, width: '100%', height: 1, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', top: 378, width: '100%', height: 1, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', top: 504, width: '100%', height: 1, background: 'rgba(255,255,255,0.03)' }} />
        
        <div style={{ position: 'absolute', left: 240, height: '100%', width: 1, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', left: 480, height: '100%', width: 1, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', left: 720, height: '100%', width: 1, background: 'rgba(255,255,255,0.03)' }} />
        <div style={{ position: 'absolute', left: 960, height: '100%', width: 1, background: 'rgba(255,255,255,0.03)' }} />

        {/* Content */}
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
            }}
        >
            <div
                style={{
                    fontSize: 140,
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.9,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                }}
            >
                AYANO
            </div>
            
            <div
                style={{
                    width: 60,
                    height: 1,
                    background: 'rgba(255, 255, 255, 0.2)',
                    marginTop: 40,
                    marginBottom: 40,
                }}
            />
            
            <div
                style={{
                    fontSize: 32,
                    color: 'rgba(255, 255, 255, 0.4)',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                }}
            >
                Architecture & Systems
            </div>
        </div>

        {/* Footer Brand */}
        <div
            style={{
                position: 'absolute',
                bottom: 40,
                fontSize: 12,
                letterSpacing: '0.6em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.1)',
            }}
        >
            The Archive / 2025
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
