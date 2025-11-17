n.d(e, { Z: () => E });
var i = n(54381),
    l = n(442837),
    u = n(509613),
    r = n(292959),
    s = n(313789),
    a = n(494620),
    o = n(518596),
    c = n(388032);
let E = (0, u.ON)(s.n.SOUNDS_DISABLED_WARNING, {
    useSearchTerms: () => [c.intl.string(c.t.MKWyKc)],
    usePredicate: () => (0, l.e7)([r.Z], () => r.Z.getDisableAllSounds()),
    render: () =>
        (0, i.jsx)(a.Z, {
            look: a.z.WARNING,
            children: c.intl.format(c.t.fRvixS, {
                onClick: () => (0, o.openUserSettings)(s.n.NOTIFICATIONS_SOUNDS_CATEGORY),
            }),
        }),
});
