
import React from 'react';
import BlogCard from '@/components/ui/BlogCard';
import { BlogPost } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Incredible Health Benefits of Makhana: The Superfood You Need In Your Diet',
    slug: 'health-benefits-of-makhana',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    excerpt: 'Discover the amazing health benefits of adding foxnuts (makhana) to your daily diet and how it can improve your overall wellbeing.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum vel urna varius lobortis.',
    date: 'June 15, 2023'
  },
  {
    id: 2,
    title: 'Why Makhana Is the Perfect Snack for Weight Management',
    slug: 'makhana-for-weight-management',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    excerpt: 'Learn why nutritionists recommend foxnuts as an ideal snack for those looking to manage their weight while enjoying a delicious treat.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum vel urna varius lobortis.',
    date: 'May 22, 2023'
  },
  {
    id: 3,
    title: 'Makhana Superfood Boosts Energy and Improves Nutrient Intake',
    slug: 'makhana-energy-boost',
    image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800',
    excerpt: 'Explore how foxnuts can be a great source of sustainable energy and essential nutrients for an active lifestyle.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ipsum vel urna varius lobortis.',
    date: 'April 8, 2023'
  }
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-brand-100 text-brand-700 font-medium text-sm mb-4">
            Health & Wellness
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Makhana Health Benefits
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest articles on how foxnuts can enhance your health and wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="button-primary">
            <span>View All Articles</span>
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
