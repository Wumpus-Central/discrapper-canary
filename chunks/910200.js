n.d(t, { Z: () => b }), n(266796);
var r = n(200651),
    a = n(120356),
    i = n.n(a),
    l = n(692547),
    s = n(481060),
    o = n(410030),
    c = n(220082),
    u = n(114487),
    m = n(686546),
    d = n(768581),
    x = n(464647),
    v = n(43542),
    h = n(723776),
    f = n(686369),
    j = n(545495);
function g(e) {
    let { profile: t } = e,
        n = (0, o.ZP)(),
        a = (function (e, t) {
            let n = d.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, c.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, s.dQu)(l.Z.colors.BG_BASE_TERTIARY).hex()),
        i = (0, f.d)(n, a);
    return (0, r.jsx)('div', {
        className: j.banner,
        style: { background: i }
    });
}
function p(e) {
    let { profile: t } = e;
    return (0, r.jsx)('div', {
        className: j.avatarContainer,
        children: (0, r.jsx)(m.ZP, {
            mask: m.QS.CLAN_ICON,
            width: 70,
            height: 70,
            children: (0, r.jsx)('div', {
                className: j.avatarWrapper,
                children: (0, r.jsx)(u.b, {
                    guildId: t.id,
                    guildName: t.name,
                    guildIcon: t.icon,
                    iconSize: 64
                })
            })
        })
    });
}
function b(e) {
    let { profile: t, className: n } = e;
    return (0, r.jsxs)('div', {
        className: i()(j.container, n),
        children: [
            (0, r.jsx)(g, { profile: t }),
            (0, r.jsx)(p, { profile: t }),
            (0, r.jsx)(v.Z, { profile: t }),
            (0, r.jsxs)('div', {
                className: j.body,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, r.jsx)(x.Z, { profile: t }),
                    (0, r.jsx)(h.F, { profile: t })
                ]
            })
        ]
    });
}
