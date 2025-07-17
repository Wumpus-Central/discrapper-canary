n.d(t, {
    Z: () => N,
    y: () => T
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(512722),
    s = n.n(o),
    c = n(990547),
    u = n(442837),
    d = n(692547),
    p = n(481060),
    h = n(239091),
    f = n(40851),
    m = n(100527),
    g = n(906732),
    b = n(213609),
    _ = n(795318),
    y = n(670188),
    C = n(314897),
    x = n(271383),
    v = n(5192),
    O = n(590415),
    j = n(354459),
    E = n(387147);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function P(e, t) {
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
let I = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: a, isIgnored: o } = e;
        return (0, r.jsxs)('div', {
            className: E.textContainer,
            children: [
                a
                    ? (0, r.jsx)(p.t6m, {
                          size: 'lg',
                          className: E.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                o
                    ? (0, r.jsx)(p.kZF, {
                          size: 'lg',
                          className: E.blockedIcon
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: E.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: v.ZP.getName(t, n, i)
                }),
                l
                    ? (0, r.jsx)(p.$Eu, {
                          className: E.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
                      })
                    : null
            ]
        });
    }),
    Z = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: o } = e,
            { user: s, blocked: c, ignored: u, rtsState: d } = n,
            h = d === O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = d === O.xO.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: E.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(p.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(E.icon, { [E.invited]: h })
                            }),
                        (0, r.jsx)('img', {
                            src: null != (t = s.getAvatarURL(l.guild_id, 56, !1)) ? t : void 0,
                            alt: s.username,
                            'aria-label': s.username,
                            className: a()(E.avatar, { [E.faded]: c || u })
                        })
                    ]
                }),
                (0, r.jsx)(I, {
                    guildId: i,
                    channelId: l.id,
                    user: s,
                    isPremium: o,
                    isBlocked: c,
                    isIgnored: u
                })
            ]
        });
    }),
    T = () => (0, r.jsx)('div', { className: E.tileBaseContainer }),
    N = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: o, blocked: d } = t,
            v = l.getGuildId(),
            O = C.default.getId(),
            { newestAnalyticsLocation: I } = (0, g.ZP)(m.Z.AUDIENCE_TILE),
            T = (0, f.bp)(),
            N = (0, u.e7)(
                [x.ZP],
                () => {
                    var e;
                    return null != v && (null == (e = x.ZP.getMember(v, o.id)) ? void 0 : e.premiumSince) != null;
                },
                [v, o.id]
            ),
            A = i.useRef(null);
        s()(null != v, 'Channel cannot be guildless');
        let w = i.useCallback(
            (e) => {
                ((0, b.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'AudienceTile',
                        is_tile_owner: o.id === O,
                        tile_type: j.TH.USER
                    }
                }),
                    (0, h.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    P(S({}, t), {
                                        user: o,
                                        guildId: v,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, _.u)('GuildChannelUserContextMenu', I, {
                                            targetUserId: o.id,
                                            tileType: j.TH.USER
                                        })
                                    })
                                );
                        },
                        { context: T }
                    ));
            },
            [o, O, T, v, l, I]
        );
        return (0, r.jsx)(y.Z, {
            targetElementRef: A,
            user: o,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    P(
                        S(
                            {
                                innerRef: A,
                                className: a()(E.tileContainer, {
                                    [E.singleIcon]: N || d,
                                    [E.doubleIcon]: N && d
                                }),
                                onContextMenu: w
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(Z, {
                                participant: t,
                                guildId: v,
                                channel: l,
                                isPremium: N
                            })
                        }
                    )
                )
        });
    });
