n.d(t, { Z: () => L });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(793030),
    o = n(442837),
    l = n(481060),
    u = n(287734),
    c = n(100527),
    d = n(906732),
    f = n(933557),
    _ = n(359110),
    p = n(769654),
    h = n(922482),
    m = n(430824),
    g = n(323038),
    E = n(960870),
    v = n(139793),
    y = n(652853),
    I = n(336383),
    T = n(194811),
    b = n(373826),
    S = n(340266),
    A = n(788858),
    N = n(599864),
    C = n(670451),
    R = n(228168),
    O = n(388032),
    D = n(309584);
function L(e) {
    let { user: t, voiceChannel: n, className: r, onClose: L } = e,
        { profileType: x } = (0, y.z)(),
        w = { [D.fullSize]: x === R.y0.FULL_SIZE },
        { analyticsLocations: P } = (0, d.ZP)(c.Z.USER_PROFILE_VOICE_ACTIVITY_CARD),
        M = (0, E.Z)({
            display: 'voice',
            user: t,
            analyticsLocations: P
        }),
        k = (0, v.Z)({
            userId: t.id,
            onAction: M
        }),
        U = (0, o.e7)([m.Z], () => m.Z.getGuild(n.guild_id)),
        G = (0, g.Z)(n),
        B = (0, f.ZP)(n),
        Z = () => {
            let e = (e) => {
                    e.stopPropagation(), null == M || M({ action: 'OPEN_VOICE_CHANNEL' }), n.isGuildStageVoice() ? (0, h.Cq)(n) : (u.default.selectVoiceChannel(n.id), (0, _.Kh)(n.id)), null == L || L();
                },
                t = (e) => {
                    e.stopPropagation(), M({ action: 'OPEN_VOICE_GUILD' }), (0, p.X)(n.guild_id), null == L || L();
                };
            return (0, i.jsx)('div', {
                className: D.details,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsxs)(s.X6, {
                            variant: 'heading-sm/semibold',
                            color: 'text-normal',
                            className: D.voiceChannelHeading,
                            children: [
                                (0, i.jsx)(A.Z, {
                                    channel: n,
                                    size: 'xxs',
                                    color: l.TVs.colors.TEXT_NORMAL,
                                    className: D.voiceIcon
                                }),
                                (0, i.jsx)(l.P3F, {
                                    className: a()(D.clickableText, D.inline),
                                    onClick: e,
                                    children: B
                                })
                            ]
                        }),
                        null != U &&
                            (0, i.jsx)(b.Z, {
                                variant: 'text-xs/normal',
                                text: O.intl.formatToPlainString(O.t['hq/Qzc'], { guildName: U.name }),
                                onClick: t
                            })
                    ]
                })
            });
        },
        F = () =>
            (0, i.jsx)('div', {
                className: a()(D.actions, w),
                children: (0, i.jsx)(N.Z, {
                    channel: n,
                    onAction: M,
                    onClose: L
                })
            });
    return (0, i.jsx)(d.Gt, {
        value: P,
        children: (0, i.jsxs)(I.Z, {
            ref: k,
            className: a()(D.card, r),
            onAction: M,
            onClose: L,
            children: [
                (0, i.jsx)(T.Z, {
                    text: O.intl.string(n.isGuildStageVoice() ? O.t.Q1lNen : O.t.bl1Mz8),
                    contextMenu: (0, i.jsx)(C.Z, {
                        display: 'voice',
                        user: t,
                        onClose: L
                    })
                }),
                (0, i.jsx)('div', {
                    className: D.body,
                    children: (0, i.jsxs)('div', {
                        className: a()(D.content, w),
                        children: [
                            (0, i.jsx)(S.Z, {
                                users: G,
                                channel: n
                            }),
                            Z(),
                            x === R.y0.FULL_SIZE && F()
                        ]
                    })
                }),
                x !== R.y0.FULL_SIZE && F()
            ]
        })
    });
}
