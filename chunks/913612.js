"use strict";
n.d(t, { C: () => o, K: () => l });
var i = n(64700),
    r = n(506774),
    s = n(935671);
let a = "systemServiceAutoInstall";
function o() {
    r.w.set(a, !0);
}
function l() {
    i.useEffect(() => {
        null == r.w.get(a) && (o(), (0, s.sL)("first-start", !1));
    }, []);
}
