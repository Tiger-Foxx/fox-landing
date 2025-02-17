import  {useEffect, useRef} from 'react';

const MatrixRain = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Ajuster la taille du canvas à la fenêtre
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Caractères pour la pluie (incluant des chiffres binaires et des caractères japonais)
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        const columns = canvas.width / fontSize;

        // Position Y de chaque colonne
        const drops = new Array(Math.floor(columns)).fill(1);

        // Couleur verte caractéristique
        const green = '#58d5c2';

        const draw = () => {
            // Créer un effet de fondu
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Style pour les caractères
            ctx.fillStyle = green;
            ctx.font = `${fontSize}px monospace`;

            // Dessiner les caractères
            for (let i = 0; i < drops.length; i++) {
                // Caractère aléatoire
                const char = chars[Math.floor(Math.random() * chars.length)];

                // Position X calculée en fonction de l'index
                const x = i * fontSize;
                // Position Y mise à jour
                const y = drops[i] * fontSize;

                // Faire varier légèrement l'opacité pour un effet plus dynamique
                ctx.fillStyle = `rgba(88, 213, 194, ${Math.random() * 0.5 + 0.5})`;

                // Dessiner le caractère
                ctx.fillText(char, x, y);

                // Réinitialiser la position quand on atteint le bas ou aléatoirement
                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Faire "tomber" le caractère
                drops[i]++;
            }
        };

        // Animation loop
        const interval = setInterval(draw, 35);

        // Cleanup
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none z-0"
            style={{ mixBlendMode: 'screen' }}
        />
    );
};

export default MatrixRain;