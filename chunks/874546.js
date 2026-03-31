"use strict";
n.d(t, { A: () => o });
var r = n(574381),
    i = n(833349),
    s = n(652215);
function a() {
    return (0, r.un)() ? s.yTV.IOS : (0, r.m0)() ? s.yTV.ANDROID : s.yTV.DESKTOP;
}
function o(e) {
    if (null == e || !(0, i.A)(e, s.jUm.JOIN)) return !1;
    let t = e.supported_platforms;
    return null != t && 0 !== t.length && t.includes(a());
}
