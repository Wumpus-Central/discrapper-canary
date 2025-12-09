n.d(t, { Z: () => N }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(933557),
    f = n(471445),
    p = n(592125),
    _ = n(271383),
    m = n(430824),
    h = n(526120),
    g = n(734893),
    E = n(655359),
    b = n(931261),
    y = n(216701),
    O = n(981631),
    v = n(388032),
    S = n(530815);
let I = 60;
function T(e) {
    let { action: t } = e,
        n = (0, l.e7)([p.Z], () => p.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: v.intl.format(v.t.MkzlDL, { channelName: v.intl.string(v.t.J90oLW) }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: v.intl.format(v.t.MkzlDL, { channelName: i }),
          });
}
function A(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: a } = e,
        o = (0, l.e7)([p.Z], () => p.Z.getChannel(n));
    if (null == o) return null;
    let s = null != (t = (0, f.KS)(o)) ? t : c.VL1;
    return (0, r.jsx)(y.Z, {
        emojiId: i,
        emojiName: a,
        size: y.R.MEDIUM,
        defaultComponent: (0, r.jsx)(s, { className: S.channelIcon }),
    });
}
function C(e) {
    var t, n, a, d;
    let { guildId: f, channel: p, className: _ } = e,
        { channelAction: m, completed: b } = (0, E.P3)(f, p),
        y = (0, E.K_)(f, null == m ? void 0 : m.channelId),
        O = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        C = (null == m ? void 0 : m.actionType) === g.NewMemberActionTypes.VIEW,
        N = (0, c.dQu)(c.TVs.colors.WHITE),
        [P, R] = i.useState(!1),
        [D] = i.useState(new s.Z.Value(0)),
        [w] = i.useState(new s.Z.Value(0));
    i.useEffect(() => {
        b
            ? s.Z.timing(D, {
                  toValue: 0,
                  duration: O ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 500 * !C,
              }).start(() => R(!0))
            : s.Z.timing(D, {
                  toValue: 1,
                  duration: O ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 400,
              }).start();
    }, [b, D, C, O]),
        i.useEffect(() => {
            b &&
                P &&
                s.Z.timing(w, {
                    toValue: 1,
                    duration: 350 * !O,
                    easing: s.Z.Easing.quad,
                    delay: 400,
                }).start();
        }, [b, w, P, O]);
    let x = i.useCallback(() => {
        null != y && (0, h.gp)(f, y.channelId);
    }, [f, y]);
    return null == m || (C && !P)
        ? null
        : (0, r.jsx)("div", {
              className: o()(S.container, _),
              children:
                  P && null != y
                      ? (0, r.jsx)(s.Z.div, {
                            style: {
                                marginBottom: w.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-I, 0],
                                }),
                            },
                            children: (0, r.jsxs)(c.P3F, {
                                className: o()(S.banner, S.clickable),
                                onClick: x,
                                children: [
                                    (0, r.jsx)(A, {
                                        channelId: y.channelId,
                                        emojiId: null == (t = y.emoji) ? void 0 : t.id,
                                        emojiName: null == y || null == (n = y.emoji) ? void 0 : n.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: S.text,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/semibold",
                                                color: "header-primary",
                                                children: v.intl.format(v.t["/beONw"], { step: y.title }),
                                            }),
                                            (0, r.jsx)(T, { action: y }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: S.iconCircle,
                                        children: (0, r.jsx)(c.ZSh, {
                                            size: "xs",
                                            color: N.hex(),
                                            className: S.nextIcon,
                                        }),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(s.Z.div, {
                            className: S.banner,
                            style: {
                                marginBottom: D.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-I, 0],
                                }),
                            },
                            children: [
                                (0, r.jsx)(A, {
                                    channelId: m.channelId,
                                    emojiId: null == (a = m.emoji) ? void 0 : a.id,
                                    emojiName: null == m || null == (d = m.emoji) ? void 0 : d.name,
                                }),
                                (0, r.jsxs)("div", {
                                    className: S.text,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: m.title,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: v.intl.string(v.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                b
                                    ? (0, r.jsx)(c.owK, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: S.completed,
                                          secondaryColor: N.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function N(e) {
    let { guildId: t, channel: n, className: i } = e,
        a = (0, b.g)(t),
        o = (0, l.e7)([_.ZP], () => {
            var e;
            return (null == (e = _.ZP.getSelfMember(t)) ? void 0 : e.isPending) === !0;
        }),
        s = (0, E.PE)(t),
        c = (0, l.e7)([m.Z], () => {
            var e;
            return null == (e = m.Z.getGuild(t)) ? void 0 : e.features.has(O.GuildFeatures.GUILD_SERVER_GUIDE);
        });
    return s || o || !a || !c
        ? null
        : (0, r.jsx)(C, {
              guildId: t,
              channel: n,
              className: i,
          });
}
