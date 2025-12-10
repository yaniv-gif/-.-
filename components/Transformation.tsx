
import React, { useState, useRef, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

export const Transformation: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    
    // Calculate position relative to container
    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as React.MouseEvent).clientX;
    }

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

  // Add global event listeners for smoother dragging outside container
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false;
    };
    
    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, []);

  return (
    <section className="py-24 bg-stone-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
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
          className="relative w-full h-[400px] md:h-[600px] rounded-sm overflow-hidden cursor-ew-resize group shadow-2xl shadow-black/50"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchMove={handleMove}
        >
          {/* AFTER Image (Background - The "New" Floor) */}
          <div className="absolute inset-0">
             <img 
              src="https://images.unsplash.com/photo-1581850518616-bcb8077a2536?q=80&w=1600&auto=format&fit=crop" 
              alt="After Flooring" 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-stone-900/80 backdrop-blur text-white px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm">
              אחרי
            </div>
          </div>

          {/* BEFORE Image (Clipped overlay - The "Old" Floor) */}
          {/* Using raw concrete/construction image */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1628151016004-e538f9720c24?q=80&w=1600&auto=format&fit=crop" 
              alt="Before Flooring" 
              className="absolute top-0 w-full h-full object-cover max-w-none"
              // Note: We set width to container width via max-w-none to prevent squishing
              style={{ width: containerRef.current?.offsetWidth || '100%' }} 
            />
             {/* Overlay for darker "before" vibe */}
             <div className="absolute inset-0 bg-stone-900/40"></div>
             
             <div className="absolute top-6 right-6 bg-white/90 backdrop-blur text-stone-900 px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-sm">
              לפני
            </div>
          </div>

          {/* Slider Handle Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            {/* Handle Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-bronze-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white transition-transform group-hover:scale-110">
              <ChevronsLeftRight className="text-white w-5 h-5" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
