import { Target, Users, Award, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: 'Performance First',
      description: 'Every product is engineered for maximum athletic performance and comfort.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Community Driven',
      description: 'We listen to athletes and create gear that meets real-world needs.'
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: 'Quality Promise',
      description: 'Premium materials and craftsmanship in every piece we create.'
    },
    {
      icon: <Heart className="h-8 w-8 text-orange-600" />,
      title: 'Passion for Sport',
      description: 'Founded by athletes, for athletes, with genuine love for competition.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Athletes' },
    { number: '15+', label: 'Countries Served' },
    { number: '500+', label: 'Products Designed' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const achievements = [
    'Featured in Sports Illustrated',
    'Trusted by Olympic athletes',
    'Sustainability certified',
    'Award-winning designs',
    'Carbon-neutral shipping',
    'Ethical manufacturing'
  ];

  return (
    <div className="pt-16">
      <div dangerouslySetInnerHTML={{ __html: "<!-- This is a real HTML comment -->" }} />
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Crafting Excellence in
            <span className="text-orange-400 block">Athletic Performance</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Since 2015, AthletePro has been dedicated to creating innovative sports wear that empowers athletes to reach their full potential. Our story is one of passion, precision, and performance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AthletePro was born from a simple belief: every athlete deserves gear that enhances their performance. Founded by former professional athletes, we understand the demands of competition and the importance of reliable, comfortable equipment.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our commitment goes beyond just creating products. We're building a community of athletes who push boundaries, chase dreams, and never settle for second best. Every piece we design is tested by real athletes in real conditions.
              </p>
              <button className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-all duration-200 transform hover:scale-105">
                Learn More About Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Athletes training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-slate-800">2015</div>
                <div className="text-gray-600">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values shape every decision we make and every product we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-8 text-center">
              Our Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 group-hover:text-green-700 transition-colors duration-200" />
                  <span className="text-gray-700 font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-xl leading-relaxed mb-8 text-orange-100">
            To empower athletes at every level with innovative, high-performance gear that helps them achieve their goals and exceed their limits. We believe that the right equipment can be the difference between good and greatness.
          </p>


          <div className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200 cursor-pointer">
            Join Our Community
            <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </section>
      <div>
        <img src="/flag.png" />
      </div>
    </div>
  );
};

export default About;