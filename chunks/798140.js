function i(e, t, n) {
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
function r(e) {
    return null == e || null == e.end_time || new Date(e.end_time) >= new Date();
}
function a(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && r(n);
}
function s(e) {
    let { muted: t, mute_config: n } = e;
    return !!t && null != n && null != n.end_time && new Date(n.end_time) >= new Date();
}
function o(e) {
    return null == e.end_time ? null : new Date(e.end_time).getTime() - Date.now();
}
n.d(t, {
    Cl: () => s,
    ZP: () => l,
    m$: () => a
});
class l {
    reset() {
        Object.values(this.timers).forEach((e) => clearTimeout(e)), (this.timers = {});
    }
    setTimer(e, t, n) {
        if (null == e || null == t) return !1;
        let i = o(t);
        return null != i && (i <= 0 || ((this.timers[e] = setTimeout(n, Math.max(0, i))), !1));
    }
    clearTimer(e) {
        null != e && e in this.timers && (clearTimeout(this.timers[e]), delete this.timers[e]);
    }
    constructor() {
        i(this, 'timers', void 0), (this.timers = {});
    }
}
