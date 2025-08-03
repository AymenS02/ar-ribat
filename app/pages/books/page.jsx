'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FileText, Download, Search, Filter, BookOpen, User, Calendar } from 'lucide-react';
import Header from "/components/header/Header";

const BooksPage = () => {
  const headerRef = useRef(null);
  const booksGridRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // GSAP Animations
    const tl = window.gsap.timeline({ delay: 0.3 });

    window.gsap.set([headerRef.current, booksGridRef.current], {
      opacity: 0,
      y: 50
    });

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .to(booksGridRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

    return () => tl.kill();
  }, []);

  const books = [
    {
      id: 1,
      title: "The Fundamentals of Tawheed",
      author: "Dr. Bilal Philips",
      category: "Aqeedah",
      pages: 156,
      downloadUrl: "/books/fundamentals-tawheed.pdf",
      description: "A comprehensive guide to understanding Islamic monotheism and its principles.",
      publishYear: 2020,
      language: "English",
      size: "2.1 MB"
    },
    {
      id: 2,
      title: "The Noble Quran - Translation",
      author: "Various Scholars",
      category: "Quran",
      pages: 604,
      downloadUrl: "/books/noble-quran.pdf",
      description: "Complete translation of the Holy Quran with commentary and explanations.",
      publishYear: 2019,
      language: "English",
      size: "15.3 MB"
    },
    {
      id: 3,
      title: "Sahih Bukhari - Selected Hadiths",
      author: "Imam Bukhari",
      category: "Hadith",
      pages: 342,
      downloadUrl: "/books/sahih-bukhari.pdf",
      description: "A collection of authentic hadiths from Sahih Bukhari with explanations.",
      publishYear: 2021,
      language: "English",
      size: "4.7 MB"
    },
    {
      id: 4,
      title: "Islamic Ethics and Morality",
      author: "Dr. Ahmad Hassan",
      category: "Akhlaq",
      pages: 234,
      downloadUrl: "/books/islamic-ethics.pdf",
      description: "Understanding Islamic values and moral principles for daily life.",
      publishYear: 2022,
      language: "English",
      size: "3.2 MB"
    },
    {
      id: 5,
      title: "The Sealed Nectar",
      author: "Safi-ur-Rahman al-Mubarakpuri",
      category: "Seerah",
      pages: 432,
      downloadUrl: "/books/sealed-nectar.pdf",
      description: "Complete biography of Prophet Muhammad (PBUH) - Award winning book.",
      publishYear: 2018,
      language: "English",
      size: "6.8 MB"
    },
    {
      id: 6,
      title: "Fiqh Made Easy",
      author: "Sheikh Saleh Al-Fawzan",
      category: "Fiqh",
      pages: 289,
      downloadUrl: "/books/fiqh-made-easy.pdf",
      description: "Simplified Islamic jurisprudence for modern Muslims.",
      publishYear: 2023,
      language: "English",
      size: "3.9 MB"
    }
  ];

  const categories = ['all', 'Aqeedah', 'Quran', 'Hadith', 'Akhlaq', 'Seerah', 'Fiqh'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (book) => {
    // In a real app, this would trigger the actual download
    console.log(`Downloading: ${book.title}`);
    // You can implement actual download logic here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
                Islamic <span className="text-blue-600">Books</span>
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download free Islamic books, scholarly works, and educational materials to deepen your understanding of Islam
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Search and Filter Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search books, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredBooks.length} of {books.length} books
            </div>
          </div>

          {/* Books Grid */}
          <div ref={booksGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBooks.map((book) => (
              <div key={book.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
                
                {/* Book Cover Placeholder */}
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 h-48 flex items-center justify-center relative overflow-hidden">
                  <FileText className="w-16 h-16 text-white opacity-80" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-white text-sm font-medium">{book.category}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Book Details */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{book.author}</span>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {book.description}
                  </p>

                  {/* Book Meta Info */}
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{book.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{book.publishYear}</span>
                    </div>
                    <div>
                      <span className="text-xs">Size: {book.size}</span>
                    </div>
                    <div>
                      <span className="text-xs">{book.language}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => handleDownload(book)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </button>
                </div>

                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBooks.length === 0 && (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No books found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>

        {/* GSAP Scripts */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      </div>
    </>
  );
};

export default BooksPage;