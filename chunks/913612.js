"use strict";
n.d(t, { C: () => o, K: () => l });
var r = n(64700),
    i = n(506774),
    s = n(942405);
let a = "systemServiceAutoInstall";
function o() {
    i.w.set(a, !0);
}
function l() {
    r.useEffect(() => {
        null == i.w.get(a) && (o(), (0, s.sL)("first-start", !1));
    }, []);
}
