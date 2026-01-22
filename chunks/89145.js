n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(997509),
    c = n(555337),
    o = n(985018);

function d(e) {
    let { profile: t, canManageGuild: n } = e,
        d = t.id,
        u = (0, l.bG)([c.A], () => c.A.getError("name")),
        f = i.useCallback(
            (e) => {
                a.A.updateGuild({
                    name: e,
                }),
                    a.A.updateGuildProfile(d, {
                        name: e,
                    });
            },
            [d],
        );
    return (0, r.jsx)(s.ksK, {
        label: o.intl.string(o.t.X56QcF),
        type: "text",
        disabled: !n,
        value: t.name,
        maxLength: 100,
        onChange: f,
        error: u,
    });
}
