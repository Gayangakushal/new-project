import React, { useState } from 'react';
import { Search, Calendar, User, Clock, Tag, ChevronRight, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  imageUrl: string;
  likes: number;
  comments: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development: What to Expect in 2025",
    excerpt: "Explore the emerging trends and technologies that will shape web development in the coming year.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Alex Johnson",
    date: "May 15, 2025",
    readTime: "5 min read",
    category: "Technology",
    tags: ["WebDev", "JavaScript", "Future Tech"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    likes: 124,
    comments: 32
  },
  {
    id: 2,
    title: "Mastering React Hooks: Advanced Patterns for Modern Applications",
    excerpt: "Dive deep into React Hooks with advanced patterns and techniques to build more efficient applications.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Samantha Lee",
    date: "May 10, 2025",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Hooks", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 98,
    comments: 24
  },
  {
    id: 3,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive designs quickly and efficiently using Tailwind CSS.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "David Chen",
    date: "May 5, 2025",
    readTime: "6 min read",
    category: "CSS",
    tags: ["Tailwind", "CSS", "Responsive Design"],
    imageUrl: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    likes: 156,
    comments: 42
  },
  {
    id: 4,
    title: "TypeScript Best Practices for Large-Scale Applications",
    excerpt: "Discover the best practices for using TypeScript in large-scale applications to improve code quality and maintainability.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Emily Rodriguez",
    date: "April 28, 2025",
    readTime: "10 min read",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "Enterprise"],
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    likes: 87,
    comments: 19
  }
];

const categories = [
  "All",
  "Technology",
  "React",
  "JavaScript",
  "CSS",
  "TypeScript",
  "Web Design",
  "Career"
];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Tuitora Blog</h1>
          <p className="text-gray-600 mt-2">Exploring the latest in web development and technology</p>
        </div>
      </header>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex overflow-x-auto pb-2 w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full mr-2 whitespace-nowrap ${
                  activeCategory === category
                    ? "bg-green-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {filteredPosts.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:h-full md:w-80"
                  src={filteredPosts[0].imageUrl}
                  alt={filteredPosts[0].title}
                />
              </div>
              <div className="p-8">
                <div className="flex items-center">
                  <span className="bg-blue-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {filteredPosts[0].category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500 ml-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{filteredPosts[0].readTime}</span>
                  </div>
                </div>
                <a href="#" className="block mt-2">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {filteredPosts[0].title}
                  </h2>
                  <p className="mt-3 text-gray-600">
                    {filteredPosts[0].excerpt}
                  </p>
                </a>
                <div className="mt-6 flex items-center">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{filteredPosts[0].author}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center ml-6">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    <span className="text-sm text-gray-500">{filteredPosts[0].date}</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <button className="flex items-center text-blue-600 hover:text-blue-800">
                    Read more
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Articles</h2>
        
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
            <button 
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={post.title}
                />
                <div className="p-6">
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 ml-4">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <a href="#" className="block mt-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-gray-600 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </a>
                  <div className="mt-4 flex items-center">
                    <div className="text-sm text-gray-900">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center ml-4">
                      <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="flex space-x-4">
                      <button className="flex items-center text-gray-500 hover:text-red-500">
                        <Heart className="h-4 w-4 mr-1" />
                        <span className="text-xs">{post.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-blue-500">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        <span className="text-xs">{post.comments}</span>
                      </button>
                      <button className="flex items-center text-gray-500 hover:text-green-500">
                        <Share2 className="h-4 w-4" />
                      </button>
                    </div>
                    <button className="flex items-center text-gray-500 hover:text-yellow-500">
                      <Bookmark className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Newsletter Section */}
      <div className="bg-green-600 py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
            <p className="text-blue-100 mb-6">Get the latest articles and resources sent straight to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full sm:w-96"
                placeholder="Enter your email"
              />
              <button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default BlogPage;