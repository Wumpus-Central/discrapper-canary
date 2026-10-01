i.d(t, { Ay: () => a, _C: () => u });
var e = i(574381),
    r = i(809733),
    l = i(55730),
    o = i(652215);
function u(n) {
    return null != n && !!(0, l.A)(n, o.jUm.JOIN) && n.type === o.$pd.PLAYING;
}
function a(n) {
    if (!u(n)) return !1;
    let t = (0, e.un)() ? o.yTV.IOS : (0, r.IA)() ? o.yTV.META_QUEST : (0, e.m0)() ? o.yTV.ANDROID : o.yTV.DESKTOP;
    if ((n?.platform != null ? n.platform : o.yTV.DESKTOP) === t) return !0;
    let i = n?.supported_platforms;
    return null != i && 0 !== i.length && i.includes(t);
}
