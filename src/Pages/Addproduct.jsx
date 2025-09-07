import { useState } from "react";

function Addproduct() {
  const [formValues, setFormValues] = useState({
    productId: "",
    name: "",
    imageUrl: "",
    price: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted Product:", formValues);
    await fetch('http://localhost:3000/product/createproduct', {
        method:"POST",
        body:JSON.stringify(formValues),
        headers:  {
            "content-type":"application/json"
        }  })
  };

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-green-200">
        <h2 className="text-2xl font-bold mb-6 text-green-800 text-center">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="productId"
              className="block text-sm font-medium text-green-700"
            >
              Product ID
            </label>
            <input
              type="number"
              id="productId"
              name="productId"
              value={formValues.productId}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-green-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-green-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={formValues.imageUrl}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-green-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formValues.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-green-700"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              value={formValues.category}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Addproduct;
