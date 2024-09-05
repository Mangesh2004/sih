


const members = [
  { src: './1.jpg', name: 'John Doe', description: 'Frontend Developer' },
  { src: './2.jpg', name: 'Jane Smith', description: 'Backend Developer' },
  { src: './3.jpg', name: 'Alice Johnson', description: 'UI/UX Designer' },
  { src: './4.jpg', name: 'Bob Williams', description: 'Project Manager' },
  { src: './5.jpg', name: 'Emily Davis', description: 'Full Stack Developer' },
  { src: './6.jpg', name: 'Michael Lee', description: 'Database Engineer' },
];

export default function Members() {
  return (
    <div className="container mx-auto bg-gray-100 py-12 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden group h-[500px] bg-gray-200 rounded-lg shadow-lg"
          >
            <img
              src={member.src}
              alt={member.name}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glass effect with name and description */}
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black via-black/20 to-transparent">
              <div className="bg-white/30 backdrop-blur-md p-4 rounded-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-sm text-white mt-2">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
