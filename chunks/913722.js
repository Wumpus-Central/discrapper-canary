n.d(t, { F: () => c });
var i = n(627968),
    s = n(158954),
    l = n(552122),
    a = n(419954),
    r = n(780964),
    o = n(858897),
    d = n(985018);
let c = (0, a.E2)(r.X.SOUNDS_HOLIDAY_NOTICE, {
    useSearchTerms: () => [d.intl.string(d.t.fgSHf8)],
    usePredicate: () => null != l.A.useHolidaySoundpack(),
    Component: () =>
        (0, i.jsx)(s.EYj, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: d.intl.format(d.t.Eup6Wv, {
                onClick: () => (0, o.openUserSettings)(r.X.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
