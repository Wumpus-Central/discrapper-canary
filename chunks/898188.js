n.d(t, { Z: () => P }), n(388685);
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
    p = n(264783),
    _ = n(592125),
    m = n(271383),
    h = n(430824),
    g = n(526120),
    E = n(734893),
    b = n(655359),
    y = n(931261),
    O = n(216701),
    v = n(981631),
    S = n(388032),
    I = n(388778);
let T = {
    compact: 58,
    cozy: 74,
    default: 64,
};
function C(e) {
    let { action: t } = e,
        n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)),
        i = (0, d.ZP)(n, !0);
    return null == n
        ? (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: S.intl.format(S.t.MkzlDL, { channelName: S.intl.string(S.t.J90oLW) }),
          })
        : (0, r.jsx)(c.Text, {
              variant: "text-xxs/normal",
              color: "text-default",
              children: S.intl.format(S.t.MkzlDL, { channelName: i }),
          });
}
function A(e) {
    var t;
    let { channelId: n, emojiId: i, emojiName: a } = e,
        o = (0, l.e7)([_.Z], () => _.Z.getChannel(n));
    if (null == o) return null;
    let s = null != (t = (0, f.KS)(o)) ? t : c.VL1;
    return (0, r.jsx)(O.Z, {
        emojiId: i,
        emojiName: a,
        size: O.R.MEDIUM,
        defaultComponent: (0, r.jsx)(s, { className: I.channelIcon }),
    });
}
function N(e) {
    var t, n, a, d;
    let { guildId: f, channel: _, className: m } = e,
        { channelAction: h, completed: y } = (0, b.P3)(f, _),
        O = (0, b.K_)(f, null == h ? void 0 : h.channelId),
        v = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        N = (null == h ? void 0 : h.actionType) === E.NewMemberActionTypes.VIEW,
        P = (0, c.dQu)(c.TVs.colors.WHITE),
        R = T[(0, p.A)()],
        [w, D] = i.useState(!1),
        [x] = i.useState(new s.Z.Value(0)),
        [L] = i.useState(new s.Z.Value(0));
    i.useEffect(() => {
        y
            ? s.Z.timing(x, {
                  toValue: 0,
                  duration: v ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 500 * !N,
              }).start(() => D(!0))
            : s.Z.timing(x, {
                  toValue: 1,
                  duration: v ? 1 : 350,
                  easing: s.Z.Easing.quad,
                  delay: 400,
              }).start();
    }, [y, x, N, v]),
        i.useEffect(() => {
            y &&
                w &&
                s.Z.timing(L, {
                    toValue: 1,
                    duration: 350 * !v,
                    easing: s.Z.Easing.quad,
                    delay: 400,
                }).start();
        }, [y, L, w, v]);
    let j = i.useCallback(() => {
        null != O && (0, g.gp)(f, O.channelId);
    }, [f, O]);
    return null == h || (N && !w)
        ? null
        : (0, r.jsx)("div", {
              className: o()(I.container, m),
              children:
                  w && null != O
                      ? (0, r.jsx)(s.Z.div, {
                            style: {
                                marginBottom: L.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-R, 0],
                                }),
                            },
                            children: (0, r.jsxs)(c.P3F, {
                                className: o()(I.banner, I.clickable, { [I.bannerForumChannel]: _.isForumChannel() }),
                                onClick: j,
                                children: [
                                    (0, r.jsx)(A, {
                                        channelId: O.channelId,
                                        emojiId: null == (t = O.emoji) ? void 0 : t.id,
                                        emojiName: null == O || null == (n = O.emoji) ? void 0 : n.name,
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: I.text,
                                        children: [
                                            (0, r.jsx)(c.Text, {
                                                variant: "text-md/semibold",
                                                color: "text-strong",
                                                children: S.intl.format(S.t["/beONw"], { step: O.title }),
                                            }),
                                            (0, r.jsx)(C, { action: O }),
                                        ],
                                    }),
                                    (0, r.jsx)("div", {
                                        className: I.iconCircle,
                                        children: (0, r.jsx)(c.ZSh, {
                                            size: "xs",
                                            color: P.hex(),
                                            className: I.nextIcon,
                                        }),
                                    }),
                                ],
                            }),
                        })
                      : (0, r.jsxs)(s.Z.div, {
                            className: o()(I.banner, { [I.bannerForumChannel]: _.isForumChannel() }),
                            style: {
                                marginBottom: x.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-R, 0],
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
                                            color: "text-strong",
                                            children: h.title,
                                        }),
                                        (0, r.jsx)(c.Text, {
                                            variant: "text-xxs/normal",
                                            color: "text-muted",
                                            children: S.intl.string(S.t["ElGg8+"]),
                                        }),
                                    ],
                                }),
                                y
                                    ? (0, r.jsx)(c.owK, {
                                          size: "custom",
                                          color: "currentColor",
                                          className: I.completed,
                                          secondaryColor: P.hex(),
                                          width: 20,
                                          height: 20,
                                      })
                                    : null,
                            ],
                        }),
          });
}
function P(e) {
    let { guildId: t, channel: n, className: i } = e,
        a = (0, y.g)(t),
        o = (0, l.e7)([m.ZP], () => {
            var e;
            return (null == (e = m.ZP.getSelfMember(t)) ? void 0 : e.isPending) === !0;
        }),
        s = (0, b.PE)(t),
        c = (0, l.e7)([h.Z], () => {
            var e;
            return null == (e = h.Z.getGuild(t)) ? void 0 : e.features.has(v.GuildFeatures.GUILD_SERVER_GUIDE);
        });
    return s || o || !a || !c
        ? null
        : (0, r.jsx)(N, {
              guildId: t,
              channel: n,
              className: i,
          });
}
