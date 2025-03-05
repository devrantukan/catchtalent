"use client";

import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  videoId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({
  videoId,
  isOpen,
  onClose,
}: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.95 }}
          className="w-[90vw] h-[90vh] relative"
          onClick={(e) => e.stopPropagation()}
        >
          <iframe
            src={`https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl bg-black/50 w-8 h-8 rounded-full flex items-center justify-center hover:bg-black/75"
          >
            ×
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
