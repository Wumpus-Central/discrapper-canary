n.d(t, { Z: () => L }), n(388685), n(361932), n(187205);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(695469),
    c = n(442837),
    u = n(481060),
    d = n(235820),
    h = n(493773),
    p = n(100527),
    f = n(906732),
    g = n(377171),
    m = n(315174),
    b = n(455199),
    _ = n(768943),
    O = n(592125),
    y = n(594174),
    v = n(70956),
    C = n(709054),
    j = n(821020),
    E = n(370774),
    S = n(334426),
    x = n(862149),
    I = n(739340),
    P = n(207913),
    N = n(553984),
    w = n(333834),
    Z = n(982183),
    T = n(981631),
    A = n(388032),
    R = n(21678);
let D = {
    controller: new a.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: Z.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function L(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        a = (0, c.Wu)([b.Z], () => {
            var e;
            return null != (e = b.Z.getSettingsFilteredMentions()) ? e : [];
        }),
        {
            hasMore: d,
            loading: p,
            hasLoadedEver: f
        } = (0, c.cj)([b.Z], () => ({
            hasMore: b.Z.hasMore,
            loading: b.Z.loading,
            hasLoadedEver: b.Z.hasLoadedEver,
            guildFilter: b.Z.guildFilter,
            roleFilter: b.Z.roleFilter,
            everyoneFilter: b.Z.everyoneFilter
        })),
        [g, E] = i.useState(Z.V5.ALL),
        { messages: S, loadState: x, loadMore: P, hasLoadedEver: A } = (0, I.ZP)(),
        L = (function (e) {
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
        })(A && f && !p && x !== I.jd.Loading);
    (0, i.useEffect)(() => {
        if (!f) return void M(null);
    }, [f]);
    let V = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
        H = (0, c.e7)([_.Z], () => _.Z.getSavedMessages()),
        z = i.useMemo(() => {
            var e;
            return A
                ? g === Z.V5.BOOKMARKS
                    ? H.flatMap((e) => {
                          let { message: t } = e;
                          return null != t
                              ? [
                                    {
                                        kind: Z.fL.BOOKMARK,
                                        message: t
                                    }
                                ]
                              : [];
                      })
                    : (0, s.uniqBy)(
                          [
                              ...(null !=
                              (e =
                                  null == a
                                      ? void 0
                                      : a.map((e) => ({
                                            kind: Z.fL.MENTION,
                                            message: e
                                        })))
                                  ? e
                                  : []),
                              ...S.filter((e) => e.author.id !== (null == V ? void 0 : V.id)).map((e) => ({
                                  message: e,
                                  kind: Z.fL.ALL_MESSAGES_CHANNEL
                              }))
                          ],
                          (e) => {
                              let { message: t } = e;
                              return t.id;
                          }
                      ).filter((e) => {
                          let { message: t } = e;
                          if (t.author.id === (null == V ? void 0 : V.id) || C.default.age(t.id) > Z.ib) return !1;
                          if (g === Z.V5.ALL) return !0;
                          if (g === Z.V5.MENTIONS) return t.mentioned;
                          if (g === Z.V5.ANNOUNCEMENTS) {
                              let e = O.Z.getChannel(t.channel_id);
                              return (null == e ? void 0 : e.type) === T.d4z.GUILD_ANNOUNCEMENT;
                          }
                          return !1;
                      })
                : null;
        }, [g, a, V, H, S, A]),
        { filterStyle: W } = j.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        K = W === j.v8.DROPDOWN && g !== Z.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(R.container, { [R.panelSpacing]: l }),
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
                        guild: Z.F7
                    },
                    D
                )),
                (n = n =
                    {
                        children: (0, r.jsxs)(u.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children: [
                                W === j.v8.DROPDOWN &&
                                    (0, r.jsx)(N.p, {
                                        selectedFilter: g,
                                        setSelectedFilter: E,
                                        className: R.headerButton
                                    }),
                                (0, r.jsx)(F, {})
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
            W === j.v8.TABS &&
                (0, r.jsx)(N.Z, {
                    selectedFilter: g,
                    setSelectedFilter: E
                }),
            g === Z.V5.ALL && (0, r.jsx)(G, { hideBanner: L || g !== Z.V5.ALL }),
            K && (0, r.jsx)(B, { filter: g }),
            (0, r.jsx)(w.Z, {
                className: R.messageList,
                renderMessageGroup: U,
                messages: z,
                loadingInitial: L,
                loadingMore: x === I.jd.Loading || p,
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != a && a.length > 0 ? a[a.length - 1].id : null;
                    [Z.V5.ALL, Z.V5.MENTIONS, Z.V5.ANNOUNCEMENTS].includes(g) && d && !p && M(null, t), [Z.V5.ALL, Z.V5.ANNOUNCEMENTS].includes(g) && x !== I.jd.Done && x !== I.jd.Loading && P(e);
                },
                renderLoadingState: k,
                ignoreGrouping: g === Z.V5.BOOKMARKS
            })
        ]
    });
}
function M(e, t) {
    let n = b.Z.guildFilter,
        r = b.Z.roleFilter,
        i = b.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === T.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, T.DJj, l, r, i);
}
function k() {
    return (0, r.jsx)(x.Z, {});
}
function U(e, t, n) {
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
function G(e) {
    let { hideBanner: t } = e,
        [n, l] = i.useState(!1),
        s = (0, c.e7)([S.Z], () => S.Z.shouldHide),
        a = n ? u.kSu : u.kmB;
    return (0, r.jsx)(u.P3F, {
        onClick: () => S.Z.dismiss(),
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        className: o()(R.caughtUpContainer, { [R.hide]: s || t }),
        children: (0, r.jsxs)('div', {
            className: R.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: n ? 'text-sm/medium' : 'text-sm/normal',
                    color: 'text-feedback-positive',
                    className: R.caughtUpText,
                    children: A.intl.string(A.t['6XMM+P'])
                }),
                (0, r.jsx)(a, {
                    size: 'sm',
                    className: R.caughtUpIcon,
                    color: g.Z.TEXT_FEEDBACK_POSITIVE
                })
            ]
        })
    });
}
function B(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        u.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: R.filterHeaderWrap,
            children: Z.by[t]
        },
        'filter-header'
    );
}
function F() {
    let [e, t] = (0, i.useState)(!1),
        { analyticsLocations: n } = (0, f.ZP)(p.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)(u.ua7, {
        position: 'bottom',
        align: 'left',
        text: A.intl.string(A.t.h850Sk),
        shouldShow: e,
        forceOpen: e,
        hideOnClick: !0,
        children: (i) => {
            let { onClick: l } = i;
            return (0, r.jsx)(u.P3F, {
                className: R.headerButton,
                onMouseEnter: () => t(!0),
                onMouseLeave: () => t(!1),
                onClick: () => {
                    (0, E.j4)(n), null == l || l();
                },
                children: (0, r.jsx)(u.ewm, {
                    size: 'xs',
                    color: e ? g.Z.INTERACTIVE_HOVER : g.Z.INTERACTIVE_NORMAL
                })
            });
        }
    });
}
