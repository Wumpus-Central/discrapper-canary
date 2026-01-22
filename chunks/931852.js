i.d(e, {
    z: () => a,
});
var n = i(735438),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    u = i(985018);
let a = (0, l.Hn)(r.X.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => u.intl.string(u.t["8rHeOr"]),
    useSubtitle: () => u.intl.string(u.t["eJE6+J"]),
    fieldLayout: "horizontal-responsive",
    useValue: s.cU.useSetting,
    setValue: s.cU.updateSetting,
    useOptions: () =>
        n.range(1, 11).map((t) => ({
            id: t.toString(),
            value: 60 * t,
            label: u.intl.formatToPlainString(u.t.iXLF9W, {
                minutes: t,
            }),
        })),
});
