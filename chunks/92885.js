n.d(e, { D: () => E });
var i = n(512722),
    l = n.n(i),
    s = n(442837),
    u = n(197344),
    r = n(509613),
    a = n(716364),
    o = n(474873),
    S = n(313789),
    T = n(871465),
    c = n(388032);
let E = (0, r.qs)(S.n.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = u.Z.useHolidaySoundpack();
        return null == t ? "" : c.intl.format(c.t["E/OyBr"], { soundpack: c.intl.string(t.soundpackLabel) });
    },
    useValue: function () {
        let t = (0, s.e7)([o.Z], () => o.Z.getSoundpack()),
            e = u.Z.useHolidaySoundpack();
        return t === (null == e ? void 0 : e.soundpack);
    },
    setValue: function (t) {
        let e = u.Z.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, a.c)(t ? e : T.Y.CLASSIC);
    },
    usePredicate: u.Z.useIsEligible,
});
