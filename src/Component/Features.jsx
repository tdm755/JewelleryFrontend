import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PiggyBank, 
  CreditCard, 
  Layers 
} from 'lucide-react';

const FeaturesSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: PiggyBank,
      title: 'SIP',
      description: 'Systematic investment planning tailored to your financial goals.',
      route: '/sip',
      color: 'text-blue-600'
    },
    {
      icon: CreditCard,
      title: 'EMI',
      description: 'Flexible installment plans for seamless financial management.',
      route: '/emi',
      color: 'text-green-600'
    },
    {
      icon: Layers,
      title: 'Kitty',
      description: 'Collaborative savings platform connecting financial communities.',
      route: '/kitty',
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
      <h2 className='text-[#9fb8e2] text-7xl fontStyle'>Our Features</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Innovative financial tools designed to simplify and enhance your financial journey.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-14"
              onClick={() => navigate(feature.route)}
            >
              <div className="flex justify-center mb-6">
                <div className={`
                  p-4 
                  bg-gray-100 
                  rounded-full 
                  ${feature.color}
                //   group-hover:bg-opacity-80
                  transition-colors
                  duration-300
                `}>
                  <Icon size={48} className="stroke-current" />
                </div>
              </div>
              
              <h3 className="text-2xl text-[#9fb8e2] font-semibold  mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/80 mb-6">
                {feature.description}
              </p>
              
              <div className={`
                inline-flex 
                items-center 
                ${feature.color}
                font-medium
                group-hover:underline
                transition-colors
                duration-300
              `}>
                Learn More
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesSection;