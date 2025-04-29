n.d(t, { Z: () => A }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(748780),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(933557),
    f = n(471445),
    _ = n(592125),
    p = n(271383),
    h = n(526120),
    m = n(734893),
    g = n(655359),
    E = n(931261),
    b = n(216701),
    y = n(388032),
    O = n(402765);
let v = 60;
function I(e) {
    let { action: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: y.intl.format(y.t.MkzlDA, { channelName: y.intl.string(y.t.J90oLS) })
          })
        : (0, r.jsx)(c.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: y.intl.format(y.t.MkzlDA, { channelName: i })
          });
}
function S(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: o } = e,
        a = (0, l.e7)([_.Z], () => _.Z.getChannel(n));
    if (null == a) return null;
    let s = null != (t = (0, f.KS)(a)) ? t : c.VL1;
    return (0, r.jsx)(b.Z, {
        emojiId: i,
        emojiName: o,
        size: b.R.MEDIUM,
        defaultComponent: (0, r.jsx)(s, { className: O.channelIcon })
    });
}
function T(e) {
    var t, n, o, d;
    let { guildId: f, channel: _, className: p } = e,
        { channelAction: E, completed: b } = (0, g.P3)(f, _),
        T = (0, g.K_)(f, null == E ? void 0 : E.channelId),
        A = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        N = (null == E ? void 0 : E.actionType) === m.oi.VIEW,
        C = (0, c.dQu)(c.TVs.colors.WHITE),
        [R, P] = i.useState(!1),
        [w] = i.useState(new s.Z.Value(0)),
        [D] = i.useState(new s.Z.Value(0));
    i.useEffect(() => {
        b
            ? s.Z.timing(w, {
                  toValue: 0,
                  duration: A ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 500 * !N
              }).start(() => P(!0))
            : s.Z.timing(w, {
                  toValue: 1,
                  duration: A ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [b, w, N, A]),
        i.useEffect(() => {
            b &&
                R &&
                s.Z.timing(D, {
                    toValue: 1,
                    duration: 350 * !A,
                    easing: s.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [b, D, R, A]);
    let L = i.useCallback(() => {
        null != T && (0, h.gp)(f, T.channelId);
    }, [f, T]);
    return null == E || (N && !R)
        ? null
        : (0, r.jsx)('div', {
              className: a()(O.container, p),
              children:
                  R && null != T
                      ? (0, r.jsx)(s.Z.div, {
                            style: {
                                marginBottom: D.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-v, 0]
                                })
                            },
                            children: (0, r.jsxs)(c.P3F, {
                                className: a()(O.banner, O.clickable),
                                onClick: L,
                                children: [
                                    (0, r.jsx)(S, {
                                        channelId: T.channelId,
                                        emojiId: null == (t = T.emoji) ? void 0 : t.id,
                                        emojiName: null == T || null == (n = T.emoji) ? void 0 : n.name
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: O.text,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: y.intl.format(y.t['/beONz'], { step: T.title })
                                            }),
                                            (0, r.jsx)(I, { action: T })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: O.iconCircle,
                                        children: (0, r.jsx)(c.ZSh, {
                                            size: 'xs',
                                            color: C.hex(),
                                            className: O.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, r.jsxs)(s.Z.div, {
                            className: O.banner,
                            style: {
                                marginBottom: w.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-v, 0]
                                })
                            },
                            children: [
                                (0, r.jsx)(S, {
                                    channelId: E.channelId,
                                    emojiId: null == (o = E.emoji) ? void 0 : o.id,
                                    emojiName: null == E || null == (d = E.emoji) ? void 0 : d.name
                                }),
                                (0, r.jsxs)('div', {
                                    className: O.text,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: E.title
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: y.intl.string(y.t['ElGg8/'])
                                        })
                                    ]
                                }),
                                b
                                    ? (0, r.jsx)(c.owK, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: O.completed,
                                          secondaryColor: C.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function A(e) {
    let { guildId: t, channel: n, className: i } = e,
        o = (0, E.g)(t),
        a = (0, l.e7)([p.ZP], () => {
            var e;
            return (null == (e = p.ZP.getSelfMember(t)) ? void 0 : e.isPending) === !0;
        });
    return (0, g.PE)(t) || a || !o
        ? null
        : (0, r.jsx)(T, {
              guildId: t,
              channel: n,
              className: i
          });
}
