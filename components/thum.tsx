import { motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function ThumbnailSidebar({ onClose }: { onClose: () => void }) {
  const thumbnails = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <motion.aside
      className="w-64 border-r bg-gray-50 flex flex-col md:relative absolute inset-y-0 left-0 z-20"
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      exit={{ x: '-100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold">Thumbnails</h2>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="grid grid-cols-2 gap-2 p-4">
          {thumbnails.map((num) => (
            <motion.div
              key={num}
              className="bg-white border rounded aspect-[3/4] flex items-center justify-center text-sm text-gray-500"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: num * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Page {num}
            </motion.div>
          ))}
        </div>
      </ScrollArea>
    </motion.aside>
  );
}
