
export function Hero() {

  const handleGetStarted = () => {
    // Smooth scroll to contact form
    const servicesSection = document.getElementById('getstart');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="relative h-screen ">
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dl0ivqknv/image/upload/v1733842587/Hero_l4fbca.jpg"
          alt="Metal workshop"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-white/50" /> */}
      </div>

      <div className="relative h-full flex items-center backdrop-brightness-75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Precision Metal Manufacturing
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto animate-slide-up">
              Custom solutions for your metal fabrication needs with
              cutting-edge technology and expert craftsmanship.
            </p>
            <button
            onClick={handleGetStarted}
              className="bg-gray-500 text-white px-8 py-3 rounded-lg text-lg font-medium
              hover:bg-gray-600 transition-colors duration-200 animate-bounce" 
            >
            
              Get Started
           
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
