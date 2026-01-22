n.d(t, { A: () => h }), n(896048);
var r = n(506774),
    i = n(439372),
    a = n(287809),
    s = n(951122),
    o = n(542599),
    l = n(789622);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let u = 604800000,
    d = "lastSawPomelo";
function f() {
    r.w.set(d, Date.now());
}
function p() {
    if (!s.y1.getCurrentConfig({ location: "b9eb97_1" }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = a.default.getCurrentUser();
    if (null == e || e.hasUniqueUsername() || !e.hasVerifiedEmailOrPhone()) return !1;
    let t = d,
        n = r.w.get(t);
    return !(null != n && Date.now() - n < u);
}
class _ extends i.A {
    constructor(...e) {
        super(...e),
            c(this, "actions", { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() }),
            c(this, "onPostConnectionOpen", () => {
                p() && (0, o.U)(l.gg.APP_START, !0, !1) && f();
            });
    }
}
let h = new _();
