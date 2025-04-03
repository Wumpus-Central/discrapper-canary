n.d(t, { Z: () => R }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    p = n(317381),
    h = n(16609),
    f = n(540059),
    g = n(276952),
    m = n(682662),
    b = n(674552),
    y = n(593364),
    _ = n(905423),
    v = n(199902),
    O = n(592125),
    j = n(944486),
    x = n(979651),
    C = n(709054),
    S = n(853856),
    P = n(593214),
    I = n(919755),
    N = n(110977),
    Z = n(603274),
    w = n(981631),
    E = n(388032),
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
let D = {
    analyticsSource: {
        page: w.ZY5.GUILD_CHANNEL,
        section: w.jXE.CHANNEL_LIST,
        object: w.qAy.CHANNEL
    }
};
function R() {
    var e, t;
    let l = (0, a.Ie)('favorites'),
        { favoriteAdded: R, clearFavoriteAdded: L } = (0, P.up)(),
        [k, M] = i.useState(!1),
        { favoriteServerMuted: G, favoriteChannels: B } = (0, s.cj)([S.Z], () => ({
            favoriteChannels: S.Z.getFavoriteChannels(),
            favoriteServerMuted: S.Z.favoriteServerMuted
        })),
        U = (0, s.e7)([j.Z], () => j.Z.getChannelId(w.I_8)),
        W = (0, s.e7)([O.Z], () => O.Z.getChannel(U)),
        V = (0, _.Z)((e) => e.guildId) === w.I_8,
        { badge: F, unread: H } = (0, I.Z)(B),
        z = (function (e) {
            let t = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                r = (0, s.e7)([v.Z], () => {
                    if (!n) return !1;
                    let t = v.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                i = (0, s.e7)([v.Z], () => v.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                l = (0, s.e7)([x.Z], () => n && null != t && x.Z.hasVideo(t), [n, t]),
                o = (0, s.Wu)([p.ZP], () => C.default.keys(e).reduce((e, t) => (e.push(...p.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                a = (0, s.e7)([p.ZP], () =>
                    Array.from(p.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            r = (0, h.pY)(n);
                        return null != r && null != e[r];
                    })
                ),
                c = o.length > 0,
                u = !1,
                d = !1,
                f = !1,
                g = !1;
            return (
                n ? ((u = !l), (d = l), (f = r), (g = a)) : ((f = i), (g = c)),
                (0, b.Or)({
                    audio: u,
                    video: d,
                    screenshare: f,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: g
                })
            );
        })(B),
        Y = F > 0 ? (0, y.N)(F) : null,
        q = (0, f.Q3)('FavoritesButton'),
        Q = i.useCallback(() => {
            L();
        }, [L]);
    return (0, r.jsxs)(m.H, {
        children: [
            (0, r.jsx)(g.Z, {
                selected: V,
                hovered: k,
                unread: H && !G,
                className: T.pill
            }),
            (0, r.jsx)(Z.Z, {
                onShow: Q,
                children: (0, r.jsx)(N.S, {
                    children: (0, r.jsx)(c.aRk, {
                        selected: q || V || k,
                        upperBadge: z,
                        lowerBadge: Y,
                        children: (0, r.jsx)(
                            c.LYs,
                            ((e = A({}, l)),
                            (t = t =
                                {
                                    ariaLabel: E.NW.formatToPlainString(E.t['/uzRsr'], {
                                        guildName: E.NW.string(E.t.wMWycn),
                                        mentions: F
                                    }),
                                    to: {
                                        pathname: w.Z5c.CHANNEL(w.I_8, U),
                                        state: D
                                    },
                                    selected: V || k,
                                    onMouseEnter: () => M(!0),
                                    onMouseLeave: () => M(!1),
                                    onMouseDown: function () {
                                        null != W && u.Z.preload(W.guild_id, W.id);
                                    },
                                    onContextMenu: function (e) {
                                        (0, d.jW)(e, async () => {
                                            let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                            return (t) => (0, r.jsx)(e, A({}, t));
                                        });
                                    },
                                    children: (0, r.jsx)('div', {
                                        className: o()(T.ring, { [T.ringActive]: R }),
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
