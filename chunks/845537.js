n.d(t, {
    EK: () => G,
    Io: () => k,
    N1: () => B,
    NY: () => j,
    Ox: () => L,
    Vq: () => M,
    Wf: () => U,
    cB: () => x,
    dy: () => w,
    wP: () => D
});
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(596454),
    s = n(99690),
    l = n(607070),
    c = n(754688),
    u = n(699450),
    d = n(303694),
    _ = n(124072),
    f = n(891984),
    p = n(884902);
n(763296);
var h = n(592125),
    m = n(77498),
    g = n(485386),
    E = n(246946),
    b = n(594174),
    y = n(768581),
    O = n(934415),
    v = n(5192),
    I = n(51144),
    T = n(388032),
    S = n(576851),
    A = n(73433);
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                N(e, t, n[t]);
            }));
    }
    return e;
}
function R(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
    return (0, r.jsx)(a.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                o.Z,
                C(
                    {
                        src: t.src,
                        emojiName: t.name,
                        animated: !1,
                        surrogate: t.surrogate
                    },
                    e
                )
            )
    });
}
function D(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                o.Z,
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
    let { text: t } = e;
    return (0, r.jsx)(_.Z, { children: t });
}
function x(e) {
    let { id: t, guildId: n, channelId: o } = e,
        l = (0, i.e7)([b.default], () => b.default.getUser(t)),
        c = (0, i.e7)([E.Z], () => E.Z.hidePersonalInformation),
        u = v.ZP.useName(n, o, l),
        d = (0, r.jsx)(_.Z, { children: null == u ? '<@'.concat(t, '>') : '@'.concat(u) });
    if (null != l) {
        let e = c || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(a.ua7, {
            text: (0, r.jsxs)('div', {
                className: S.userTooltip,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: l,
                        animate: !0,
                        size: a.EFr.SIZE_16,
                        className: S.avatar
                    }),
                    I.ZP.getUserTag(l, {
                        mode: 'username',
                        identifiable: c ? 'never' : 'always'
                    }),
                    (0, r.jsx)('span', {
                        className: S.discriminator,
                        children: e
                    })
                ]
            }),
            delay: 750,
            position: 'top',
            'aria-label': I.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) => (0, r.jsx)(a.P3F, P(C({ tag: 'span' }, e), { children: d }))
        });
    }
    return d;
}
function M(e) {
    let { id: t, guildId: n } = e,
        o = (0, i.e7)([g.Z], () => (null != n ? g.Z.getRole(n, t) : void 0)),
        s = (0, i.e7)([l.Z], () => l.Z.roleStyle),
        c = (0, p._f)(n, o, null == o ? void 0 : o.colorStrings);
    if (null == o)
        return (0, r.jsxs)('span', {
            children: ['@', T.intl.string(T.t['YV4F/v'])]
        });
    let u = null != o.color && 0 !== o.color,
        d = 'dot' === s,
        f = 'username' === s && u;
    return (0, r.jsxs)(_.Z, {
        color: f ? o.color : null,
        roleColors: f ? c : null,
        children: [
            d &&
                (0, r.jsx)(a.FhE, {
                    color: o.colorString,
                    colors: c,
                    background: !1,
                    tooltip: !1
                }),
            '@',
            o.name
        ]
    });
}
function k(e) {
    let { id: t } = e,
        n = (0, i.e7)([h.Z], () => h.Z.getChannel(t)),
        a = T.intl.string(T.t.zLZPmp).toLowerCase(),
        o = 'text',
        s = !0;
    if (null != n) {
        var l;
        ((a = (0, c.YO)(n) ? n.name : T.intl.string(T.t['/YzI6+'])), (o = (0, c.YO)(n) ? (null != (l = (0, O.wl)(n)) ? l : 'text') : 'locked'), (s = (0, u.B)(n.type)));
    }
    return s
        ? (0, r.jsx)(_.Z, {
              iconType: o,
              children: a
          })
        : (0, r.jsx)('span', { children: '#' + a });
}
function j(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, d.l)(t),
        o = (0, d.W)(t, n, i);
    return (0, r.jsxs)(_.Z, {
        iconType: t,
        children: [a, null != o && (0, r.jsx)(f.Z, {}), o]
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
        className: A.timestamp,
        children: t.formatted
    });
}
function B(e) {
    var t;
    let { id: n } = e,
        a = (0, i.e7)([m.Z], () => m.Z.getDetectableGame(n)),
        o =
            null != a
                ? (0, r.jsx)('img', {
                      alt: '',
                      className: S.icon,
                      src: y.ZP.getApplicationIconURL({
                          id: a.id,
                          icon: a.icon,
                          size: 32
                      })
                  })
                : null;
    return (0, r.jsxs)(_.Z, {
        children: [o, null != (t = null == a ? void 0 : a.name) ? t : T.intl.string(T.t['11pdXV'])]
    });
}
