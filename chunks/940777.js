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
    x = n(905423),
    C = n(199902),
    Z = n(592125),
    I = n(944486),
    b = n(979651),
    S = n(709054),
    N = n(853856),
    E = n(593214),
    j = n(919755),
    y = n(110977),
    P = n(603274),
    A = n(981631),
    T = n(388032),
    w = n(120555);
let R = {
    analyticsSource: {
        page: A.ZY5.GUILD_CHANNEL,
        section: A.jXE.CHANNEL_LIST,
        object: A.qAy.CHANNEL
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
        k = (0, s.e7)([I.Z], () => I.Z.getChannelId(A.I_8)),
        B = (0, s.e7)([Z.Z], () => Z.Z.getChannel(k)),
        O = (0, x.Z)((e) => e.guildId) === A.I_8,
        { badge: U, unread: V } = (0, j.Z)(G),
        F = (function (e) {
            let t = (0, s.e7)([I.Z], () => I.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, s.e7)([C.Z], () => {
                    if (!n) return !1;
                    let t = C.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, s.e7)([C.Z], () => C.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                r = (0, s.e7)([b.Z], () => n && null != t && b.Z.hasVideo(t), [n, t]),
                a = (0, s.Wu)([h.ZP], () => S.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                o = (0, s.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            i = (0, p.p)(n);
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
            (0, i.jsx)(P.Z, {
                onShow: W,
                children: (0, i.jsx)(y.S, {
                    children: (0, i.jsx)(c.aRk, {
                        selected: z || O || L,
                        upperBadge: F,
                        lowerBadge: H,
                        children: (0, i.jsx)(c.LYs, {
                            ...e,
                            ariaLabel: T.intl.formatToPlainString(T.t['/uzRsr'], {
                                guildName: T.intl.string(T.t.wMWycn),
                                mentions: U
                            }),
                            to: {
                                pathname: A.Z5c.CHANNEL(A.I_8, k),
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
