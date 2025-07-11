
import { Award, Clock, Users, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: '15+', label: 'Years of Excellence' },
    { icon: Users, number: '500+', label: 'Events Secured' },
    { icon: Clock, number: '24/7', label: 'Support Available' },
    { icon: Target, number: '99.9%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted Crowd Management 
              <span className="text-primary"> Experts</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 15 years of experience in crowd management and event security, 
              CrowdGuard has established itself as the leading provider of professional 
              crowd control services.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our team of certified security professionals and crowd management specialists 
              work together to ensure your events run smoothly and safely. From intimate 
              gatherings to large-scale festivals, we have the expertise to handle any situation.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Certified Professionals</h4>
                  <p className="text-gray-600">All our staff are licensed and continuously trained</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                  <p className="text-gray-600">Successfully managed events for Fortune 500 companies</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Comprehensive Insurance</h4>
                  <p className="text-gray-600">Fully insured and bonded for your peace of mind</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg text-center card-hover">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
