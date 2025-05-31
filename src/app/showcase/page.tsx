'use client'

// Updated fake data with multiple images per project
// const projects = [
//     { id: 1, name: 'AI Chatbot', description: 'A smart chatbot using GPT-3', images: ['https://picsum.photos/id/1/300/200', 'https://picsum.photos/id/2/300/200', 'https://picsum.photos/id/3/300/200', 'https://picsum.photos/id/4/300/200'] },
//     { id: 2, name: 'IoT Garden', description: 'Automated plant watering system', images: ['https://picsum.photos/id/5/300/200', 'https://picsum.photos/id/6/300/200'] },
//     { id: 3, name: 'AR Navigation', description: 'Augmented reality city guide', images: ['https://picsum.photos/id/7/300/200'] },
//     { id: 4, name: 'Blockchain Voting', description: 'Secure voting system using blockchain', images: ['https://picsum.photos/id/8/300/200', 'https://picsum.photos/id/9/300/200', 'https://picsum.photos/id/10/300/200'] },
//     // Add more fake projects as needed
// ]

// // Updated Lightbox component
// const Lightbox = ({ images, name, description, onClose }) => (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
//         <div className="bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
//             <h2 className="text-2xl font-bold mb-2">{name}</h2>
//             <p className="text-gray-700 mb-4">{description}</p>
//             <div className="grid grid-cols-2 gap-4">
//                 {images.map((image, index) => (
//                     <Image key={index} src={image} alt={`${name} ${index + 1}`} width={400} height={300} className="w-full h-auto" />
//                 ))}
//             </div>
//             <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>Close</button>
//         </div>
//     </div>
// );

// // Updated Card component
// const Card = ({ name, description, images }) => {
//     const [isLightboxOpen, setIsLightboxOpen] = useState(false);

//     const getGridClass = (imageCount) => {
//         switch (imageCount) {
//             case 1: return "grid-cols-1";
//             case 2: return "grid-cols-2";
//             case 3: return "grid-cols-2";
//             default: return "grid-cols-2";
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
//             <div 
//                 className={`grid ${getGridClass(images.length)} gap-1 cursor-pointer`} 
//                 onClick={() => setIsLightboxOpen(true)}
//                 style={{ minHeight: images.length <= 2 ? '200px' : 'auto' }}
//             >
//                 {images.slice(0, 4).map((image, index) => (
//                     <div 
//                         key={index} 
//                         className={`relative ${images.length === 3 && index === 2 ? 'col-span-2' : ''}`}
//                         style={{ height: images.length <= 2 ? '200px' : 'auto' }}
//                     >
//                         <Image
//                             src={image}
//                             alt={`${name} ${index + 1}`}
//                             layout="fill"
//                             objectFit="cover"
//                         />
//                         {images.length > 4 && index === 3 && (
//                             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl">
//                                 +{images.length - 4}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <div className="p-4 flex-grow">
//                 <h3 className="font-bold text-xl mb-2">{name}</h3>
//                 <p className="text-gray-700">{description}</p>
//             </div>
//             {isLightboxOpen && (
//                 <Lightbox
//                     images={images}
//                     name={name}
//                     description={description}
//                     onClose={() => setIsLightboxOpen(false)}
//                 />
//             )}
//         </div>
//     );
// };

// Updated Home component
export default function Home() {
    return (
        <div className="w-full">
            <div className="w-full max-w-[550px] mx-auto px-4 flex flex-col gap-4 mt-20">
                <div className="text-center">
                    <div className="flex justify-center font-serif"><p className="text-6xl font-bold">the showcase</p></div>
                    <p className="text-2xl">a hack night scrapbook.</p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* {projects.map((project) => (
                        // <Card key={project.id} {...project} />
                    ))} */}
                </div>
            </div>
        </div>
    );
}