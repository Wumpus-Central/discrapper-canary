n.d(t, { Z: () => D }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(91192),
    a = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(16609),
    f = n(540059),
    g = n(276952),
    m = n(682662),
    b = n(674552),
    y = n(593364),
    _ = n(905423),
    v = n(199902),
    O = n(592125),
    C = n(944486),
    j = n(979651),
    S = n(709054),
    E = n(853856),
    x = n(593214),
    P = n(919755),
    I = n(110977),
    w = n(603274),
    N = n(981631),
    Z = n(388032),
    T = n(940751);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let R = {
    analyticsSource: {
        page: N.ZY5.GUILD_CHANNEL,
        section: N.jXE.CHANNEL_LIST,
        object: N.qAy.CHANNEL
    }
};
function D() {
    var e, t;
    let l = (0, s.Ie)('favorites'),
        { favoriteAdded: D, clearFavoriteAdded: L } = (0, x.up)(),
        [k, M] = i.useState(!1),
        { favoriteServerMuted: U, favoriteChannels: G } = (0, a.cj)([E.Z], () => ({
            favoriteChannels: E.Z.getFavoriteChannels(),
            favoriteServerMuted: E.Z.favoriteServerMuted
        })),
        B = (0, a.e7)([C.Z], () => C.Z.getChannelId(N.I_8)),
        V = (0, a.e7)([O.Z], () => O.Z.getChannel(B)),
        H = (0, _.Z)((e) => e.guildId) === N.I_8,
        { badge: F, unread: z } = (0, P.Z)(G),
        W = (function (e) {
            let t = (0, a.e7)([C.Z], () => C.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                r = (0, a.e7)([v.Z], () => {
                    if (!n) return !1;
                    let t = v.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                i = (0, a.e7)([v.Z], () => v.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                l = (0, a.e7)([j.Z], () => n && null != t && j.Z.hasVideo(t), [n, t]),
                o = (0, a.Wu)([h.ZP], () => S.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                s = (0, a.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            r = (0, p.pY)(n);
                        return null != r && null != e[r];
                    })
                ),
                c = o.length > 0,
                u = !1,
                d = !1,
                f = !1,
                g = !1;
            return (
                n ? ((u = !l), (d = l), (f = r), (g = s)) : ((f = i), (g = c)),
                (0, b.Or)({
                    audio: u,
                    video: d,
                    screenshare: f,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: g
                })
            );
        })(G),
        Y = F > 0 ? (0, y.N)(F) : null,
        K = (0, f.Q3)('FavoritesButton'),
        q = i.useCallback(() => {
            L();
        }, [L]);
    return (0, r.jsxs)(m.H, {
        children: [
            (0, r.jsx)(g.Z, {
                selected: H,
                hovered: k,
                unread: z && !U,
                className: T.pill
            }),
            (0, r.jsx)(w.Z, {
                onShow: q,
                children: (0, r.jsx)(I.S, {
                    children: (0, r.jsx)(c.aRk, {
                        selected: K || H || k,
                        upperBadge: W,
                        lowerBadge: Y,
                        children: (0, r.jsx)(
                            c.LYs,
                            ((e = A({}, l)),
                            (t = t =
                                {
                                    ariaLabel: Z.intl.formatToPlainString(Z.t['/uzRsr'], {
                                        guildName: Z.intl.string(Z.t.wMWycn),
                                        mentions: F
                                    }),
                                    'aria-selected': H,
                                    to: {
                                        pathname: N.Z5c.CHANNEL(N.I_8, B),
                                        state: R
                                    },
                                    selected: H || k,
                                    onMouseEnter: () => M(!0),
                                    onMouseLeave: () => M(!1),
                                    onMouseDown: function () {
                                        null != V && u.Z.preload(V.guild_id, V.id);
                                    },
                                    onContextMenu: function (e) {
                                        (0, d.jW)(e, async () => {
                                            let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                            return (t) => (0, r.jsx)(e, A({}, t));
                                        });
                                    },
                                    children: (0, r.jsx)('div', {
                                        className: o()(T.ring, { [T.ringActive]: D }),
                                        children: (0, r.jsx)(c.r7p, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            className: T.favoriteIcon,
                                            width: 20,
                                            height: 20
                                        })
                                    })
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(t)).forEach(function (n) {
                                      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                                  }),
                            e)
                        )
                    })
                })
            })
        ]
    });
}
