import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cardSliderClose, decrementQuantity, increamentQuantity, removeFromCart } from "../state management/Reducer";

const CheckOut = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.modal.carts);
  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("credit-card");
  const [email, setEmail] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup state
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    phone: "",
  });

  const calculateTotal = () => {
    const subtotal = carts.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = selectedDelivery === "standard" ? 6.0 : 16.0;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  };

  const { subtotal, shipping, total } = calculateTotal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    // Show popup on button click
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    // Close popup
    setIsPopupVisible(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="bg-white shadow-md rounded-md p-6 space-y-6">

          {/* Contact Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-gray-300 border rounded-md p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Shipping Information */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="w-full border-gray-300 border rounded-md p-2"
                value={shippingDetails.firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="w-full border-gray-300 border rounded-md p-2"
                value={shippingDetails.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="w-full border-gray-300 border rounded-md p-2"
              value={shippingDetails.address}
              onChange={handleInputChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full border-gray-300 border rounded-md p-2"
                value={shippingDetails.city}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State/Province"
                className="w-full border-gray-300 border rounded-md p-2"
                value={shippingDetails.state}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal code"
                className="w-full border-gray-300 border rounded-md p-2"
                value={shippingDetails.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full border-gray-300 border rounded-md p-2 mt-4"
              value={shippingDetails.phone}
              onChange={handleInputChange}
            />
          </div>

          {/* Delivery Method */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Delivery Method</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  name="delivery"
                  value="standard"
                  checked={selectedDelivery === "standard"}
                  onChange={(e) => setSelectedDelivery(e.target.value)}
                  className="form-radio"
                />
                <span>Standard (4-10 business days) - $6.00</span>
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  name="delivery"
                  value="express"
                  checked={selectedDelivery === "express"}
                  onChange={(e) => setSelectedDelivery(e.target.value)}
                  className="form-radio"
                />
                <span>Express (2-5 business days) - $16.00</span>
              </label>
            </div>
          </div>

          {/* Payment */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="credit-card"
                  checked={selectedPayment === "credit-card"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="form-radio"
                />
                <span>Credit card</span>
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={selectedPayment === "paypal"}
                  onChange={(e) => setSelectedPayment(e.target.value)}
                  className="form-radio"
                />
                <span>PayPal</span>
              </label>
            </div>

            {selectedPayment === "credit-card" && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Card number"
                  className="w-full border-gray-300 border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border-gray-300 border rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full border-gray-300 border rounded-md p-2"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-md rounded-md p-6">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <div className="space-y-4">
            {carts.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img src={item.thumbnail} alt="Product" className="w-12 h-12" />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">
                      {item.color}, {item.size}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 sm:flex-row flex-col items-center justify-center text-sm">
                  <p className="text-gray-500">Qty</p>
                  <div>
                    <button
                      className="border px-2"
                      onClick={() => dispatch(decrementQuantity(index))}
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      className="border px-2"
                      onClick={() => dispatch(increamentQuantity(index))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            className="mt-8 w-full bg-blue-500 text-white py-3 rounded-md"
            onClick={handleCheckout}
          >
            Complete Checkout
          </button>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="text-xl font-bold">Thank You for Your Purchase!</h2>
            <p>Your order has been confirmed. You will receive an email shortly.</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleClosePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
