import { useRef, useState } from 'react';
import { Card, CardProps } from './card';

interface InteractiveCardProps extends CardProps {
  children: React.ReactNode;
  intensity?: number;
}

const InteractiveCard = ({ 
  children, 
  intensity = 0.1, 
  className = '', 
  ...props 
}: InteractiveCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateX = (e.clientY - centerY) * intensity;
    const rotateY = (centerX - e.clientX) * intensity;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <Card
      ref={cardRef}
      className={`transition-all duration-300 ease-out transform-gpu ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${
          isHovered ? 'scale(1.02)' : 'scale(1)'
        }`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </Card>
  );
};

export default InteractiveCard;