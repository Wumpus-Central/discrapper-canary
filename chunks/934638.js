n.d(t, { Z: () => m }), n(953529);
var r = n(200651),
    i = n(192379),
    s = n(345074),
    l = n(442837),
    a = n(481060),
    o = n(434404),
    c = n(999382),
    d = n(388032),
    u = n(375600);
function m(e) {
    let { profile: t, canManageGuild: n } = e,
        m = t.id,
        g = i.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(m, { description: e });
            },
            [m]
        ),
        p = (0, l.e7)([c.Z], () => c.Z.getError('description'));
    return (0, r.jsxs)(a.hjN, {
        className: u.section,
        children: [
            (0, r.jsxs)('div', {
                className: u.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: d.NW.string(d.t.Z27SCQ) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: d.NW.string(d.t.pw0MIi)
                    })
                ]
            }),
            (0, r.jsx)(a.Kx8, {
                value: t.description,
                placeholder: d.NW.string(d.t.Nvfows),
                onChange: g,
                maxLength: s.Us,
                disabled: !n,
                error: p
            })
        ]
    });
}
