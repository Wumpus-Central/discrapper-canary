n.d(t, { Z: () => y }), n(266796);
var r = n(200651),
    l = n(120356),
    i = n.n(l),
    a = n(692547),
    o = n(481060),
    c = n(410030),
    s = n(220082),
    u = n(114487),
    d = n(686546),
    m = n(768581),
    x = n(15210),
    v = n(464647),
    f = n(43542),
    j = n(723776),
    h = n(686369),
    g = n(545495);
function p(e) {
    let { profile: t } = e,
        n = (0, c.ZP)(),
        l = (function (e, t) {
            let n = m.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, s.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, o.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()),
        i = (0, h.d)(n, l);
    return (0, r.jsx)('div', {
        className: g.banner,
        style: { background: i }
    });
}
function b(e) {
    let { profile: t } = e;
    return (0, r.jsx)('div', {
        className: g.avatarContainer,
        children: (0, r.jsx)(d.ZP, {
            mask: d.QS.CLAN_ICON,
            width: 70,
            height: 70,
            children: (0, r.jsx)('div', {
                className: g.avatarWrapper,
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
function y(e) {
    let { profile: t, className: n, disableCTA: l } = e;
    return (0, r.jsxs)('div', {
        className: i()(g.container, n),
        children: [
            (0, r.jsx)(p, { profile: t }),
            (0, r.jsx)(b, { profile: t }),
            (0, r.jsx)(f.Z, { profile: t }),
            (0, r.jsxs)('div', {
                className: g.body,
                children: [
                    (0, r.jsx)(o.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, r.jsx)(v.Z, { profile: t }),
                    (0, r.jsx)(j.F, { profile: t })
                ]
            }),
            l
                ? null
                : (0, r.jsx)('div', {
                      className: g.buttonContainer,
                      children: (0, r.jsx)(x.Z, { profile: t })
                  })
        ]
    });
}
