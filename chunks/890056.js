e.d(i, { Z: () => a });
var s = e(684827),
    n = e(482682);
function h(t, i, e) {
    return (
        i in t
            ? Object.defineProperty(t, i, {
                  value: e,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[i] = e),
        t
    );
}
let a = class {
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
        let { img: i } = this;
        this.loaded && null != i && (t.save(), (t.globalCompositeOperation = 'source-atop'), (t.globalAlpha = this.alpha), t.drawImage(i, this.x + 20, this.y + 20), t.restore());
    }
    fill() {
        this.isFilled = !0;
    }
    constructor() {
        h(this, 'img', null),
            h(this, 'loaded', !1),
            h(this, 'isFilled', !1),
            h(this, 'alpha', 0),
            h(this, 'mx', 0),
            h(this, 'my', 0),
            h(this, 'x', 0),
            h(this, 'y', 0),
            h(this, 'velX', 0),
            h(this, 'velY', 0),
            h(this, 'targetX', 40),
            h(this, 'targetY', 40),
            h(this, 'spring', {
                friction: 60,
                tension: 100
            }),
            h(this, 'handleMouseMove', (t) => {
                let { clientX: i, clientY: e } = t;
                (this.targetX = (i / window.innerWidth) * 20 + 20), (this.targetY = (e / window.innerWidth) * 20 + 20);
            });
    }
};
