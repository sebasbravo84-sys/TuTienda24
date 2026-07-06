import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const ringX = useSpring(cursorX, { stiffness: 150, damping: 20 });
  const ringY = useSpring(cursorY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // Solo en desktop
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.style.cursor = 'none';

    const onMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      setIsHovering(!!e.target.closest('button, a, [role="button"], input, textarea'));
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);

    return () => {
      document.body.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <>
      {/* Punto exacto */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-white"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: isHovering ? 6 : 6, height: isHovering ? 6 : 6, opacity: isVisible ? 1 : 0 }}
      />

      {/* Ring con glow — sigue con lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-blue-400"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 12px rgba(96,165,250,0.5), 0 0 30px rgba(96,165,250,0.15)',
        }}
        animate={{
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? 1 : 0,
          borderColor: isHovering ? 'rgba(52,211,153,0.8)' : 'rgba(96,165,250,0.8)',
        }}
        transition={{ width: { duration: 0.2 }, height: { duration: 0.2 } }}
      />
    </>
  );
}
