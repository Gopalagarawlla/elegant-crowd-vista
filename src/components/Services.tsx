
import { Shield, Users, Calendar, Eye, Radio, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Event Security',
      description: 'Professional security personnel trained in crowd control and emergency response for all types of events.',
      features: ['Licensed Security Officers', 'Risk Assessment', 'Emergency Response', 'Access Control']
    },
    {
      icon: Users,
      title: 'Crowd Management',
      description: 'Strategic crowd flow planning and real-time management to ensure safe and organized events.',
      features: ['Crowd Flow Design', 'Barrier Systems', 'Queue Management', 'Capacity Control']
    },
    {
      icon: Calendar,
      title: 'Event Planning',
      description: 'Comprehensive event coordination services from initial planning to post-event analysis.',
      features: ['Safety Planning', 'Permit Assistance', 'Logistics Coordination', 'Risk Management']
    },
    {
      icon: Eye,
      title: 'Surveillance Systems',
      description: 'Advanced monitoring solutions including CCTV systems and real-time threat detection.',
      features: ['CCTV Installation', 'Live Monitoring', 'Threat Detection', 'Evidence Collection']
    },
    {
      icon: Radio,
      title: 'Communication Systems',
      description: 'Professional-grade communication networks ensuring seamless coordination across teams.',
      features: ['Radio Networks', 'Command Centers', 'Real-time Updates', 'Emergency Alerts']
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Response',
      description: 'Rapid response protocols and coordination with local emergency services when needed.',
      features: ['Emergency Protocols', 'First Aid Teams', 'Evacuation Planning', 'Crisis Management']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive crowd management solutions tailored to your specific needs, 
            ensuring the safety and success of your events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
