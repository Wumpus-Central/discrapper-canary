n.d(t, { Z: () => L }), n(47120), n(724458), n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(493683),
    u = n(239091),
    h = n(317381),
    p = n(16609),
    m = n(540059),
    g = n(276952),
    f = n(682662),
    _ = n(674552),
    v = n(593364),
    C = n(905423),
    x = n(199902),
    Z = n(592125),
    I = n(944486),
    b = n(979651),
    S = n(709054),
    N = n(853856),
    E = n(593214),
    j = n(919755),
    y = n(110977),
    A = n(603274),
    T = n(981631),
    P = n(388032),
    w = n(913050);
let R = {
    analyticsSource: {
        page: T.ZY5.GUILD_CHANNEL,
        section: T.jXE.CHANNEL_LIST,
        object: T.qAy.CHANNEL
    }
};
function L() {
    let e = (0, o.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, E.up)(),
        [L, M] = l.useState(!1),
        { favoriteServerMuted: D, favoriteChannels: G } = (0, s.cj)([N.Z], () => ({
            favoriteChannels: N.Z.getFavoriteChannels(),
            favoriteServerMuted: N.Z.favoriteServerMuted
        })),
        k = (0, s.e7)([I.Z], () => I.Z.getChannelId(T.I_8)),
        B = (0, s.e7)([Z.Z], () => Z.Z.getChannel(k)),
        O = (0, C.Z)((e) => e.guildId) === T.I_8,
        { badge: U, unread: V } = (0, j.Z)(G),
        F = (function (e) {
            let t = (0, s.e7)([I.Z], () => I.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, s.e7)([x.Z], () => {
                    if (!n) return !1;
                    let t = x.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, s.e7)([x.Z], () => x.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                r = (0, s.e7)([b.Z], () => n && null != t && b.Z.hasVideo(t), [n, t]),
                a = (0, s.Wu)([h.ZP], () => S.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                o = (0, s.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            i = (0, p.pY)(n);
                        return null != i && null != e[i];
                    })
                ),
                c = a.length > 0,
                d = !1,
                u = !1,
                m = !1,
                g = !1;
            return (
                n ? ((d = !r), (u = r), (m = i), (g = o)) : ((m = l), (g = c)),
                (0, _.Or)({
                    audio: d,
                    video: u,
                    screenshare: m,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: g
                })
            );
        })(G),
        H = U > 0 ? (0, v.N)(U) : null,
        z = (0, m.Q3)('FavoritesButton'),
        W = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(f.H, {
        children: [
            (0, i.jsx)(g.Z, {
                selected: O,
                hovered: L,
                unread: V && !D,
                className: w.pill
            }),
            (0, i.jsx)(A.Z, {
                onShow: W,
                children: (0, i.jsx)(y.S, {
                    children: (0, i.jsx)(c.aRk, {
                        selected: z || O || L,
                        upperBadge: F,
                        lowerBadge: H,
                        children: (0, i.jsx)(c.LYs, {
                            ...e,
                            ariaLabel: P.intl.formatToPlainString(P.t['/uzRsr'], {
                                guildName: P.intl.string(P.t.wMWycn),
                                mentions: U
                            }),
                            to: {
                                pathname: T.Z5c.CHANNEL(T.I_8, k),
                                state: R
                            },
                            selected: O || L,
                            onMouseEnter: () => M(!0),
                            onMouseLeave: () => M(!1),
                            onMouseDown: function () {
                                null != B && d.Z.preload(B.guild_id, B.id);
                            },
                            onContextMenu: function (e) {
                                (0, u.jW)(e, async () => {
                                    let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)('div', {
                                className: a()(w.ring, { [w.ringActive]: t }),
                                children: (0, i.jsx)(c.r7p, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    className: w.favoriteIcon,
                                    width: 20,
                                    height: 20
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
