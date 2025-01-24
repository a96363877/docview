'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import MenuBar from './menu';
import ThumbnailSidebar from './thum';
import { Toolbar } from './toolbar';
import PDFViewer from './PDFViewr';

export default function DocumentViewer() {
  const [showThumbnails, setShowThumbnails] = useState(true);
  const [showToolbar, setShowToolbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowThumbnails(true);
        setShowToolbar(true);
        setIsMobileMenuOpen(false);
      } else {
        setShowThumbnails(false);
        setShowToolbar(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <MenuBar
        onToggleThumbnails={() => setShowThumbnails(!showThumbnails)}
        onToggleToolbar={() => setShowToolbar(!showToolbar)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />
      <div className="flex flex-1 overflow-hidden">
        <AnimatePresence>
          {(showThumbnails || isMobileMenuOpen) && (
            <ThumbnailSidebar onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
        <motion.main
          className="flex-1 overflow-auto p-4 bg-white"
          layout
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-gray-100 w-full h-full rounded-lg flex items-center justify-center text-2xl font-bold text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PDFViewer />
          </motion.div>
          <motion.div
            className="mt-4 flex justify-center gap-2 absolute bottom-0 left-0 right-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </motion.main>
        <AnimatePresence>
          {(showToolbar || isMobileMenuOpen) && (
            <Toolbar onClose={() => setIsMobileMenuOpen(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
