t.d(n, {
    Z: function () {
        return v;
    }
});
var i = t(200651),
    l = t(442837),
    r = t(692547),
    a = t(481060),
    s = t(410030),
    c = t(220082),
    o = t(114487),
    u = t(686546),
    d = t(706454),
    h = t(768581),
    m = t(709054),
    f = t(997431),
    x = t(686369),
    g = t(388032),
    j = t(950039);
function v(e) {
    let { profile: n } = e,
        t = (0, s.ZP)(),
        v = (function (e, n) {
            let t = h.ZP.getGuildIconURL({
                id: e.id,
                icon: e.icon,
                size: 64
            });
            return (0, c.ZP)(t, n);
        })(n, (0, a.useToken)(r.Z.colors.BG_BASE_TERTIARY).hex()),
        N = (0, l.e7)([d.default], () => d.default.locale),
        _ = (0, x.d)(t, v),
        p = (0, f.M)(m.default.extractTimestamp(n.id), N);
    return (0, i.jsxs)('div', {
        className: j.container,
        children: [
            (0, i.jsx)('div', {
                className: j.banner,
                style: { background: _ }
            }),
            (0, i.jsx)('div', {
                className: j.avatarContainer,
                children: (0, i.jsx)(u.ZP, {
                    mask: u.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)('div', {
                        className: j.avatarWrapper,
                        children: (0, i.jsx)(o.b, {
                            guildId: n.id,
                            guildName: n.name,
                            guildIcon: n.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: j.header,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: n.name
                    }),
                    (0, i.jsxs)('div', {
                        className: j.members,
                        children: [
                            (0, i.jsxs)('div', {
                                className: j.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: j.dot }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: g.intl.format(g.t.zRl6XV, { count: n.memberCount })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: j.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: j.dotOnline }),
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: g.intl.format(g.t['LC+S+v'], { membersOnline: n.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: j.established,
                        children: (0, i.jsx)(a.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: g.intl.format(g.t['zb2Q5+'], { createdAtDate: p })
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: j.body,
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-secondary',
                    children: n.description
                })
            })
        ]
    });
}
