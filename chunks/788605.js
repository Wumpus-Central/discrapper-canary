i.d(t, { p: () => d });
var n = i(311907),
    l = i(684013),
    s = i(419954),
    r = i(256415),
    a = i(780964),
    u = i(652215),
    o = i(985018);
let d = (0, s.Hn)(a.X.OVERLAY_VOICE_WIDGET_DISPLAY_USERS, {
    useTitle: () => o.intl.string(o.t.swsWWC),
    useValue: () => (0, n.bG)([r.default], () => r.default.getDisplayUserMode()),
    setValue: (e) => {
        l.A.setDisplayUserMode(e);
    },
    useOptions: () => [
        { id: "always", label: o.intl.string(o.t.nBmDrT), value: u.f5z.ALWAYS },
        { id: "speaking", label: o.intl.string(o.t["2OvIZY"]), value: u.f5z.ONLY_WHILE_SPEAKING },
    ],
});
