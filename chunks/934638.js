(n.d(t, { Z: () => m }), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(345074),
    a = n(442837),
    s = n(481060),
    o = n(434404),
    c = n(999382),
    d = n(388032),
    u = n(381109);
function m(e) {
    let { profile: t, canManageGuild: n } = e,
        m = t.id,
        g = i.useCallback(
            (e) => {
                (o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(m, { description: e }));
            },
            [m]
        ),
        p = (0, a.e7)([c.Z], () => c.Z.getError('description'));
    return (0, r.jsxs)(s.hjN, {
        className: u.section,
        children: [
            (0, r.jsxs)('div', {
                className: u.sectionHeader,
                children: [
                    (0, r.jsx)(s.vwX, { children: d.intl.string(d.t.Z27SCQ) }),
                    (0, r.jsx)(s.R94, {
                        type: s.geA.DESCRIPTION,
                        children: d.intl.string(d.t.pw0MIi)
                    })
                ]
            }),
            (0, r.jsx)(s.Kx8, {
                value: t.description,
                placeholder: d.intl.string(d.t.Nvfows),
                onChange: g,
                maxLength: l.Us,
                disabled: !n,
                error: p
            })
        ]
    });
}
