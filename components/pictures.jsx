
const images = [
  { src: './2.jpg', alt: 'Image 1'},
  { src: './pvg2.jpeg', alt: 'Image 2'},
  { src: './3.jpg', alt: 'Image 3'},
  { src: './4.jpg', alt: 'Image 3'},
  { src: './pvg.jpeg', alt: 'Image 3'},
  { src: './pvg3.jpeg', alt: 'Image 3'},
  
];



export default function Pictures() {
  return (
    <div className="container mx-auto bg-gray-100 py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden group h-[500px] bg-gray-200 rounded-lg shadow-lg"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-lg font-semibold">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

