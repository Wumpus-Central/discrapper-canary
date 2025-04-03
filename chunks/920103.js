function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
n.d(t, { Z: () => o }), n(653041);
let i = 1 / 240;
class o {
    to(e) {
        let { to: t, from: n, animate: r = !1, callback: i } = e;
        return ((this.target = t), null != i && this.callbacks.push(i), null != n && (this.from = n), r) ? (this.animating || this.start(), this) : void this.stop(t);
    }
    cancel() {
        return this.stop(this.from), this;
    }
    start() {
        var e, t;
        (this.animating = !0), (this.vel = 0), (this.last = null), (this.nodeWindow = this.getNodeWindow()), (this.nextTick = null != (t = null == (e = this.nodeWindow) ? void 0 : e.requestAnimationFrame(this.update)) ? t : -1);
    }
    getUpdates(e, t) {
        let n = (-this.tension * (t - this.target) + -this.friction * e) / this.mass;
        return (
            Math.abs((e += n * i)) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)),
            {
                from: (t += e * i),
                vel: e,
                accel: n
            }
        );
    }
    stop(e) {
        var t;
        null == (t = this.nodeWindow) || t.cancelAnimationFrame(this.nextTick), (this.animating = !1), (this.accumulator = 0), null != e && ((this.target = this.from = e), this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach((e) => e()), (this.callbacks.length = 0));
    }
    constructor({ callback: e, tension: t = 160, friction: n = 22, mass: o = 1, threshold: a = 0.001, clamp: s = !1, maxVelocity: l = 1 / 0, getNodeWindow: c = () => window }) {
        r(this, 'tension', void 0),
            r(this, 'friction', void 0),
            r(this, 'threshold', void 0),
            r(this, 'mass', void 0),
            r(this, 'maxVelocity', void 0),
            r(this, 'clamp', void 0),
            r(this, 'callback', void 0),
            r(this, 'accumulator', 0),
            r(this, 'from', 0),
            r(this, 'target', 0),
            r(this, 'vel', 0),
            r(this, 'animating', !1),
            r(this, 'last', null),
            r(this, 'nextTick', -1),
            r(this, 'getNodeWindow', void 0),
            r(this, 'nodeWindow', null),
            r(this, 'callbacks', []),
            r(this, 'mergeTo', (e) => {
                let { to: t, callback: n } = e;
                this.animating || (null != n && this.callbacks.push(n), this.stop(t));
                let r = t - this.from;
                (this.from = t), (this.target = this.target + r), this.callback(this.from, this.abort), null != n && n();
            }),
            r(this, 'abort', () => {
                this.animating = !1;
            }),
            r(this, 'update', (e) => {
                var t, n, r, o;
                if (null == this.last) {
                    (this.last = e), (this.nextTick = null != (n = null == (t = this.nodeWindow) ? void 0 : t.requestAnimationFrame(this.update)) ? n : -1);
                    return;
                }
                let a = e;
                for (this.accumulator = Math.min((a - this.last) / 1000 + this.accumulator, 2); this.accumulator > i; ) {
                    this.accumulator -= i;
                    let { vel: e, from: t, accel: n } = this.getUpdates(this.vel, this.from);
                    if (((this.vel = e), (this.clamp && (t === this.target || (t < this.target && this.from > this.target) || (t > this.target && this.from < this.target))) || Math.abs(n * i) < this.threshold)) return void this.stop(this.target);
                    this.from = t;
                }
                let { from: s } = this;
                if (this.accumulator > 0) {
                    let { from: e } = this.getUpdates(this.vel, s),
                        t = (e - s) * (this.accumulator / i);
                    s += t;
                }
                this.callback(s, this.abort), this.animating && ((this.last = a), (this.nextTick = null != (o = null == (r = this.nodeWindow) ? void 0 : r.requestAnimationFrame(this.update)) ? o : -1));
            }),
            (this.callback = e),
            (this.from = 0),
            (this.tension = t),
            (this.friction = n),
            (this.mass = o),
            (this.maxVelocity = l),
            (this.threshold = a),
            (this.clamp = s),
            (this.getNodeWindow = c);
    }
}
