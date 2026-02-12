i.d(e, { P: () => d });
var n = i(574381),
    l = i(419954),
    s = i(837921),
    r = i(780964),
    a = i(358776),
    u = i(604095),
    o = i(985018);
let d = (0, l.zD)(r.X.OS_OPEN_ON_STARTUP, {
    useTitle: () => ((0, a.bp)("OpenOnStartup") ? o.intl.string(o.t["3BeZti"]) : o.intl.string(o.t.WQm4p1)),
    useSubtitle: () => ((0, a.bp)("OpenOnStartup") ? void 0 : o.intl.string(o.t["s/cQrU"])),
    usePredicate: () => n.Av && !(0, n.cX)(),
    useValue: () => u.fk.useState((t) => t.openOnStartup),
    setValue: u.Cp,
    initialize: () => {
        s.Ay.getOpenOnStart().then((t) => u.fk.setState({ openOnStartup: t }));
    },
});
