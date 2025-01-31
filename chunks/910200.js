n.d(l, { Z: () => g });
var i = n(200651),
    t = n(442837),
    a = n(692547),
    s = n(481060),
    r = n(410030),
    c = n(220082),
    d = n(114487),
    o = n(686546),
    u = n(706454),
    m = n(768581),
    h = n(709054),
    x = n(997431),
    j = n(686369),
    f = n(388032),
    v = n(950039);
function g(e) {
    let { profile: l } = e,
        n = (0, r.ZP)(),
        g = (function (e, l) {
            let n = m.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64
            });
            return (0, c.ZP)(n, l);
        })(l, (0, s.dQu)(a.Z.colors.BG_BASE_TERTIARY).hex()),
        N = (0, t.e7)([u.default], () => u.default.locale),
        P = (0, j.d)(n, g),
        p = (0, x.M)(h.default.extractTimestamp(l.id), N);
    return (0, i.jsxs)('div', {
        className: v.container,
        children: [
            (0, i.jsx)('div', {
                className: v.banner,
                style: { background: P }
            }),
            (0, i.jsx)('div', {
                className: v.avatarContainer,
                children: (0, i.jsx)(o.ZP, {
                    mask: o.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)('div', {
                        className: v.avatarWrapper,
                        children: (0, i.jsx)(d.b, {
                            guildId: l.id,
                            guildName: l.name,
                            guildIcon: l.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: v.header,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: l.name
                    }),
                    (0, i.jsxs)('div', {
                        className: v.members,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: v.dot }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: f.intl.format(f.t.zRl6XV, { count: l.memberCount })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: v.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: v.dotOnline }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: f.intl.format(f.t['LC+S+v'], { membersOnline: l.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: v.established,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: f.intl.format(f.t['zb2Q5+'], { createdAtDate: p })
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: v.body,
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: l.description
                })
            })
        ]
    });
}
