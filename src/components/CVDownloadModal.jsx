import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import devResume from '../assets/Reyes R Resume.pdf';
import vaResume from '../assets/Reyes R Resume VA.pdf';

const CVDownloadModal = ({ isOpen, onClose }) => {
  const handleDownload = (resumeUrl, filename) => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = filename;
    link.click();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-charcoal border-2 border-gold rounded-lg p-8 max-w-md w-full relative shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              {/* Modal Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">
                  Download <span className="gradient-text">CV</span>
                </h3>
                <p className="text-gray-400">Which CV would you like to download?</p>
              </div>

              {/* Download Options */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload(devResume, 'Reyes_R_Resume_Developer.pdf')}
                  className="w-full btn-primary gold-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Download size={20} />
                  Developer Resume
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDownload(vaResume, 'Reyes_R_Resume_VA.pdf')}
                  className="w-full btn-primary gold-glow flex items-center justify-center gap-3 text-lg"
                >
                  <Download size={20} />
                  Virtual Assistant Resume
                </motion.button>
              </div>

              {/* Cancel Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="w-full mt-4 btn-outline text-base py-2"
              >
                Cancel
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CVDownloadModal;
