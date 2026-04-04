n.d(t, { N: () => c });
var i = n(574381),
    s = n(419954),
    l = n(837921),
    a = n(780964),
    r = n(358776),
    o = n(22539),
    d = n(985018);
let c = (0, s.zD)(a.X.OS_START_MINIMIZED, {
    useTitle: () => ((0, r.bp)("StartMinimized") ? d.intl.string(d.t.GfBL83) : d.intl.string(d.t.n7Yjes)),
    useSubtitle: () => ((0, r.bp)("StartMinimized") ? d.intl.string(d.t.XGyhhc) : d.intl.string(d.t.o2FSjB)),
    usePredicate: () => (0, i.uF)(),
    useValue: () => o.fk.useState((e) => !!e.openOnStartup && e.startMinimized),
    setValue: o.AZ,
    useDisabled: () => !o.fk.useState((e) => e.openOnStartup),
    initialize: () => {
        l.Ay.getSetting("START_MINIMIZED", !1).then((e) => o.fk.setState({ startMinimized: e }));
    },
});
