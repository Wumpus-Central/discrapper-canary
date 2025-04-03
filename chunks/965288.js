n.d(t, {
    Z: () => w,
    y: () => A
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
    C = n(184301),
    y = n(347475),
    x = n(314897),
    v = n(271383),
    j = n(709586),
    O = n(5192),
    E = n(590415),
    N = n(354459),
    I = n(387147);
function P(e) {
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
let Z = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: o, isIgnored: a } = e;
        return (0, r.jsxs)('div', {
            className: I.textContainer,
            children: [
                o
                    ? (0, r.jsx)(p.t6m, {
                          size: 'lg',
                          className: I.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                a
                    ? (0, r.jsx)(p.kZF, {
                          size: 'lg',
                          className: I.blockedIcon
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: I.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: O.ZP.getName(t, n, i)
                }),
                l
                    ? (0, r.jsx)(j.Z, {
                          className: I.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    T = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: a } = e,
            { user: s, blocked: c, ignored: u, rtsState: d } = n,
            h = d === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = d === E.xO.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: I.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(p.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(I.icon, { [I.invited]: h })
                            }),
                        (0, r.jsx)('img', {
                            src: null != (t = s.getAvatarURL(l.guild_id, 56, !1)) ? t : void 0,
                            alt: s.username,
                            'aria-label': s.username,
                            className: o()(I.avatar, { [I.faded]: c || u })
                        })
                    ]
                }),
                (0, r.jsx)(Z, {
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
    A = () => (0, r.jsx)('div', { className: I.tileBaseContainer }),
    w = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: a, blocked: d } = t,
            j = l.getGuildId(),
            O = x.default.getId(),
            { newestAnalyticsLocation: E } = (0, g.ZP)(m.Z.AUDIENCE_TILE),
            Z = (0, f.bp)(),
            A = (0, u.e7)(
                [v.ZP],
                () => {
                    var e;
                    return null != j && (null == (e = v.ZP.getMember(j, a.id)) ? void 0 : e.premiumSince) != null;
                },
                [j, a.id]
            );
        s()(null != j, 'Channel cannot be guildless');
        let w = i.useCallback(
                (e) => {
                    (0, b.h)({
                        type: c.ImpressionTypes.MENU,
                        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                        properties: {
                            location: 'AudienceTile',
                            is_tile_owner: a.id === O,
                            tile_type: N.TH.USER
                        }
                    }),
                        (0, h.jW)(
                            e,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('74800')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        S(P({}, t), {
                                            user: a,
                                            guildId: j,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, _.u)('GuildChannelUserContextMenu', E, {
                                                targetUserId: a.id,
                                                tileType: N.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: Z }
                        );
                },
                [a, O, Z, j, l, E]
            ),
            R = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        y.Z,
                        S(P({}, e), {
                            guildId: j,
                            channelId: l.id,
                            userId: a.id
                        })
                    ),
                [l.id, j, a.id]
            );
        return (0, r.jsx)(p.yRy, {
            preload: () =>
                (0, C.Z)(a, {
                    guildId: l.guild_id,
                    channelId: l.id
                }),
            renderPopout: R,
            position: 'right',
            spacing: 8,
            clickTrap: !0,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    S(
                        P(
                            {
                                className: o()(I.tileContainer, {
                                    [I.singleIcon]: A || d,
                                    [I.doubleIcon]: A && d
                                }),
                                onContextMenu: w
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(T, {
                                participant: t,
                                guildId: j,
                                channel: l,
                                isPremium: A
                            })
                        }
                    )
                )
        });
    });
