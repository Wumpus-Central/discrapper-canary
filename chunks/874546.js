"use strict";
n.d(t, { A: () => l, _: () => o });
var r = n(574381),
    i = n(833349),
    s = n(652215);
function a() {
    return (0, r.un)() ? s.yTV.IOS : (0, r.m0)() ? s.yTV.ANDROID : s.yTV.DESKTOP;
}
function o(e) {
    return null != e && !!(0, i.A)(e, s.jUm.JOIN) && e.type === s.$pd.PLAYING;
}
function l(e) {
    if (!o(e)) return !1;
    let t = a();
    if (e?.platform === t) return !0;
    let n = e?.supported_platforms;
    return null != n && 0 !== n.length && n.includes(t);
}
