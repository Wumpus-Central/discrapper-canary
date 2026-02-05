n.d(t, { A: () => y, S: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    d = n(110259),
    c = n(311907),
    u = n(827734),
    h = n(397927),
    A = n(442433),
    g = n(793574),
    m = n(688810),
    p = n(139286),
    _ = n(480890),
    x = n(267102),
    f = n(342296),
    E = n(961350),
    C = n(696451),
    I = n(562153),
    S = n(105530),
    b = n(806931),
    N = n(750201);
let T = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: s, isBlocked: a, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: N.FS,
            children: [
                a ? (0, i.jsx)(h.KTN, { size: "lg", className: N.Q6, color: u.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(h.G3N, { size: "lg", className: N.Q6 }) : null,
                (0, i.jsx)(h.Text, {
                    className: N.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: I.Ay.getName(t, n, l),
                }),
                s ? (0, i.jsx)(h._Jp, { className: N.EH, color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    j = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: s } = e,
            { user: r, blocked: o, ignored: d, rtsState: c } = t,
            u = c === S.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            A = c === S.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: N.H,
                    children: [
                        A &&
                            (0, i.jsx)(h.E7M, {
                                size: "md",
                                color: "currentColor",
                                className: a()(N.Kk, { [N.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(N.my, { [N.zj]: o || d }),
                        }),
                    ],
                }),
                (0, i.jsx)(T, { guildId: n, channelId: l.id, user: r, isPremium: s, isBlocked: o, isIgnored: d }),
            ],
        });
    }),
    v = () => (0, i.jsx)("div", { className: N.j8 }),
    y = l.memo(function (e) {
        let { participant: t, channel: s } = e,
            { user: r, blocked: u } = t,
            I = s.getGuildId(),
            S = E.default.getId(),
            { newestAnalyticsLocation: T } = (0, m.Ay)(g.A.AUDIENCE_TILE),
            v = (0, x.Us)(),
            y = (0, c.bG)([C.Ay], () => null != I && C.Ay.getMember(I, r.id)?.premiumSince != null, [I, r.id]),
            R = l.useRef(null);
        o()(null != I, "Channel cannot be guildless");
        let O = l.useCallback(
            (e) => {
                (0, p.x)({
                    type: d.ImpressionTypes.MENU,
                    name: d.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "AudienceTile", is_tile_owner: r.id === S, tile_type: b.qs.USER },
                }),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("42128"),
                                n.e("84841"),
                                n.e("31885"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: r,
                                    guildId: I,
                                    channel: s,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, _.s)("GuildChannelUserContextMenu", T, {
                                        targetUserId: r.id,
                                        tileType: b.qs.USER,
                                    }),
                                });
                        },
                        { context: v },
                    );
            },
            [r, S, v, I, s, T],
        );
        return (0, i.jsx)(f.A, {
            targetElementRef: R,
            user: r,
            guildId: s.guild_id,
            channelId: s.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(h.DUT, {
                    innerRef: R,
                    className: a()(N.iA, { [N.wP]: y || u, [N.fP]: y && u }),
                    onContextMenu: O,
                    ...e,
                    children: (0, i.jsx)(j, { participant: t, guildId: I, channel: s, isPremium: y }),
                }),
        });
    });
