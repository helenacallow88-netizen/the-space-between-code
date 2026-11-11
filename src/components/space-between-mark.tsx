export function SpaceBetweenMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" role="img" aria-label="The Space Between symbol" className={className}>
      <path d="M48 7C25 7 8 26 8 49c0 19 12 35 30 42-7-15-4-28 8-40 13-13 19-26 2-44Z" fill="#B96C49"/>
      <path d="M55 10c8 15 6 28-7 41-12 13-16 25-4 40 27 3 48-17 48-42 0-19-15-35-37-39Z" fill="#8D9271"/>
      <circle cx="51" cy="51" r="5.5" fill="#D5A35A"/>
    </svg>
  );
}
