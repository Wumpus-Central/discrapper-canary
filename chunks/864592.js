n.d(t, { B: () => c });
var i = n(915618),
    s = n(572164),
    l = n(399925),
    a = n(419954),
    r = n(430452),
    o = n(723702),
    d = n(780964),
    u = n(985018);
let c = (0, a.zD)(d.X.CLIPS_ENABLE_DECOUPLED_CLIPPING, {
    useTitle: () => u.intl.string(u.t.yXvykv),
    useSubtitle: () => u.intl.string(u.t.YP3ujk),
    useValue: s.XT,
    setValue: (e) => l.fd({ enabled: e, trackAnalytics: !0 }),
    usePredicate: () => {
        let e = (0, o.isWindows)(),
            t = (0, i.A)(r.Ay);
        return e && t;
    },
});
