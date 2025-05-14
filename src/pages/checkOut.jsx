import React, { useState } from 'react';
import useCartStore from '../store/cartStore';

export default function CheckOut() {
  const cart = useCartStore((state) => state.cart);
  const total = useCartStore((state) => state.getTotalPrice)();

  const [nameCard, setNameCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!nameCard || !cardNumber || !expiry || !cvv) {
      setMessage('يرجى ملء جميع الحقول.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nameCard,
          cardNumber,
          expiry,
          cvv,
          products: cart,
          total,
          date: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setMessage('تم الدفع بنجاح (تم الإرسال إلى السيرفر الوهمي) ✅');
      } else {
        setMessage('حدث خطأ أثناء إرسال البيانات ❌');
      }
    } catch (error) {
      console.error(error);
      setMessage('فشل الاتصال بالخادم ❗');
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-gray-100 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Checkout</h2>

      <div className="flex flex-col md:flex-row justify-between mb-6">
        
        <div className="w-full md:w-1/2 p-4 bg-white rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-cyan-500">Order Summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="mb-2">
              <p className="font-medium">{item.title}</p>
              <p>{item.quantity} x ${item.price.toFixed(2)}</p>
            </div>
          ))}
          <hr className="my-4" />
          <p className="font-bold text-right text-green-600">Total: ${total.toFixed(2)}</p>
        </div>

        
        <form onSubmit={handlePayment} className="w-full md:w-1/2 p-4 bg-white rounded shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-cyan-500">Payment Information</h3>

          <label className=" font-bold block mb-2 ">
            Name on Card:
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={nameCard}
              onChange={(e) => setNameCard(e.target.value)}
            />
          </label>

          <label className="font-bold block mb-2">
            Card Number:
            <input
              type="text"
              className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </label>

          <div className="flex gap-4">
            <label className=" font-bold w-1/2 ">
              Expiry Date:
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </label>

            <label className="font-bold w-1/2 ">
              CVV:
              <input
                type="text"
                className="w-full p-2 mt-1 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`mt-6 bg-blue-600 text-white py-2 px-4 rounded transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-500'
            }`}
          >
            {loading ? 'جاري المعالجة...' : 'Proceed to Payment'}
          </button>

          {message && <p className="mt-4 text-center text-green-600 font-medium">{message}</p>}
        </form>
      </div>
    </div>
  );
}
