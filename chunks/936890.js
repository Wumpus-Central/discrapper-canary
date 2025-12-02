n.d(e, { Z: () => d });
var i = n(779618),
    r = n(341569),
    l = n(39604),
    s = n(509613),
    u = n(131951),
    a = n(358085),
    o = n(313789),
    c = n(388032);
let d = (0, s.qs)(o.n.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => c.intl.string(c.t.yXvykv),
    useSubtitle: () => c.intl.string(c.t.YP3ujk),
    useValue: r.nq,
    usePredicate: () => {
        let t = (0, a.isWindows)(),
            e = (0, i.Z)(u.Z);
        return t && e;
    },
    setValue: (t) =>
        l._Q({
            enabled: t,
            trackAnalytics: !0,
        }),
});
