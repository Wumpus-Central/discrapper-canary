n.d(t, { p: () => u });
var i = n(311907),
    s = n(684013),
    l = n(419954),
    a = n(256415),
    r = n(780964),
    o = n(652215),
    d = n(985018);
let u = (0, l.Hn)(r.X.OVERLAY_VOICE_WIDGET_DISPLAY_NAMES, {
    useTitle: () => d.intl.string(d.t.J0dpcB),
    useValue: () => (0, i.bG)([a.default], () => a.default.getDisplayNameMode()),
    setValue: (e) => {
        s.A.setDisplayNameMode(e);
    },
    useOptions: () => [
        { id: "always", label: d.intl.string(d.t.nBmDrT), value: o.pwA.ALWAYS },
        { id: "speaking", label: d.intl.string(d.t["2OvIZY"]), value: o.pwA.ONLY_WHILE_SPEAKING },
        { id: "never", label: d.intl.string(d.t.ekjlPL), value: o.pwA.NEVER },
    ],
});
