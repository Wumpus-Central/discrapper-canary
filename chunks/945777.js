n.d(t, {
    A: () => P,
    S: () => T,
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    u = n(311907),
    d = n(827734),
    f = n(397927),
    p = n(442433),
    h = n(793574),
    b = n(688810),
    g = n(139286),
    m = n(480890),
    A = n(267102),
    y = n(342296),
    O = n(961350),
    j = n(696451),
    v = n(562153),
    x = n(105530),
    E = n(806931),
    _ = n(750201);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: i, isBlocked: a, isIgnored: s } = e;
        return (0, r.jsxs)("div", {
            className: _.FS,
            children: [
                a
                    ? (0, r.jsx)(f.KTN, {
                          size: "lg",
                          className: _.Q6,
                          color: d.A.unsafe_rawColors.RED_400.css,
                      })
                    : null,
                s
                    ? (0, r.jsx)(f.G3N, {
                          size: "lg",
                          className: _.Q6,
                      })
                    : null,
                (0, r.jsx)(f.Text, {
                    className: _.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: v.Ay.getName(t, n, l),
                }),
                i
                    ? (0, r.jsx)(f._Jp, {
                          className: _.EH,
                          color: d.A.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      })
                    : null,
            ],
        });
    }),
    N = l.memo(function (e) {
        var t;
        let { participant: n, guildId: l, channel: i, isPremium: s } = e,
            { user: o, blocked: c, ignored: u, rtsState: d } = n,
            p = d === x.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            h = d === x.zF.REQUESTED_TO_SPEAK || p;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: _.H,
                    children: [
                        h &&
                            (0, r.jsx)(f.E7M, {
                                size: "md",
                                color: "currentColor",
                                className: a()(_.Kk, { [_.MD]: p }),
                            }),
                        (0, r.jsx)("img", {
                            src: null != (t = o.getAvatarURL(i.guild_id, 56, !1)) ? t : void 0,
                            alt: o.username,
                            "aria-label": o.username,
                            className: a()(_.my, { [_.zj]: c || u }),
                        }),
                    ],
                }),
                (0, r.jsx)(I, {
                    guildId: l,
                    channelId: i.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c,
                    isIgnored: u,
                }),
            ],
        });
    }),
    T = () => (0, r.jsx)("div", { className: _.j8 }),
    P = l.memo(function (e) {
        let { participant: t, channel: i } = e,
            { user: s, blocked: d } = t,
            v = i.getGuildId(),
            x = O.default.getId(),
            { newestAnalyticsLocation: I } = (0, b.Ay)(h.A.AUDIENCE_TILE),
            T = (0, A.Us)(),
            P = (0, u.bG)([j.Ay], () => {
                var e;
                return null != v && (null == (e = j.Ay.getMember(v, s.id)) ? void 0 : e.premiumSince) != null;
            }, [v, s.id]),
            w = l.useRef(null);
        o()(null != v, "Channel cannot be guildless");
        let R = l.useCallback(
            (e) => {
                (0, g.x)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "AudienceTile",
                        is_tile_owner: s.id === x,
                        tile_type: E.qs.USER,
                    },
                }),
                    (0, p.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("29534"),
                                n.e("55296"),
                                n.e("84841"),
                                n.e("91609"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    S(C({}, t), {
                                        user: s,
                                        guildId: v,
                                        channel: i,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, m.s)("GuildChannelUserContextMenu", I, {
                                            targetUserId: s.id,
                                            tileType: E.qs.USER,
                                        }),
                                    }),
                                );
                        },
                        { context: T },
                    );
            },
            [s, x, T, v, i, I],
        );
        return (0, r.jsx)(y.A, {
            targetElementRef: w,
            user: s,
            guildId: i.guild_id,
            channelId: i.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    f.DUT,
                    S(
                        C(
                            {
                                innerRef: w,
                                className: a()(_.iA, {
                                    [_.wP]: P || d,
                                    [_.fP]: P && d,
                                }),
                                onContextMenu: R,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(N, {
                                participant: t,
                                guildId: v,
                                channel: i,
                                isPremium: P,
                            }),
                        },
                    ),
                ),
        });
    });
