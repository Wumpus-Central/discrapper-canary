function i(e, n, r) {
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
function a(e) {
    return null == e || null == e.end_time || new Date(e.end_time) >= new Date();
}
function o(e) {
    let { muted: n, mute_config: r } = e;
    return !!n && a(r);
}
function s(e) {
    let { muted: n, mute_config: r } = e;
    return !!n && null != r && null != r.end_time && new Date(r.end_time) >= new Date();
}
function l(e) {
    return null == e.end_time ? null : new Date(e.end_time).getTime() - Date.now();
}
r.d(n, {
    Cl: function () {
        return s;
    },
    ZP: function () {
        return u;
    },
    m$: function () {
        return o;
    }
});
class u {
    reset() {
        Object.values(this.timers).forEach((e) => clearTimeout(e)), (this.timers = {});
    }
    setTimer(e, n, r) {
        if (null == e || null == n) return !1;
        let i = l(n);
        return null != i && (!!(i <= 0) || ((this.timers[e] = setTimeout(r, Math.max(0, i))), !1));
    }
    clearTimer(e) {
        null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
    constructor() {
        i(this, 'timers', void 0), (this.timers = {});
    }
}
