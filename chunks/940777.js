n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(724458),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(16609),
    f = n(540059),
    m = n(276952),
    g = n(682662),
    v = n(674552),
    C = n(593364),
    x = n(905423),
    I = n(199902),
    _ = n(592125),
    Z = n(944486),
    b = n(979651),
    S = n(709054),
    N = n(853856),
    E = n(593214),
    y = n(919755),
    j = n(110977),
    T = n(603274),
    P = n(981631),
    A = n(388032),
    w = n(120555);
let M = {
    analyticsSource: {
        page: P.ZY5.GUILD_CHANNEL,
        section: P.jXE.CHANNEL_LIST,
        object: P.qAy.CHANNEL
    }
};
function L() {
    let e = (0, o.Ie)('favorites'),
        { favoriteAdded: t, clearFavoriteAdded: r } = (0, E.up)(),
        [L, R] = l.useState(!1),
        { favoriteServerMuted: D, favoriteChannels: G } = (0, s.cj)([N.Z], () => ({
            favoriteChannels: N.Z.getFavoriteChannels(),
            favoriteServerMuted: N.Z.favoriteServerMuted
        })),
        B = (0, s.e7)([Z.Z], () => Z.Z.getChannelId(P.I_8)),
        k = (0, s.e7)([_.Z], () => _.Z.getChannel(B)),
        U = (0, x.Z)((e) => e.guildId) === P.I_8,
        { badge: O, unread: V } = (0, y.Z)(G),
        H = (function (e) {
            let t = (0, s.e7)([Z.Z], () => Z.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                i = (0, s.e7)([I.Z], () => {
                    if (!n) return !1;
                    let t = I.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                l = (0, s.e7)([I.Z], () => I.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
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
                u = !1,
                d = !1,
                f = !1,
                m = !1;
            return (
                n ? ((u = !r), (d = r), (f = i), (m = o)) : ((f = l), (m = c)),
                (0, v.Or)({
                    audio: u,
                    video: d,
                    screenshare: f,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: m
                })
            );
        })(G),
        F = O > 0 ? (0, C.N)(O) : null,
        W = (0, f.Q3)('FavoritesButton'),
        z = l.useCallback(() => {
            r();
        }, [r]);
    return (0, i.jsxs)(g.H, {
        children: [
            (0, i.jsx)(m.Z, {
                selected: U,
                hovered: L,
                unread: V && !D,
                className: w.pill
            }),
            (0, i.jsx)(T.Z, {
                onShow: z,
                children: (0, i.jsx)(j.S, {
                    children: (0, i.jsx)(c.BlobMask, {
                        selected: W || U || L,
                        upperBadge: H,
                        lowerBadge: F,
                        children: (0, i.jsx)(c.NavItem, {
                            ...e,
                            ariaLabel: A.intl.formatToPlainString(A.t['/uzRsr'], {
                                guildName: A.intl.string(A.t.wMWycn),
                                mentions: O
                            }),
                            to: {
                                pathname: P.Z5c.CHANNEL(P.I_8, B),
                                state: M
                            },
                            selected: U || L,
                            onMouseEnter: () => R(!0),
                            onMouseLeave: () => R(!1),
                            onMouseDown: function () {
                                if (null != k) u.Z.preload(k.guild_id, k.id);
                            },
                            onContextMenu: function (e) {
                                (0, d.jW)(e, async () => {
                                    let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                });
                            },
                            children: (0, i.jsx)('div', {
                                className: a()(w.ring, { [w.ringActive]: t }),
                                children: (0, i.jsx)(c.StarIcon, {
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
