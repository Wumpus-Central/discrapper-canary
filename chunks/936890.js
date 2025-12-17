n.d(e, { r: () => T });
var i = n(779618),
    l = n(341569),
    s = n(39604),
    u = n(509613),
    r = n(131951),
    a = n(358085),
    o = n(313789),
    S = n(388032);
let T = (0, u.qs)(o.n.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => S.intl.string(S.t.yXvykv),
    useSubtitle: () => S.intl.string(S.t.YP3ujk),
    useValue: l.nq,
    setValue: (t) =>
        s._Q({
            enabled: t,
            trackAnalytics: !0,
        }),
    usePredicate: () => {
        let t = (0, a.isWindows)(),
            e = (0, i.Z)(r.Z);
        return t && e;
    },
});
