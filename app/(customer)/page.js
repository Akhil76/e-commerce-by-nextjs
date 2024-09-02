import Image from "next/image";

const products = [
  {
    Name: "Iphone-12",
    Description: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tinciduntamet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Name: "Iphone-12",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Name: "Iphone-12",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Name: "Iphone-12",
    Description: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Name: "Iphone-12",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },

]




export default function Client() {
  return (
    <div class="bg-gray-900 py-2 min-h-screen">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {
            products.map((item) => (
              <div class="bg-white rounded-md shadow-lg p-3">
                <div class="relative overflow-hidden">
                  <img class="object-cover w-full h-full" src={item.Img} alt="Product" />
                  <div class="absolute inset-0 bg-black opacity-40"></div>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
                  </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{item.Name}</h3>
                <p class="text-gray-500 text-sm mt-2">{item.Description}</p>
                <div class="flex items-center justify-between mt-4 ">
                  <span class="text-gray-900 font-bold text-lg">{item.Price}</span>
                  <button class="bg-[#F3A847] text-white py-2 px-4 rounded-full font-bold hover:bg-[#bb7111]">Add to Cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
