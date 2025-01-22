r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(653041);
function a(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let o = 1 / 240;
class s {
    to(e) {
        let { to: n, from: r, animate: i = !1, callback: a } = e;
        if (((this.target = n), null != a && this.callbacks.push(a), null != r && (this.from = r), !i)) {
            this.stop(n);
            return;
        }
        return this.animating ? this : (this.start(), this);
    }
    cancel() {
        return this.stop(this.from), this;
    }
    start() {
        var e, n;
        (this.animating = !0), (this.vel = 0), (this.last = null), (this.nodeWindow = this.getNodeWindow()), (this.nextTick = null !== (n = null === (e = this.nodeWindow) || void 0 === e ? void 0 : e.requestAnimationFrame(this.update)) && void 0 !== n ? n : -1);
    }
    getUpdates(e, n) {
        let r = -this.tension * (n - this.target),
            i = (r + -this.friction * e) / this.mass;
        return (
            Math.abs((e += i * o)) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)),
            {
                from: (n += e * o),
                vel: e,
                accel: i
            }
        );
    }
    stop(e) {
        var n;
        null === (n = this.nodeWindow) || void 0 === n || n.cancelAnimationFrame(this.nextTick), (this.animating = !1), (this.accumulator = 0), null != e && ((this.target = this.from = e), this.callback(e, this.abort)), this.callbacks.length > 0 && (this.callbacks.forEach((e) => e()), (this.callbacks.length = 0));
    }
    constructor({ callback: e, tension: n = 160, friction: r = 22, mass: i = 1, threshold: s = 0.001, clamp: l = !1, maxVelocity: u = 1 / 0, getNodeWindow: c = () => window }) {
        a(this, 'tension', void 0),
            a(this, 'friction', void 0),
            a(this, 'threshold', void 0),
            a(this, 'mass', void 0),
            a(this, 'maxVelocity', void 0),
            a(this, 'clamp', void 0),
            a(this, 'callback', void 0),
            a(this, 'accumulator', 0),
            a(this, 'from', 0),
            a(this, 'target', 0),
            a(this, 'vel', 0),
            a(this, 'animating', !1),
            a(this, 'last', null),
            a(this, 'nextTick', -1),
            a(this, 'getNodeWindow', void 0),
            a(this, 'nodeWindow', null),
            a(this, 'callbacks', []),
            a(this, 'mergeTo', (e) => {
                let { to: n, callback: r } = e;
                !this.animating && (null != r && this.callbacks.push(r), this.stop(n));
                let i = n - this.from;
                (this.from = n), (this.target = this.target + i), this.callback(this.from, this.abort), null != r && r();
            }),
            a(this, 'abort', () => {
                this.animating = !1;
            }),
            a(this, 'update', (e) => {
                var n, r, i, a;
                if (null == this.last) {
                    (this.last = e), (this.nextTick = null !== (r = null === (n = this.nodeWindow) || void 0 === n ? void 0 : n.requestAnimationFrame(this.update)) && void 0 !== r ? r : -1);
                    return;
                }
                let s = e;
                for (this.accumulator = Math.min((s - this.last) / 1000 + this.accumulator, 2); this.accumulator > o; ) {
                    this.accumulator -= o;
                    let { vel: e, from: n, accel: r } = this.getUpdates(this.vel, this.from);
                    if (((this.vel = e), (this.clamp && (n === this.target || (n < this.target && this.from > this.target) || (n > this.target && this.from < this.target))) || Math.abs(r * o) < this.threshold)) {
                        this.stop(this.target);
                        return;
                    }
                    this.from = n;
                }
                let { from: l } = this;
                if (this.accumulator > 0) {
                    let { from: e } = this.getUpdates(this.vel, l),
                        n = (e - l) * (this.accumulator / o);
                    l += n;
                }
                this.callback(l, this.abort), this.animating && ((this.last = s), (this.nextTick = null !== (a = null === (i = this.nodeWindow) || void 0 === i ? void 0 : i.requestAnimationFrame(this.update)) && void 0 !== a ? a : -1));
            }),
            (this.callback = e),
            (this.from = 0),
            (this.tension = n),
            (this.friction = r),
            (this.mass = i),
            (this.maxVelocity = u),
            (this.threshold = s),
            (this.clamp = l),
            (this.getNodeWindow = c);
    }
}
