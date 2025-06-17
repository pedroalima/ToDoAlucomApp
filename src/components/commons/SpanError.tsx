interface SpanErrorProps {
  message?: string;
}

export default function SpanError({ message }: SpanErrorProps) {
  if (!message) return null;
  return <span className="text-red text-xs mt-1">{message}</span>;
}
