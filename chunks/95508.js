n.d(e, { Z: () => d });
var i = n(951288),
    l = n(442837),
    r = n(509613),
    u = n(292959),
    s = n(313789),
    a = n(494620),
    o = n(518596),
    c = n(388032);
let d = (0, r.ON)(s.n.SOUNDS_DISABLED_WARNING, {
    useSearchTerms: () => [c.intl.string(c.t.MKWyKc)],
    usePredicate: () => (0, l.e7)([u.Z], () => u.Z.getDisableAllSounds()),
    render: () =>
        (0, i.jsx)(a.Z, {
            look: a.z.WARNING,
            children: c.intl.format(c.t.fRvixS, {
                onClick: () => (0, o.openUserSettings)(s.n.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
