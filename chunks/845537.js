n.d(t, {
    EK: () => w,
    Io: () => L,
    NY: () => x,
    Ox: () => R,
    Vq: () => D,
    Wf: () => P,
    cB: () => O,
    dy: () => N,
    wP: () => C
});
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(596454),
    o = n(99690),
    l = n(607070),
    u = n(927723),
    c = n(754688),
    d = n(699450),
    f = n(303694),
    _ = n(124072),
    p = n(692629);
n(763296);
var h = n(592125),
    m = n(430824),
    g = n(246946),
    E = n(594174),
    v = n(934415),
    y = n(5192),
    I = n(51144),
    T = n(377668),
    b = n(388032),
    S = n(412621),
    A = n(642367);
function N(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(a.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, i.jsx)(s.Z, {
                src: t.src,
                emojiName: t.name,
                animated: !1,
                ...e
            })
    });
}
function C(e) {
    let { emoji: t } = e;
    return (0, i.jsx)(a.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, i.jsx)(s.Z, {
                emojiId: t.emojiId,
                emojiName: t.name,
                animated: t.animated,
                ...e
            })
    });
}
function R(e) {
    let { text: t, channelId: n, guildId: r } = e,
        a = m.Z.getGuild(r),
        s = h.Z.getChannel(n),
        o = (0, u.Ib)(a, s) && '@Clyde' === t ? T.jM : null;
    return (0, i.jsx)(_.Z, {
        color: o,
        children: t
    });
}
function O(e) {
    let { id: t, guildId: n, channelId: s } = e,
        l = (0, r.e7)([E.default], () => E.default.getUser(t)),
        u = (0, r.e7)([g.Z], () => g.Z.hidePersonalInformation),
        c = y.ZP.useName(n, s, l),
        d = (0, i.jsx)(_.Z, { children: null == c ? '<@'.concat(t, '>') : '@'.concat(c) });
    if (null != l) {
        let e = u || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, i.jsx)(a.ua7, {
            text: (0, i.jsxs)('div', {
                className: S.userTooltip,
                children: [
                    (0, i.jsx)(o.Z, {
                        user: l,
                        animate: !0,
                        size: a.EFr.SIZE_16,
                        className: S.avatar
                    }),
                    I.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: u ? 'never' : 'always'
                    }),
                    (0, i.jsx)('span', {
                        className: S.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': I.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) =>
                (0, i.jsx)(a.P3F, {
                    tag: 'span',
                    ...e,
                    children: d
                })
        });
    }
    return d;
}
function D(e) {
    let { id: t, guildId: n } = e,
        s = (0, r.e7)([m.Z], () => (null != n ? m.Z.getRole(n, t) : void 0)),
        o = (0, r.e7)([l.Z], () => l.Z.roleStyle);
    if (null == s)
        return (0, i.jsxs)('span', {
            children: ['@', b.intl.string(b.t['YV4F/v'])]
        });
    let u = null != s.color && 0 !== s.color,
        c = 'dot' === o,
        d = 'username' === o && u;
    return (0, i.jsxs)(_.Z, {
        color: d ? s.color : null,
        children: [
            c &&
                (0, i.jsx)(a.FhE, {
                    color: s.colorString,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            s.name
        ]
    });
}
function L(e) {
    let { id: t } = e,
        n = (0, r.e7)([h.Z], () => h.Z.getChannel(t)),
        a = b.intl.string(b.t.zLZPmp).toLowerCase(),
        s = 'text',
        o = !0;
    if (null != n) {
        var l;
        (a = (0, c.YO)(n) ? n.name : b.intl.string(b.t['/YzI6+'])), (s = (0, c.YO)(n) ? (null !== (l = (0, v.wl)(n)) && void 0 !== l ? l : 'text') : 'locked'), (o = (0, d.B)(n.type));
    }
    return o
        ? (0, i.jsx)(_.Z, {
              iconType: s,
              children: a
          })
        : (0, i.jsx)('span', { children: '#' + a });
}
function x(e) {
    let { id: t, itemId: n, guildId: r } = e,
        a = (0, f.l)(t),
        s = (0, f.W)(t, n, r);
    return (0, i.jsxs)(_.Z, {
        iconType: t,
        children: [a, null != s && (0, i.jsx)(p.Z, {}), s]
    });
}
function P(e) {
    let { text: t, id: n } = e;
    return (0, i.jsxs)(_.Z, {
        children: [t, '(', n, ')']
    });
}
function w(e) {
    let { timestamp: t } = e;
    return (0, i.jsx)('span', {
        className: A.timestamp,
        children: t.formatted
    });
}
