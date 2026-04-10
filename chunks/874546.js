"use strict";
n.d(t, { Ay: () => u, _C: () => l });
var r = n(574381),
    i = n(809733),
    s = n(833349),
    a = n(652215);
function o() {
    return (0, r.un)() ? a.yTV.IOS : (0, i.I)() ? a.yTV.META_QUEST : (0, r.m0)() ? a.yTV.ANDROID : a.yTV.DESKTOP;
}
function l(e) {
    return null != e && !!(0, s.A)(e, a.jUm.JOIN) && e.type === a.$pd.PLAYING;
}
function u(e) {
    if (!l(e)) return !1;
    let t = o();
    if ((e?.platform != null ? e.platform : a.yTV.DESKTOP) === t) return !0;
    let n = e?.supported_platforms;
    return null != n && 0 !== n.length && n.includes(t);
}
