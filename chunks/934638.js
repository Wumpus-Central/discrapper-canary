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
    m = n(489007);
function h(e) {
    var t;
    let { guild: n } = e,
        h = n.id,
        g = (0, l.e7)([a.Z], () => a.Z.can(d.Plq.MANAGE_GUILD, n)),
        x = r.useCallback(
            (e) => {
                o.Z.updateGuild({ description: e }), o.Z.updateGuildProfile(h, { description: e });
            },
            [h]
        ),
        p = (0, l.e7)([c.Z], () => c.Z.getError('description'));
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
                value: null !== (t = n.description) && void 0 !== t ? t : '',
                placeholder: u.intl.string(u.t.Nvfows),
                onChange: x,
                maxLength: 120,
                disabled: !g,
                error: p
            })
        ]
    });
}
