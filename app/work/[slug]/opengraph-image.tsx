import { ImageResponse } from 'next/og';
import { fetchProjectBySlug } from '@/lib/data';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Project Preview';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    return new Response('Project not found', { status: 404 });
  }

  return new ImageResponse(
    (
      <div
        style={{
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
                textAlign: 'center',
                padding: '0 80px',
            }}
        >
            <div
                style={{
                    fontSize: 100,
                    fontWeight: 800,
                    color: 'white',
                    opacity: 0.9,
                    letterSpacing: '-0.05em',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                }}
            >
                {project.name}
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
                    fontSize: 24,
                    color: 'rgba(255, 255, 255, 0.4)',
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    fontFamily: 'serif',
                    fontStyle: 'italic',
                }}
            >
                {project.realm}
            </div>

            <div
                style={{
                    fontSize: 18,
                    color: 'rgba(255, 255, 255, 0.3)',
                    marginTop: 20,
                    maxWidth: 800,
                    lineHeight: 1.6,
                }}
            >
                {project.description}
            </div>
        </div>

        {/* Project Type Badge */}
        <div
            style={{
                position: 'absolute',
                top: 40,
                right: 40,
                padding: '8px 16px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 20,
                fontSize: 12,
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: '0.1em',
            }}
        >
            {project.type}
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
            Ayano Portfolio Archive / {project.year}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
