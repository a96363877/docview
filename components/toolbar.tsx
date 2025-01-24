import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ZoomIn,
  ZoomOut,
  RotateCw,
  Hand,
  PenTool,
  Type,
  Highlighter,
  X,
} from 'lucide-react';

export function Toolbar({ onClose }: { onClose: () => void }) {
  const tools = [
    { icon: ZoomIn, label: 'Zoom In' },
    { icon: ZoomOut, label: 'Zoom Out' },
    { icon: RotateCw, label: 'Rotate' },
    { icon: Hand, label: 'Hand Tool' },
    { icon: PenTool, label: 'Pen Tool' },
    { icon: Type, label: 'Text Tool' },
    { icon: Highlighter, label: 'Highlighter' },
  ];

  return (
    <motion.aside
      className="w-16 border-l bg-gray-50 flex flex-col items-center py-4 gap-4 md:relative absolute inset-y-0 right-0 z-20"
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>
      {tools.map((tool, index) => (
        <motion.div
          key={tool.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
        >
          <Button variant="ghost" size="icon" title={tool.label}>
            <tool.icon className="h-4 w-4" />
          </Button>
        </motion.div>
      ))}
    </motion.aside>
  );
}
