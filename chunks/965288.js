n.d(t, {
    Z: () => T,
    y: () => N,
});
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(990547),
    u = n(442837),
    d = n(692547),
    p = n(481060),
    f = n(239091),
    h = n(100527),
    g = n(906732),
    m = n(213609),
    b = n(795318),
    y = n(728285),
    v = n(670188),
    O = n(314897),
    j = n(271383),
    x = n(5192),
    C = n(590415),
    E = n(354459),
    S = n(510786);
function _(e) {
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
function I(e, t) {
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
let P = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: a, isIgnored: o } = e;
        return (0, r.jsxs)("div", {
            className: S.textContainer,
            children: [
                a
                    ? (0, r.jsx)(p.t6m, {
                          size: "lg",
                          className: S.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css,
                      })
                    : null,
                o
                    ? (0, r.jsx)(p.kZF, {
                          size: "lg",
                          className: S.blockedIcon,
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: S.text,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: x.ZP.getName(t, n, i),
                }),
                l
                    ? (0, r.jsx)(p.Ucv, {
                          className: S.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK,
                      })
                    : null,
            ],
        });
    }),
    Z = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: o } = e,
            { user: s, blocked: c, ignored: u, rtsState: d } = n,
            f = d === C.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            h = d === C.xO.REQUESTED_TO_SPEAK || f;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: S.avatarContainer,
                    children: [
                        h &&
                            (0, r.jsx)(p.V9, {
                                size: "md",
                                color: "currentColor",
                                className: a()(S.icon, { [S.invited]: f }),
                            }),
                        (0, r.jsx)("img", {
                            src: null != (t = s.getAvatarURL(l.guild_id, 56, !1)) ? t : void 0,
                            alt: s.username,
                            "aria-label": s.username,
                            className: a()(S.avatar, { [S.faded]: c || u }),
                        }),
                    ],
                }),
                (0, r.jsx)(P, {
                    guildId: i,
                    channelId: l.id,
                    user: s,
                    isPremium: o,
                    isBlocked: c,
                    isIgnored: u,
                }),
            ],
        });
    }),
    N = () => (0, r.jsx)("div", { className: S.tileBaseContainer }),
    T = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: o, blocked: d } = t,
            x = l.getGuildId(),
            C = O.default.getId(),
            { newestAnalyticsLocation: P } = (0, g.ZP)(h.Z.AUDIENCE_TILE),
            N = (0, y.bp)(),
            T = (0, u.e7)([j.ZP], () => {
                var e;
                return null != x && (null == (e = j.ZP.getMember(x, o.id)) ? void 0 : e.premiumSince) != null;
            }, [x, o.id]),
            A = i.useRef(null);
        s()(null != x, "Channel cannot be guildless");
        let w = i.useCallback(
            (e) => {
                (0, m.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: "AudienceTile",
                        is_tile_owner: o.id === C,
                        tile_type: E.TH.USER,
                    },
                }),
                    (0, f.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("79695"),
                                n.e("4040"),
                                n.e("92524"),
                                n.e("7717"),
                                n.e("9393"),
                            ]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    I(_({}, t), {
                                        user: o,
                                        guildId: x,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, b.u)("GuildChannelUserContextMenu", P, {
                                            targetUserId: o.id,
                                            tileType: E.TH.USER,
                                        }),
                                    }),
                                );
                        },
                        { context: N },
                    );
            },
            [o, C, N, x, l, P],
        );
        return (0, r.jsx)(v.Z, {
            targetElementRef: A,
            user: o,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    I(
                        _(
                            {
                                innerRef: A,
                                className: a()(S.tileContainer, {
                                    [S.singleIcon]: T || d,
                                    [S.doubleIcon]: T && d,
                                }),
                                onContextMenu: w,
                            },
                            e,
                        ),
                        {
                            children: (0, r.jsx)(Z, {
                                participant: t,
                                guildId: x,
                                channel: l,
                                isPremium: T,
                            }),
                        },
                    ),
                ),
        });
    });
