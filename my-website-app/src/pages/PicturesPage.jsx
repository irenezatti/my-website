function PicturesPage() {
    return (
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
        <img src="path_to_image_1" alt="Personal Pic 1" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        <img src="path_to_image_2" alt="Personal Pic 2" className="w-full h-64 object-cover rounded-lg shadow-lg" />
        <img src="path_to_image_3" alt="Personal Pic 3" className="w-full h-64 object-cover rounded-lg shadow-lg" />
      </div>
    );
  }
  
  export default PicturesPage;
  