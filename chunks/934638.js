n.d(t, { Z: () => h });
var i = n(200651),
    r = n(192379),
    l = n(442837),
    s = n(481060),
    a = n(496675),
    o = n(434404),
    c = n(999382),
    d = n(981631),
    u = n(388032),
    m = n(750609);
function h(e) {
    var t, n;
    let { guild: h } = e,
        g = h.id,
        x = (0, l.e7)([a.Z], () => a.Z.can(d.Plq.MANAGE_GUILD, h)),
        p = r.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(g, { description: e });
            },
            [g]
        ),
        _ = (0, l.e7)([c.Z], () => c.Z.getError('description')),
        C = (0, l.e7)([c.Z], () => c.Z.getGuildProfile());
    return (0, i.jsxs)(s.hjN, {
        className: m.section,
        children: [
            (0, i.jsxs)('div', {
                className: m.sectionHeader,
                children: [
                    (0, i.jsx)(s.vwX, { children: u.intl.string(u.t.Z27SCQ) }),
                    (0, i.jsx)(s.R94, {
                        type: s.geA.DESCRIPTION,
                        children: u.intl.string(u.t.pw0MIi)
                    })
                ]
            }),
            (0, i.jsx)(s.Kx8, {
                value: null !== (n = null !== (t = null == C ? void 0 : C.description) && void 0 !== t ? t : h.description) && void 0 !== n ? n : '',
                placeholder: u.intl.string(u.t.Nvfows),
                onChange: p,
                maxLength: 120,
                disabled: !x,
                error: _
            })
        ]
    });
}
