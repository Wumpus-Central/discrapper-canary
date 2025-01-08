n.d(t, {
    y: function () {
        return T;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(347475),
    x = n(314897),
    v = n(271383),
    _ = n(709586),
    I = n(5192),
    E = n(590415),
    b = n(354459),
    Z = n(253428);
let N = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: r, isBlocked: a, isIgnored: s } = e;
        return (0, i.jsxs)('div', {
            className: Z.textContainer,
            children: [
                a
                    ? (0, i.jsx)(h.DenyIcon, {
                          size: 'lg',
                          className: Z.blockedIcon,
                          color: u.Z.unsafe_rawColors.RED_400.css
                      })
                    : null,
                s
                    ? (0, i.jsx)(h.EyeSlashIcon, {
                          size: 'lg',
                          className: Z.blockedIcon
                      })
                    : null,
                (0, i.jsx)(h.Text, {
                    className: Z.text,
                    variant: 'text-sm/normal',
                    color: 'header-primary',
                    children: I.ZP.getName(t, n, l)
                }),
                r
                    ? (0, i.jsx)(_.Z, {
                          className: Z.boost,
                          color: u.Z.unsafe_rawColors.GUILD_BOOSTING_PINK.css
                      })
                    : null
            ]
        });
    }),
    S = l.memo(function (e) {
        var t;
        let { participant: n, guildId: l, channel: r, isPremium: s } = e,
            { user: o, blocked: c, ignored: d, rtsState: u } = n,
            p = u === E.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            m = u === E.xO.REQUESTED_TO_SPEAK || p;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)('div', {
                    className: Z.avatarContainer,
                    children: [
                        m &&
                            (0, i.jsx)(h.HandRequestSpeakIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: a()(Z.icon, { [Z.invited]: p })
                            }),
                        (0, i.jsx)('img', {
                            src: null !== (t = o.getAvatarURL(r.guild_id, 56, !1)) && void 0 !== t ? t : void 0,
                            alt: o.username,
                            'aria-label': o.username,
                            className: a()(Z.avatar, { [Z.faded]: c || d })
                        })
                    ]
                }),
                (0, i.jsx)(N, {
                    guildId: l,
                    channelId: r.id,
                    user: o,
                    isPremium: s,
                    isBlocked: c,
                    isIgnored: d
                })
            ]
        });
    }),
    T = () => (0, i.jsx)('div', { className: Z.tileBaseContainer });
t.Z = l.memo(function (e) {
    let { participant: t, channel: r } = e,
        { user: s, blocked: u } = t,
        _ = r.getGuildId(),
        I = x.default.getId(),
        E = (0, m.bp)(),
        N = (0, d.e7)(
            [v.ZP],
            () => {
                var e;
                return null != _ && (null === (e = v.ZP.getMember(_, s.id)) || void 0 === e ? void 0 : e.premiumSince) != null;
            },
            [_, s.id]
        );
    o()(null != _, 'Channel cannot be guildless');
    let T = l.useCallback(
            (e) => {
                (0, f.h)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: {
                        is_tile_owner: s.id === I,
                        tile_type: b.TH.USER
                    }
                }),
                    (0, p.jW)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([n.e('79695'), n.e('92453'), n.e('13125'), n.e('64899')]).then(n.bind(n, 757387));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: s,
                                    guildId: _,
                                    channel: r,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1
                                });
                        },
                        { context: E }
                    );
            },
            [s, I, E, _, r]
        ),
        j = l.useCallback(
            (e) =>
                (0, i.jsx)(C.Z, {
                    ...e,
                    guildId: _,
                    channelId: r.id,
                    userId: s.id
                }),
            [r.id, _, s.id]
        );
    return (0, i.jsx)(h.Popout, {
        preload: () =>
            (0, g.Z)(s, {
                guildId: r.guild_id,
                channelId: r.id
            }),
        renderPopout: j,
        position: 'right',
        spacing: 8,
        children: (e) =>
            (0, i.jsx)(h.Clickable, {
                className: a()(Z.tileContainer, {
                    [Z.singleIcon]: N || u,
                    [Z.doubleIcon]: N && u
                }),
                onContextMenu: T,
                ...e,
                children: (0, i.jsx)(S, {
                    participant: t,
                    guildId: _,
                    channel: r,
                    isPremium: N
                })
            })
    });
});
