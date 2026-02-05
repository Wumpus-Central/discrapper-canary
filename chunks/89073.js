i.d(e, { p: () => d });
var n = i(311907),
    l = i(684013),
    s = i(419954),
    r = i(256415),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.Hn)(a.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
    fieldLayout: "horizontal",
    useTitle: () => o.intl.string(o.t.J0dpcB),
    useValue: () => (0, n.bG)([r.default], () => r.default.getDisplayNameMode()),
    setValue: (t) => {
        l.A.setDisplayNameMode(t);
    },
    useOptions: () => [
        { id: "always", label: o.intl.string(o.t.nBmDrT), value: u.pwA.ALWAYS },
        { id: "speaking", label: o.intl.string(o.t["2OvIZY"]), value: u.pwA.ONLY_WHILE_SPEAKING },
        { id: "never", label: o.intl.string(o.t.ekjlPL), value: u.pwA.NEVER },
    ],
});
