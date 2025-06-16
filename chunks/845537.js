n.d(t, {
    EK: () => j,
    Io: () => x,
    NY: () => M,
    Ox: () => w,
    Vq: () => L,
    Wf: () => k,
    cB: () => D,
    dy: () => R,
    wP: () => P
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
    m = n(430824),
    g = n(246946),
    E = n(594174),
    b = n(934415),
    y = n(5192),
    O = n(51144),
    v = n(388032),
    I = n(576851),
    T = n(73433);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                o.Z,
                A(
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
function P(e) {
    let { emoji: t } = e;
    return (0, r.jsx)(a.ua7, {
        text: t.name,
        delay: 750,
        position: 'top',
        children: (e) =>
            (0, r.jsx)(
                o.Z,
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
function w(e) {
    let { text: t } = e;
    return (0, r.jsx)(_.Z, { children: t });
}
function D(e) {
    let { id: t, guildId: n, channelId: o } = e,
        l = (0, i.e7)([E.default], () => E.default.getUser(t)),
        c = (0, i.e7)([g.Z], () => g.Z.hidePersonalInformation),
        u = y.ZP.useName(n, o, l),
        d = (0, r.jsx)(_.Z, { children: null == u ? '<@'.concat(t, '>') : '@'.concat(u) });
    if (null != l) {
        let e = c || l.isPomelo() ? null : '#'.concat(l.discriminator);
        return (0, r.jsx)(a.ua7, {
            text: (0, r.jsxs)('div', {
                className: I.userTooltip,
                children: [
                    (0, r.jsx)(s.Z, {
                        user: l,
                        animate: !0,
                        size: a.EFr.SIZE_16,
                        className: I.avatar
                    }),
                    O.ZP.getUserTag(l, {
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
            'aria-label': O.ZP.getUserTag(l, { decoration: 'never' }),
            children: (e) => (0, r.jsx)(a.P3F, C(A({ tag: 'span' }, e), { children: d }))
        });
    }
    return d;
}
function L(e) {
    let { id: t, guildId: n } = e,
        o = (0, i.e7)([m.Z], () => (null != n ? m.Z.getRole(n, t) : void 0)),
        s = (0, i.e7)([l.Z], () => l.Z.roleStyle),
        c = (0, p.X)(n, null == o ? void 0 : o.colorStrings);
    if (null == o)
        return (0, r.jsxs)('span', {
            children: ['@', v.intl.string(v.t['YV4F/v'])]
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
function x(e) {
    let { id: t } = e,
        n = (0, i.e7)([h.Z], () => h.Z.getChannel(t)),
        a = v.intl.string(v.t.zLZPmp).toLowerCase(),
        o = 'text',
        s = !0;
    if (null != n) {
        var l;
        (a = (0, c.YO)(n) ? n.name : v.intl.string(v.t['/YzI6+'])), (o = (0, c.YO)(n) ? (null != (l = (0, b.wl)(n)) ? l : 'text') : 'locked'), (s = (0, u.B)(n.type));
    }
    return s
        ? (0, r.jsx)(_.Z, {
              iconType: o,
              children: a
          })
        : (0, r.jsx)('span', { children: '#' + a });
}
function M(e) {
    let { id: t, itemId: n, guildId: i } = e,
        a = (0, d.l)(t),
        o = (0, d.W)(t, n, i);
    return (0, r.jsxs)(_.Z, {
        iconType: t,
        children: [a, null != o && (0, r.jsx)(f.Z, {}), o]
    });
}
function k(e) {
    let { text: t, id: n } = e;
    return (0, r.jsxs)(_.Z, {
        children: [t, '(', n, ')']
    });
}
function j(e) {
    let { timestamp: t } = e;
    return (0, r.jsx)('span', {
        className: T.timestamp,
        children: t.formatted
    });
}
