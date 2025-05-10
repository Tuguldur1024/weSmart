'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BottomSheet() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const [isChecked, setIsChecked] = useState(true); 


  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Bottom Sheet */}
          <motion.div
            className="fixed bottom-0 left-0 w-full z-50
              bg-gradient-to-t from-[#0A0A23] to-[#1B1B3A] text-white
              rounded-t-2xl p-4"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <div className="h-1 w-12 bg-gray-400 mx-auto mb-4 rounded-full"></div>

            <div className="mb-4 flex items-center justify-between">
              <p className="text-lg">Асуудал бичих</p>
              <label className="inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isChecked}
  onChange={() => setIsChecked(!isChecked)} className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-green-500"></div>
              </label>
            </div>

            <textarea
              className="w-full rounded-lg p-2 bg-black bg-opacity-20 text-white mb-4"
              placeholder="Та энд бичнэ үү?........"
            ></textarea>

            <p className="mb-2">Зураг оруулах</p>
            <div className="w-full h-32 border border-gray-500 rounded-lg mb-4 flex items-center justify-center">
              <button className="text-blue-400">Upload Image</button>
            </div>

            <div className="flex justify-between gap-4">
              <button className="flex-1 bg-red-600 text-white py-2 rounded-full">Буцах</button>
              <button className="flex-1 bg-gradient-to-r from-[#00B2FF] to-[#4670DA] text-white py-2 rounded-full">Болсон</button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
