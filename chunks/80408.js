"use strict";
n.d(t, { A: () => p });
var r = n(506774),
    i = n(439372),
    a = n(287809),
    s = n(951122),
    o = n(542599),
    l = n(789622);
let u = 6048e5,
    c = "lastSawPomelo";
function d() {
    r.w.set(c, Date.now());
}
function _() {
    if (!s.y1.getCurrentConfig({ location: "b9eb97_1" }, { autoTrackExposure: !1 }).enabled) return !1;
    let e = a.default.getCurrentUser();
    if (null == e || e.hasUniqueUsername() || !e.hasVerifiedEmailOrPhone()) return !1;
    let t = c,
        n = r.w.get(t);
    return !(null != n && Date.now() - n < u);
}
class f extends i.A {
    actions = { POST_CONNECTION_OPEN: () => this.onPostConnectionOpen() };
    onPostConnectionOpen = () => {
        _() && (0, o.U)(l.gg.APP_START, !0, !1) && d();
    };
}
let p = new f();
