// import React from 'react';
import { Star, ShoppingCart, ArrowRight } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const allProducts = [
    {
      id: 1,
      name: 'Velocity Running Tee',
      price: '$45.00',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/10329976/pexels-photo-10329976.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    },
    {
      id: 2,
      name: 'Summit Training Shorts',
      price: '$38.00',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/6303273/pexels-photo-6303273.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    },
    {
      id: 3,
      name: 'Ignite Trail Runners',
      price: '$92.00',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'shoes'
    },
    {
      id: 4,
      name: 'Flow Compression Leggings',
      price: '$65.00',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/6817111/pexels-photo-6817111.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    },
    {
      id: 5,
      name: 'Apex Performance Hoodie',
      price: '$79.00',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/5604169/pexels-photo-5604169.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    },
    {
      id: 6,
      name: 'Hydra-Dri T-Shirt',
      price: '$35.00',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/17228394/pexels-photo-17228394/free-photo-of-man-in-white-t-shirt-and-shorts.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    },
    {
      id: 7,
      name: 'Element Running Shorts',
      price: '$42.00',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/16607065/pexels-photo-16607065/free-photo-of-runner-in-shorts-and-a-t-shirt-running.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    },
    {
      id: 8,
      name: 'FlexFit Sports Bra',
      price: '$48.00',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4051061/pexels-photo-4051061.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      category: 'apparel'
    }
  ];

  const categories = [
    { name: 'All', value: 'all' },
    { name: 'Shoes', value: 'shoes' },
    { name: 'Apparel', value: 'apparel' },
    { name: 'Accessories', value: 'accessories' }
  ];

  const filteredProducts = allProducts.filter(product => 
    selectedCategory === 'all' || !selectedCategory || product.category === selectedCategory
  );

  const handleCategoryClick = (categoryValue) => {
    if (categoryValue === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryValue });
    }
  };

  return (
    <div className="pt-16">
      {/* Conditional Flag Section */}
      {selectedCategory === "' OR 1=1--" && (
        <section className="py-12 bg-green-500 text-white text-center">
          <h2 className="text-3xl font-bold">
            Flag: <strong className="font-extrabold">SpectreCTF{'{My_n4m3_1s_54h4_Tk6vJ2pX}'}</strong>
          </h2>
          <p className="mt-2 text-lg">
            Injection successful! This demonstrates a client-side vulnerability.
          </p>
        </section>
      )}

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Discover Your <span className="text-orange-400">Edge</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Explore our curated collection to performance-driven sportswear designed for every athlete.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryClick(category.value)}
                className={`
                  px-6 py-2 rounded-full font-medium transition-colors duration-200
                  ${(selectedCategory === category.value || (!selectedCategory && category.value === 'all'))
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }
                `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      New
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-slate-800 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-800">{product.price}</span>
                    <button className="bg-slate-800 text-white p-3 rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-110">
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Powered FitGuide Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Introducing: AI-Powered FitGuide
              </h2>
              <p className="text-xl leading-relaxed mb-6 text-orange-100">
                Find your perfect size and style with our intelligent recommendation engine. Just answer a few questions and get personalized product suggestions instantly.
              </p>
              <button className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 transform hover:scale-105">
                Start the FitGuide
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/5604168/pexels-photo-5604168.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="AI-Powered FitGuide"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;