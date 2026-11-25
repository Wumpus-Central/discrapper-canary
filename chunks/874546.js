var r = i(570138),
    e = i(350835),
    l = i(574381),
    a = i(809733),
    u = i(55730),
    o = i(652215);
i.d(
    n,
    {},
    {
        Ay: function (t) {
            if (!(null != t && (0, u.A)(t, o.jUm.JOIN) && t.type === e.$.PLAYING && 1)) return !1;
            let n = (0, l.un)()
                ? r.y.IOS
                : (0, a.IA)() || (0, l.q4)()
                  ? r.y.META_QUEST
                  : (0, l.m0)()
                    ? r.y.ANDROID
                    : r.y.DESKTOP;
            if ((t?.platform != null ? t.platform : r.y.DESKTOP) === n) return !0;
            let i = t?.supported_platforms;
            return null != i && 0 !== i.length && i.includes(n);
        },
    },
);
