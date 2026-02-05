i.d(e, { F: () => d });
var n = i(627968),
    l = i(158954),
    s = i(552122),
    r = i(419954),
    a = i(780964),
    u = i(840065),
    o = i(985018);
let d = (0, r.E2)(a.X.SOUNDS_HOLIDAY_NOTICE, {
    useSearchTerms: () => [o.intl.string(o.t.fgSHf8)],
    usePredicate: () => null != s.A.useHolidaySoundpack(),
    Component: () =>
        (0, n.jsx)(l.EYj, {
            variant: "text-md/normal",
            color: "text-subtle",
            children: o.intl.format(o.t.Eup6Wv, {
                onClick: () => (0, u.openUserSettings)(a.X.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
