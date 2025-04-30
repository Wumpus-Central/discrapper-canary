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
function i(e) {
    return null == e || null == e.end_time || new Date(e.end_time) >= new Date();
}
function a(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && i(n);
}
function o(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date();
}
function s(e) {
    return null == e.end_time ? null : new Date(e.end_time).getTime() - Date.now();
}
n.d(t, {
    Cl: () => o,
    ZP: () => l,
    m$: () => a
});
class l {
    reset() {
        Object.values(this.timers).forEach((e) => clearTimeout(e)), (this.timers = {});
    }
    setTimer(e, t, n) {
        if (null == e || null == t) return !1;
        let r = s(t);
        return null != r && (r <= 0 || ((this.timers[e] = setTimeout(n, Math.max(0, r))), !1));
    }
    clearTimer(e) {
        null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
    constructor() {
        r(this, 'timers', void 0), (this.timers = {});
    }
}
