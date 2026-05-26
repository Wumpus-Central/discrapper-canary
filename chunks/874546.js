n.d(e, { Ay: () => a, _C: () => u });
var i = n(574381),
    r = n(809733),
    l = n(55730),
    o = n(652215);
function u(t) {
    return null != t && !!(0, l.A)(t, o.jUm.JOIN) && t.type === o.$pd.PLAYING;
}
function a(t) {
    if (!u(t)) return !1;
    let e = (0, i.un)() ? o.yTV.IOS : (0, r.I)() ? o.yTV.META_QUEST : (0, i.m0)() ? o.yTV.ANDROID : o.yTV.DESKTOP;
    if ((t?.platform != null ? t.platform : o.yTV.DESKTOP) === e) return !0;
    let n = t?.supported_platforms;
    return null != n && 0 !== n.length && n.includes(e);
}
