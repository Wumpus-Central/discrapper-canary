n.d(t, { Z: () => N }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(748780),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(933557),
    f = n(471445),
    p = n(592125),
    _ = n(271383),
    h = n(526120),
    m = n(734893),
    g = n(655359),
    E = n(931261),
    v = n(216701),
    b = n(388032),
    y = n(935049);
let O = 60;
function S(e) {
    let { action: t } = e,
        n = (0, l.e7)([p.Z], () => p.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: b.NW.format(b.t.MkzlDA, { channelName: b.NW.string(b.t.J90oLS) })
          })
        : (0, r.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: b.NW.format(b.t.MkzlDA, { channelName: i })
          });
}
function I(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: o } = e,
        a = (0, l.e7)([p.Z], () => p.Z.getChannel(n));
    if (null == a) return null;
    let s = null !== (t = (0, f.KS)(a)) && void 0 !== t ? t : c.VL1;
    return (0, r.jsx)(v.Z, {
        emojiId: i,
        emojiName: o,
        size: v.R.MEDIUM,
        defaultComponent: (0, r.jsx)(s, { className: y.channelIcon })
    });
}
function T(e) {
    var t, n, o, d;
    let { guildId: f, channel: p, className: _ } = e,
        { channelAction: E, completed: v } = (0, g.P3)(f, p),
        T = (0, g.K_)(f, null == E ? void 0 : E.channelId),
        N = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        A = (null == E ? void 0 : E.actionType) === m.oi.VIEW,
        C = (0, c.dQu)(c.TVs.colors.WHITE),
        [R, P] = i.useState(!1),
        [w] = i.useState(new s.Z.Value(0)),
        [D] = i.useState(new s.Z.Value(0));
    i.useEffect(() => {
        v
            ? s.Z.timing(w, {
                  toValue: 0,
                  duration: N ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 500 * !A
              }).start(() => P(!0))
            : s.Z.timing(w, {
                  toValue: 1,
                  duration: N ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [v, w, A, N]),
        i.useEffect(() => {
            v &&
                R &&
                s.Z.timing(D, {
                    toValue: 1,
                    duration: 350 * !N,
                    easing: s.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [v, D, R, N]);
    let x = i.useCallback(() => {
        null != T && (0, h.gp)(f, T.channelId);
    }, [f, T]);
    return null == E || (A && !R)
        ? null
        : (0, r.jsx)('div', {
              className: a()(y.container, _),
              children:
                  R && null != T
                      ? (0, r.jsx)(s.Z.div, {
                            style: {
                                marginBottom: D.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-O, 0]
                                })
                            },
                            children: (0, r.jsxs)(c.P3F, {
                                className: a()(y.banner, y.clickable),
                                onClick: x,
                                children: [
                                    (0, r.jsx)(I, {
                                        channelId: T.channelId,
                                        emojiId: null === (t = T.emoji) || void 0 === t ? void 0 : t.id,
                                        emojiName: null == T ? void 0 : null === (n = T.emoji) || void 0 === n ? void 0 : n.name
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: y.text,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: b.NW.format(b.t['/beONz'], { step: T.title })
                                            }),
                                            (0, r.jsx)(S, { action: T })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: y.iconCircle,
                                        children: (0, r.jsx)(c.ZSh, {
                                            size: 'xs',
                                            color: C.hex(),
                                            className: y.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, r.jsxs)(s.Z.div, {
                            className: y.banner,
                            style: {
                                marginBottom: w.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-O, 0]
                                })
                            },
                            children: [
                                (0, r.jsx)(I, {
                                    channelId: E.channelId,
                                    emojiId: null === (o = E.emoji) || void 0 === o ? void 0 : o.id,
                                    emojiName: null == E ? void 0 : null === (d = E.emoji) || void 0 === d ? void 0 : d.name
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.text,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: E.title
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: b.NW.string(b.t['ElGg8/'])
                                        })
                                    ]
                                }),
                                v
                                    ? (0, r.jsx)(c.owK, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: y.completed,
                                          secondaryColor: C.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function N(e) {
    let { guildId: t, channel: n, className: i } = e,
        o = (0, E.g)(t),
        a = (0, l.e7)([_.ZP], () => {
            var e;
            return (null === (e = _.ZP.getSelfMember(t)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, g.PE)(t) || a || !o
        ? null
        : (0, r.jsx)(T, {
              guildId: t,
              channel: n,
              className: i
          });
}
