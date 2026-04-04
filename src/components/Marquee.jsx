import React from 'react';

const items = [
  'REACT',
  'NODE.JS',
  'LARAVEL',
  'REACT NATIVE',
  'SUPABASE',
  'NEXT.JS',
  'CLAUDE AI',
  'CURSOR',
  'ANTIGRAVITY',
  'RAILWAY',
  'RENDER',
  'VERCEL',
  'HOSTINGER',
  'FULL STACK',
];

function MarqueeRow({ reverse }) {
  return (
    <div className={`marquee-row ${reverse ? 'marquee-reverse' : ''}`}>
      <div className="marquee-track">
        {[0, 1].map((i) => (
          <div className="marquee-content" key={i}>
            {items.map((item, idx) => (
              <span key={idx} className="marquee-item">
                <span className="marquee-dot"></span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee">
      <MarqueeRow />
    </div>
  );
}
