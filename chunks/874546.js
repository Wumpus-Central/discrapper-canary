i.d(e, { Ay: () => o, _C: () => s });
var l = i(574381),
    a = i(809733),
    n = i(833349),
    r = i(652215);
function s(t) {
    return null != t && !!(0, n.A)(t, r.jUm.JOIN) && t.type === r.$pd.PLAYING;
}
function o(t) {
    if (!s(t)) return !1;
    let e = (0, l.un)() ? r.yTV.IOS : (0, a.I)() ? r.yTV.META_QUEST : (0, l.m0)() ? r.yTV.ANDROID : r.yTV.DESKTOP;
    if ((t?.platform != null ? t.platform : r.yTV.DESKTOP) === e) return !0;
    let i = t?.supported_platforms;
    return null != i && 0 !== i.length && i.includes(e);
}
