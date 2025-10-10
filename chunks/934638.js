n.d(t, { Z: () => g }), n(953529);
var r = n(951288),
    i = n(647438),
    l = n(345074),
    s = n(442837),
    a = n(481060),
    o = n(434404),
    c = n(999382),
    d = n(388032),
    u = n(270856);
function g(e) {
    let { profile: t, canManageGuild: n } = e,
        g = t.id,
        m = i.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(g, { description: e });
            },
            [g],
        ),
        p = (0, s.e7)([c.Z], () => c.Z.getError("description"));
    return (0, r.jsxs)(a.hjN, {
        className: u.section,
        children: [
            (0, r.jsxs)("div", {
                className: u.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: d.intl.string(d.t.Z27SCQ) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: d.intl.string(d.t.pw0MIi),
                    }),
                ],
            }),
            (0, r.jsx)(a.Kx8, {
                value: t.description,
                placeholder: d.intl.string(d.t.Nvfows),
                onChange: m,
                maxLength: l.Us,
                disabled: !n,
                error: p,
            }),
        ],
    });
}
