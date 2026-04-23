"use strict";
n.d(t, { Ay: () => l, _C: () => o });
var r = n(574381),
    i = n(809733),
    s = n(833349),
    a = n(652215);
function o(e) {
    return null != e && !!(0, s.A)(e, a.jUm.JOIN) && e.type === a.$pd.PLAYING;
}
function l(e) {
    if (!o(e)) return !1;
    let t = (0, r.un)() ? a.yTV.IOS : (0, i.I)() ? a.yTV.META_QUEST : (0, r.m0)() ? a.yTV.ANDROID : a.yTV.DESKTOP;
    if ((e?.platform != null ? e.platform : a.yTV.DESKTOP) === t) return !0;
    let n = e?.supported_platforms;
    return null != n && 0 !== n.length && n.includes(t);
}
