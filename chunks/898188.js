r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(748780),
    c = r(399606),
    d = r(481060),
    f = r(607070),
    p = r(933557),
    h = r(471445),
    _ = r(592125),
    m = r(271383),
    g = r(526120),
    E = r(734893),
    v = r(655359),
    y = r(931261),
    b = r(216701),
    I = r(388032),
    T = r(210759);
let S = 60;
function A(e) {
    let { action: n } = e,
        r = (0, c.e7)([_.Z], () => _.Z.getChannel(n.channelId)),
        i = (0, p.ZP)(r, !0);
    return null == r
        ? (0, a.jsx)(d.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: I.intl.format(I.t.MkzlDA, { channelName: I.intl.string(I.t.J90oLS) })
          })
        : (0, a.jsx)(d.Text, {
              variant: 'text-xxs/normal',
              color: 'header-secondary',
              children: I.intl.format(I.t.MkzlDA, { channelName: i })
          });
}
function C(e) {
    var n;
    let { channelId: r, emojiId: i, emojiName: o } = e,
        s = (0, c.e7)([_.Z], () => _.Z.getChannel(r));
    if (null == s) return null;
    let l = null !== (n = (0, h.KS)(s)) && void 0 !== n ? n : d.TextIcon;
    return (0, a.jsx)(b.Z, {
        emojiId: i,
        emojiName: o,
        size: b.R.MEDIUM,
        defaultComponent: (0, a.jsx)(l, { className: T.channelIcon })
    });
}
function N(e) {
    var n, r, i, s;
    let { guildId: p, channel: h, className: _ } = e,
        { channelAction: m, completed: y } = (0, v.P3)(p, h),
        b = (0, v.K_)(p, null == m ? void 0 : m.channelId),
        N = (0, c.e7)([f.Z], () => f.Z.useReducedMotion),
        R = (null == m ? void 0 : m.actionType) === E.oi.VIEW,
        O = (0, d.useToken)(d.tokens.colors.WHITE),
        [D, x] = o.useState(!1),
        [L] = o.useState(new u.Z.Value(0)),
        [w] = o.useState(new u.Z.Value(0));
    o.useEffect(() => {
        y
            ? u.Z.timing(L, {
                  toValue: 0,
                  duration: N ? 1 : 350,
                  easing: u.Z.Easing.quad,
                  delay: R ? 0 : 500
              }).start(() => x(!0))
            : u.Z.timing(L, {
                  toValue: 1,
                  duration: N ? 1 : 350,
                  easing: u.Z.Easing.quad,
                  delay: 400
              }).start();
    }, [y, L, R, N]),
        o.useEffect(() => {
            y &&
                D &&
                u.Z.timing(w, {
                    toValue: 1,
                    duration: N ? 0 : 350,
                    easing: u.Z.Easing.quad,
                    delay: 400
                }).start();
        }, [y, w, D, N]);
    let P = o.useCallback(() => {
        null != b && (0, g.gp)(p, b.channelId);
    }, [p, b]);
    return null == m || (R && !D)
        ? null
        : (0, a.jsx)('div', {
              className: l()(T.container, _),
              children:
                  D && null != b
                      ? (0, a.jsx)(u.Z.div, {
                            style: {
                                marginBottom: w.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-S, 0]
                                })
                            },
                            children: (0, a.jsxs)(d.Clickable, {
                                className: l()(T.banner, T.clickable),
                                onClick: P,
                                children: [
                                    (0, a.jsx)(C, {
                                        channelId: b.channelId,
                                        emojiId: null === (n = b.emoji) || void 0 === n ? void 0 : n.id,
                                        emojiName: null == b ? void 0 : null === (r = b.emoji) || void 0 === r ? void 0 : r.name
                                    }),
                                    (0, a.jsxs)('div', {
                                        className: T.text,
                                        children: [
                                            (0, a.jsx)(d.Text, {
                                                variant: 'text-md/semibold',
                                                color: 'header-primary',
                                                children: I.intl.format(I.t['/beONz'], { step: b.title })
                                            }),
                                            (0, a.jsx)(A, { action: b })
                                        ]
                                    }),
                                    (0, a.jsx)('div', {
                                        className: T.iconCircle,
                                        children: (0, a.jsx)(d.ArrowSmallRightIcon, {
                                            size: 'xs',
                                            color: O.hex(),
                                            className: T.nextIcon
                                        })
                                    })
                                ]
                            })
                        })
                      : (0, a.jsxs)(u.Z.div, {
                            className: T.banner,
                            style: {
                                marginBottom: L.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-S, 0]
                                })
                            },
                            children: [
                                (0, a.jsx)(C, {
                                    channelId: m.channelId,
                                    emojiId: null === (i = m.emoji) || void 0 === i ? void 0 : i.id,
                                    emojiName: null == m ? void 0 : null === (s = m.emoji) || void 0 === s ? void 0 : s.name
                                }),
                                (0, a.jsxs)('div', {
                                    className: T.text,
                                    children: [
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-md/semibold',
                                            color: 'header-primary',
                                            children: m.title
                                        }),
                                        (0, a.jsx)(d.Text, {
                                            variant: 'text-xxs/normal',
                                            color: 'text-muted',
                                            children: I.intl.string(I.t['ElGg8/'])
                                        })
                                    ]
                                }),
                                y
                                    ? (0, a.jsx)(d.CircleCheckIcon, {
                                          size: 'custom',
                                          color: 'currentColor',
                                          className: T.completed,
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
        o = (0, y.g)(n),
        s = (0, c.e7)([m.ZP], () => {
            var e;
            return (null === (e = m.ZP.getSelfMember(n)) || void 0 === e ? void 0 : e.isPending) === !0;
        });
    return (0, v.PE)(n) || s || !o
        ? null
        : (0, a.jsx)(N, {
              guildId: n,
              channel: r,
              className: i
          });
}
