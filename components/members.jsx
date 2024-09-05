import Image from 'next/image';

const members = [
  { src: '/dhanesh.jpg', name: 'Dhanesh Sathe', description: ' ' },
  { src: '/rohan.jpg', name: 'Rohan Sonawane', description: ' ' },
  { src: '/prarthana.jpg', name: 'Prarthana Khairnar', description: '' },
  { src: '/mangesh.jpg', name: 'Mangesh Waybhase', description: '' },
  { src: '/pranav.jpg', name: 'Pranav Sherekar', description: ' ' },
  { src: '/gayatri.jpg', name: 'Gayatri Dandge', description: ' ' },
];

export default function Members() {
  return (
    <div id="team" className="container mx-auto bg-gray-100 py-12 px-6">
      <div className="text-black text-4xl p-3 pb-5 flex items-center justify-center font-bold">
        Our Team
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden group h-[500px] bg-gray-200 rounded-lg shadow-lg"
          >
            <Image
              src={member.src}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glass effect with name and description */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black via-black/20 to-transparent">
              <div className="bg-white/30 backdrop-blur-md p-4 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                {/* <p className="text-sm text-white mt-2">{member.description}</p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
