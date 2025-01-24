import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileText, Save, Printer, Download, Search, SidebarOpen, PanelRightOpen, Menu } from "lucide-react"

interface MenuBarProps {
  onToggleThumbnails: () => void
  onToggleToolbar: () => void
  onToggleMobileMenu: () => void
}

export default function MenuBar({ onToggleThumbnails, onToggleToolbar, onToggleMobileMenu }: MenuBarProps) {
  return (
    <motion.header
      className="bg-gray-100 border-b p-2 flex items-center justify-between"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="md:hidden" onClick={onToggleMobileMenu}>
          <Menu className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <FileText className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Save className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Printer className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
        <Input type="text" placeholder="Search..." className="w-32 sm:w-64" />
        <Button variant="ghost" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </motion.div>
      <div className="hidden md:flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={onToggleThumbnails}>
          <SidebarOpen className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onToggleToolbar}>
          <PanelRightOpen className="h-4 w-4" />
        </Button>
      </div>
    </motion.header>
  )
}

