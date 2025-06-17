export default function TaskCardSkeleton() {
  return (
    <div
      className={`flex items-center justify-between rounded-lg px-4 py-3 border border-blue-gray-light bg-blue-gray-dark animate-pulse`}
    >
      <div className="flex flex-col gap-2 flex-grow">
        <div className="h-4 bg-gray-600 rounded w-1/3"></div>
        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
      </div>
      <div className="h-5 w-5 bg-gray-600 rounded"></div>
    </div>
  );
}
