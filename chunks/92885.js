n.d(e, { D: () => T });
var i = n(512722),
    l = n.n(i),
    u = n(442837),
    r = n(197344),
    s = n(509613),
    a = n(716364),
    o = n(474873),
    c = n(313789),
    E = n(871465),
    S = n(388032);
let T = (0, s.qs)(c.n.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = r.Z.useHolidaySoundpack();
        return null == t ? "" : S.intl.format(S.t["E/OyBr"], { soundpack: S.intl.string(t.soundpackLabel) });
    },
    useValue: function () {
        let t = (0, u.e7)([o.Z], () => o.Z.getSoundpack()),
            e = r.Z.useHolidaySoundpack();
        return t === (null == e ? void 0 : e.soundpack);
    },
    setValue: function (t) {
        let e = r.Z.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, a.c)(t ? e : E.Y.CLASSIC);
    },
    usePredicate: r.Z.useIsEligible,
});
