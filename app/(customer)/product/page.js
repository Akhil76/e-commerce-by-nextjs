




export default function Product() {
  return (
    <div class="bg-gray-900 py-2 min-h-screen">
      <div class="container mx-auto px-4">
        <div class="gap-2 w-1/2">
              <div class="bg-white rounded-md shadow-lg p-3">
                <div class="relative overflow-hidden">
                  <img class="object-cover w-full h-full" src="/samsung.jpg" alt="Product" />
                  <div class="absolute inset-0 bg-black opacity-40"></div>
                  
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                <p class="text-gray-500 text-sm mt-2">This is a good product.</p>
                <div class="flex items-center justify-between mt-4 ">
                  <span class="text-gray-900 font-bold text-lg">900$</span>
                  <button class="bg-[#F3A847] text-white py-2 px-4 rounded-full font-bold hover:bg-[#bb7111]">Add to Cart</button>
                </div>
              </div>
        </div>
      </div>
    </div>
  );
}
