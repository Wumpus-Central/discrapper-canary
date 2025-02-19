n.d(t, {
    EK: () => U,
    Io: () => M,
    NY: () => k,
    Ox: () => D,
    Vq: () => L,
    Wf: () => j,
    cB: () => x,
    dy: () => P,
    wP: () => w
});
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(596454),
    s = n(99690),
    l = n(607070),
    c = n(927723),
    u = n(754688),
    d = n(699450),
    f = n(303694),
    p = n(124072),
    _ = n(692629);
n(763296);
var h = n(592125),
    m = n(430824),
    g = n(246946),
    E = n(594174),
    v = n(934415),
    b = n(5192),
    y = n(51144),
    O = n(377668),
    S = n(388032),
    I = n(419248),
    T = n(368365);
function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(o.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                a.Z,
                A(
                    {
                        src: t.src,
                        emojiName: t.name,
                        animated: !1
                    },
                    e
                )
            )
    });
}
function w(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(o.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                a.Z,
                A(
                    {
                        emojiId: t.emojiId,
                        emojiName: t.name,
                        animated: t.animated
                    },
                    e
                )
            )
    });
}
function D(e) {
    let { text: t, channelId: n, guildId: i } = e,
        o = m.Z.getGuild(i),
        a = h.Z.getChannel(n),
        s = (0, c.Ib)(o, a) && '@Clyde' === t ? O.jM : null;
    return (0, r.jsx)(p.Z, {
        color: s,
        children: t
    });
}
function x(e) {
    let { id: t, guildId: n, channelId: a } = e,
        l = (0, i.e7)([E.default], () => E.default.getUser(t)),
        c = (0, i.e7)([g.Z], () => g.Z.hidePersonalInformation),
        u = b.ZP.useName(n, a, l),
        d = (0, r.jsx)(p.Z, { children: null == u ? '<@'.concat(t, '>') : '@'.concat(u) });
    if (null != l) {
        let e = c || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(o.ua7, {
            text: (0, r.jsxs)('div', {
                className: I.userTooltip,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: l,
                        animate: !0,
                        size: o.EFr.SIZE_16,
                        className: I.avatar
                    }),
                    y.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: c ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: I.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': y.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) => (0, r.jsx)(o.P3F, R(A({ tag: 'span' }, e), { children: d }))
        });
    }
    return d;
}
function L(e) {
    let { id: t, guildId: n } = e,
        a = (0, i.e7)([m.Z], () => (null != n ? m.Z.getRole(n, t) : void 0)),
        s = (0, i.e7)([l.Z], () => l.Z.roleStyle);
    if (null == a)
        return (0, r.jsxs)('span', {
            children: ['@', S.NW.string(S.t['YV4F/v'])]
        });
    let c = null != a.color && 0 !== a.color,
        u = 'dot' === s,
        d = 'username' === s && c;
    return (0, r.jsxs)(p.Z, {
        color: d ? a.color : null,
        children: [
            u &&
                (0, r.jsx)(o.FhE, {
                    color: a.colorString,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            a.name
        ]
    });
}
function M(e) {
    let { id: t } = e,
        n = (0, i.e7)([h.Z], () => h.Z.getChannel(t)),
        o = S.NW.string(S.t.zLZPmp).toLowerCase(),
        a = 'text',
        s = !0;
    if (null != n) {
        var l;
        (o = (0, u.YO)(n) ? n.name : S.NW.string(S.t['/YzI6+'])), (a = (0, u.YO)(n) ? (null !== (l = (0, v.wl)(n)) && void 0 !== l ? l : 'text') : 'locked'), (s = (0, d.B)(n.type));
    }
    return s
        ? (0, r.jsx)(p.Z, {
              iconType: a,
              children: o
          })
        : (0, r.jsx)('span', { children: '#' + o });
}
function k(e) {
    let { id: t, itemId: n, guildId: i } = e,
        o = (0, f.l)(t),
        a = (0, f.W)(t, n, i);
    return (0, r.jsxs)(p.Z, {
        iconType: t,
        children: [o, null != a && (0, r.jsx)(_.Z, {}), a]
    });
}
function j(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(p.Z, {
        children: [t, '(', n, ')']
    });
}
function U(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: T.timestamp,
        children: t.formatted
    });
}
