i.d(e, { N: () => d });
var n = i(574381),
    l = i(419954),
    s = i(837921),
    r = i(780964),
    a = i(358776),
    u = i(604095),
    o = i(985018);
let d = (0, l.zD)(r.X.OS_START_MINIMIZED, {
    useTitle: () => ((0, a.bp)("StartMinimized") ? o.intl.string(o.t.GfBL83) : o.intl.string(o.t.n7Yjes)),
    useSubtitle: () => ((0, a.bp)("StartMinimized") ? o.intl.string(o.t.XGyhhc) : o.intl.string(o.t.o2FSjB)),
    usePredicate: () => (0, n.uF)(),
    useValue: () => u.fk.useState((t) => !!t.openOnStartup && t.startMinimized),
    setValue: u.AZ,
    useDisabled: () => !u.fk.useState((t) => t.openOnStartup),
    initialize: () => {
        s.Ay.getSetting("START_MINIMIZED", !1).then((t) => u.fk.setState({ startMinimized: t }));
    },
});
