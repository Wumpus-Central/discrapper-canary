n.d(t, { Z: () => D }), n(388685), n(361932), n(187205), n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(524979),
    c = n(442837),
    u = n(481060),
    d = n(235820),
    h = n(493773),
    p = n(100527),
    f = n(906732),
    g = n(377171),
    m = n(315174),
    b = n(455199),
    y = n(768943),
    O = n(592125),
    _ = n(594174),
    v = n(70956),
    C = n(709054),
    j = n(821020),
    S = n(370774),
    x = n(862149),
    E = n(739340),
    P = n(207913),
    I = n(553984),
    w = n(333834),
    N = n(982183),
    Z = n(981631),
    T = n(388032),
    A = n(21678);
let R = {
    controller: new a.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: N.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function D(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        {
            messages: a,
            hasMore: d,
            loading: p,
            hasLoadedEver: f
        } = (0, c.cj)([b.Z], () => ({
            messages: b.Z.getSettingsFilteredMentions(),
            hasMore: b.Z.hasMore,
            loading: b.Z.loading,
            hasLoadedEver: b.Z.hasLoadedEver,
            guildFilter: b.Z.guildFilter,
            roleFilter: b.Z.roleFilter,
            everyoneFilter: b.Z.everyoneFilter
        })),
        [g, S] = i.useState(N.V5.ALL),
        [x, P] = i.useState(N.xM.UNREAD),
        { messages: T, loadState: D, loadMore: V, hasLoadedEver: H } = (0, E.ZP)(),
        F = (function (e) {
            let [t, n] = (0, i.useState)(!0),
                [r, l] = (0, i.useState)(!1);
            return (
                (0, h.ZP)(() => {
                    let e = setTimeout(() => {
                        l(!0);
                    }, 0.25 * v.Z.Millis.SECOND);
                    return () => {
                        clearTimeout(e);
                    };
                }),
                (0, i.useEffect)(() => {
                    t && r && e && n(!1);
                }, [e, t, r]),
                t
            );
        })(H && f && !p && D !== E.jd.Loading);
    (0, i.useEffect)(() => {
        if (!f) return void L(null);
    }, [f]);
    let z = (0, c.e7)([_.default], () => _.default.getCurrentUser()),
        W = (0, c.e7)([y.Z], () => y.Z.getSavedMessages()),
        K = i.useMemo(() => {
            var e;
            if (!H) return null;
            if (g === N.V5.BOOKMARKS)
                return W.flatMap((e) => {
                    let { message: t } = e;
                    return null != t
                        ? [
                              {
                                  kind: N.fL.BOOKMARK,
                                  message: t
                              }
                          ]
                        : [];
                });
            let t = (0, s.uniqBy)(
                [
                    ...(null !=
                    (e =
                        null == a
                            ? void 0
                            : a.map((e) => ({
                                  kind: N.fL.MENTION,
                                  message: e
                              })))
                        ? e
                        : []),
                    ...T.filter((e) => e.author.id !== (null == z ? void 0 : z.id)).map((e) => ({
                        message: e,
                        kind: N.fL.ALL_MESSAGES_CHANNEL
                    }))
                ],
                (e) => {
                    let { message: t } = e;
                    return t.id;
                }
            ).filter((e) => {
                let { message: t } = e;
                return t.author.id !== (null == z ? void 0 : z.id) && C.default.age(t.id) < N.ib;
            });
            if (g === N.V5.ALL) return t;
            if (g === N.V5.ANNOUNCEMENTS)
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { message: t } = e,
                              n = O.Z.getChannel(t.channel_id);
                          return (null == n ? void 0 : n.type) === Z.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (g === N.V5.MENTIONS)
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { message: t } = e;
                          return (null == z ? void 0 : z.id) != null && t.mentioned && t.mentions.includes(null == z ? void 0 : z.id);
                      });
            throw Error('Unknown filter: '.concat(g));
        }, [g, a, z, W, T, H]),
        Y = x === N.xM.READ && !F,
        { notificationCenterVariant: q } = j.L.useExperiment({ location: 'NotificationsInboxSidebar' }),
        Q = 'sidebar' === q && g !== N.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(A.container, { [A.panelSpacing]: l }),
        children: [
            (0, r.jsx)(
                m.ZP,
                ((t = (function (e) {
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
                })(
                    {
                        hasSubheader: !0,
                        guild: N.F7
                    },
                    R
                )),
                (n = n =
                    {
                        children: (0, r.jsxs)(u.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children: [
                                'sidebar' === q &&
                                    (0, r.jsx)(I.p, {
                                        selectedFilter: g,
                                        setSelectedFilter: S,
                                        className: A.headerButton
                                    }),
                                (0, r.jsx)(B, {})
                            ]
                        })
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t)
            ),
            'popout' === q &&
                (0, r.jsx)(I.Z, {
                    selectedFilter: g,
                    setSelectedFilter: S
                }),
            g === N.V5.ALL && (0, r.jsx)(U, { canShow: Y }),
            Q && (0, r.jsx)(G, { filter: g }),
            (0, r.jsx)(w.Z, {
                className: A.messageList,
                renderMessageGroup: k,
                messages: K,
                loadingInitial: F,
                loadingMore: D === E.jd.Loading || p,
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != a && a.length > 0 ? a[a.length - 1].id : null;
                    d && !p && L(null, t), D !== E.jd.Done && D !== E.jd.Loading && V(e);
                },
                renderLoadingState: M,
                setInboxReadState: P,
                ignoreGrouping: g !== N.V5.ALL
            })
        ]
    });
}
function L(e, t) {
    let n = b.Z.guildFilter,
        r = b.Z.roleFilter,
        i = b.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === Z.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, Z.DJj, l, r, i);
}
function M() {
    return (0, r.jsx)(x.Z, {});
}
function k(e, t, n) {
    return (0, r.jsx)(
        P.Z,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1),
            isUnread: n
        },
        e[0].id
    );
}
function U(e) {
    let { canShow: t } = e,
        [n, l] = i.useState(!1),
        [s, a] = i.useState(!1),
        c = s ? u.kSu : u.kmB;
    return (0, r.jsx)(u.P3F, {
        onClick: () => l(!0),
        onMouseEnter: () => a(!0),
        onMouseLeave: () => a(!1),
        className: o()(A.caughtUpContainer, { [A.hide]: !(!n && t) }),
        children: (0, r.jsxs)('div', {
            className: A.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: s ? 'text-sm/medium' : 'text-sm/normal',
                    color: 'text-positive',
                    className: A.caughtUpText,
                    children: T.intl.string(T.t['6XMM+P'])
                }),
                (0, r.jsx)(c, {
                    size: 'sm',
                    className: A.caughtUpIcon,
                    color: g.Z.TEXT_POSITIVE
                })
            ]
        })
    });
}
function G(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        u.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: A.filterHeaderWrap,
            children: N.by[t]
        },
        'filter-header'
    );
}
function B() {
    let [e, t] = (0, i.useState)(!1),
        { analyticsLocations: n } = (0, f.ZP)(p.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)(u.ua7, {
        position: 'bottom',
        align: 'left',
        text: T.intl.string(T.t.h850Sk),
        shouldShow: e,
        forceOpen: e,
        hideOnClick: !0,
        children: (i) => {
            let { onClick: l } = i;
            return (0, r.jsx)(u.P3F, {
                className: A.headerButton,
                onMouseEnter: () => t(!0),
                onMouseLeave: () => t(!1),
                onClick: () => {
                    (0, S.j4)(n), null == l || l();
                },
                children: (0, r.jsx)(u.ewm, {
                    size: 'xs',
                    color: e ? g.Z.INTERACTIVE_HOVER : g.Z.INTERACTIVE_NORMAL
                })
            });
        }
    });
}
