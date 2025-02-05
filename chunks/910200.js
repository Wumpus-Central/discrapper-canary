t.d(n, { Z: () => b });
var l = t(200651),
    i = t(442837),
    r = t(692547),
    a = t(481060),
    s = t(410030),
    o = t(220082),
    c = t(114487),
    d = t(686546),
    u = t(706454),
    _ = t(768581),
    m = t(709054),
    h = t(997431),
    x = t(686369),
    g = t(388032),
    v = t(950039);
function b(e) {
    let { profile: n } = e,
        t = (0, s.ZP)(),
        b = (function (e, n) {
            let t = _.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                l = (0, o.ZP)(t, n);
            return null != e.brandColorPrimary ? e.brandColorPrimary : l;
        })(n, (0, a.dQu)(r.Z.colors.BG_BASE_TERTIARY).hex()),
        N = (0, i.e7)([u.default], () => u.default.locale),
        j = (0, x.d)(t, b),
        C = (0, h.M)(m.default.extractTimestamp(n.id), N);
    return (0, l.jsxs)('div', {
        className: v.container,
        children: [
            (0, l.jsx)('div', {
                className: v.banner,
                style: { background: j }
            }),
            (0, l.jsx)('div', {
                className: v.avatarContainer,
                children: (0, l.jsx)(d.ZP, {
                    mask: d.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, l.jsx)('div', {
                        className: v.avatarWrapper,
                        children: (0, l.jsx)(c.b, {
                            guildId: n.id,
                            guildName: n.name,
                            guildIcon: n.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, l.jsxs)('div', {
                className: v.header,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, l.jsxs)('div', {
                        className: v.members,
                        children: [
                            (0, l.jsxs)('div', {
                                className: v.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: v.dot }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: g.intl.format(g.t.zRl6XV, { count: n.memberCount })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: v.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: v.dotOnline }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: g.intl.format(g.t['LC+S+v'], { membersOnline: n.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: v.established,
                        children: (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: g.intl.format(g.t['zb2Q5+'], { createdAtDate: C })
                        })
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: v.body,
                children: (0, l.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: n.description
                })
            })
        ]
    });
}
