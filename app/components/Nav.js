
<ul className="flex">
<li className="p-2 hover:text-red-200">
  <Link href="/">Home</Link>
  <div className="hidden hover:block">
    <ul>
      <li>item1</li>
      <li>item1</li>
    </ul>
  </div>
</li>
<li className="p-2 hover:text-red-200"><Link href="/product">Product</Link></li>
</ul>


{
  products.map((item)=>(
    <div class="bg-white rounded-lg shadow-lg p-8">
    <div class="relative overflow-hidden">
        <img class="object-cover w-full h-full" src={item.Img} alt="Product"/>
        <div class="absolute inset-0 bg-black opacity-40"></div>
        <div class="absolute inset-0 flex items-center justify-center">
            <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View Product</button>
        </div>
    </div>
    <h3 class="text-xl font-bold text-gray-900 mt-4">{item.Name}</h3>
    <p class="text-gray-500 text-sm mt-2">{item.Description}</p>
    <div class="flex items-center justify-between mt-4">
        <span class="text-gray-900 font-bold text-lg">{item.Price}</span>
        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
    </div>
</div>
  ))
}