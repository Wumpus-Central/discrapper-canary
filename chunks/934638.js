n.d(t, { Z: () => u }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(434404),
    o = n(999382),
    c = n(388032),
    d = n(541946);
function u(e) {
    let { profile: t, canManageGuild: n } = e,
        u = t.id,
        m = i.useCallback(
            (e) => {
                l.Z.updateGuild({ description: e }), l.Z.updateGuildProfile(u, { description: e });
            },
            [u]
        ),
        p = (0, s.e7)([o.Z], () => o.Z.getError('description'));
    return (0, r.jsxs)(a.hjN, {
        className: d.section,
        children: [
            (0, r.jsxs)('div', {
                className: d.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: c.NW.string(c.t.Z27SCQ) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: c.NW.string(c.t.pw0MIi)
                    })
                ]
            }),
            (0, r.jsx)(a.Kx8, {
                value: t.description,
                placeholder: c.NW.string(c.t.Nvfows),
                onChange: m,
                maxLength: 120,
                disabled: !n,
                error: p
            })
        ]
    });
}
