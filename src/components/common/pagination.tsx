'use client';
import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useRouter, useSearchParams } from 'next/navigation';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPageParam = searchParams.get('page') || '1';
  const currentPage = Number(currentPageParam);

  const handlePrev = () => {
    const newPage = Math.max(currentPage - 1, 1);
    updatePage(newPage);
  };

  const handleNext = () => {
    const newPage = Math.min(currentPage + 1, totalPages);
    updatePage(newPage);
  };

  const updatePage = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  };

  useEffect(() => {
    if (currentPage < 1 || currentPage > totalPages) {
      updatePage(1); // Reset to the first page if the current page is invalid
    }
  }, [currentPage, totalPages]);

  return (
    <div className='flex justify-between items-center px-6 py-4'>
      {/* Previous Button */}
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className='flex items-center gap-2 disabled:opacity-50 text-teal-600 hover:text-teal-700 disabled:cursor-not-allowed'>
        <FaArrowLeft />
        <span>Prev</span>
      </button>

      {/* Page Info */}
      <span className='font-medium text-gray-800 dark:text-gray-300'>
        {currentPage} / {totalPages} pages
      </span>

      {/* Next Button */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className='flex items-center gap-2 disabled:opacity-50 text-teal-600 hover:text-teal-700 disabled:cursor-not-allowed'>
        <span>Next</span>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
