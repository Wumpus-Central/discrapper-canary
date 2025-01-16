r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(748780),
    c = r(399606),
    d = r(481060),
    f = r(607070),
    _ = r(933557),
    h = r(471445),
    p = r(592125),
    m = r(271383),
    g = r(526120),
    E = r(734893),
    v = r(655359),
    I = r(931261),
    T = r(216701),
    b = r(388032),
    y = r(210759);
let S = 60;
function A(e) {
    let { action: n } = e,
        r = (0, c.e7)([p.Z], () => p.Z.getChannel(n.channelId)),
        i = (0, _.ZP)(r, !0);
    return null == r
        ? (0, a.jsx)(d.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: b.intl.format(b.t.MkzlDA, { channelName: b.intl.string(b.t.J90oLS) })
          })
        : (0, a.jsx)(d.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: b.intl.format(b.t.MkzlDA, { channelName: i })
          });
}
function N(e) {
    var n;
    let { channelId: r, emojiId: i, emojiName: s } = e,
        o = (0, c.e7)([p.Z], () => p.Z.getChannel(r));
    if (null == o) return null;
    let l = null !== (n = (0, h.KS)(o)) && void 0 !== n ? n : d.TextIcon;
    return (0, a.jsx)(T.Z, {
        emojiId: i,
        emojiName: s,
        size: T.R.MEDIUM,
        defaultComponent: (0, a.jsx)(l, { className: y.channelIcon })
    });
}
function C(e) {
    var n, r, i, o;
    let { guildId: _, channel: h, className: p } = e,
        { channelAction: m, completed: I } = (0, v.P3)(_, h),
        T = (0, v.K_)(_, null == m ? void 0 : m.channelId),
        C = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        R = (null == m ? void 0 : m.actionType) === E.oi.VIEW,
        O = (0, d.useToken)(d.tokens.colors.WHITE),
        [D, L] = s.useState(!1),
        [x] = s.useState(new u.Z.Value(0)),
        [w] = s.useState(new u.Z.Value(0));
    s.useEffect(() => {
        I
            ? u.Z.timing(x, {
                  toValue: 0,
                  duration: C ? 1 : 350,
                  easing: u.Z.Easing.quad,
                  delay: R ? 0 : 500
              }).start(() => L(!0))
            : u.Z.timing(x, {
                  toValue: 1,
                  duration: C ? 1 : 350,
                  easing: u.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [I, x, R, C]),
        s.useEffect(() => {
            I &&
                D &&
                u.Z.timing(w, {
                    toValue: 1,
                    duration: C ? 0 : 350,
                    easing: u.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [I, w, D, C]);
    let P = s.useCallback(() => {
        null != T && (0, g.gp)(_, T.channelId);
    }, [_, T]);
    return null == m || (R && !D)
        ? null
        : (0, a.jsx)('div', {
              className: l()(y.container, p),
              children:
                  D && null != T
                      ? (0, a.jsx)(u.Z.div, {
                            style: {
                                marginBottom: w.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-S, 0]
                                })
                            },
                            children: (0, a.jsxs)(d.Clickable, {
                                className: l()(y.banner, y.clickable),
                                onClick: P,
                                children: [
                                    (0, a.jsx)(N, {
                                        channelId: T.channelId,
                                        emojiId: null === (n = T.emoji) || void 0 === n ? void 0 : n.id,
                                        emojiName: null == T ? void 0 : null === (r = T.emoji) || void 0 === r ? void 0 : r.name
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: y.text,
                                        children: [
                                            (0, a.jsx)(d.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: b.intl.format(b.t['/beONz'], { step: T.title })
                                            }),
                                            (0, a.jsx)(A, { action: T })
                                        ]
                                    }),
                                    (0, a.jsx)('div', {
                                        className: y.iconCircle,
                                        children: (0, a.jsx)(d.ArrowSmallRightIcon, {
                                            size: 'xs',
                                            color: O.hex(),
                                            className: y.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, a.jsxs)(u.Z.div, {
                            className: y.banner,
                            style: {
                                marginBottom: x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-S, 0]
                                })
                            },
                            children: [
                                (0, a.jsx)(N, {
                                    channelId: m.channelId,
                                    emojiId: null === (i = m.emoji) || void 0 === i ? void 0 : i.id,
                                    emojiName: null == m ? void 0 : null === (o = m.emoji) || void 0 === o ? void 0 : o.name
                                }),
                                (0, a.jsxs)('div', {
                                    className: y.text,
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: m.title
                                        }),
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: b.intl.string(b.t['ElGg8/'])
                                        })
                                    ]
                                }),
                                I
                                    ? (0, a.jsx)(d.CircleCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: y.completed,
                                          secondaryColor: O.hex(),
                                          width: 20,
                                          height: 20
                                      })
                                    : null
                            ]
                        })
          });
}
function R(e) {
    let { guildId: n, channel: r, className: i } = e,
        s = (0, I.g)(n),
        o = (0, c.e7)([m.ZP], () => {
            var e;
            return (null === (e = m.ZP.getSelfMember(n)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, v.PE)(n) || o || !s
        ? null
        : (0, a.jsx)(C, {
              guildId: n,
              channel: r,
              className: i
          });
}
