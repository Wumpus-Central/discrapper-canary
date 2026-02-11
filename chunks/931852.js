i.d(t, { z: () => u });
var n = i(735438),
    l = i(419954),
    s = i(253932),
    r = i(780964),
    a = i(985018);
let u = (0, l.Hn)(r.X.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => a.intl.string(a.t["8rHeOr"]),
    useSubtitle: () => a.intl.string(a.t["eJE6+J"]),
    useValue: s.cU.useSetting,
    setValue: s.cU.updateSetting,
    useOptions: () =>
        n
            .range(1, 11)
            .map((e) => ({
                id: e.toString(),
                value: 60 * e,
                label: a.intl.formatToPlainString(a.t.iXLF9W, { minutes: e }),
            })),
});
