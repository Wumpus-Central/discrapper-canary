"use strict";
n.d(t, { A: () => j, S: () => y });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(284009),
    o = n.n(a),
    c = n(110259),
    d = n(311907),
    u = n(827734),
    h = n(397927),
    A = n(442433),
    p = n(793574),
    g = n(688810),
    m = n(139286),
    _ = n(480890),
    f = n(267102),
    x = n(342296),
    C = n(961350),
    E = n(696451),
    I = n(562153),
    b = n(105530),
    N = n(806931),
    S = n(750201);
let T = s.memo(function (e) {
        let { guildId: t, channelId: n, user: s, isPremium: l, isBlocked: r, isIgnored: a } = e;
        return (0, i.jsxs)("div", {
            className: S.FS,
            children: [
                r ? (0, i.jsx)(h.KTN, { size: "lg", className: S.Q6, color: u.A.unsafe_rawColors.RED_400.css }) : null,
                a ? (0, i.jsx)(h.G3N, { size: "lg", className: S.Q6 }) : null,
                (0, i.jsx)(h.Text, {
                    className: S.Qq,
                    variant: "text-sm/normal",
                    color: "text-strong",
                    children: I.Ay.getName(t, n, s),
                }),
                l ? (0, i.jsx)(h._Jp, { className: S.EH, color: u.A.unsafe_rawColors.GUILD_BOOSTING_PINK }) : null,
            ],
        });
    }),
    v = s.memo(function (e) {
        let { participant: t, guildId: n, channel: s, isPremium: l } = e,
            { user: a, blocked: o, ignored: c, rtsState: d } = t,
            u = d === b.zF.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK,
            A = d === b.zF.REQUESTED_TO_SPEAK || u;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)("div", {
                    className: S.H,
                    children: [
                        A &&
                            (0, i.jsx)(h.E7M, {
                                size: "md",
                                color: "currentColor",
                                className: r()(S.Kk, { [S.MD]: u }),
                            }),
                        (0, i.jsx)("img", {
                            src: a.getAvatarURL(s.guild_id, 56, !1) ?? void 0,
                            alt: a.username,
                            "aria-label": a.username,
                            className: r()(S.my, { [S.zj]: o || c }),
                        }),
                    ],
                }),
                (0, i.jsx)(T, { guildId: n, channelId: s.id, user: a, isPremium: l, isBlocked: o, isIgnored: c }),
            ],
        });
    }),
    y = () => (0, i.jsx)("div", { className: S.j8 }),
    j = s.memo(function (e) {
        let { participant: t, channel: l } = e,
            { user: a, blocked: u } = t,
            I = l.getGuildId(),
            b = C.default.getId(),
            { newestAnalyticsLocation: T } = (0, g.Ay)(p.A.AUDIENCE_TILE),
            y = (0, f.Us)(),
            j = (0, d.bG)([E.Ay], () => null != I && E.Ay.getMember(I, a.id)?.premiumSince != null, [I, a.id]),
            R = s.useRef(null);
        o()(null != I, "Channel cannot be guildless");
        let O = s.useCallback(
            (e) => {
                (0, m.x)({
                    type: c.ImpressionTypes.MENU,
                    name: c.ImpressionNames.CALL_TILE_CONTEXT_MENU,
                    properties: { location: "AudienceTile", is_tile_owner: a.id === b, tile_type: N.qs.USER },
                }),
                    (0, A.L3)(
                        e,
                        async () => {
                            let { default: e } = await Promise.all([
                                n.e("97262"),
                                n.e("42128"),
                                n.e("84841"),
                                n.e("54266"),
                            ]).then(n.bind(n, 107632));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    user: a,
                                    guildId: I,
                                    channel: l,
                                    showMediaItems: !0,
                                    showStageChannelItems: !0,
                                    showChatItems: !1,
                                    onInteraction: (0, _.s)("GuildChannelUserContextMenu", T, {
                                        targetUserId: a.id,
                                        tileType: N.qs.USER,
                                    }),
                                });
                        },
                        { context: y },
                    );
            },
            [a, b, y, I, l, T],
        );
        return (0, i.jsx)(x.A, {
            targetElementRef: R,
            user: a,
            guildId: l.guild_id,
            channelId: l.id,
            clickTrap: !0,
            children: (e) =>
                (0, i.jsx)(h.DUT, {
                    innerRef: R,
                    className: r()(S.iA, { [S.wP]: j || u, [S.fP]: j && u }),
                    onContextMenu: O,
                    ...e,
                    children: (0, i.jsx)(v, { participant: t, guildId: I, channel: l, isPremium: j }),
                }),
        });
    });
