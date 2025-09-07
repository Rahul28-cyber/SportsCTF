import React from 'react';
import { Star, ShoppingCart, Truck, Award, Users, Target } from 'lucide-react';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Pro Running Shoes',
      price: '$129.99',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Footwear'
    },
    {
      id: 2,
      name: 'Athletic Performance Jacket',
      price: '$89.99',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/7432833/pexels-photo-7432833.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Outerwear'
    },
    {
      id: 3,
      name: 'Compression Training Shorts',
      price: '$45.99',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Bottoms'
    },
    {
      id: 4,
      name: 'Moisture-Wicking Tank Top',
      price: '$32.99',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/7432834/pexels-photo-7432834.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Tops'
    }
  ];

  const features = [
    {
      icon: <Truck className="h-8 w-8 text-orange-600" />,
      title: 'Free Shipping',
      description: 'On orders over $75'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Premium Quality',
      description: 'Professional-grade materials'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: '24/7 Support',
      description: 'Always here to help'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Unleash Your
              <span className="text-orange-400 block">Athletic Potential</span>
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Premium sports wear designed for champions. Experience unmatched comfort, performance, and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Shop Collection
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-200 transition-all duration-300 transform group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our top-rated athletic gear designed for peak performance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Target className="h-16 w-16 text-orange-400 mx-auto mb-6" />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Elevate Your Game?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of athletes who trust AthletePro for their performance gear
          </p>
          <button className="bg-orange-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Shopping Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;