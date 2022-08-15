import CartDetails from "./CartDetails";
import Products from "./Products";

function CartContainer() {
    return (
        <div class="bg-gray-50 h-full md:h-screen">
            <div class="bg-gray-50 h-full md:h-screen">
                <div class="grid place-items-center">
                    <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
                        Shopping Cart
                    </h1>
                </div>
                <div class="grid grid-cols-12 gap-6">
                    <Products />
                    <CartDetails />
                </div>
            </div>
        </div>
    );
}

export default CartContainer;
