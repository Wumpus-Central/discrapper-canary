n.d(t, { A: () => j, S: () => v });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(284009),
    o = n.n(r),
    c = n(110259),
    d = n(311907),
    u = n(827734),
    h = n(397927),
    A = n(442433),
    _ = n(793574),
    m = n(688810),
    g = n(139286),
    p = n(480890),
    f = n(267102),
    x = n(342296),
    E = n(961350),
    I = n(696451),
    C = n(562153),
    N = n(105530),
    T = n(806931),
    S = n(101832);
let b = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: s, isBlocked: a, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: S.FS,
            children: [
                a ? (0, i.jsx)(h.KTN, { size: "lg", className: S.Q6, color: u.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(h.G3N, { size: "lg", className: S.Q6 }) : null,
                (0, i.jsx)(h.Text, {
                    className: S.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: C.Ay.getName(t, n, l),
                }),
                s ? (0, i.jsx)(h._Jp, { className: S.EH, color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    y = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: s } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === N.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            A = d === N.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: S.H,
                    children: [
                        A &&
                            (0, i.jsx)(h.E7M, {
                                size: "md",
                                color: "currentColor",
                                className: a()(S.Kk, { [S.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: a()(S.my, { [S.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(b, { guildId: n, channelId: l.id, user: r, isPremium: s, isBlocked: o, isIgnored: c }),
            ],
        });
    }),
    v = () => (0, i.jsx)("div", { className: S.j8 }),
    j = l.memo(function (e) {
        let { participant: t, channel: s } = e,
            { user: r, blocked: u } = t,
            C = s.getGuildId(),
            N = E.default.getId(),
            { newestAnalyticsLocation: b } = (0, m.Ay)(_.A.AUDIENCE_TILE),
            v = (0, f.Us)(),
            j = (0, d.bG)([I.Ay], () => null != C && I.Ay.getMember(C, r.id)?.premiumSince != null, [C, r.id]),
            R = l.useRef(null);
        o()(null != C, "Channel cannot be guildless");
        let O = l.useCallback(
            (e) => {
                (0, g.x)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "AudienceTile", is_tile_owner: r.id === N, tile_type: T.qs.USER },
                }),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("42128"),
                                n.e("84841"),
                                n.e("50970"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: r,
                                    guildId: C,
                                    channel: s,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, p.s)("GuildChannelUserContextMenu", b, {
                                        targetUserId: r.id,
                                        tileType: T.qs.USER,
                                    }),
                                });
                        },
                        { context: v },
                    );
            },
            [r, N, v, C, s, b],
        );
        return (0, i.jsx)(x.A, {
            targetElementRef: R,
            user: r,
            guildId: s.guild_id,
            channelId: s.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(h.DUT, {
                    innerRef: R,
                    className: a()(S.iA, { [S.wP]: j || u, [S.fP]: j && u }),
                    onContextMenu: O,
                    ...e,
                    children: (0, i.jsx)(y, { participant: t, guildId: C, channel: s, isPremium: j }),
                }),
        });
    });
