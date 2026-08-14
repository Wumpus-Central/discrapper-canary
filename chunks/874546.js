i.d(n, { Ay: () => u, _C: () => o });
var e = i(574381),
    l = i(809733),
    r = i(55730),
    a = i(652215);
function o(t) {
    return null != t && !!(0, r.A)(t, a.jUm.JOIN) && t.type === a.$pd.PLAYING;
}
function u(t) {
    if (!o(t)) return !1;
    let n = (0, e.un)() ? a.yTV.IOS : (0, l.IA)() ? a.yTV.META_QUEST : (0, e.m0)() ? a.yTV.ANDROID : a.yTV.DESKTOP;
    if ((t?.platform != null ? t.platform : a.yTV.DESKTOP) === n) return !0;
    let i = t?.supported_platforms;
    return null != i && 0 !== i.length && i.includes(n);
}
