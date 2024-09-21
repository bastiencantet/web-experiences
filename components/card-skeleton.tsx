export function SkeletonCard() {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden flex w-full max-w-2xl animate-pulse">

            {/* Image Section */}
            <div className="w-1/2 h-64 bg-gray-300 dark:bg-gray-700">
                {/* Placeholder for the image */}
            </div>

            {/* Content Section */}
            <div className="p-6 w-1/2 flex flex-col justify-center">
                <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded-md w-3/4"></div> {/* Placeholder for title */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mt-4 w-full"></div> {/* Placeholder for description */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mt-2 w-full"></div> {/* Placeholder for description */}
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md mt-2 w-5/6"></div> {/* Placeholder for description */}
            </div>
        </div>
    );
}

