import Logo from '@/components/Logo';
import { ImageResponse } from 'next/og';

export const alt = 'LeadCraft B2B Marketing Agency';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#000000',
                    color: '#ffffff',
                    padding: '64px',
                }}
            >
                <div>
                    <Logo className='h-8' />
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 72,
                            fontWeight: 700,
                            lineHeight: 1.05,
                            maxWidth: '900px',
                        }}
                    >
                        B2B Marketing Agency
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: 32,
                            color: '#C4C4D0',
                            maxWidth: '900px',
                        }}
                    >
                        High-quality lead generation for SaaS and tech companies
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: 24,
                        color: '#4F5CF9',
                    }}
                >
                    <div>leadcraft-agency.com</div>
                    <div>Lead generation • Strategy • Growth</div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}