i.d(e, { p: () => T });
var n = i(311907),
    l = i(684013),
    s = i(419954),
    r = i(256415),
    u = i(780964),
    a = i(652215),
    o = i(985018);
let T = (0, s.Hn)(u.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
    fieldLayout: "horizontal",
    useTitle: () => o.intl.string(o.t.swsWWC),
    useValue: () => (0, n.bG)([r.default], () => r.default.getDisplayUserMode()),
    setValue: (t) => {
        l.A.setDisplayUserMode(t);
    },
    useOptions: () => [
        {
            id: "always",
            label: o.intl.string(o.t.nBmDrT),
            value: a.f5z.ALWAYS,
        },
        {
            id: "speaking",
            label: o.intl.string(o.t["2OvIZY"]),
            value: a.f5z.ONLY_WHILE_SPEAKING,
        },
    ],
});
