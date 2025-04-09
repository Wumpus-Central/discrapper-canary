n.d(t, {
    EK: () => G,
    Io: () => k,
    NY: () => j,
    Ox: () => L,
    Vq: () => M,
    Wf: () => U,
    cB: () => x,
    dy: () => w,
    wP: () => D
});
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(596454),
    s = n(99690),
    l = n(607070),
    c = n(797610),
    u = n(754688),
    d = n(699450),
    f = n(303694),
    _ = n(124072),
    p = n(891984),
    h = n(884902);
n(763296);
var m = n(592125),
    g = n(430824),
    E = n(246946),
    b = n(594174),
    y = n(934415),
    v = n(5192),
    O = n(51144),
    I = n(377668),
    S = n(388032),
    T = n(576851),
    N = n(73433);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
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
                C(
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
function D(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(o.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                a.Z,
                C(
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
function L(e) {
    let { text: t, channelId: n, guildId: i } = e,
        o = g.Z.getGuild(i),
        a = m.Z.getChannel(n),
        s = (0, c.Ib)(o, a) && '@Clyde' === t ? I.jM : null;
    return (0, r.jsx)(_.Z, {
        color: s,
        children: t
    });
}
function x(e) {
    let { id: t, guildId: n, channelId: a } = e,
        l = (0, i.e7)([b.default], () => b.default.getUser(t)),
        c = (0, i.e7)([E.Z], () => E.Z.hidePersonalInformation),
        u = v.ZP.useName(n, a, l),
        d = (0, r.jsx)(_.Z, { children: null == u ? '<@'.concat(t, '>') : '@'.concat(u) });
    if (null != l) {
        let e = c || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(o.ua7, {
            text: (0, r.jsxs)('div', {
                className: T.userTooltip,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: l,
                        animate: !0,
                        size: o.EFr.SIZE_16,
                        className: T.avatar
                    }),
                    O.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: c ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: T.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': O.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) => (0, r.jsx)(o.P3F, P(C({ tag: 'span' }, e), { children: d }))
        });
    }
    return d;
}
function M(e) {
    let { id: t, guildId: n } = e,
        a = (0, i.e7)([g.Z], () => (null != n ? g.Z.getRole(n, t) : void 0)),
        s = (0, i.e7)([l.Z], () => l.Z.roleStyle),
        c = (0, h.X)(n, null == a ? void 0 : a.colorStrings);
    if (null == a)
        return (0, r.jsxs)('span', {
            children: ['@', S.NW.string(S.t['YV4F/v'])]
        });
    let u = null != a.color && 0 !== a.color,
        d = 'dot' === s,
        f = 'username' === s && u;
    return (0, r.jsxs)(_.Z, {
        color: f ? a.color : null,
        roleColors: f ? c : null,
        children: [
            d &&
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
function k(e) {
    let { id: t } = e,
        n = (0, i.e7)([m.Z], () => m.Z.getChannel(t)),
        o = S.NW.string(S.t.zLZPmp).toLowerCase(),
        a = 'text',
        s = !0;
    if (null != n) {
        var l;
        (o = (0, u.YO)(n) ? n.name : S.NW.string(S.t['/YzI6+'])), (a = (0, u.YO)(n) ? (null != (l = (0, y.wl)(n)) ? l : 'text') : 'locked'), (s = (0, d.B)(n.type));
    }
    return s
        ? (0, r.jsx)(_.Z, {
              iconType: a,
              children: o
          })
        : (0, r.jsx)('span', { children: '#' + o });
}
function j(e) {
    let { id: t, itemId: n, guildId: i } = e,
        o = (0, f.l)(t),
        a = (0, f.W)(t, n, i);
    return (0, r.jsxs)(_.Z, {
        iconType: t,
        children: [o, null != a && (0, r.jsx)(p.Z, {}), a]
    });
}
function U(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(_.Z, {
        children: [t, '(', n, ')']
    });
}
function G(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: N.timestamp,
        children: t.formatted
    });
}
