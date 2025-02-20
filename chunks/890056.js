i.d(e, { Z: () => h });
var s = i(684827),
    n = i(482682);
function a(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
let h = class {
    initialize() {
        (this.img = new Image()),
            (this.img.onload = () => {
                this.loaded = !0;
            }),
            (this.img.src = n),
            this.bind();
    }
    bind() {
        window.addEventListener('mousemove', this.handleMouseMove, !1);
    }
    unbind() {
        window.removeEventListener('mousemove', this.handleMouseMove, !1);
    }
    terminate() {
        (this.img = null), (this.loaded = !1), (this.isFilled = !1), (this.alpha = 0), this.unbind();
    }
    update(t) {
        this.loaded && (!this.isFilled && this.alpha < 1 ? (this.alpha = Math.min(1, this.alpha + t)) : this.isFilled && this.alpha > 0 && (this.alpha = Math.max(0, this.alpha - 3 * t)), (this.velX += (0, s.B)(this.targetX, this.x, this.velX, this.spring) * t), (this.velY += (0, s.B)(this.targetY, this.y, this.velY, this.spring) * t), (this.x += this.velX * t), (this.y += this.velY * t));
    }
    render(t) {
        let { img: e } = this;
        this.loaded && null != e && (t.save(), (t.globalCompositeOperation = 'source-atop'), (t.globalAlpha = this.alpha), t.drawImage(e, this.x + 20, this.y + 20), t.restore());
    }
    fill() {
        this.isFilled = !0;
    }
    constructor() {
        a(this, 'img', null),
            a(this, 'loaded', !1),
            a(this, 'isFilled', !1),
            a(this, 'alpha', 0),
            a(this, 'mx', 0),
            a(this, 'my', 0),
            a(this, 'x', 0),
            a(this, 'y', 0),
            a(this, 'velX', 0),
            a(this, 'velY', 0),
            a(this, 'targetX', 40),
            a(this, 'targetY', 40),
            a(this, 'spring', {
                friction: 60,
                tension: 100
            }),
            a(this, 'handleMouseMove', (t) => {
                let { clientX: e, clientY: i } = t;
                (this.targetX = (e / window.innerWidth) * 20 + 20), (this.targetY = (i / window.innerWidth) * 20 + 20);
            });
    }
};
