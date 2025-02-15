n.d(t, { Z: () => C });
var i = n(200651),
    r = n(120356),
    a = n.n(r),
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
        r = (0, d.ZP)(),
        C = (function (e, t) {
            let n = f.ZP.getGuildIconURL({
                    id: e.id,
                    icon: e.icon,
                    size: 64
                }),
                i = (0, c.ZP)(n, t);
            return null != e.brandColorPrimary ? e.brandColorPrimary : i;
        })(t, (0, s.dQu)(o.Z.colors.BG_BASE_TERTIARY).hex()),
        I = (0, l.e7)([_.default], () => _.default.locale),
        j = (0, g.d)(r, C),
        N = (0, h.M)(x.default.extractTimestamp(t.id), I);
    return (0, i.jsxs)('div', {
        className: a()(b.container, n),
        children: [
            (0, i.jsx)('div', {
                className: b.banner,
                style: { background: j }
            }),
            (0, i.jsx)('div', {
                className: b.avatarContainer,
                children: (0, i.jsx)(m.ZP, {
                    mask: m.QS.CLAN_ICON,
                    width: 70,
                    height: 70,
                    children: (0, i.jsx)('div', {
                        className: b.avatarWrapper,
                        children: (0, i.jsx)(u.b, {
                            guildId: t.id,
                            guildName: t.name,
                            guildIcon: t.icon,
                            iconSize: 64
                        })
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: b.header,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-lg/medium',
                        color: 'header-primary',
                        children: t.name
                    }),
                    (0, i.jsxs)('div', {
                        className: b.members,
                        children: [
                            (0, i.jsxs)('div', {
                                className: b.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: b.dot }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: p.intl.format(p.t.zRl6XV, { count: t.memberCount })
                                    })
                                ]
                            }),
                            (0, i.jsxs)('div', {
                                className: b.memberCount,
                                children: [
                                    (0, i.jsx)('div', { className: b.dotOnline }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-secondary',
                                        children: p.intl.format(p.t['LC+S+v'], { membersOnline: t.onlineCount })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsx)('div', {
                        className: b.established,
                        children: (0, i.jsx)(s.Text, {
                            variant: 'text-sm/normal',
                            color: 'text-secondary',
                            children: p.intl.format(p.t['zb2Q5+'], { createdAtDate: N })
                        })
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: b.body,
                children: [
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/normal',
                        color: 'text-secondary',
                        children: t.description
                    }),
                    (0, i.jsx)(v.F, { profile: t })
                ]
            })
        ]
    });
}
