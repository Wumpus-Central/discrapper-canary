i.d(e, {
    B: () => A,
});
var n = i(915618),
    l = i(572164),
    s = i(399925),
    r = i(419954),
    u = i(430452),
    a = i(723702),
    o = i(780964),
    T = i(985018);
let A = (0, r.zD)(o.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => T.intl.string(T.t.yXvykv),
    useSubtitle: () => T.intl.string(T.t.YP3ujk),
    useValue: l.XT,
    setValue: (t) =>
        s.fd({
            enabled: t,
            trackAnalytics: !0,
        }),
    usePredicate: () => {
        let t = (0, a.isWindows)(),
            e = (0, n.A)(u.A);
        return t && e;
    },
});
