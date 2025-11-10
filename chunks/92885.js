n.d(e, { D: () => S });
var i = n(512722),
    l = n.n(i),
    r = n(442837),
    u = n(197344),
    s = n(509613),
    a = n(716364),
    o = n(474873),
    c = n(313789),
    E = n(871465),
    d = n(388032);
let S = (0, s.qs)(c.n.NOTIFICATION_HOLIDAY_SOUNDPACK, {
    useTitle: () => {
        let t = u.Z.useHolidaySoundpack();
        return null == t ? "" : d.intl.format(d.t["E/OyBr"], { soundpack: d.intl.string(t.soundpackLabel) });
    },
    useValue: function () {
        let t = (0, r.e7)([o.Z], () => o.Z.getSoundpack()),
            e = u.Z.useHolidaySoundpack();
        return t === (null == e ? void 0 : e.soundpack);
    },
    setValue: function (t) {
        let e = u.Z.getHolidaySoundpack();
        l()(null != e, "predicate should fail if no soundpack is available"), (0, a.c)(t ? e : E.Y.CLASSIC);
    },
    usePredicate: u.Z.useIsEligible,
});
