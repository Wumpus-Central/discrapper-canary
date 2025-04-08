n.d(t, {
    Z: () => A,
    y: () => T
});
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(512722),
    s = n.n(a),
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
    C = n(670188),
    y = n(314897),
    x = n(271383),
    v = n(709586),
    j = n(5192),
    O = n(590415),
    E = n(354459),
    N = n(387147);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
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
let S = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: o, isIgnored: a } = e;
        return (0, r.jsxs)('div', {
            className: N.textContainer,
            children: [
                o
                    ? (0, r.jsx)(p.t6m, {
                          size: 'lg',
                          className: N.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                a
                    ? (0, r.jsx)(p.kZF, {
                          size: 'lg',
                          className: N.blockedIcon
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: N.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: j.ZP.getName(t, n, i)
                }),
                l
                    ? (0, r.jsx)(v.Z, {
                          className: N.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    Z = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: a } = e,
            { user: s, blocked: c, ignored: u, rtsState: d } = n,
            h = d === O.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = d === O.xO.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: N.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(p.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(N.icon, { [N.invited]: h })
                            }),
                        (0, r.jsx)('img', {
                            src: null != (t = s.getAvatarURL(l.guild_id, 56, !1)) ? t : void 0,
                            alt: s.username,
                            'aria-label': s.username,
                            className: o()(N.avatar, { [N.faded]: c || u })
                        })
                    ]
                }),
                (0, r.jsx)(S, {
                    guildId: i,
                    channelId: l.id,
                    user: s,
                    isPremium: a,
                    isBlocked: c,
                    isIgnored: u
                })
            ]
        });
    }),
    T = () => (0, r.jsx)('div', { className: N.tileBaseContainer }),
    A = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: a, blocked: d } = t,
            v = l.getGuildId(),
            j = y.default.getId(),
            { newestAnalyticsLocation: O } = (0, g.ZP)(m.Z.AUDIENCE_TILE),
            S = (0, f.bp)(),
            T = (0, u.e7)(
                [x.ZP],
                () => {
                    var e;
                    return null != v && (null == (e = x.ZP.getMember(v, a.id)) ? void 0 : e.premiumSince) != null;
                },
                [v, a.id]
            );
        s()(null != v, 'Channel cannot be guildless');
        let A = i.useCallback(
            (e) => {
                (0, b.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        location: 'AudienceTile',
                        is_tile_owner: a.id === j,
                        tile_type: E.TH.USER
                    }
                }),
                    (0, h.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    P(I({}, t), {
                                        user: a,
                                        guildId: v,
                                        channel: l,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1,
                                        onInteraction: (0, _.u)('GuildChannelUserContextMenu', O, {
                                            targetUserId: a.id,
                                            tileType: E.TH.USER
                                        })
                                    })
                                );
                        },
                        { context: S }
                    );
            },
            [a, j, S, v, l, O]
        );
        return (0, r.jsx)(C.Z, {
            user: a,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    P(
                        I(
                            {
                                className: o()(N.tileContainer, {
                                    [N.singleIcon]: T || d,
                                    [N.doubleIcon]: T && d
                                }),
                                onContextMenu: A
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(Z, {
                                participant: t,
                                guildId: v,
                                channel: l,
                                isPremium: T
                            })
                        }
                    )
                )
        });
    });
