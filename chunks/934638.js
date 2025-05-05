n.d(t, { Z: () => m }), n(953529);
var r = n(255367),
    i = n(73800),
    l = n(345074),
    s = n(442837),
    a = n(481060),
    o = n(434404),
    c = n(999382),
    u = n(388032),
    d = n(381109);
function m(e) {
    let { profile: t, canManageGuild: n } = e,
        m = t.id,
        g = i.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(m, { description: e });
            },
            [m]
        ),
        p = (0, s.e7)([c.Z], () => c.Z.getError('description'));
    return (0, r.jsxs)(a.hjN, {
        className: d.section,
        children: [
            (0, r.jsxs)('div', {
                className: d.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: u.intl.string(u.t.Z27SCQ) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: u.intl.string(u.t.pw0MIi)
                    })
                ]
            }),
            (0, r.jsx)(a.Kx8, {
                value: t.description,
                placeholder: u.intl.string(u.t.Nvfows),
                onChange: g,
                maxLength: l.Us,
                disabled: !n,
                error: p
            })
        ]
    });
}
