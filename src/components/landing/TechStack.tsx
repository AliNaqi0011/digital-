'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Layers, Megaphone, BrainCircuit } from 'lucide-react';

const categoryIcons: { [key: string]: React.ElementType } = {
  'Full Stack Development': Layers,
  'Social Media Marketing': Megaphone,
  'Artificial Intelligence': BrainCircuit,
};

const techImages: { [key: string]: string } = {
  'React': '/images/react js.jpeg',
  'Next.js': '/images/next js.jpeg',
  'Vue.js': '/images/vue js.jpeg',
  'Node.js': '/images/node js.jpeg',
  'Django': '/images/django.jpeg',
  'Flask': '/images/flask.jpeg',
  'Laravel': '/images/laravel.jpeg',
  'Express': '/images/express.jpeg',
  'Python': '/images/python.jpeg',
  'PHP': '/images/php.jpeg',
  'TypeScript': '/images/type script.jpeg',
  'JavaScript': '/images/js.jpeg',
  'HTML': '/images/html.jpeg',
  'CSS': '/images/css.jpeg',
  'Bootstrap': '/images/bootstrap.jpeg',
  'Tailwind CSS': '/images/tailwind css.jpeg',
  'Docker': '/images/docker.jpeg',
  'TikTok': '/images/tiktok.jpeg',
  'Facebook': '/images/facebook.jpeg',
  'GitHub': '/images/github.jpeg',
  'Google': '/images/google.jpeg',
  'Heroku': '/images/heruko.jpeg',
  'Machine Learning': '/images/machine learning.jpeg',
  'Deep Learning': '/images/deep learning.jpeg',
  'AI Automation': '/images/automation.jpeg',
  'Web Scraping': '/images/web scrapng.jpeg',
  'Selenium Automation': '/images/selenium.jpeg',
  'ChatGPT Integration': '/images/open ai.jpeg',
  'OpenAI API': '/images/open ai.jpeg',
  'TensorFlow': '/images/python.jpeg',
  'PyTorch': '/images/putourch.jpeg',
  'Data Analysis & Prediction': '/images/data analytics.jpeg',
};

// Web Development Service Page Images
const webDevImages = [
  { name: 'React', src: '/images/react js.jpeg' },
  { name: 'Next.js', src: '/images/next js.jpeg' },
  { name: 'Vue.js', src: '/images/vue js.jpeg' },
  { name: 'Node.js', src: '/images/node js.jpeg' },
  { name: 'Django', src: '/images/django.jpeg' },
  { name: 'Flask', src: '/images/flask.jpeg' },
  { name: 'Laravel', src: '/images/laravel.jpeg' },
  { name: 'Express', src: '/images/express.jpeg' },
  { name: 'Python', src: '/images/python.jpeg' },
  { name: 'PHP', src: '/images/php.jpeg' },
  { name: 'TypeScript', src: '/images/type script.jpeg' },
  { name: 'JavaScript', src: '/images/js.jpeg' },
  { name: 'HTML', src: '/images/html.jpeg' },
  { name: 'CSS', src: '/images/css.jpeg' },
  { name: 'Bootstrap', src: '/images/bootstrap.jpeg' },
  { name: 'Tailwind CSS', src: '/images/tailwind css.jpeg' },
  { name: 'Docker', src: '/images/docker.jpeg' },
];

export { webDevImages };

interface TechStackProps {
  techStackContent: {
    title: string;
    subtitle: string;
    categories: {
      id: string;
      title: string;
      technologies: {
        name: string;
        src: string;
        hint: string;
      }[];
    }[];
  }
}

export function TechStack({ techStackContent }: TechStackProps) {
  const [activeCategory, setActiveCategory] = useState(techStackContent.categories[0].id);
  const currentCategory = techStackContent.categories.find(c => c.id === activeCategory);

  return (
    <section className="py-24 md:py-32 relative bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight">{techStackContent.title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">{techStackContent.subtitle}</p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
          {techStackContent.categories.map((category) => {
            const Icon = categoryIcons[category.title];
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className="transition-all duration-300 ease-in-out transform hover:scale-105 rounded-full px-6 py-3 text-base"
              >
                {Icon && <Icon className="w-5 h-5 mr-2" />}
                {category.title}
              </Button>
            );
          })}
        </div>
        
        <div className="p-8 mt-6 bg-background/80 backdrop-blur-sm rounded-2xl shadow-2xl shadow-primary/10 min-h-[300px] flex items-center justify-center">
          {currentCategory && (
            <div key={activeCategory} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-10 justify-center animate-fade-in-up">
              {currentCategory.technologies.map((tech) => {
                const imagePath = techImages[tech.name];
                return (
                  <div key={tech.name} className="flex flex-col items-center justify-center gap-3 group tilt-3d transition-all duration-500" title={tech.name}>
                    <div className="w-20 h-16 relative flex items-center justify-center bg-white rounded-lg group-hover:shadow-2xl group-hover:shadow-primary/30 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {imagePath ? (
                        <Image 
                          src={imagePath}
                          alt={tech.name}
                          width={60}
                          height={50}
                          className="object-contain rounded relative z-10 group-hover:scale-110 transition-transform duration-300"
                          style={{ width: 'auto', height: 'auto' }}
                        />
                      ) : (
                        <div className="w-12 h-12 bg-primary/20 rounded flex items-center justify-center relative z-10">
                          <span className="text-xs font-bold text-primary">{tech.name.slice(0,2)}</span>
                        </div>
                      )}
                    </div>
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-300 transform group-hover:scale-105">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}