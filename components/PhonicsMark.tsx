type PhonicsMarkProps = { variant: 'sound' | 'loop' | 'letter'; className?: string; };
const artwork = {
 sound: { viewBox: '0 0 60 60', paths: ['M8 30h7', 'M24 20c7 5 7 15 0 20', 'M36 12c13 9 13 27 0 36', 'M47 5c17 13 17 37 0 50'] },
 loop: { viewBox: '0 0 82 48', paths: ['M4 38c15-4 36-13 41-25C51-2 24 2 25 19c1 17 24 22 51 6', 'M66 24l11 0-5 10'] },
 letter: { viewBox: '0 0 64 60', paths: ['M8 48L22 12l14 36M13 36h18', 'M57 34c-3-8-14-6-14 3 0 10 11 13 14 4m0-10v17'] },
};
export function PhonicsMark({variant, className = ''}: PhonicsMarkProps) {
 const {viewBox, paths} = artwork[variant];
 return <svg className={`phonics-mark ${className}`} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" data-phonics-mark>{paths.map(path => <path key={path} d={path} pathLength="1" />)}</svg>;
}