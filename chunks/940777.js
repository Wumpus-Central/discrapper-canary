n.d(t, { Z: () => R }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(91192),
    a = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    h = n(317381),
    p = n(16609),
    f = n(276952),
    g = n(682662),
    m = n(674552),
    b = n(593364),
    _ = n(905423),
    O = n(199902),
    y = n(592125),
    v = n(944486),
    C = n(979651),
    j = n(709054),
    E = n(853856),
    S = n(593214),
    x = n(919755),
    I = n(110977),
    P = n(603274),
    N = n(981631),
    w = n(388032),
    Z = n(940751);
function T(e) {
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
let A = {
    analyticsSource: {
        page: N.ZY5.GUILD_CHANNEL,
        section: N.jXE.CHANNEL_LIST,
        object: N.qAy.CHANNEL
    }
};
function R() {
    var e, t;
    let l = (0, s.Ie)('favorites'),
        { favoriteAdded: R, clearFavoriteAdded: D } = (0, S.up)(),
        [L, M] = i.useState(!1),
        { favoriteServerMuted: k, favoriteChannels: U } = (0, a.cj)([E.Z], () => ({
            favoriteChannels: E.Z.getFavoriteChannels(),
            favoriteServerMuted: E.Z.favoriteServerMuted
        })),
        G = (0, a.e7)([v.Z], () => v.Z.getChannelId(N.I_8)),
        B = (0, a.e7)([y.Z], () => y.Z.getChannel(G)),
        F = (0, _.Z)((e) => e.guildId) === N.I_8,
        { badge: V, unread: H } = (0, x.Z)(U),
        z = (function (e) {
            let t = (0, a.e7)([v.Z], () => v.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                r = (0, a.e7)([O.Z], () => {
                    if (!n) return !1;
                    let t = O.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                i = (0, a.e7)([O.Z], () => O.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                l = (0, a.e7)([C.Z], () => n && null != t && C.Z.hasVideo(t), [n, t]),
                o = (0, a.Wu)([h.ZP], () => j.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
                s = (0, a.e7)([h.ZP], () =>
                    Array.from(h.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            r = (0, p.p)(n);
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
                (0, m.Or)({
                    audio: u,
                    video: d,
                    screenshare: f,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: g
                })
            );
        })(U),
        W = V > 0 ? (0, b.N)(V) : null,
        K = i.useCallback(() => {
            D();
        }, [D]);
    return (0, r.jsxs)(g.H, {
        children: [
            (0, r.jsx)(f.Z, {
                selected: F,
                hovered: L,
                unread: H && !k,
                className: Z.pill
            }),
            (0, r.jsx)(P.Z, {
                onShow: K,
                children: (0, r.jsx)(I.S, {
                    children: (0, r.jsx)(c.aRk, {
                        selected: !0,
                        upperBadge: z,
                        lowerBadge: W,
                        children: (0, r.jsx)(
                            c.LYs,
                            ((e = T({}, l)),
                            (t = t =
                                {
                                    ariaLabel: w.intl.formatToPlainString(w.t['/uzRsr'], {
                                        guildName: w.intl.string(w.t.wMWycn),
                                        mentions: V
                                    }),
                                    'aria-selected': F,
                                    to: {
                                        pathname: N.Z5c.CHANNEL(N.I_8, G),
                                        state: A
                                    },
                                    selected: F || L,
                                    onMouseEnter: () => M(!0),
                                    onMouseLeave: () => M(!1),
                                    onMouseDown: function () {
                                        null != B && u.Z.preload(B.guild_id, B.id);
                                    },
                                    onContextMenu: function (e) {
                                        (0, d.jW)(e, async () => {
                                            let { default: e } = await n.e('3190').then(n.bind(n, 631981));
                                            return (t) => (0, r.jsx)(e, T({}, t));
                                        });
                                    },
                                    children: (0, r.jsx)('div', {
                                        className: o()(Z.ring, { [Z.ringActive]: R }),
                                        children: (0, r.jsx)(c.r7p, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            className: Z.favoriteIcon,
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
