e.d(i, { Z: () => m }), e(47120), e(653041);
var s = e(954955),
    n = e.n(s),
    h = e(477690),
    a = e(624138),
    r = e(50516),
    l = e(684827),
    o = e(898625);
function d(t, i, e) {
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
let u = (0, a.Mg)(h.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    c = 1 / 60;
function p() {
    return Math.min(Math.max(Math.min(0.8 * window.innerWidth, 0.8 * window.innerHeight), o.LE), o.pg);
}
let m = class {
    initialize() {
        this._resizeWave();
    }
    emphasize() {
        this.points.forEach((t) => (t.speedUp = 1));
    }
    terminate() {
        this.points = [];
    }
    update(t) {
        0 !== this.points.length && (this.points.forEach((i) => i.update(Math.min(t, c))), !this.hasEntered && this.points[0].x > u && ((this.hasEntered = !0), this.updateWaveState(o.hO.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && ((this.isFilling = !1), this.updateWaveState(o.hO.FILLED)));
    }
    render(t) {
        if (0 === this.points.length) return;
        let [i, ...e] = this.points;
        t.save(),
            t.beginPath(),
            t.moveTo(i.x, i.y),
            e.forEach((i, s) => {
                if (null == e[s + 1]) t.quadraticCurveTo(i.x, i.y, i.x, i.y);
                else {
                    let n = (i.x + e[s + 1].x) / 2,
                        h = (i.y + e[s + 1].y) / 2;
                    t.quadraticCurveTo(i.x, i.y, n, h);
                }
            }),
            t.lineTo(0, 0),
            t.closePath(),
            (t.fillStyle = '#000'),
            (t.globalCompositeOperation = 'destination-in'),
            t.fill(),
            t.restore();
    }
    fill() {
        let t = Math.sqrt(window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight) + 100,
            i = p() - 140,
            e = (t, i, e, s) => {
                (t.targetX = -40 + i * Math.cos(o.uo * ((e / 15) * 0.25 + 0))), (t.targetY = -40 + i * Math.sin(o.uo * ((e / 15) * 0.25 + 0))), s && ((t.targetX += (0, l.M)(0, 30) - 15), (t.targetY += (0, l.M)(0, 30) - 15), (t.speedUp = 3), (t.spring.tension = o.O1 * Math.random() * 0.5 + o.O1));
            };
        this.points.forEach((t, s) => e(t, i, s, !0)),
            setTimeout(() => {
                this.points.forEach((i, s) => {
                    e(i, t, s, !1);
                    let n = 1 - i.index / 7.5;
                    (i.spring.friction += i.spring.friction + i.spring.friction * n), (i.spring.tension = 0.7 * o.O1 + 80 * Math.random()), (i.waveRange = 2 * i.waveRange);
                }),
                    (this.isFilling = !0),
                    this.updateWaveState(o.hO.FILLING);
            }, 250);
    }
    constructor(t) {
        d(this, 'points', []),
            d(this, 'hasEntered', !1),
            d(this, 'isFilling', !1),
            d(this, 'updateWaveState', void 0),
            d(this, '_resizeWave', () => {
                let t = p();
                this.points.forEach((i, e) => {
                    let s = -40 + t * Math.cos(o.uo * ((e / 15) * 0.25 + 0)),
                        n = -40 + t * Math.sin(o.uo * ((e / 15) * 0.25 + 0));
                    0 !== e ? (n += (0, l.M)(0, 30) - 15) : (s += (0, l.M)(0, 30) - 15), (i.targetX = s), (i.targetY = n), (i.angle = Math.atan2(n, s));
                });
            }),
            d(this, 'resizeWave', n()(this._resizeWave, 200)),
            (this.updateWaveState = t),
            (this.hasEntered = !1);
        for (let t = 0; t <= 15; t++) this.points.push(new r.Z(Math.floor(7.5 - Math.floor(Math.abs(t - 7.5)))));
    }
};
