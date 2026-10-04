import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState<string>('');
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(true);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointers
    const mediaQuery = window.matchMedia('(pointer: fine)');
    const checkTouch = () => {
      setIsTouchDevice(!mediaQuery.matches || 'ontouchstart' in window);
    };
    checkTouch();
    mediaQuery.addEventListener('change', checkTouch);

    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovering(true);
      } else {
        const interactive = target.closest('a, button, [role="button"]');
        if (interactive) {
          setCursorText('');
          setIsHovering(true);
        } else {
          setCursorText('');
          setIsHovering(false);
        }
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener('change', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out will-change-transform"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: 0,
        top: 0
      }}
    >
      {cursorText ? (
        <div
          className="flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF4B26] px-3.5 py-1 text-[11px] font-semibold tracking-wider text-white shadow-lg backdrop-blur-sm transition-all duration-150"
          style={{ fontFamily: 'var(--font-interface)' }}
        >
          {cursorText}
        </div>
      ) : (
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 transition-all duration-150 ${
            isHovering
              ? 'h-9 w-9 bg-white/10 scale-125'
              : 'h-3.5 w-3.5 bg-[#FF4B26] shadow-sm'
          }`}
        />
      )}
    </div>
  );
};
