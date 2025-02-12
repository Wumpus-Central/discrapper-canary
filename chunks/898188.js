n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(748780),
    l = n(399606),
    u = n(481060),
    c = n(607070),
    d = n(933557),
    f = n(471445),
    _ = n(592125),
    p = n(271383),
    h = n(526120),
    m = n(734893),
    g = n(655359),
    E = n(931261),
    v = n(216701),
    y = n(388032),
    I = n(133245);
let T = 60;
function b(e) {
    let { action: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)),
        r = (0, d.ZP)(n, !0);
    return null == n
        ? (0, i.jsx)(u.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: y.intl.format(y.t.MkzlDA, { channelName: y.intl.string(y.t.J90oLS) })
          })
        : (0, i.jsx)(u.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: y.intl.format(y.t.MkzlDA, { channelName: r })
          });
}
function S(e) {
    var t;
    let { channelId: n, emojiId: r, emojiName: a } = e,
        s = (0, l.e7)([_.Z], () => _.Z.getChannel(n));
    if (null == s) return null;
    let o = null !== (t = (0, f.KS)(s)) && void 0 !== t ? t : u.VL1;
    return (0, i.jsx)(v.Z, {
        emojiId: r,
        emojiName: a,
        size: v.R.MEDIUM,
        defaultComponent: (0, i.jsx)(o, { className: I.channelIcon })
    });
}
function A(e) {
    var t, n, a, d;
    let { guildId: f, channel: _, className: p } = e,
        { channelAction: E, completed: v } = (0, g.P3)(f, _),
        A = (0, g.K_)(f, null == E ? void 0 : E.channelId),
        N = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        C = (null == E ? void 0 : E.actionType) === m.oi.VIEW,
        R = (0, u.dQu)(u.TVs.colors.WHITE),
        [O, D] = r.useState(!1),
        [L] = r.useState(new o.Z.Value(0)),
        [x] = r.useState(new o.Z.Value(0));
    r.useEffect(() => {
        v
            ? o.Z.timing(L, {
                  toValue: 0,
                  duration: N ? 1 : 350,
                  easing: o.Z.Easing.quad,
                  delay: C ? 0 : 500
              }).start(() => D(!0))
            : o.Z.timing(L, {
                  toValue: 1,
                  duration: N ? 1 : 350,
                  easing: o.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [v, L, C, N]),
        r.useEffect(() => {
            v &&
                O &&
                o.Z.timing(x, {
                    toValue: 1,
                    duration: N ? 0 : 350,
                    easing: o.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [v, x, O, N]);
    let P = r.useCallback(() => {
        null != A && (0, h.gp)(f, A.channelId);
    }, [f, A]);
    return null == E || (C && !O)
        ? null
        : (0, i.jsx)('div', {
              className: s()(I.container, p),
              children:
                  O && null != A
                      ? (0, i.jsx)(o.Z.div, {
                            style: {
                                marginBottom: x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-T, 0]
                                })
                            },
                            children: (0, i.jsxs)(u.P3F, {
                                className: s()(I.banner, I.clickable),
                                onClick: P,
                                children: [
                                    (0, i.jsx)(S, {
                                        channelId: A.channelId,
                                        emojiId: null === (t = A.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null == A ? void 0 : null === (n = A.emoji) || void 0 === n ? void 0 : n.name
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: I.text,
                                        children: [
                                            (0, i.jsx)(u.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: y.intl.format(y.t['/beONz'], { step: A.title })
                                            }),
                                            (0, i.jsx)(b, { action: A })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: I.iconCircle,
                                        children: (0, i.jsx)(u.ZSh, {
                                            size: 'xs',
                                            color: R.hex(),
                                            className: I.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, i.jsxs)(o.Z.div, {
                            className: I.banner,
                            style: {
                                marginBottom: L.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-T, 0]
                                })
                            },
                            children: [
                                (0, i.jsx)(S, {
                                    channelId: E.channelId,
                                    emojiId: null === (a = E.emoji) || void 0 === a ? void 0 : a.id,
                                    emojiName: null == E ? void 0 : null === (d = E.emoji) || void 0 === d ? void 0 : d.name
                                }),
                                (0, i.jsxs)('div', {
                                    className: I.text,
                                    children: [
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: E.title
                                        }),
                                        (0, i.jsx)(u.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: y.intl.string(y.t['ElGg8/'])
                                        })
                                    ]
                                }),
                                v
                                    ? (0, i.jsx)(u.owK, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: I.completed,
                                          secondaryColor: R.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function N(e) {
    let { guildId: t, channel: n, className: r } = e,
        a = (0, E.g)(t),
        s = (0, l.e7)([p.ZP], () => {
            var e;
            return (null === (e = p.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, g.PE)(t) || s || !a
        ? null
        : (0, i.jsx)(A, {
              guildId: t,
              channel: n,
              className: r
          });
}
