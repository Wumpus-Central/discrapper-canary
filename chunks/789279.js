"use strict";
n.d(t, { A: () => a });
var i = n(64700);
n(321073);
let r = 1 / 240;
class s {
    tension;
    friction;
    threshold;
    mass;
    maxVelocity;
    clamp;
    callback;
    accumulator = 0;
    from = 0;
    target = 0;
    vel = 0;
    animating = !1;
    last = null;
    nextTick = -1;
    getNodeWindow;
    nodeWindow = null;
    callbacks = [];
    constructor({
        callback: e,
        tension: t = 160,
        friction: n = 22,
        mass: i = 1,
        threshold: r = 0.001,
        clamp: s = !1,
        maxVelocity: a = 1 / 0,
        getNodeWindow: o = () => window,
    }) {
        (this.callback = e),
            (this.from = 0),
            (this.tension = t),
            (this.friction = n),
            (this.mass = i),
            (this.maxVelocity = a),
            (this.threshold = r),
            (this.clamp = s),
            (this.getNodeWindow = o);
    }
    to(e) {
        let { to: t, from: n, animate: i = !1, callback: r } = e;
        return ((this.target = t), null != r && this.callbacks.push(r), null != n && (this.from = n), i)
            ? (this.animating || this.start(), this)
            : void this.stop(t);
    }
    mergeTo = (e) => {
        let { to: t, callback: n } = e;
        this.animating || (null != n && this.callbacks.push(n), this.stop(t));
        let i = t - this.from;
        (this.from = t), (this.target = this.target + i), this.callback(this.from, this.abort), null != n && n();
    };
    cancel() {
        return this.stop(this.from), this;
    }
    abort = () => {
        this.animating = !1;
    };
    start() {
        (this.animating = !0),
            (this.vel = 0),
            (this.last = null),
            (this.nodeWindow = this.getNodeWindow()),
            (this.nextTick = this.nodeWindow?.requestAnimationFrame(this.update) ?? -1);
    }
    getUpdates(e, t) {
        let n = (-this.tension * (t - this.target) + -this.friction * e) / this.mass;
        return (
            Math.abs((e += n * r)) > this.maxVelocity && (e = this.maxVelocity * (e > 0 ? 1 : -1)),
            { from: (t += e * r), vel: e, accel: n }
        );
    }
    update = (e) => {
        if (null == this.last) {
            (this.last = e), (this.nextTick = this.nodeWindow?.requestAnimationFrame(this.update) ?? -1);
            return;
        }
        for (this.accumulator = Math.min((e - this.last) / 1e3 + this.accumulator, 2); this.accumulator > r; ) {
            this.accumulator -= r;
            let { vel: e, from: t, accel: n } = this.getUpdates(this.vel, this.from);
            if (
                ((this.vel = e),
                (this.clamp &&
                    (t === this.target ||
                        (t < this.target && this.from > this.target) ||
                        (t > this.target && this.from < this.target))) ||
                    Math.abs(n * r) < this.threshold)
            )
                return void this.stop(this.target);
            this.from = t;
        }
        let { from: t } = this;
        if (this.accumulator > 0) {
            let { from: e } = this.getUpdates(this.vel, t),
                n = (e - t) * (this.accumulator / r);
            t += n;
        }
        this.callback(t, this.abort),
            this.animating &&
                ((this.last = e), (this.nextTick = this.nodeWindow?.requestAnimationFrame(this.update) ?? -1));
    };
    stop(e) {
        this.nodeWindow?.cancelAnimationFrame(this.nextTick),
            (this.animating = !1),
            (this.accumulator = 0),
            null != e && ((this.target = this.from = e), this.callback(e, this.abort)),
            this.callbacks.length > 0 && (this.callbacks.forEach((e) => e()), (this.callbacks.length = 0));
    }
}
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "vertical",
        [n] = (0, i.useState)(
            () =>
                new s({
                    tension: 200,
                    friction: 35,
                    mass: 2,
                    clamp: !0,
                    callback: (n, i) => {
                        let { current: r } = e;
                        if (null == r) return i();
                        "horizontal" === t ? (r.scrollLeft = n) : (r.scrollTop = n);
                    },
                    getNodeWindow: () => e.current?.ownerDocument?.defaultView ?? null,
                }),
        );
    return n;
}
