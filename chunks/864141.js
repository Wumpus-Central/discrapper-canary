n.d(t, { Z: () => L });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(442837),
    l = n(481060),
    c = n(287734),
    u = n(100527),
    d = n(906732),
    f = n(933557),
    _ = n(359110),
    p = n(769654),
    h = n(922482),
    m = n(430824),
    g = n(957575),
    E = n(323038),
    b = n(960870),
    v = n(139793),
    y = n(652853),
    O = n(336383),
    I = n(194811),
    S = n(373826),
    T = n(340266),
    N = n(788858),
    A = n(849755),
    C = n(384298),
    R = n(670451),
    P = n(228168),
    w = n(388032),
    D = n(203396);
function L(e) {
    let { user: t, voiceChannel: n, className: i, onClose: L } = e,
        { profileType: x } = (0, y.z)(),
        M = { [D.fullSize]: x === P.y0.FULL_SIZE },
        { analyticsLocations: k } = (0, d.ZP)(u.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        j = (0, b.Z)({
            display: 'voice',
            activity: { type: 'VOICE' },
            voiceChannelId: n.id,
            user: t,
            analyticsLocations: k
        }),
        U = (0, v.Z)({
            userId: t.id,
            onAction: j
        }),
        G = (0, s.e7)([m.Z], () => m.Z.getGuild(n.guild_id)),
        B = (0, E.Z)(n),
        F = (0, f.ZP)(n),
        { channelStatusEnabled: V } = (0, g.D)({ location: 'UserProfileVoiceActivityCard' }),
        Z = () => (n.isDM() || n.isGroupDM() ? w.NW.string(w.t['9FaEzs']) : n.isGuildStageVoice() ? w.NW.string(w.t.QygGCA) : w.NW.string(w.t.msxteH)),
        H = () => {
            let e = (e) => {
                    e.stopPropagation(), null == j || j({ action: 'OPEN_VOICE_CHANNEL' }), n.isGuildStageVoice() ? (0, h.Cq)(n) : (c.default.selectVoiceChannel(n.id), (0, _.Kh)(n.id)), null == L || L();
                },
                t = (e) => {
                    e.stopPropagation(), j({ action: 'OPEN_VOICE_GUILD' }), (0, p.X)(n.guild_id), null == L || L();
                };
            return (0, r.jsxs)('div', {
                className: D.details,
                children: [
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsxs)(a.X6, {
                                variant: 'heading-sm/semibold',
                                color: 'text-normal',
                                className: D.voiceChannelHeading,
                                children: [
                                    (0, r.jsx)(N.Z, {
                                        channel: n,
                                        size: 'xxs',
                                        color: l.TVs.colors.TEXT_NORMAL,
                                        className: D.voiceIcon
                                    }),
                                    (0, r.jsx)(l.P3F, {
                                        className: o()(D.clickableText, D.inline),
                                        onClick: e,
                                        children: F
                                    })
                                ]
                            }),
                            null != G &&
                                (0, r.jsx)(S.Z, {
                                    variant: 'text-xs/normal',
                                    text: w.NW.formatToPlainString(w.t['hq/Qzc'], { guildName: G.name }),
                                    onClick: t
                                })
                        ]
                    }),
                    V &&
                        n.isGuildVoice() &&
                        (0, r.jsx)(A.Z, {
                            voiceChannel: n,
                            onAction: j,
                            onClose: L
                        })
                ]
            });
        },
        W = () =>
            (0, r.jsx)('div', {
                className: o()(D.actions, M),
                children: (0, r.jsx)(C.Z, {
                    channel: n,
                    onAction: j,
                    onClose: L
                })
            });
    return (0, r.jsx)(d.Gt, {
        value: k,
        children: (0, r.jsxs)(O.Z, {
            ref: U,
            className: o()(D.card, i),
            onAction: j,
            onClose: L,
            children: [
                (0, r.jsx)(I.Z, {
                    text: Z(),
                    contextMenu: (0, r.jsx)(R.Z, {
                        display: 'voice',
                        user: t,
                        onClose: L
                    })
                }),
                (0, r.jsx)('div', {
                    className: D.body,
                    children: (0, r.jsxs)('div', {
                        className: o()(D.content, M),
                        children: [
                            (0, r.jsx)(T.Z, {
                                users: B,
                                channel: n
                            }),
                            H(),
                            x === P.y0.FULL_SIZE && W()
                        ]
                    })
                }),
                x !== P.y0.FULL_SIZE && W()
            ]
        })
    });
}
