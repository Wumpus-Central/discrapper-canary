t.d(n, { Z: () => j });
var l = t(200651),
    i = t(442837),
    r = t(692547),
    a = t(481060),
    o = t(410030),
    s = t(220082),
    c = t(114487),
    d = t(686546),
    u = t(706454),
    m = t(768581),
    _ = t(709054),
    h = t(997431),
    x = t(723776),
    g = t(686369),
    v = t(388032),
    b = t(893772);
function j(e) {
    let { profile: n } = e,
        t = (0, o.ZP)(),
        j = (function (e, n) {
            let t = m.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                l = (0, s.ZP)(t, n);
            return null != e.brandColorPrimary ? e.brandColorPrimary : l;
        })(n, (0, a.dQu)(r.Z.colors.BG_BASE_TERTIARY).hex()),
        N = (0, i.e7)([u.default], () => u.default.locale),
        p = (0, g.d)(t, j),
        f = (0, h.M)(_.default.extractTimestamp(n.id), N);
    return (0, l.jsxs)('div', {
        className: b.container,
        children: [
            (0, l.jsx)('div', {
                className: b.banner,
                style: { background: p }
            }),
            (0, l.jsx)('div', {
                className: b.avatarContainer,
                children: (0, l.jsx)(d.ZP, {
                    mask: d.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, l.jsx)('div', {
                        className: b.avatarWrapper,
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
                className: b.header,
                children: [
                    (0, l.jsx)(a.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, l.jsxs)('div', {
                        className: b.members,
                        children: [
                            (0, l.jsxs)('div', {
                                className: b.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: b.dot }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: v.intl.format(v.t.zRl6XV, { count: n.memberCount })
                                    })
                                ]
                            }),
                            (0, l.jsxs)('div', {
                                className: b.memberCount,
                                children: [
                                    (0, l.jsx)('div', { className: b.dotOnline }),
                                    (0, l.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: v.intl.format(v.t['LC+S+v'], { membersOnline: n.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, l.jsx)('div', {
                        className: b.established,
                        children: (0, l.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: v.intl.format(v.t['zb2Q5+'], { createdAtDate: f })
                        })
                    })
                ]
            }),
            (0, l.jsxs)('div', {
                className: b.body,
                children: [
                    (0, l.jsx)(a.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: n.description
                    }),
                    (0, l.jsx)(x.F, { profile: n })
                ]
            })
        ]
    });
}
