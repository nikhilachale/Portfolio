import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Cursor() {
    const cursorRef = useRef(null);  // Reference to cursor div

    useEffect(() => {
        const moveCursor = (dets) => {
            const { clientX: x, clientY: y } = dets;
            gsap.to(cursorRef.current, {
                x: x,
                y: y,
                duration: 2,
                ease: "back.out(1)"
            });
        };

        // Add listener to window
        window.addEventListener('mousemove', moveCursor);

        // Cleanup to prevent memory leaks
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <div 
            ref={cursorRef}
            className="cursor bg-red-400 h-4 w-4 rounded-full fixed top-0 left-0 pointer-events-none"
            style={{
                zIndex: 2,  
            }}
        />
    );
}

export default Cursor;