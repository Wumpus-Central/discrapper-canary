n.d(t, { Z: () => N }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    l = n(399606),
    c = n(481060),
    u = n(607070),
    d = n(933557),
    f = n(471445),
    _ = n(592125),
    p = n(271383),
    h = n(430824),
    m = n(526120),
    g = n(734893),
    E = n(655359),
    b = n(931261),
    y = n(216701),
    O = n(981631),
    v = n(388032),
    I = n(530815);
let T = 60;
function S(e) {
    let { action: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "header-secondary",
              children: v.intl.format(v.t.MkzlDL, { channelName: v.intl.string(v.t.J90oLW) }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "header-secondary",
              children: v.intl.format(v.t.MkzlDL, { channelName: i }),
          });
}
function A(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: a } = e,
        o = (0, l.e7)([_.Z], () => _.Z.getChannel(n));
    if (null == o) return null;
    let s = null != (t = (0, f.KS)(o)) ? t : c.VL1;
    return (0, r.jsx)(y.Z, {
        emojiId: i,
        emojiName: a,
        size: y.R.MEDIUM,
        defaultComponent: (0, r.jsx)(s, { className: I.channelIcon }),
    });
}
function C(e) {
    var t, n, a, d;
    let { guildId: f, channel: _, className: p } = e,
        { channelAction: h, completed: b } = (0, E.P3)(f, _),
        y = (0, E.K_)(f, null == h ? void 0 : h.channelId),
        O = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        C = (null == h ? void 0 : h.actionType) === g.NewMemberActionTypes.VIEW,
        N = (0, c.dQu)(c.TVs.colors.WHITE),
        [R, P] = i.useState(!1),
        [D] = i.useState(new s.Z.Value(0)),
        [w] = i.useState(new s.Z.Value(0));
    i.useEffect(() => {
        b
            ? s.Z.timing(D, {
                  toValue: 0,
                  duration: O ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 500 * !C,
              }).start(() => P(!0))
            : s.Z.timing(D, {
                  toValue: 1,
                  duration: O ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 400,
              }).start();
    }, [b, D, C, O]),
        i.useEffect(() => {
            b &&
                R &&
                s.Z.timing(w, {
                    toValue: 1,
                    duration: 350 * !O,
                    easing: s.Z.Easing.quad,
                    delay: 400,
                }).start();
        }, [b, w, R, O]);
    let x = i.useCallback(() => {
        null != y && (0, m.gp)(f, y.channelId);
    }, [f, y]);
    return null == h || (C && !R)
        ? null
        : (0, r.jsx)("div", {
              className: o()(I.container, p),
              children:
                  R && null != y
                      ? (0, r.jsx)(s.Z.div, {
                            style: {
                                marginBottom: w.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-T, 0],
                                }),
                            },
                            children: (0, r.jsxs)(c.P3F, {
                                className: o()(I.banner, I.clickable),
                                onClick: x,
                                children: [
                                    (0, r.jsx)(A, {
                                        channelId: y.channelId,
                                        emojiId: null == (t = y.emoji) ? void 0 : t.id,
                                        emojiName: null == y || null == (n = y.emoji) ? void 0 : n.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: I.text,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/semibold",
                                                color: "header-primary",
                                                children: v.intl.format(v.t["/beONw"], { step: y.title }),
                                            }),
                                            (0, r.jsx)(S, { action: y }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: I.iconCircle,
                                        children: (0, r.jsx)(c.ZSh, {
                                            size: "xs",
                                            color: N.hex(),
                                            className: I.nextIcon,
                                        }),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(s.Z.div, {
                            className: I.banner,
                            style: {
                                marginBottom: D.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-T, 0],
                                }),
                            },
                            children: [
                                (0, r.jsx)(A, {
                                    channelId: h.channelId,
                                    emojiId: null == (a = h.emoji) ? void 0 : a.id,
                                    emojiName: null == h || null == (d = h.emoji) ? void 0 : d.name,
                                }),
                                (0, r.jsxs)("div", {
                                    className: I.text,
                                    children: [
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-md/semibold",
                                            color: "header-primary",
                                            children: h.title,
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
                                          className: I.completed,
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
        o = (0, l.e7)([p.ZP], () => {
            var e;
            return (null == (e = p.ZP.getSelfMember(t)) ? void 0 : e.isPending) === !0;
        }),
        s = (0, E.PE)(t),
        c = (0, l.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getGuild(t)) ? void 0 : e.features.has(O.GuildFeatures.GUILD_SERVER_GUIDE);
        });
    return s || o || !a || !c
        ? null
        : (0, r.jsx)(C, {
              guildId: t,
              channel: n,
              className: i,
          });
}
