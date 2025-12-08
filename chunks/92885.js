n.d(e, { D: () => E });
var i = n(512722),
    l = n.n(i),
    s = n(442837),
    r = n(197344),
    u = n(509613),
    a = n(716364),
    o = n(474873),
    c = n(313789),
    d = n(871465),
    T = n(388032);
let E = (0, u.qs)(c.n.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = r.Z.useHolidaySoundpack();
        return null == t ? "" : T.intl.format(T.t["E/OyBr"], { soundpack: T.intl.string(t.soundpackLabel) });
    },
    useValue: function () {
        let t = (0, s.e7)([o.Z], () => o.Z.getSoundpack()),
            e = r.Z.useHolidaySoundpack();
        return t === (null == e ? void 0 : e.soundpack);
    },
    setValue: function (t) {
        let e = r.Z.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, a.c)(t ? e : d.Y.CLASSIC);
    },
    usePredicate: r.Z.useIsEligible,
});
