n.d(t, { Z: () => R }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    u = n(493683),
    d = n(239091),
    f = n(317381),
    h = n(16609),
    p = n(276952),
    g = n(682662),
    b = n(674552),
    m = n(593364),
    y = n(905423),
    O = n(199902),
    v = n(592125),
    j = n(944486),
    C = n(979651),
    x = n(709054),
    E = n(853856),
    S = n(593214),
    I = n(919755),
    _ = n(110977),
    P = n(603274),
    N = n(981631),
    Z = n(388032),
    w = n(547355);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
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
        object: N.qAy.CHANNEL,
    },
};
function R() {
    var e, t;
    let l = (0, o.Ie)("favorites"),
        { favoriteAdded: R, clearFavoriteAdded: D } = (0, S.up)(),
        [M, L] = i.useState(!1),
        { favoriteServerMuted: k, favoriteChannels: G } = (0, s.cj)([E.Z], () => ({
            favoriteChannels: E.Z.getFavoriteChannels(),
            favoriteServerMuted: E.Z.favoriteServerMuted,
        })),
        U = (0, s.e7)([j.Z], () => j.Z.getChannelId(N.I_8)),
        B = (0, s.e7)([v.Z], () => v.Z.getChannel(U)),
        F = (0, y.Z)((e) => e.guildId) === N.I_8,
        { badge: V, unread: H } = (0, I.Z)(G),
        W = (function (e) {
            let t = (0, s.e7)([j.Z], () => j.Z.getVoiceChannelId()),
                n = null != t && null != e[t],
                r = (0, s.e7)([O.Z], () => {
                    if (!n) return !1;
                    let t = O.Z.getCurrentUserActiveStream();
                    return null != t && null != e[t.channelId];
                }),
                i = (0, s.e7)([O.Z], () => O.Z.getAllApplicationStreams().some((t) => null != e[t.channelId])),
                l = (0, s.e7)([C.Z], () => n && null != t && C.Z.hasVideo(t), [n, t]),
                a = (0, s.Wu)([f.ZP], () =>
                    x.default.keys(e).reduce((e, t) => (e.push(...f.ZP.getEmbeddedActivitiesForChannel(t)), e), []),
                ),
                o = (0, s.e7)([f.ZP], () =>
                    Array.from(f.ZP.getSelfEmbeddedActivities().values()).some((t) => {
                        let { location: n } = t,
                            r = (0, h.p)(n);
                        return null != r && null != e[r];
                    }),
                ),
                c = a.length > 0,
                u = !1,
                d = !1,
                p = !1,
                g = !1;
            return (
                n ? ((u = !l), (d = l), (p = r), (g = o)) : ((p = i), (g = c)),
                (0, b.Or)({
                    audio: u,
                    video: d,
                    screenshare: p,
                    liveStage: !1,
                    isCurrentUserConnected: n,
                    activity: g,
                })
            );
        })(G),
        z = V > 0 ? (0, m.N)(V) : null,
        K = i.useCallback(() => {
            D();
        }, [D]);
    return (0, r.jsxs)(g.H, {
        children: [
            (0, r.jsx)(p.Z, {
                selected: F,
                hovered: M,
                unread: H && !k,
                className: w.pill,
            }),
            (0, r.jsx)(P.Z, {
                onShow: K,
                children: (0, r.jsx)(_.S, {
                    children: (0, r.jsx)(c.aRk, {
                        selected: !0,
                        upperBadge: W,
                        lowerBadge: z,
                        children: (0, r.jsx)(
                            c.LYs,
                            ((e = T({}, l)),
                            (t = t =
                                {
                                    ariaLabel: Z.intl.formatToPlainString(Z.t["/uzRss"], {
                                        guildName: Z.intl.string(Z.t.wMWyci),
                                        mentions: V,
                                    }),
                                    "aria-selected": F,
                                    to: {
                                        pathname: N.Z5c.CHANNEL(N.I_8, U),
                                        state: A,
                                    },
                                    selected: F || M,
                                    onMouseEnter: () => L(!0),
                                    onMouseLeave: () => L(!1),
                                    onMouseDown: function () {
                                        null != B && u.Z.preload(B.guild_id, B.id);
                                    },
                                    onContextMenu: function (e) {
                                        (0, d.jW)(e, async () => {
                                            let { default: e } = await n.e("3190").then(n.bind(n, 631981));
                                            return (t) => (0, r.jsx)(e, T({}, t));
                                        });
                                    },
                                    children: (0, r.jsx)("div", {
                                        className: a()(w.ring, { [w.ringActive]: R }),
                                        children: (0, r.jsx)(c.r7p, {
                                            size: "custom",
                                            color: "currentColor",
                                            className: w.favoriteIcon,
                                            width: 20,
                                            height: 20,
                                        }),
                                    }),
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
                            e),
                        ),
                    }),
                }),
            }),
        ],
    });
}
