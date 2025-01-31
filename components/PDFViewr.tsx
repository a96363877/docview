'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { usePdf } from '@mikecousins/react-pdf';

export default function PDFViewer() {
  //  const [document, setDocument] = useState<lt.Document | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      //  loadPDF(file);
    }
  };

  const changePage = (offset: number) => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + offset;
      if (newPage > 0 && newPage <= totalPages) {
        // renderPage(document!, newPage);
        return newPage;
      }
      return prevPage;
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="border rounded-lg  w-full">
    <div className='page bg-white '>
      <h2 className='text-black p-2'>Hello World</h2>
    </div>
      </div>
    </div>
  );
}
