n.d(t, {
    Z: () => N,
    y: () => T
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    s = n(512722),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    h = n(481060),
    p = n(239091),
    f = n(40851),
    g = n(100527),
    m = n(906732),
    b = n(213609),
    _ = n(795318),
    y = n(670188),
    j = n(314897),
    O = n(271383),
    x = n(5192),
    v = n(590415),
    C = n(354459),
    E = n(387147);
function Z(e) {
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
let S = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: a, isIgnored: s } = e;
        return (0, r.jsxs)('div', {
            className: E.textContainer,
            children: [
                a
                    ? (0, r.jsx)(h.t6m, {
                          size: 'lg',
                          className: E.blockedIcon,
                          color: u.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                s
                    ? (0, r.jsx)(h.kZF, {
                          size: 'lg',
                          className: E.blockedIcon
                      })
                    : null,
                (0, r.jsx)(h.Text, {
                    className: E.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: x.ZP.getName(t, n, i)
                }),
                l
                    ? (0, r.jsx)(h.$Eu, {
                          className: E.boost,
                          color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK
                      })
                    : null
            ]
        });
    }),
    P = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: s } = e,
            { user: o, blocked: c, ignored: d, rtsState: u } = n,
            p = u === v.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = u === v.xO.REQUESTED_TO_SPEAK || p;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: E.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(h.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(E.icon, { [E.invited]: p })
                            }),
                        (0, r.jsx)('img', {
                            src: null != (t = o.getAvatarURL(l.guild_id, 56, !1)) ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: a()(E.avatar, { [E.faded]: c || d })
                        })
                    ]
                }),
                (0, r.jsx)(S, {
                    guildId: i,
                    channelId: l.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c,
                    isIgnored: d
                })
            ]
        });
    }),
    T = () => (0, r.jsx)('div', { className: E.tileBaseContainer }),
    N = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: s, blocked: u } = t,
            x = l.getGuildId(),
            v = j.default.getId(),
            { newestAnalyticsLocation: S } = (0, m.ZP)(g.Z.AUDIENCE_TILE),
            T = (0, f.bp)(),
            N = (0, d.e7)(
                [O.ZP],
                () => {
                    var e;
                    return null != x && (null == (e = O.ZP.getMember(x, s.id)) ? void 0 : e.premiumSince) != null;
                },
                [x, s.id]
            ),
            w = i.useRef(null);
        o()(null != x, 'Channel cannot be guildless');
        let R = i.useCallback(
            (e) => {
                ((0, b.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'AudienceTile',
                        is_tile_owner: s.id === v,
                        tile_type: C.TH.USER
                    }
                }),
                    (0, p.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('8982'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    I(Z({}, t), {
                                        user: s,
                                        guildId: x,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, _.u)('GuildChannelUserContextMenu', S, {
                                            targetUserId: s.id,
                                            tileType: C.TH.USER
                                        })
                                    })
                                );
                        },
                        { context: T }
                    ));
            },
            [s, v, T, x, l, S]
        );
        return (0, r.jsx)(y.Z, {
            targetElementRef: w,
            user: s,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    h.P3F,
                    I(
                        Z(
                            {
                                innerRef: w,
                                className: a()(E.tileContainer, {
                                    [E.singleIcon]: N || u,
                                    [E.doubleIcon]: N && u
                                }),
                                onContextMenu: R
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(P, {
                                participant: t,
                                guildId: x,
                                channel: l,
                                isPremium: N
                            })
                        }
                    )
                )
        });
    });
