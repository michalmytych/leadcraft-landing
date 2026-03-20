import Logo from '@/components/Logo';
import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const copy =
    locale === 'pl'
      ? {
          title: 'Agencja marketingu B2B',
          subtitle: 'Generujemy jakościowe leady sprzedażowe',
        }
      : {
          title: 'B2B Marketing Agency',
          subtitle: 'We generate high-quality leads for production tech companies',
        };

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#000',
          color: '#fff',
          padding: '64px',
        }}
      >
        <div>
          <Logo className='h-8'/>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.05,
              maxWidth: 920,
            }}
          >
            {copy.title}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: '#D4D4D8',
              maxWidth: 920,
            }}
          >
            {copy.subtitle}
          </div>
        </div>

        <div style={{ display: 'flex', fontSize: 24, color: '#4F5CF9' }}>
          {locale.toUpperCase()} • LeadCraft
        </div>
      </div>
    ),
    size
  );
}