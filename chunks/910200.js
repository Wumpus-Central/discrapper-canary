n.d(t, { Z: () => C });
var r = n(200651),
    i = n(120356),
    a = n.n(i),
    l = n(442837),
    o = n(692547),
    s = n(481060),
    d = n(410030),
    c = n(220082),
    u = n(114487),
    m = n(686546),
    _ = n(706454),
    f = n(768581),
    x = n(709054),
    h = n(997431),
    v = n(723776),
    g = n(686369),
    p = n(388032),
    b = n(712617);
function C(e) {
    let { profile: t, className: n } = e,
        i = (0, d.ZP)(),
        C = (function (e, t) {
            let n = f.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                r = (0, c.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : r;
        })(t, (0, s.dQu)(o.Z.colors.BG_BASE_TERTIARY).hex()),
        I = (0, l.e7)([_.default], () => _.default.locale),
        j = (0, g.d)(i, C),
        N = (0, h.M)(x.default.extractTimestamp(t.id), I);
    return (0, r.jsxs)('div', {
        className: a()(b.container, n),
        children: [
            (0, r.jsx)('div', {
                className: b.banner,
                style: { background: j }
            }),
            (0, r.jsx)('div', {
                className: b.avatarContainer,
                children: (0, r.jsx)(m.ZP, {
                    mask: m.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, r.jsx)('div', {
                        className: b.avatarWrapper,
                        children: (0, r.jsx)(u.b, {
                            guildId: t.id,
                            guildName: t.name,
                            guildIcon: t.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, r.jsxs)('div', {
                className: b.header,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: t.name
                    }),
                    (0, r.jsxs)('div', {
                        className: b.members,
                        children: [
                            (0, r.jsxs)('div', {
                                className: b.memberCount,
                                children: [
                                    (0, r.jsx)('div', { className: b.dot }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: p.intl.format(p.t.zRl6XV, { count: t.memberCount })
                                    })
                                ]
                            }),
                            (0, r.jsxs)('div', {
                                className: b.memberCount,
                                children: [
                                    (0, r.jsx)('div', { className: b.dotOnline }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: p.intl.format(p.t['LC+S+v'], { membersOnline: t.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, r.jsx)('div', {
                        className: b.established,
                        children: (0, r.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: p.intl.format(p.t['zb2Q5+'], { createdAtDate: N })
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: b.body,
                children: [
                    (0, r.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, r.jsx)(v.F, { profile: t })
                ]
            })
        ]
    });
}
