import Image from "next/image";
import ProductCard from "../components/ProductCard";

const products = [
  {
    Id:"1",
    Name: "Iphone-12",
    Category:"electronics",
    Description: "Lorem ipsum dolor sit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tinciduntamet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Id:"2",
    Name: "Iphone-12",
    Category:"electronics",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Id:"3",
    Name: "Iphone-12",
    Category:"furnitures",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Id:"4",
    Name: "Iphone-12",
    Category:"furnitures",
    Description: "Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },
  {
    Id:"5",
    Name: "Iphone-12",
    Category:"furnitures",
    Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt",
    Img: "/samsung.jpg",
    Price: "29$"
  },

]




export default function Home() {
  return (
    <div class="bg-gray-900 py-2 min-h-screen">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {
            products.map((item) => (
              <ProductCard 
              Id={item.Id}
              Name={item.Name}
              Image={item.Img}
              Description={item.Description}
              Price={item.Price}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
