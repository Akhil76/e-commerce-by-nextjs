import CartProduct from "@/app/components/CartProduct";

export default function Cart() {
  return (
    <div class="font-[sans-serif] bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-50 min-h-screen">
      <div class="max-w-7xl max-lg:max-w-4xl mx-auto p-6">

        <h2 class="text-2xl font-extrabold text-gray-800">Your shopping cart</h2>

        <div class="grid lg:grid-cols-3 gap-4 relative mt-8">
          <div class="lg:col-span-2 space-y-4">
            <CartProduct/>
            <CartProduct/>
            <CartProduct/>
          </div>
          <div class="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
            <h3 class="text-xl font-bold text-gray-800">Order Summary</h3>

            <ul class="text-gray-800 text-sm divide-y mt-4">
              <li class="flex flex-wrap gap-4 py-3">Subtotal <span class="ml-auto font-bold">$2120.00</span></li>
              <li class="flex flex-wrap gap-4 py-3">Shipping <span class="ml-auto font-bold">$4.00</span></li>
              <li class="flex flex-wrap gap-4 py-3">Tax <span class="ml-auto font-bold">$4.00</span></li>
              <li class="flex flex-wrap gap-4 py-3 font-bold">Total <span class="ml-auto">$2920.00</span></li>
            </ul>

            <button type="button" class="mt-4 text-sm px-6 py-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md">Make Payment</button>
          </div>

        </div>
      </div>
    </div>
  );
}
