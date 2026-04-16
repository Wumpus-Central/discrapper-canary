n.d(t, { N: () => d });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    r = n(780964),
    a = n(22539),
    o = n(985018);
let d = (0, s.zD)(r.X.OS_START_MINIMIZED, {
    useTitle: () => o.intl.string(o.t.GfBL83),
    useSubtitle: () => o.intl.string(o.t.XGyhhc),
    usePredicate: () => (0, i.uF)(),
    useValue: () => a.fk.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: a.AZ,
    useDisabled: () => !a.fk.useState((e) => e.openOnStartup),
    initialize: () => {
        l.Ay.getSetting("START_MINIMIZED", !1).then((e) => a.fk.setState({ startMinimized: e }));
    },
});
