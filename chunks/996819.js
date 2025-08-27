n.d(t, { Z: () => o });
var i = n(392711),
    l = n(509613),
    r = n(695346),
    s = n(869235),
    a = n(388032);
let o = (0, l.Em)(s.t.MOBILE_NOTIFICATION_DELAY, {
    useTitle: () => a.intl.string(a.t["8rHeOj"]),
    useSubtitle: () => a.intl.string(a.t["eJE6+P"]),
    useOptions: () =>
        i.range(1, 11).map((e) => ({
            value: 60 * e,
            label: a.intl.formatToPlainString(a.t.iXLF9f, { minutes: e }),
        })),
    useValue: r.CM.useSetting,
    setValue: r.CM.updateSetting,
});
