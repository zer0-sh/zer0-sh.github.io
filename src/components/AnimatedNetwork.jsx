import React, { useEffect, useRef, useState } from 'react';

export const AnimatedNetwork = () => {

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas size
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setDimensions({ width: canvas.width, height: canvas.height });
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Initialize nodes - fewer on mobile
    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 8 : 15;
    if (nodesRef.current.length === 0) {
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
          glow: 0,
          glowTarget: 0,
        });
      }
    }

    // Initialize lines
    const ctx = canvas.getContext('2d');

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(11, 11, 15, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;

      // Update nodes
      nodes.forEach((node) => {
        // Move node
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x));
        node.y = Math.max(0, Math.min(canvas.height, node.y));

        // Update glow
        node.glow += (node.glowTarget - node.glow) * 0.1;

        // Random glow activation
        if (Math.random() < 0.005) {
          node.glowTarget = Math.random() * 0.8 + 0.2;
        }

        // Draw node
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius * 3);
        gradient.addColorStop(0, `rgba(255, 59, 59, ${node.glow * 0.8})`);
        gradient.addColorStop(0.5, `rgba(106, 27, 154, ${node.glow * 0.4})`);
        gradient.addColorStop(1, 'rgba(106, 27, 154, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(node.x - node.radius * 3, node.y - node.radius * 3, node.radius * 6, node.radius * 6);

        // Draw node core
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + node.glow * 0.4})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw lines between nearby nodes
      const isMobile = window.innerWidth < 768;
      const maxDistance = isMobile ? 120 : 150;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.3;
            const lineOpacity = (nodes[i].glow + nodes[j].glow) * 0.2 + opacity;

            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            gradient.addColorStop(0, `rgba(255, 59, 59, ${lineOpacity})`);
            gradient.addColorStop(1, `rgba(106, 27, 154, ${lineOpacity})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
};
