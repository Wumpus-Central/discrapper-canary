i.d(e, { Z: () => f }), i(47120), i(653041);
var s = i(954955),
    n = i.n(s),
    a = i(477690),
    h = i(624138),
    r = i(50516),
    o = i(684827),
    l = i(898625);
function d(t, e, i) {
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
let c = (0, h.Mg)(a.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
    u = 1 / 60;
function p() {
    return Math.min(Math.max(Math.min(0.8 * window.innerWidth, 0.8 * window.innerHeight), l.LE), l.pg);
}
let f = class {
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
        0 !== this.points.length && (this.points.forEach((e) => e.update(Math.min(t, u))), !this.hasEntered && this.points[0].x > c && ((this.hasEntered = !0), this.updateWaveState(l.hO.ENTERED)), this.isFilling && this.points[0].x > this.points[0].targetX && ((this.isFilling = !1), this.updateWaveState(l.hO.FILLED)));
    }
    render(t) {
        if (0 === this.points.length) return;
        let [e, ...i] = this.points;
        t.save(),
            t.beginPath(),
            t.moveTo(e.x, e.y),
            i.forEach((e, s) => {
                if (null == i[s + 1]) t.quadraticCurveTo(e.x, e.y, e.x, e.y);
                else {
                    let n = (e.x + i[s + 1].x) / 2,
                        a = (e.y + i[s + 1].y) / 2;
                    t.quadraticCurveTo(e.x, e.y, n, a);
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
            e = p() - 140,
            i = (t, e, i, s) => {
                (t.targetX = -40 + e * Math.cos(l.uo * ((i / 15) * 0.25 + 0))), (t.targetY = -40 + e * Math.sin(l.uo * ((i / 15) * 0.25 + 0))), s && ((t.targetX += (0, o.M)(0, 30) - 15), (t.targetY += (0, o.M)(0, 30) - 15), (t.speedUp = 3), (t.spring.tension = l.O1 * Math.random() * 0.5 + l.O1));
            };
        this.points.forEach((t, s) => i(t, e, s, !0)),
            setTimeout(() => {
                this.points.forEach((e, s) => {
                    i(e, t, s, !1);
                    let n = 1 - e.index / 7.5;
                    (e.spring.friction += e.spring.friction + e.spring.friction * n), (e.spring.tension = 0.7 * l.O1 + 80 * Math.random()), (e.waveRange = 2 * e.waveRange);
                }),
                    (this.isFilling = !0),
                    this.updateWaveState(l.hO.FILLING);
            }, 250);
    }
    constructor(t) {
        d(this, 'points', []),
            d(this, 'hasEntered', !1),
            d(this, 'isFilling', !1),
            d(this, 'updateWaveState', void 0),
            d(this, '_resizeWave', () => {
                let t = p();
                this.points.forEach((e, i) => {
                    let s = -40 + t * Math.cos(l.uo * ((i / 15) * 0.25 + 0)),
                        n = -40 + t * Math.sin(l.uo * ((i / 15) * 0.25 + 0));
                    0 !== i ? (n += (0, o.M)(0, 30) - 15) : (s += (0, o.M)(0, 30) - 15), (e.targetX = s), (e.targetY = n), (e.angle = Math.atan2(n, s));
                });
            }),
            d(this, 'resizeWave', n()(this._resizeWave, 200)),
            (this.updateWaveState = t),
            (this.hasEntered = !1);
        for (let t = 0; t <= 15; t++) this.points.push(new r.Z(Math.floor(7.5 - Math.floor(Math.abs(t - 7.5)))));
    }
};
