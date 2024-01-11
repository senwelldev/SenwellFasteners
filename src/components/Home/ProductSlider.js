import React, { useRef, useEffect } from "react";
import "./ProductSlider.css"; 

const LogoScroller = () => {
  const logos = [
    "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/nuts%2FAcorn.webp?alt=media&token=e015ad8d-a432-427e-bc24-a07d21f40744",
    "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/category%2FWasher%20Pressed%20Part.webp?alt=media&token=cdfde238-995b-4069-a0c4-a1720454278d",
    "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/category%2FBrass%20Anchors.webp?alt=media&token=1760a390-2652-4060-915f-a3019b111aff",
    "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/inserts%2FUltrasonic%20Inserts.webp?alt=media&token=05c6d4a8-db1c-4609-8a52-e372f6c5f80b",    
    "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/spacers%2FBrass%20Spacers.webp?alt=media&token=c3f55ef7-7c3f-4102-aad9-ac2a43c9475f",
    "https://firebasestorage.googleapis.com/v0/b/senwell-fasteners/o/category%2FBrass%20pins.webp?alt=media&token=38822af0-10a5-4691-8350-645d9d1955b3",
   
  ];

  const logosRef = useRef();

  useEffect(() => {
    const copy = logosRef.current.cloneNode(true);
    logosRef.current.parentNode.appendChild(copy);

    const handleAnimationIteration = () => {
      logosRef.current.style.marginLeft = "0";
    };

    const animate=logosRef.current.addEventListener(
      "animationiteration",
      handleAnimationIteration
    );

    return () => {
      animate?.removeEventListener(
        "animationiteration",
        handleAnimationIteration
      );
    };
  }, []);

  return (
    <div className="logos">
      <div className="logos-slide" ref={logosRef}>
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`}  loading="lazy" />
        ))}
      </div>
    </div>
  );
};

export default LogoScroller;
