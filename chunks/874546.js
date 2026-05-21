n.d(e, { Ay: () => u, _C: () => a });
var i = n(574381),
    r = n(809733),
    l = n(55730),
    o = n(652215);
function a(t) {
    return null != t && !!(0, l.A)(t, o.jUm.JOIN) && t.type === o.$pd.PLAYING;
}
function u(t) {
    if (!a(t)) return !1;
    let e = (0, i.un)() ? o.yTV.IOS : (0, r.I)() ? o.yTV.META_QUEST : (0, i.m0)() ? o.yTV.ANDROID : o.yTV.DESKTOP;
    if ((t?.platform != null ? t.platform : o.yTV.DESKTOP) === e) return !0;
    let n = t?.supported_platforms;
    return null != n && 0 !== n.length && n.includes(e);
}
