n.d(t, { Z: () => u }), n(953529);
var r = n(54381),
    i = n(473749),
    l = n(345074),
    a = n(442837),
    s = n(481060),
    o = n(434404),
    c = n(999382),
    d = n(388032);
function u(e) {
    let { profile: t, canManageGuild: n } = e,
        u = t.id,
        g = i.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(u, { description: e });
            },
            [u],
        ),
        m = (0, a.e7)([c.Z], () => c.Z.getError("description"));
    return (0, r.jsx)(s.Kx8, {
        label: d.intl.string(d.t.Z27SCb),
        description: d.intl.string(d.t.pw0MIk),
        value: t.description,
        placeholder: d.intl.string(d.t.Nvfowl),
        onChange: g,
        maxLength: l.Us,
        disabled: !n,
        error: m,
    });
}
