n.d(t, {
    Z: () => N,
    y: () => T,
});
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    p = n(481060),
    h = n(239091),
    f = n(100527),
    g = n(906732),
    m = n(213609),
    b = n(795318),
    _ = n(728285),
    y = n(670188),
    x = n(314897),
    O = n(271383),
    j = n(5192),
    v = n(590415),
    C = n(354459),
    I = n(28594);
function S(e) {
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
function E(e, t) {
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
let Z = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: a, isIgnored: s } = e;
        return (0, r.jsxs)("div", {
            className: I.textContainer,
            children: [
                a
                    ? (0, r.jsx)(p.t6m, {
                          size: "lg",
                          className: I.blockedIcon,
                          color: u.Z.unsafe_rawColors.RED_400.css,
                      })
                    : null,
                s
                    ? (0, r.jsx)(p.kZF, {
                          size: "lg",
                          className: I.blockedIcon,
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: I.text,
                    variant: "text-sm/normal",
                    color: "header-primary",
                    children: j.ZP.getName(t, n, i),
                }),
                l
                    ? (0, r.jsx)(p.Ucv, {
                          className: I.boost,
                          color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      })
                    : null,
            ],
        });
    }),
    P = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: s } = e,
            { user: o, blocked: c, ignored: d, rtsState: u } = n,
            h = u === v.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = u === v.xO.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: I.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(p.V9, {
                                size: "md",
                                color: "currentColor",
                                className: a()(I.icon, { [I.invited]: h }),
                            }),
                        (0, r.jsx)("img", {
                            src: null != (t = o.getAvatarURL(l.guild_id, 56, !1)) ? t : void 0,
                            alt: o.username,
                            "aria-label": o.username,
                            className: a()(I.avatar, { [I.faded]: c || d }),
                        }),
                    ],
                }),
                (0, r.jsx)(Z, {
                    guildId: i,
                    channelId: l.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c,
                    isIgnored: d,
                }),
            ],
        });
    }),
    T = () => (0, r.jsx)("div", { className: I.tileBaseContainer }),
    N = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: s, blocked: u } = t,
            j = l.getGuildId(),
            v = x.default.getId(),
            { newestAnalyticsLocation: Z } = (0, g.ZP)(f.Z.AUDIENCE_TILE),
            T = (0, _.bp)(),
            N = (0, d.e7)([O.ZP], () => {
                var e;
                return null != j && (null == (e = O.ZP.getMember(j, s.id)) ? void 0 : e.premiumSince) != null;
            }, [j, s.id]),
            R = i.useRef(null);
        o()(null != j, "Channel cannot be guildless");
        let w = i.useCallback(
            (e) => {
                (0, m.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "AudienceTile",
                        is_tile_owner: s.id === v,
                        tile_type: C.TH.USER,
                    },
                }),
                    (0, h.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("98783"),
                                n.e("8982"),
                                n.e("7717"),
                                n.e("19848"),
                            ]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    E(S({}, t), {
                                        user: s,
                                        guildId: j,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, b.u)("GuildChannelUserContextMenu", Z, {
                                            targetUserId: s.id,
                                            tileType: C.TH.USER,
                                        }),
                                    }),
                                );
                        },
                        { context: T },
                    );
            },
            [s, v, T, j, l, Z],
        );
        return (0, r.jsx)(y.Z, {
            targetElementRef: R,
            user: s,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    E(
                        S(
                            {
                                innerRef: R,
                                className: a()(I.tileContainer, {
                                    [I.singleIcon]: N || u,
                                    [I.doubleIcon]: N && u,
                                }),
                                onContextMenu: w,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(P, {
                                participant: t,
                                guildId: j,
                                channel: l,
                                isPremium: N,
                            }),
                        },
                    ),
                ),
        });
    });
