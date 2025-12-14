import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export const Transformation: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Robust Resize Observer to handle image width perfectly
  useEffect(() => {
    if (!containerRef.current) return;

    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    // Initial width
    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });

    resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

    // Calculate percentage from LEFT edge of container
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    const clampedPosition = Math.min(Math.max(position, 0), 100);
    
    setSliderPosition(clampedPosition);
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e);
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('touchend', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('touchend', handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="py-16 bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 reveal">
          <div>
             <span className="text-bronze-500 font-bold tracking-widest uppercase text-xs mb-2 block">המהפך</span>
             <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
              שקט בעיניים.<br/>
              <span className="text-stone-500">לפני ואחרי.</span>
            </h2>
          </div>
          <p className="text-stone-400 font-sans font-light mt-4 md:mt-0 max-w-sm text-left rtl:text-right">
            החליקו כדי לראות את ההבדל בין רצפה סטנדרטית לעבודת אומנות.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          ref={containerRef}
          className="relative w-full h-[350px] md:h-[500px] rounded-sm overflow-hidden cursor-ew-resize group shadow-2xl shadow-black/50 select-none touch-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMove}
          onTouchStart={handleMouseDown}
        >
          {/* BACKGROUND LAYER -> AFTER (The Future/Result) - Visible on LEFT */}
          <div className="absolute inset-0">
             <img 
              src="https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1600&auto=format&fit=crop" 
              alt="After Flooring" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            {/* Label: Left Side */}
            <div className="absolute top-6 left-6 bg-stone-900/80 backdrop-blur text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm border border-white/10 shadow-lg z-10">
              אחרי
            </div>
          </div>

          {/* OVERLAY LAYER -> BEFORE (The Past/Raw) - Anchored RIGHT */}
          {/* As width increases, it covers more from Right to Left */}
          <div 
            className="absolute top-0 bottom-0 right-0 overflow-hidden border-l-4 border-white shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            style={{ width: `${100 - sliderPosition}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1628151016004-e538f9720c24?q=80&w=1600&auto=format&fit=crop" 
              alt="Before Flooring" 
              className="absolute top-0 h-full object-cover max-w-none"
              // CRITICAL: Force the inner image to match the full container width 
              // so it doesn't squish when the parent div shrinks.
              // Also anchor it right so it aligns with the overlay.
              style={{ width: containerWidth ? `${containerWidth}px` : '100%', right: 0 }} 
              draggable="false"
            />
             {/* Darken the "Before" state slightly to make "After" pop more */}
             <div className="absolute inset-0 bg-black/40"></div>
             
             {/* Label: Right Side */}
             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm shadow-lg z-10">
              לפני
            </div>
          </div>

          {/* Slider Handle Line */}
          <div 
            className="absolute top-0 bottom-0 w-px bg-transparent z-20"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-bronze-500/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-white/50 transition-transform duration-200 group-hover:scale-110">
              <ChevronsLeftRight className="text-white w-6 h-6" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};