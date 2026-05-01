e.d(n, { Ay: () => c, _C: () => u });
var i = e(574381),
    l = e(809733),
    r = e(833349),
    a = e(652215);
function u(t) {
    return null != t && !!(0, r.A)(t, a.jUm.JOIN) && t.type === a.$pd.PLAYING;
}
function c(t) {
    if (!u(t)) return !1;
    let n = (0, i.un)() ? a.yTV.IOS : (0, l.I)() ? a.yTV.META_QUEST : (0, i.m0)() ? a.yTV.ANDROID : a.yTV.DESKTOP;
    if ((t?.platform != null ? t.platform : a.yTV.DESKTOP) === n) return !0;
    let e = t?.supported_platforms;
    return null != e && 0 !== e.length && e.includes(n);
}
