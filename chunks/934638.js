n.d(t, { Z: () => p }), n(266796);
var r = n(200651),
    i = n(192379),
    s = n(442837),
    a = n(481060),
    l = n(496675),
    o = n(434404),
    c = n(999382),
    d = n(981631),
    u = n(388032),
    m = n(541946);
function p(e) {
    var t, n;
    let { guild: p } = e,
        g = p.id,
        h = (0, s.e7)([l.Z], () => l.Z.can(d.Plq.MANAGE_GUILD, p)),
        f = i.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(g, { description: e });
            },
            [g]
        ),
        b = (0, s.e7)([c.Z], () => c.Z.getError('description')),
        x = (0, s.e7)([c.Z], () => c.Z.getGuildProfile());
    return (0, r.jsxs)(a.hjN, {
        className: m.section,
        children: [
            (0, r.jsxs)('div', {
                className: m.sectionHeader,
                children: [
                    (0, r.jsx)(a.vwX, { children: u.NW.string(u.t.Z27SCQ) }),
                    (0, r.jsx)(a.R94, {
                        type: a.geA.DESCRIPTION,
                        children: u.NW.string(u.t.pw0MIi)
                    })
                ]
            }),
            (0, r.jsx)(a.Kx8, {
                value: null !== (n = null !== (t = null == x ? void 0 : x.description) && void 0 !== t ? t : p.description) && void 0 !== n ? n : '',
                placeholder: u.NW.string(u.t.Nvfows),
                onChange: f,
                maxLength: 120,
                disabled: !h,
                error: b
            })
        ]
    });
}
