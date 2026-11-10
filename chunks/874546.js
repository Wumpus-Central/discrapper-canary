var i = e(570138),
    r = e(350835),
    l = e(574381),
    u = e(809733),
    o = e(55730),
    a = e(652215);
function c(n) {
    return null != n && !!(0, o.A)(n, a.jUm.JOIN) && n.type === r.$.PLAYING;
}
e.d(
    t,
    {},
    {
        Ay: function (n) {
            if (!c(n)) return !1;
            let t = (0, l.un)() ? i.y.IOS : (0, u.IA)() ? i.y.META_QUEST : (0, l.m0)() ? i.y.ANDROID : i.y.DESKTOP;
            if ((n?.platform != null ? n.platform : i.y.DESKTOP) === t) return !0;
            let e = n?.supported_platforms;
            return null != e && 0 !== e.length && e.includes(t);
        },
        _C: c,
    },
);
