e.d(t, { Ay: () => a, _C: () => u });
var i = e(574381),
    r = e(809733),
    l = e(55730),
    o = e(652215);
function u(n) {
    return null != n && !!(0, l.A)(n, o.jUm.JOIN) && n.type === o.$pd.PLAYING;
}
function a(n) {
    if (!u(n)) return !1;
    let t = (0, i.un)() ? o.yTV.IOS : (0, r.IA)() ? o.yTV.META_QUEST : (0, i.m0)() ? o.yTV.ANDROID : o.yTV.DESKTOP;
    if ((n?.platform != null ? n.platform : o.yTV.DESKTOP) === t) return !0;
    let e = n?.supported_platforms;
    return null != e && 0 !== e.length && e.includes(t);
}
