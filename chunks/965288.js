n.d(t, {
    Z: () => Z,
    y: () => S
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
    g = n(184301),
    b = n(347475),
    _ = n(314897),
    C = n(271383),
    v = n(709586),
    y = n(5192),
    x = n(590415),
    j = n(354459),
    O = n(23347);
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
let P = i.memo(function (e) {
        let { guildId: t, channelId: n, user: i, isPremium: l, isBlocked: o, isIgnored: a } = e;
        return (0, r.jsxs)('div', {
            className: O.textContainer,
            children: [
                o
                    ? (0, r.jsx)(p.t6m, {
                          size: 'lg',
                          className: O.blockedIcon,
                          color: d.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                a
                    ? (0, r.jsx)(p.kZF, {
                          size: 'lg',
                          className: O.blockedIcon
                      })
                    : null,
                (0, r.jsx)(p.Text, {
                    className: O.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: y.ZP.getName(t, n, i)
                }),
                l
                    ? (0, r.jsx)(v.Z, {
                          className: O.boost,
                          color: d.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    I = i.memo(function (e) {
        var t;
        let { participant: n, guildId: i, channel: l, isPremium: a } = e,
            { user: s, blocked: c, ignored: u, rtsState: d } = n,
            h = d === x.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            f = d === x.xO.REQUESTED_TO_SPEAK || h;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)('div', {
                    className: O.avatarContainer,
                    children: [
                        f &&
                            (0, r.jsx)(p.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: o()(O.icon, { [O.invited]: h })
                            }),
                        (0, r.jsx)('img', {
                            src: null !== (t = s.getAvatarURL(l.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: s.username,
                            'aria-label': s.username,
                            className: o()(O.avatar, { [O.faded]: c || u })
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
    S = () => (0, r.jsx)('div', { className: O.tileBaseContainer }),
    Z = i.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: a, blocked: d } = t,
            v = l.getGuildId(),
            y = _.default.getId(),
            x = (0, f.bp)(),
            P = (0, u.e7)(
                [C.ZP],
                () => {
                    var e;
                    return null != v && (null === (e = C.ZP.getMember(v, a.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
                },
                [v, a.id]
            );
        s()(null != v, 'Channel cannot be guildless');
        let S = i.useCallback(
                (e) => {
                    (0, m.h)({
                        type: c.ImpressionTypes.MENU,
                        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                        properties: {
                            location: 'AudienceTile',
                            is_tile_owner: a.id === y,
                            tile_type: j.TH.USER
                        }
                    }),
                        (0, h.jW)(
                            e,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('97589'), n.e('7717'), n.e('83944')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
                                        E(N({}, t), {
                                            user: a,
                                            guildId: v,
                                            channel: l,
                                            showMediaItems: !0,
                                            showStageChannelItems: !0,
                                            showChatItems: !1
                                        })
                                    );
                            },
                            { context: x }
                        );
                },
                [a, y, x, v, l]
            ),
            Z = i.useCallback(
                (e) =>
                    (0, r.jsx)(
                        b.Z,
                        E(N({}, e), {
                            guildId: v,
                            channelId: l.id,
                            userId: a.id
                        })
                    ),
                [l.id, v, a.id]
            );
        return (0, r.jsx)(p.yRy, {
            preload: () =>
                (0, g.Z)(a, {
                    guildId: l.guild_id,
                    channelId: l.id
                }),
            renderPopout: Z,
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, r.jsx)(
                    p.P3F,
                    E(
                        N(
                            {
                                className: o()(O.tileContainer, {
                                    [O.singleIcon]: P || d,
                                    [O.doubleIcon]: P && d
                                }),
                                onContextMenu: S
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(I, {
                                participant: t,
                                guildId: v,
                                channel: l,
                                isPremium: P
                            })
                        }
                    )
                )
        });
    });
