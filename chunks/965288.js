n.d(t, {
    Z: () => j,
    y: () => S
});
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(512722),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    h = n(481060),
    p = n(239091),
    m = n(40851),
    f = n(213609),
    g = n(184301),
    _ = n(347475),
    C = n(314897),
    x = n(271383),
    v = n(709586),
    E = n(5192),
    I = n(590415),
    b = n(354459),
    Z = n(253428);
let N = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: a, isBlocked: r, isIgnored: s } = e;
        return (0, i.jsxs)('div', {
            className: Z.textContainer,
            children: [
                r
                    ? (0, i.jsx)(h.t6m, {
                          size: 'lg',
                          className: Z.blockedIcon,
                          color: u.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                s
                    ? (0, i.jsx)(h.kZF, {
                          size: 'lg',
                          className: Z.blockedIcon
                      })
                    : null,
                (0, i.jsx)(h.Text, {
                    className: Z.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: E.ZP.getName(t, n, l)
                }),
                a
                    ? (0, i.jsx)(v.Z, {
                          className: Z.boost,
                          color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    T = l.memo(function (e) {
        var t;
        let { participant: n, guildId: l, channel: a, isPremium: s } = e,
            { user: o, blocked: c, ignored: d, rtsState: u } = n,
            p = u === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            m = u === I.xO.REQUESTED_TO_SPEAK || p;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: Z.avatarContainer,
                    children: [
                        m &&
                            (0, i.jsx)(h.V9, {
                                size: 'md',
                                color: 'currentColor',
                                className: r()(Z.icon, { [Z.invited]: p })
                            }),
                        (0, i.jsx)('img', {
                            src: null !== (t = o.getAvatarURL(a.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: r()(Z.avatar, { [Z.faded]: c || d })
                        })
                    ]
                }),
                (0, i.jsx)(N, {
                    guildId: l,
                    channelId: a.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c,
                    isIgnored: d
                })
            ]
        });
    }),
    S = () => (0, i.jsx)('div', { className: Z.tileBaseContainer }),
    j = l.memo(function (e) {
        let { participant: t, channel: a } = e,
            { user: s, blocked: u } = t,
            v = a.getGuildId(),
            E = C.default.getId(),
            I = (0, m.bp)(),
            N = (0, d.e7)(
                [x.ZP],
                () => {
                    var e;
                    return null != v && (null === (e = x.ZP.getMember(v, s.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
                },
                [v, s.id]
            );
        o()(null != v, 'Channel cannot be guildless');
        let S = l.useCallback(
                (e) => {
                    (0, f.h)({
                        type: c.ImpressionTypes.MENU,
                        name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                        properties: {
                            location: 'AudienceTile',
                            is_tile_owner: s.id === E,
                            tile_type: b.TH.USER
                        }
                    }),
                        (0, p.jW)(
                            e,
                            async () => {
                                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        user: s,
                                        guildId: v,
                                        channel: a,
                                        showMediaItems: !0,
                                        showStageChannelItems: !0,
                                        showChatItems: !1
                                    });
                            },
                            { context: I }
                        );
                },
                [s, E, I, v, a]
            ),
            j = l.useCallback(
                (e) =>
                    (0, i.jsx)(_.Z, {
                        ...e,
                        guildId: v,
                        channelId: a.id,
                        userId: s.id
                    }),
                [a.id, v, s.id]
            );
        return (0, i.jsx)(h.yRy, {
            preload: () =>
                (0, g.Z)(s, {
                    guildId: a.guild_id,
                    channelId: a.id
                }),
            renderPopout: j,
            position: 'right',
            spacing: 8,
            children: (e) =>
                (0, i.jsx)(h.P3F, {
                    className: r()(Z.tileContainer, {
                        [Z.singleIcon]: N || u,
                        [Z.doubleIcon]: N && u
                    }),
                    onContextMenu: S,
                    ...e,
                    children: (0, i.jsx)(T, {
                        participant: t,
                        guildId: v,
                        channel: a,
                        isPremium: N
                    })
                })
        });
    });
