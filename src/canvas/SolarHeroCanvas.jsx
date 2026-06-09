import { useEffect, useRef } from 'react';

/**
 * SolarHeroCanvas
 * Renders a real-time animated solar farm scene:
 *  - Deep gradient sky
 *  - Glowing sun on horizon with pulsing corona rings and rotating rays
 *  - Atmospheric crepuscular light shafts
 *  - Perspective solar panel array with shimmer / sun-reflection
 *  - Floating golden energy particles
 *  - Glowing horizon line
 */
const SolarHeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let rafId;
    let time = 0;

    /* ── Resize handler ── */
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    /* ── Energy particles ── */
    const NUM_PARTICLES = 80;
    const particles = Array.from({ length: NUM_PARTICLES }, () => ({
      x: Math.random(),       // 0-1 relative
      y: Math.random(),
      size: Math.random() * 2 + 0.4,
      vx: (Math.random() - 0.5) * 0.0006,
      vy: -(Math.random() * 0.0012 + 0.0003),
      life: Math.random(),
      maxLife: Math.random() * 0.5 + 0.5,
    }));

    /* ── Main draw loop ── */
    const draw = () => {
      time += 0.008;
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      /* ─── 1. Sky gradient ─── */
      const sky = ctx.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0.00, '#010914');
      sky.addColorStop(0.30, '#051530');
      sky.addColorStop(0.58, '#0f2044');
      sky.addColorStop(0.72, '#1a2a50');
      sky.addColorStop(0.85, '#1c1a30');
      sky.addColorStop(1.00, '#0a0812');
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);

      /* ─── 2. Sun position ─── */
      const sunX  = W * 0.50;
      const horizY = H * 0.52;
      const sunY  = horizY - H * 0.02;
      const sunR  = Math.min(W, H) * 0.038 + Math.sin(time * 0.6) * 1.5;

      /* ─── 3. Horizon atmospheric glow ─── */
      const hg = ctx.createRadialGradient(sunX, horizY, 0, sunX, horizY, W * 0.75);
      hg.addColorStop(0.00, 'rgba(255,160,50,0.28)');
      hg.addColorStop(0.18, 'rgba(249,115,22,0.18)');
      hg.addColorStop(0.45, 'rgba(249,115,22,0.07)');
      hg.addColorStop(1.00, 'transparent');
      ctx.fillStyle = hg;
      ctx.fillRect(0, 0, W, H);

      /* ─── 4. Crepuscular light shafts ─── */
      const shaftAngles = [-0.38, -0.19, 0, 0.19, 0.38, -0.56, 0.56];
      shaftAngles.forEach((da, i) => {
        const baseAngle = -Math.PI / 2;
        const angle = baseAngle + da;
        const len   = H * 1.8;
        const halfW = (0.06 + i * 0.008) * W;
        const x2 = sunX + Math.cos(angle - halfW / len) * len;
        const y2 = sunY + Math.sin(angle - halfW / len) * len;
        const x3 = sunX + Math.cos(angle + halfW / len) * len;
        const y3 = sunY + Math.sin(angle + halfW / len) * len;

        const pulse = 0.028 + Math.sin(time * 0.4 + i * 1.3) * 0.014;
        const sg = ctx.createLinearGradient(sunX, sunY, x2, y2);
        sg.addColorStop(0.00, `rgba(255,200,100,${pulse * 2.5})`);
        sg.addColorStop(0.12, `rgba(249,130,22,${pulse})`);
        sg.addColorStop(0.50, `rgba(249,115,22,${pulse * 0.4})`);
        sg.addColorStop(1.00, 'transparent');

        ctx.fillStyle = sg;
        ctx.beginPath();
        ctx.moveTo(sunX, sunY);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.closePath();
        ctx.fill();
      });

      /* ─── 5. Perspective solar panel array ─── */
      const ROWS = 10;
      const COLS = 14;
      const vanX = sunX;
      const vanY = horizY;
      const floorBottom = H * 1.0;
      const floorLeft   = -W * 0.35;
      const floorRight  =  W * 1.35;
      const ROW_CURVE   = 2.5;   // perspective exponent

      for (let row = 0; row < ROWS; row++) {
        const t0 = Math.pow(row / ROWS,       1 / ROW_CURVE);
        const t1 = Math.pow((row + 1) / ROWS, 1 / ROW_CURVE);

        const rowY0 = vanY + (floorBottom - vanY) * t0;
        const rowY1 = vanY + (floorBottom - vanY) * t1;
        const rowL0 = vanX + (floorLeft  - vanX) * t0;
        const rowR0 = vanX + (floorRight - vanX) * t0;
        const rowL1 = vanX + (floorLeft  - vanX) * t1;
        const rowR1 = vanX + (floorRight - vanX) * t1;

        const gapFrac = 0.025;
        const rowGapY = (rowY1 - rowY0) * 0.08;

        for (let col = 0; col < COLS; col++) {
          const c0 = col / COLS       + gapFrac;
          const c1 = (col + 1) / COLS - gapFrac;

          const px0 = rowL0 + (rowR0 - rowL0) * c0;
          const px1 = rowL0 + (rowR0 - rowL0) * c1;
          const px2 = rowL1 + (rowR1 - rowL1) * c1;
          const px3 = rowL1 + (rowR1 - rowL1) * c0;

          const y0 = rowY0 + rowGapY;
          const y1 = rowY1 - rowGapY;

          /* Base panel color - deep navy-blue solar cell */
          const shimmer = 0.55 + Math.sin(time * 0.7 + col * 0.45 + row * 0.6) * 0.15;
          const pg = ctx.createLinearGradient(px0, y0, (px0 + px2) / 2, y1);
          pg.addColorStop(0.00, `rgba(12, 55, 130, ${shimmer * 0.9})`);
          pg.addColorStop(0.35, `rgba(8,  38,  95, ${shimmer * 0.75})`);
          pg.addColorStop(0.65, `rgba(18, 75, 170, ${shimmer * 0.85})`);
          pg.addColorStop(1.00, `rgba(5,  22,  60, ${shimmer * 0.65})`);

          ctx.fillStyle = pg;
          ctx.beginPath();
          ctx.moveTo(px0, y0);
          ctx.lineTo(px1, y0);
          ctx.lineTo(px2, y1);
          ctx.lineTo(px3, y1);
          ctx.closePath();
          ctx.fill();

          /* Panel cell grid lines */
          ctx.strokeStyle = `rgba(80,130,255,${shimmer * 0.25})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();

          /* Sun reflection glint — travelling highlight */
          const glintPhase = Math.sin(time * 0.5 + col * 0.55 + row * 0.35);
          if (glintPhase > 0.55) {
            const gOp = (glintPhase - 0.55) * 2.5 * 0.22;
            const glintG = ctx.createLinearGradient(px0, y0, px1, y1);
            glintG.addColorStop(0,   `rgba(255,220,120,0)`);
            glintG.addColorStop(0.4, `rgba(255,220,120,${gOp})`);
            glintG.addColorStop(1,   `rgba(255,200,80,0)`);
            ctx.fillStyle = glintG;
            ctx.beginPath();
            ctx.moveTo(px0, y0);
            ctx.lineTo(px1, y0);
            ctx.lineTo(px2, y1);
            ctx.lineTo(px3, y1);
            ctx.closePath();
            ctx.fill();
          }

          /* Inverter posts between rows */
          if (col === Math.floor(COLS / 2) && row < ROWS - 1) {
            const postX = (px0 + px1) / 2;
            const postH = (rowY1 - rowY0) * 0.6;
            const postW = Math.max(1, (rowR0 - rowL0) / COLS * 0.06);
            ctx.fillStyle = 'rgba(180,200,255,0.18)';
            ctx.fillRect(postX - postW / 2, rowY1 - postH, postW, postH);
          }
        }

        /* Horizontal wiring / bus bar */
        const wireY = (rowY0 + rowY1) / 2;
        const wl = rowL0 + (rowR0 - rowL0) * gapFrac;
        const wr = rowL0 + (rowR0 - rowL0) * (1 - gapFrac);
        ctx.strokeStyle = `rgba(100,160,255,${0.12 + Math.sin(time + row) * 0.04})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(wl, wireY);
        ctx.lineTo(wr, wireY);
        ctx.stroke();
      }

      /* ─── 6. Horizon glow line ─── */
      const hl = ctx.createLinearGradient(0, horizY, W, horizY);
      hl.addColorStop(0.00, 'transparent');
      hl.addColorStop(0.25, 'rgba(249,115,22,0.45)');
      hl.addColorStop(0.50, 'rgba(255,200,80,0.90)');
      hl.addColorStop(0.75, 'rgba(249,115,22,0.45)');
      hl.addColorStop(1.00, 'transparent');
      ctx.strokeStyle = hl;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, horizY);
      ctx.lineTo(W, horizY);
      ctx.stroke();

      /* ─── 7. Sun corona rings ─── */
      for (let ring = 4; ring >= 0; ring--) {
        const rr = sunR * (1.6 + ring * 0.9) + Math.sin(time * 0.55 + ring * 0.9) * 4;
        const op = (0.18 - ring * 0.03) * (0.65 + Math.sin(time * 0.8 + ring) * 0.35);
        const cg = ctx.createRadialGradient(sunX, sunY, rr * 0.5, sunX, sunY, rr);
        cg.addColorStop(0, `rgba(255,170,50,${op})`);
        cg.addColorStop(1, 'transparent');
        ctx.fillStyle = cg;
        ctx.beginPath();
        ctx.arc(sunX, sunY, rr, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ─── 8. Sun rays (rotating) ─── */
      const NUM_RAYS = 16;
      for (let r = 0; r < NUM_RAYS; r++) {
        const angle = (r / NUM_RAYS) * Math.PI * 2 + time * 0.18;
        const rLen  = sunR * 2.2 + Math.sin(time * 1.2 + r) * sunR * 0.5;
        const x1 = sunX + Math.cos(angle) * (sunR + 2);
        const y1 = sunY + Math.sin(angle) * (sunR + 2);
        const x2 = sunX + Math.cos(angle) * (sunR + rLen);
        const y2 = sunY + Math.sin(angle) * (sunR + rLen);
        const op = 0.35 + Math.sin(time * 1.5 + r * 0.8) * 0.2;
        const rg = ctx.createLinearGradient(x1, y1, x2, y2);
        rg.addColorStop(0, `rgba(255,210,80,${op})`);
        rg.addColorStop(1, 'transparent');
        ctx.strokeStyle = rg;
        ctx.lineWidth = 1.2 + Math.sin(time + r) * 0.4;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      /* ─── 9. Sun core ─── */
      const sc = ctx.createRadialGradient(sunX - sunR * 0.2, sunY - sunR * 0.2, 0, sunX, sunY, sunR);
      sc.addColorStop(0.00, '#ffffff');
      sc.addColorStop(0.25, '#fffde0');
      sc.addColorStop(0.55, '#fbbf24');
      sc.addColorStop(0.80, '#f97316');
      sc.addColorStop(1.00, 'rgba(249,115,22,0)');
      ctx.fillStyle = sc;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();

      /* Sun inner specular */
      const spec = ctx.createRadialGradient(sunX - sunR * 0.3, sunY - sunR * 0.3, 0, sunX, sunY, sunR * 0.7);
      spec.addColorStop(0, 'rgba(255,255,255,0.65)');
      spec.addColorStop(1, 'transparent');
      ctx.fillStyle = spec;
      ctx.beginPath();
      ctx.arc(sunX, sunY, sunR, 0, Math.PI * 2);
      ctx.fill();

      /* ─── 10. Stars / night sky sparkles ─── */
      if (time < 0.5 || true) {  // always show stars in upper sky
        const starCount = 60;
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        for (let s = 0; s < starCount; s++) {
          // deterministic positions from seed
          const sx = ((s * 137.508 + 20) % W);
          const sy = ((s * 97.31  + 10) % (horizY * 0.75));
          const sr = 0.4 + (s % 4) * 0.2;
          const sOp = 0.3 + Math.sin(time * 1.2 + s * 0.7) * 0.3;
          ctx.globalAlpha = sOp;
          ctx.beginPath();
          ctx.arc(sx, sy, sr, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      }

      /* ─── 11. Energy particles ─── */
      particles.forEach(p => {
        p.x  += p.vx;
        p.y  += p.vy;
        p.life += 0.006;

        if (p.y < 0 || p.life > p.maxLife) {
          p.x    = Math.random();
          p.y    = 0.55 + Math.random() * 0.45;
          p.life = 0;
          p.vx   = (Math.random() - 0.5) * 0.0006;
          p.vy   = -(Math.random() * 0.0012 + 0.0003);
          p.size = Math.random() * 2 + 0.4;
          p.maxLife = Math.random() * 0.5 + 0.5;
        }

        const lifeRatio = p.life / p.maxLife;
        const pOp = Math.sin(lifeRatio * Math.PI) * 0.75;
        const px = p.x * W;
        const py = p.y * H;

        /* Glow */
        const pg = ctx.createRadialGradient(px, py, 0, px, py, p.size * 4);
        pg.addColorStop(0, `rgba(255,180,50,${pOp * 0.4})`);
        pg.addColorStop(1, 'transparent');
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(px, py, p.size * 4, 0, Math.PI * 2);
        ctx.fill();

        /* Core dot */
        ctx.fillStyle = `rgba(255,210,80,${pOp})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      /* ─── 12. Ground dark vignette ─── */
      const gv = ctx.createLinearGradient(0, H * 0.85, 0, H);
      gv.addColorStop(0, 'transparent');
      gv.addColorStop(1, 'rgba(1,5,18,0.7)');
      ctx.fillStyle = gv;
      ctx.fillRect(0, H * 0.85, W, H * 0.15);

      /* ─── 13. Side vignettes ─── */
      const lv = ctx.createLinearGradient(0, 0, W * 0.18, 0);
      lv.addColorStop(0, 'rgba(1,5,18,0.6)');
      lv.addColorStop(1, 'transparent');
      ctx.fillStyle = lv;
      ctx.fillRect(0, 0, W * 0.18, H);

      const rv = ctx.createLinearGradient(W * 0.82, 0, W, 0);
      rv.addColorStop(0, 'transparent');
      rv.addColorStop(1, 'rgba(1,5,18,0.6)');
      ctx.fillStyle = rv;
      ctx.fillRect(W * 0.82, 0, W * 0.18, H);

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
};

export default SolarHeroCanvas;
