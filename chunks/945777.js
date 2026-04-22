n.d(t, { A: () => w, S: () => U });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(284009),
    o = n.n(r),
    c = n(110259),
    d = n(311907),
    u = n(827734),
    _ = n(428678),
    A = n(952270),
    p = n(834730),
    h = n(104510),
    g = n(297152),
    m = n(939249),
    x = n(442433),
    f = n(793574),
    C = n(688810),
    E = n(139286),
    j = n(480890),
    b = n(267102),
    N = n(342296),
    T = n(961350),
    I = n(696451),
    v = n(562153),
    S = n(105530),
    y = n(806931),
    O = n(394552);
let L = l.memo(function (e) {
        let { guildId: t, channelId: n, user: l, isPremium: a, isBlocked: s, isIgnored: r } = e;
        return (0, i.jsxs)("div", {
            className: O.FS,
            children: [
                s ? (0, i.jsx)(_.K, { size: "lg", className: O.Q6, color: u.A.unsafe_rawColors.RED_400.css }) : null,
                r ? (0, i.jsx)(A.G, { size: "lg", className: O.Q6 }) : null,
                (0, i.jsx)(p.E, {
                    className: O.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: v.Ay.getName(t, n, l),
                }),
                a ? (0, i.jsx)(h._, { className: O.EH, color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    R = l.memo(function (e) {
        let { participant: t, guildId: n, channel: l, isPremium: a } = e,
            { user: r, blocked: o, ignored: c, rtsState: d } = t,
            u = d === S.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            _ = d === S.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: O.H,
                    children: [
                        _ &&
                            (0, i.jsx)(g.E, { size: "md", color: "currentColor", className: s()(O.Kk, { [O.MD]: u }) }),
                        (0, i.jsx)("img", {
                            src: r.getAvatarURL(l.guild_id, 56, !1) ?? void 0,
                            alt: r.username,
                            "aria-label": r.username,
                            className: s()(O.my, { [O.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(L, { guildId: n, channelId: l.id, user: r, isPremium: a, isBlocked: o, isIgnored: c }),
            ],
        });
    }),
    U = () => (0, i.jsx)("div", { className: O.j8 }),
    w = l.memo(function (e) {
        let { participant: t, channel: a } = e,
            { user: r, blocked: u } = t,
            _ = a.getGuildId(),
            A = T.default.getId(),
            { newestAnalyticsLocation: p } = (0, C.Ay)(f.A.AUDIENCE_TILE),
            h = (0, b.Us)(),
            g = (0, d.bG)([I.Ay], () => null != _ && I.Ay.getMember(_, r.id)?.premiumSince != null, [_, r.id]),
            v = l.useRef(null);
        o()(null != _, "Channel cannot be guildless");
        let S = l.useCallback(
            (e) => {
                (0, E.x)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "AudienceTile", is_tile_owner: r.id === A, tile_type: y.qs.USER },
                }),
                    (0, x.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("42128"),
                                n.e("84841"),
                                n.e("79842"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: r,
                                    guildId: _,
                                    channel: a,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, j.s)("GuildChannelUserContextMenu", p, {
                                        targetUserId: r.id,
                                        tileType: y.qs.USER,
                                    }),
                                });
                        },
                        { context: h },
                    );
            },
            [r, A, h, _, a, p],
        );
        return (0, i.jsx)(N.A, {
            targetElementRef: v,
            user: r,
            guildId: a.guild_id,
            channelId: a.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(m.D, {
                    innerRef: v,
                    className: s()(O.iA, { [O.wP]: g || u, [O.fP]: g && u }),
                    onContextMenu: S,
                    ...e,
                    children: (0, i.jsx)(R, { participant: t, guildId: _, channel: a, isPremium: g }),
                }),
        });
    });
