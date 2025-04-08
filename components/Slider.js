import { useState } from 'react';

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const panels = ['/assets/panel-1.png', '/assets/panel-2.png', '/assets/panel-3.png', '/assets/panel-4.png', '/assets/panel-5.png'];

    const updateSliderPosition = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="slidingPanels">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {panels.map((src, index) => (
                    <div className="panel" key={index}>
                        <img src={src} alt={`Panel ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="prevBtn" onClick={() => updateSliderPosition((currentIndex > 0 ? currentIndex - 1 : panels.length - 1))}>❮</button>
            <button className="nextBtn" onClick={() => updateSliderPosition((currentIndex < panels.length - 1 ? currentIndex + 1 : 0))}>❯</button>
        </div>
    );
}
