n.d(t, { Z: () => w });
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
    p = n(359110),
    _ = n(769654),
    h = n(922482),
    m = n(430824),
    g = n(323038),
    E = n(960870),
    v = n(139793),
    b = n(652853),
    y = n(336383),
    O = n(194811),
    S = n(373826),
    I = n(340266),
    T = n(788858),
    N = n(599864),
    A = n(670451),
    C = n(228168),
    R = n(388032),
    P = n(481736);
function w(e) {
    let { user: t, voiceChannel: n, className: i, onClose: w } = e,
        { profileType: D } = (0, b.z)(),
        x = { [P.fullSize]: D === C.y0.FULL_SIZE },
        { analyticsLocations: L } = (0, d.ZP)(u.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        M = (0, E.Z)({
            display: 'voice',
            activity: { type: 'VOICE' },
            voiceChannelId: n.id,
            user: t,
            analyticsLocations: L
        }),
        k = (0, v.Z)({
            userId: t.id,
            onAction: M
        }),
        j = (0, s.e7)([m.Z], () => m.Z.getGuild(n.guild_id)),
        U = (0, g.Z)(n),
        G = (0, f.ZP)(n),
        B = () => (n.isDM() || n.isGroupDM() ? R.NW.string(R.t['9FaEzs']) : n.isGuildStageVoice() ? R.NW.string(R.t.QygGCA) : R.NW.string(R.t.msxteH)),
        Z = () => {
            let e = (e) => {
                    e.stopPropagation(), null == M || M({ action: 'OPEN_VOICE_CHANNEL' }), n.isGuildStageVoice() ? (0, h.Cq)(n) : (c.default.selectVoiceChannel(n.id), (0, p.Kh)(n.id)), null == w || w();
                },
                t = (e) => {
                    e.stopPropagation(), M({ action: 'OPEN_VOICE_GUILD' }), (0, _.X)(n.guild_id), null == w || w();
                };
            return (0, r.jsx)('div', {
                className: P.details,
                children: (0, r.jsxs)('div', {
                    children: [
                        (0, r.jsxs)(a.X6, {
                            variant: 'heading-sm/semibold',
                            color: 'text-normal',
                            className: P.voiceChannelHeading,
                            children: [
                                (0, r.jsx)(T.Z, {
                                    channel: n,
                                    size: 'xxs',
                                    color: l.TVs.colors.TEXT_NORMAL,
                                    className: P.voiceIcon
                                }),
                                (0, r.jsx)(l.P3F, {
                                    className: o()(P.clickableText, P.inline),
                                    onClick: e,
                                    children: G
                                })
                            ]
                        }),
                        null != j &&
                            (0, r.jsx)(S.Z, {
                                variant: 'text-xs/normal',
                                text: R.NW.formatToPlainString(R.t['hq/Qzc'], { guildName: j.name }),
                                onClick: t
                            })
                    ]
                })
            });
        },
        F = () =>
            (0, r.jsx)('div', {
                className: o()(P.actions, x),
                children: (0, r.jsx)(N.Z, {
                    channel: n,
                    onAction: M,
                    onClose: w
                })
            });
    return (0, r.jsx)(d.Gt, {
        value: L,
        children: (0, r.jsxs)(y.Z, {
            ref: k,
            className: o()(P.card, i),
            onAction: M,
            onClose: w,
            children: [
                (0, r.jsx)(O.Z, {
                    text: B(),
                    contextMenu: (0, r.jsx)(A.Z, {
                        display: 'voice',
                        user: t,
                        onClose: w
                    })
                }),
                (0, r.jsx)('div', {
                    className: P.body,
                    children: (0, r.jsxs)('div', {
                        className: o()(P.content, x),
                        children: [
                            (0, r.jsx)(I.Z, {
                                users: U,
                                channel: n
                            }),
                            Z(),
                            D === C.y0.FULL_SIZE && F()
                        ]
                    })
                }),
                D !== C.y0.FULL_SIZE && F()
            ]
        })
    });
}
