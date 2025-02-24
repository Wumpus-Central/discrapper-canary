n.d(t, {
    Z: () => T,
    y: () => Z
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
    m = n(213609),
    g = n(795318),
    b = n(184301),
    _ = n(347475),
    C = n(314897),
    v = n(271383),
    y = n(709586),
    x = n(5192),
    j = n(590415),
    O = n(354459),
    E = n(23347);
function N(e) {
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
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: o, isIgnored: a } = e;
        return (0, r.jsxs)('div', {
            className: E.textContainer,
            children: [
                o
                    ? (0, r.jsx)(p.t6m, {
                          size: 'lg',
                          className: E.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                a
                    ? (0, r.jsx)(p.kZF, {
                          size: 'lg',
                          className: E.blockedIcon
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: E.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: x.ZP.getName(t, n, i)
                }),
                l
                    ? (0, r.jsx)(y.Z, {
                          className: E.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    S = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: a } = e,
            { user: s, blocked: c, ignored: u, rtsState: d } = n,
            h = d === j.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = d === j.xO.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: E.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(p.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(E.icon, { [E.invited]: h })
                            }),
                        (0, r.jsx)('img', {
                            src: null !== (t = s.getAvatarURL(l.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: s.username,
                            'aria-label': s.username,
                            className: o()(E.avatar, { [E.faded]: c || u })
                        })
                    ]
                }),
                (0, r.jsx)(P, {
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
    Z = () => (0, r.jsx)('div', { className: E.tileBaseContainer }),
    T = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: a, blocked: d } = t,
            y = l.getGuildId(),
            x = C.default.getId(),
            j = (0, f.bp)(),
            P = (0, u.e7)(
                [v.ZP],
                () => {
                    var e;
                    return null != y && (null === (e = v.ZP.getMember(y, a.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
                },
                [y, a.id]
            );
        s()(null != y, 'Channel cannot be guildless');
        let Z = i.useCallback(
                (e) => {
                    (0, m.h)({
                        type: c.ImpressionTypes.MENU,
                        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                        properties: {
                            location: 'AudienceTile',
                            is_tile_owner: a.id === x,
                            tile_type: O.TH.USER
                        }
                    }),
                        (0, h.jW)(
                            e,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        I(N({}, t), {
                                            user: a,
                                            guildId: y,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1,
                                            onInteraction: (0, g.u)('GuildChannelUserContextMenu', 'AudienceTile', {
                                                targetUserId: a.id,
                                                tileType: O.TH.USER
                                            })
                                        })
                                    );
                            },
                            { context: j }
                        );
                },
                [a, x, j, y, l]
            ),
            T = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        _.Z,
                        I(N({}, e), {
                            guildId: y,
                            channelId: l.id,
                            userId: a.id
                        })
                    ),
                [l.id, y, a.id]
            );
        return (0, r.jsx)(p.yRy, {
            preload: () =>
                (0, b.Z)(a, {
                    guildId: l.guild_id,
                    channelId: l.id
                }),
            renderPopout: T,
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    I(
                        N(
                            {
                                className: o()(E.tileContainer, {
                                    [E.singleIcon]: P || d,
                                    [E.doubleIcon]: P && d
                                }),
                                onContextMenu: Z
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(S, {
                                participant: t,
                                guildId: y,
                                channel: l,
                                isPremium: P
                            })
                        }
                    )
                )
        });
    });
