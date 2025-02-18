n.d(t, { Z: () => I });
var a = n(200651),
    i = n(120356),
    l = n.n(i),
    r = n(692547),
    s = n(481060),
    o = n(410030),
    c = n(220082),
    d = n(114487),
    m = n(686546),
    u = n(768581),
    x = n(464647),
    h = n(43542),
    v = n(723776),
    j = n(686369),
    f = n(712617);
function g(e) {
    let { profile: t } = e,
        n = (0, o.ZP)(),
        i = (function (e, t) {
            let n = u.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                a = (0, c.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : a;
        })(t, (0, s.dQu)(r.Z.colors.BG_BASE_TERTIARY).hex()),
        l = (0, j.d)(n, i);
    return (0, a.jsx)('div', {
        className: f.banner,
        style: { background: l }
    });
}
function p(e) {
    let { profile: t } = e;
    return (0, a.jsx)('div', {
        className: f.avatarContainer,
        children: (0, a.jsx)(m.ZP, {
            mask: m.QS.CLAN_ICON,
            width: 70,
            height: 70,
            children: (0, a.jsx)('div', {
                className: f.avatarWrapper,
                children: (0, a.jsx)(d.b, {
                    guildId: t.id,
                    guildName: t.name,
                    guildIcon: t.icon,
                    iconSize: 64
                })
            })
        })
    });
}
function I(e) {
    let { profile: t, className: n } = e;
    return (0, a.jsxs)('div', {
        className: l()(f.container, n),
        children: [
            (0, a.jsx)(g, { profile: t }),
            (0, a.jsx)(p, { profile: t }),
            (0, a.jsx)(h.Z, { profile: t }),
            (0, a.jsxs)('div', {
                className: f.body,
                children: [
                    (0, a.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, a.jsx)(x.Z, { profile: t }),
                    (0, a.jsx)(v.F, { profile: t })
                ]
            })
        ]
    });
}
