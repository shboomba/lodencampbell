import { useEffect, useRef } from "react";

const ACCENT     = "#3dd68c";
const N          = 3;
const FALL_FRAC  = 0.65;

const rand = (a, b) => a + Math.random() * (b - a);

const S = {
  WALK: "walk", WAVE: "wave", FALL: "fall", LAND: "land",
  GETUP: "getup", BRUSH: "brush", DRAG: "drag", SEEK: "seek", HANG: "hang",
  JUMP: "jump", DROP: "drop",
};

class Char {
  constructor(i, cw, ch) {
    this.size      = rand(13, 18);
    this.x         = rand(cw * 0.05, cw * 0.95);
    this.y         = this._groundY(ch);
    this.homeX     = this.x;
    this.vx        = (i % 2 === 0 ? 1 : -1) * rand(0.38, 0.65);
    this.vy        = 0;
    this.facing    = this.vx > 0 ? 1 : -1;
    this.state     = S.WALK;
    this.walkPh    = rand(0, Math.PI * 2);
    this.wavePh    = 0;
    this.hangPh    = 0;
    this.tick      = 0;
    this.stTick    = 0;
    this.nextWave  = Math.floor(rand(120, 300));
    this.nextHang  = Math.floor(rand(180, 420));
    this.savedVx   = 0;
    this.rotAngle  = 0;
    this.rotVel    = 0;
    this.scaleY    = 1;
    this.getupProg = 0;
    this.targetX   = 0;
    this.hangY     = 0;
  }

  _groundY(ch) { return ch - 2 - this.size * 1.06; }

  update(cw, ch, hangPoints, allChars) {
    const ground = this._groundY(ch);

    if (this.state === S.WALK) {
      this.tick++;
      this.walkPh += 0.072;
      this.x      += this.vx;
      this.y       = ground;

      this.vx += (this.homeX - this.x) * 0.00025;
      this.vx  = Math.sign(this.vx) * Math.min(Math.abs(this.vx), 1.1);
      if (Math.abs(this.vx) > 0.08) this.facing = this.vx > 0 ? 1 : -1;

      if (this.x < 24)      { this.x = 24;      this.vx =  Math.abs(this.vx); this.facing =  1; }
      if (this.x > cw - 24) { this.x = cw - 24; this.vx = -Math.abs(this.vx); this.facing = -1; }

      // hang trigger
      this.nextHang--;
      if (this.nextHang <= 0 && hangPoints.length > 0) {
        const hp = hangPoints[Math.floor(Math.random() * hangPoints.length)];
        // Count others already hanging/jumping/seeking at this button
        const atBtn = allChars.filter(c => c !== this &&
          (c.state === S.HANG || c.state === S.JUMP || c.state === S.SEEK) &&
          Math.abs(c.hangY - hp.y) < 10
        );
        const slot    = atBtn.length;
        const spacing = this.size * 3.2;
        const offset  = slot === 0 ? 0 : (slot % 2 === 1 ? 1 : -1) * Math.ceil(slot / 2) * spacing;
        this.targetX   = Math.max(24, Math.min(cw - 24, hp.x + offset));
        this.hangY     = hp.y;
        this.savedVx   = this.vx;
        this.state     = S.SEEK;
        this.nextHang  = Math.floor(rand(260, 520));
      }

      if (this.tick >= this.nextWave) {
        this.state    = S.WAVE;
        this.stTick   = Math.floor(rand(90, 145));
        this.wavePh   = 0;
        this.savedVx  = this.vx;
        this.vx       = 0;
        this.tick     = 0;
        this.nextWave = Math.floor(rand(160, 380));
      }
    }

    else if (this.state === S.SEEK) {
      this.walkPh += 0.072;
      const dx    = this.targetX - this.x;
      if (Math.abs(dx) > 4) this.facing = dx > 0 ? 1 : -1;
      this.y = ground;

      if (Math.abs(dx) < 10) {
        // arrived — launch upward toward hang point
        this.x     = this.targetX;
        this.vx    = 0;
        this.vy    = -Math.sqrt(2 * 0.6 * Math.max(ground - this.hangY, 10)) * 1.12;
        this.state = S.JUMP;
      } else {
        this.vx = Math.sign(dx) * Math.min(Math.abs(dx) * 0.06, 1.0);
        this.x += this.vx;
      }
    }

    else if (this.state === S.JUMP) {
      this.vy += 0.6;
      this.y  += this.vy;
      if (this.y <= this.hangY) {
        this.y      = this.hangY;
        this.vy     = 0;
        this.state  = S.HANG;
        this.hangPh = 0;
        this.stTick = Math.floor(rand(120, 240));
      }
    }

    else if (this.state === S.HANG) {
      this.hangPh += 0.035;
      this.stTick--;
      if (this.stTick <= 0) {
        this.state  = S.FALL;
        this.vy     = 0.5;
        this.vx     = this.facing * rand(0.4, 1.2);
        this.rotVel = (Math.random() > 0.5 ? 1 : -1) * rand(0.02, 0.07);
      }
    }

    else if (this.state === S.WAVE) {
      this.wavePh += 0.13;
      this.stTick--;
      if (this.stTick <= 0) { this.state = S.WALK; this.vx = this.savedVx; }
    }

    else if (this.state === S.FALL) {
      this.vy      += 0.38;
      this.x       += this.vx;
      this.y       += this.vy;
      this.rotAngle += this.rotVel;
      this.rotVel  *= 0.985;

      if (this.x < 20)      { this.x = 20;      this.vx =  Math.abs(this.vx) * 0.55; }
      if (this.x > cw - 20) { this.x = cw - 20; this.vx = -Math.abs(this.vx) * 0.55; }

      if (this.y >= ground) {
        this.y        = ground;
        this.vy       = 0;
        this.vx       = 0;
        this.rotAngle = 0;
        this.state    = S.LAND;
        this.stTick   = 55;
        this.scaleY   = 0.38;
      }
    }

    else if (this.state === S.LAND) {
      this.stTick--;
      // spring up only in the last 14 frames, hold flat until then
      if (this.stTick < 14) this.scaleY += (1 - this.scaleY) * 0.22;
      if (this.stTick <= 0) {
        this.scaleY = 1;
        this.state  = S.BRUSH;
        this.stTick = 55;
        this.wavePh = 0;
      }
    }

    else if (this.state === S.GETUP) {
      this.stTick--;
      this.getupProg = 1 - (this.stTick / 42);
      if (this.stTick <= 0) {
        this.state  = S.BRUSH;
        this.stTick = 55;
        this.wavePh = 0;
      }
    }

    else if (this.state === S.BRUSH) {
      this.wavePh += 0.18;
      this.stTick--;
      if (this.stTick <= 0) {
        this.state = S.WALK;
        this.vx    = this.facing * rand(0.38, 0.65);
      }
    }

    else if (this.state === S.DROP) {
      this.vy += 0.6;
      this.y  += this.vy;
      if (this.y >= ground) {
        this.y     = ground;
        this.vy    = 0;
        this.state = S.WALK;
        this.vx    = this.facing * rand(0.38, 0.65);
      }
    }
  }

  startDrag() {
    this.state    = S.DRAG;
    this.vx       = 0;
    this.vy       = 0;
    this.rotAngle = 0;
  }

  endDrag(ch) {
    const ground = this._groundY(ch);
    if (this.y < ground * FALL_FRAC) {
      // high drop: dramatic spin fall → land → getup → brush
      this.state  = S.FALL;
      this.vy     = rand(1.5, 3.5);
      this.rotVel = (Math.random() > 0.5 ? 1 : -1) * rand(0.04, 0.1);
    } else {
      // low drop: plain gravity fall, no spin, immediate walk on land
      this.state = S.DROP;
      this.vy    = 0;
    }
  }

  draw(ctx) {
    if (this.state === S.HANG) { this._drawHang(ctx); return; }

    const s = this.size;
    ctx.save();
    ctx.translate(this.x, this.y);

    if (this.state === S.FALL) ctx.rotate(this.rotAngle);

    if (this.state === S.LAND || this.state === S.GETUP) {
      const sy = this.state === S.LAND ? this.scaleY : 0.38 + this.getupProg * 0.62;
      ctx.scale(1 + (1 - sy) * 0.35, sy);
    }

    // stretch vertically while airborne going up
    if (this.state === S.JUMP && this.vy < 0) ctx.scale(0.86, 1.14);

    if (this.facing === -1) ctx.scale(-1, 1);

    const isWalk = this.state === S.WALK || this.state === S.SEEK;
    const bob    = isWalk ? Math.sin(this.walkPh * 2) * 1.7 : 0;
    ctx.translate(0, bob);

    ctx.strokeStyle = ACCENT;
    ctx.lineWidth   = 2;
    ctx.lineCap     = "round";
    ctx.lineJoin    = "round";

    const hR    = s * 0.52;
    const bW    = s * 0.36;
    const bH    = s * 0.42;
    const aL    = s * 0.58;
    const lL    = s * 0.64;
    const headY = -bH - hR - 1;
    const armY  = -bH * 0.2;
    const legY  =  bH;

    // legs
    const legSw = isWalk ? Math.sin(this.walkPh) * 10 : 0;
    ctx.beginPath(); ctx.moveTo(-bW * 0.36, legY); ctx.lineTo(-bW * 0.36 - legSw, legY + lL); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( bW * 0.36, legY); ctx.lineTo( bW * 0.36 + legSw, legY + lL); ctx.stroke();

    // body
    ctx.beginPath(); ctx.ellipse(0, 0, bW, bH, 0, 0, Math.PI * 2); ctx.stroke();

    // arms
    const armSw = isWalk ? Math.sin(this.walkPh) * 0.28 : 0;
    const lAng  = Math.PI * 0.52 + armSw;

    if (this.state === S.JUMP) {
      // both arms reaching upward toward the bar
      ctx.beginPath(); ctx.moveTo(-bW, armY); ctx.lineTo(-bW * 0.35, armY - aL); ctx.stroke();
      ctx.beginPath(); ctx.moveTo( bW, armY); ctx.lineTo( bW * 0.35, armY - aL); ctx.stroke();
    } else if (this.state === S.BRUSH) {
      const bAng = Math.PI * 0.28 + Math.abs(Math.sin(this.wavePh)) * 0.55;
      ctx.beginPath(); ctx.moveTo(-bW, armY); ctx.lineTo(-bW - Math.cos(bAng) * aL, armY + Math.sin(bAng) * aL); ctx.stroke();
      ctx.beginPath(); ctx.moveTo( bW, armY); ctx.lineTo( bW + Math.cos(bAng) * aL, armY + Math.sin(bAng) * aL); ctx.stroke();
    } else {
      ctx.beginPath(); ctx.moveTo(-bW, armY); ctx.lineTo(-bW - Math.cos(lAng) * aL, armY + Math.sin(lAng) * aL); ctx.stroke();

      if (this.state === S.WAVE) {
        const wAng = -(Math.PI * 0.32) + Math.sin(this.wavePh) * 0.42;
        ctx.beginPath(); ctx.moveTo(bW, armY); ctx.lineTo(bW + Math.cos(wAng) * aL, armY + Math.sin(wAng) * aL); ctx.stroke();
      } else {
        const rAng = Math.PI * 0.52 - armSw;
        ctx.beginPath(); ctx.moveTo(bW, armY); ctx.lineTo(bW + Math.cos(rAng) * aL, armY + Math.sin(rAng) * aL); ctx.stroke();
      }
    }

    // head
    ctx.beginPath(); ctx.arc(0, headY, hR, 0, Math.PI * 2); ctx.stroke();

    if (this.state === S.WAVE) {
      ctx.beginPath(); ctx.moveTo(0, headY - hR); ctx.lineTo(0, headY - hR - s * 0.38); ctx.stroke();
      ctx.beginPath(); ctx.arc(0, headY - hR - s * 0.38, 2.5, 0, Math.PI * 2);
      ctx.fillStyle = ACCENT; ctx.fill();
    }

    if (this.state === S.LAND) {
      ctx.fillStyle = ACCENT;
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        ctx.beginPath(); ctx.arc(Math.cos(a) * s * 1.1, Math.sin(a) * s * 0.5 - s * 0.3, 2.2, 0, Math.PI * 2); ctx.fill();
      }
    }

    ctx.restore();
  }

  _drawHang(ctx) {
    const s    = this.size;
    const sway = Math.sin(this.hangPh) * s * 0.4;

    ctx.save();
    ctx.translate(this.x + sway, this.y);

    ctx.strokeStyle = ACCENT;
    ctx.lineWidth   = 2;
    ctx.lineCap     = "round";
    ctx.lineJoin    = "round";

    const hR = s * 0.52;
    const bW = s * 0.36;
    const bH = s * 0.42;
    const lL = s * 0.64;

    // grip at y=0, arms fully extended upward, body hangs below
    const bodyY  = s * 0.72;               // body center
    const armTopY = bodyY - bH * 0.2;      // shoulder (top of body sides)
    const headY  = bodyY + bH + hR + 2;    // head below body
    const legY   = bodyY + bH;
    const gripX  = bW * 0.55;              // grip spread

    // arms: from shoulder up to grip
    ctx.beginPath(); ctx.moveTo(-bW, armTopY); ctx.lineTo(-gripX, 0); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( bW, armTopY); ctx.lineTo( gripX, 0); ctx.stroke();

    // grip dots at button surface
    ctx.fillStyle = ACCENT;
    ctx.beginPath(); ctx.arc(-gripX, 0, 2.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc( gripX, 0, 2.5, 0, Math.PI * 2); ctx.fill();

    // body
    ctx.beginPath(); ctx.ellipse(0, bodyY, bW, bH, 0, 0, Math.PI * 2); ctx.stroke();

    // head hangs below body
    ctx.beginPath(); ctx.arc(0, headY, hR, 0, Math.PI * 2); ctx.stroke();

    // legs dangle
    const legSw = Math.sin(this.hangPh * 1.3) * 6;
    ctx.beginPath(); ctx.moveTo(-bW * 0.36, legY); ctx.lineTo(-bW * 0.36 + legSw, legY + lL); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( bW * 0.36, legY); ctx.lineTo( bW * 0.36 + legSw, legY + lL); ctx.stroke();

    ctx.restore();
  }

  hit(mx, my) {
    if (this.state === S.HANG) {
      const bodyY = this.y + this.size * 0.58 * 0.75 + this.size * 0.42;
      return Math.hypot(mx - this.x, my - bodyY) < this.size * 2.5;
    }
    return Math.hypot(mx - this.x, my - this.y) < this.size * 3;
  }
}

export default function CharacterScene({ hangRefs }) {
  const cvRef   = useRef(null);
  const chars   = useRef([]);
  const dragged = useRef(null);
  const hpRef   = useRef([]);

  useEffect(() => {
    const cv  = cvRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");

    const updateHP = () => {
      if (!hangRefs || !cv) { hpRef.current = []; return; }
      const cr = cv.getBoundingClientRect();
      if (cr.width === 0) return;  // not laid out yet
      hpRef.current = hangRefs
        .filter(r => r?.current)
        .map(r => {
          const rect = r.current.getBoundingClientRect();
          // y = button bottom in canvas coords (grip at button's underside)
          return { x: (rect.left + rect.right) / 2 - cr.left, y: rect.bottom - cr.top };
        });
    };

    const resize = () => {
      const oldH = cv.height;
      cv.width  = cv.offsetWidth;
      cv.height = cv.offsetHeight;

      if (chars.current.length === 0) {
        chars.current = Array.from({ length: N }, (_, i) => new Char(i, cv.width, cv.height));
      } else {
        for (const ch of chars.current) {
          const oldGround = oldH - 2 - ch.size * 1.06;
          const newGround = cv.height - 2 - ch.size * 1.06;
          if (Math.abs(ch.y - oldGround) < 2) ch.y = newGround;
          ch.x     = Math.max(24, Math.min(cv.width - 24, ch.x));
          ch.homeX = Math.max(24, Math.min(cv.width - 24, ch.homeX));
        }
      }
      updateHP();
    };

    resize();
    window.addEventListener("resize", resize);

    const getXY = (e) => {
      const src = e.touches ? e.touches[0] : e;
      return { x: src.clientX, y: src.clientY };
    };

    const onDown = (e) => {
      const { x, y } = getXY(e);
      const rect = cv.getBoundingClientRect();
      const lx = x - rect.left, ly = y - rect.top;
      for (const ch of [...chars.current].reverse()) {
        if (ch.hit(lx, ly)) {
          dragged.current = ch;
          ch.startDrag();
          document.body.style.userSelect = "none";
          break;
        }
      }
    };

    const onMove = (e) => {
      if (!dragged.current) return;
      const { x, y } = getXY(e);
      const rect = cv.getBoundingClientRect();
      dragged.current.x = x - rect.left;
      dragged.current.y = y - rect.top;
    };

    const onUp = () => {
      if (dragged.current) {
        dragged.current.endDrag(cv.height);
        dragged.current = null;
        document.body.style.userSelect = "";
      }
    };

    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchmove",  onMove, { passive: true });
    window.addEventListener("touchend",   onUp);

    let raf, frame = 0;
    const loop = () => {
      raf = requestAnimationFrame(loop);
      // Refresh hang points every 60 frames so CSS fade-in animations have settled
      if (frame++ % 60 === 0) updateHP();
      ctx.clearRect(0, 0, cv.width, cv.height);
      for (const ch of chars.current) { ch.update(cv.width, cv.height, hpRef.current, chars.current); ch.draw(ctx); }
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",     resize);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchmove",  onMove);
      window.removeEventListener("touchend",   onUp);
    };
  }, []);

  return (
    <canvas
      ref={cvRef}
      style={{
        position:      "absolute",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        10,
      }}
    />
  );
}
