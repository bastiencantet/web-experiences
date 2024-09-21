import Link from "next/link";
import Image from "next/image";


export function Card({ title, description, image, href }
    : { title: string; description: string; image: string; href: string }
) {
    return (
            <Link className="border rounded-lg shadow-md overflow-hidden flex w-full max-w-2xl duration-300 hover:border-gray-600 hover:shadow-xl hover:cursor-pointer" href={href}>

                {/* Image Section */}
                <div className="w-1/2 h-64">
                    <Image
                        src={image}
                        width={300}
                        height={300}
                        alt={title}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6 w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-gray-500 mt-4">{description}</p>
                </div>
            </Link>
    );
}
