n.d(t, { Z: () => Z }), n(388685), n(361932), n(187205), n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(386230),
    c = n(442837),
    u = n(481060),
    d = n(235820),
    h = n(230711),
    p = n(377171),
    f = n(315174),
    g = n(455199),
    m = n(768943),
    b = n(592125),
    y = n(594174),
    O = n(709054),
    v = n(821020),
    _ = n(370774),
    C = n(739340),
    j = n(207913),
    S = n(553984),
    x = n(333834),
    E = n(982183),
    P = n(981631),
    I = n(388032),
    w = n(21678);
let N = {
    controller: new a.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: E.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function Z(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        {
            messages: a,
            hasMore: d,
            loading: h,
            hasLoadedEver: p
        } = (0, c.cj)([g.Z], () => ({
            messages: g.Z.getMentions(),
            hasMore: g.Z.hasMore,
            loading: g.Z.loading,
            hasLoadedEver: g.Z.hasLoadedEver,
            guildFilter: g.Z.guildFilter,
            roleFilter: g.Z.roleFilter,
            everyoneFilter: g.Z.everyoneFilter
        })),
        [_, j] = i.useState(E.V5.ALL),
        [I, Z] = i.useState(E.xM.UNREAD),
        { messages: M, loadState: U, loadMore: G, hasLoadedEver: B } = (0, C.ZP)();
    (0, i.useEffect)(() => {
        if (!p) return void T(null);
    }, [p]);
    let V = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
        H = (0, c.e7)([m.Z], () => m.Z.getSavedMessages()),
        F = i.useMemo(() => {
            var e;
            if (!B) return null;
            if (_ === E.V5.BOOKMARKS)
                return H.flatMap((e) => {
                    let { message: t } = e;
                    return null != t
                        ? [
                              {
                                  kind: E.fL.BOOKMARK,
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
                                  kind: E.fL.MENTION,
                                  message: e
                              })))
                        ? e
                        : []),
                    ...M.filter((e) => e.author.id !== (null == V ? void 0 : V.id)).map((e) => ({
                        message: e,
                        kind: E.fL.ALL_MESSAGES_CHANNEL
                    }))
                ],
                (e) => {
                    let { message: t } = e;
                    return t.id;
                }
            ).filter((e) => {
                let { message: t } = e;
                return t.author.id !== (null == V ? void 0 : V.id) && O.default.age(t.id) < E.ib;
            });
            if (_ === E.V5.ALL) return t;
            if (_ === E.V5.ANNOUNCEMENTS)
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { message: t } = e,
                              n = b.Z.getChannel(t.channel_id);
                          return (null == n ? void 0 : n.type) === P.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (_ === E.V5.MENTIONS)
                return null == t
                    ? void 0
                    : t.filter((e) => {
                          let { message: t } = e;
                          return (null == V ? void 0 : V.id) != null && t.mentioned && t.mentions.includes(null == V ? void 0 : V.id);
                      });
            throw Error('Unknown filter: '.concat(_));
        }, [_, a, V, H, M, B]),
        z = I === E.xM.READ && _ === E.V5.ALL && !h && B,
        { notificationCenterVariant: W } = v.L.useExperiment({ location: 'NotificationsInboxSidebar' }),
        Y = 'sidebar' === W && _ !== E.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(w.container, { [w.panelSpacing]: l }),
        children: [
            (0, r.jsx)(
                f.ZP,
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
                        guild: E.F7
                    },
                    N
                )),
                (n = n =
                    {
                        children: (0, r.jsxs)(u.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            children: [
                                'sidebar' === W &&
                                    (0, r.jsx)(S.p, {
                                        selectedFilter: _,
                                        setSelectedFilter: j,
                                        className: w.headerButton
                                    }),
                                (0, r.jsx)(k, {})
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
            'popout' === W &&
                (0, r.jsx)(S.Z, {
                    selectedFilter: _,
                    setSelectedFilter: j
                }),
            z && (0, r.jsx)(D, {}),
            Y && (0, r.jsx)(L, { filter: _ }),
            (0, r.jsx)(x.Z, {
                className: w.messageList,
                renderMessageGroup: R,
                messages: F,
                loading: h || U === C.jd.Loading,
                analyticsName: 'Notifications Inbox',
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != a && a.length > 0 ? a[a.length - 1].id : null;
                    d && !h && T(null, t), U !== C.jd.Done && U !== C.jd.Loading && G(e);
                },
                renderEmptyState: A,
                setInboxReadState: Z,
                ignoreGrouping: _ !== E.V5.ALL
            })
        ]
    });
}
function T(e, t) {
    let n = g.Z.guildFilter,
        r = g.Z.roleFilter,
        i = g.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === P.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, P.DJj, l, r, i);
}
function A() {
    return (0, r.jsx)('div', {
        className: w.emptyStateContainer,
        children: (0, r.jsxs)(u.Kqy, {
            gap: 24,
            align: 'center',
            children: [
                (0, r.jsxs)(u.Kqy, {
                    gap: 16,
                    align: 'center',
                    children: [
                        (0, r.jsx)(u.xx7, {
                            size: 'custom',
                            height: 40,
                            width: 40,
                            color: u.TVs.colors.BG_MOD_STRONG
                        }),
                        (0, r.jsx)(u.Text, {
                            variant: 'text-sm/medium',
                            color: P.tPk.TEXT_MUTED,
                            style: { textAlign: 'center' },
                            children: I.intl.string(I.t['O+racX'])
                        })
                    ]
                }),
                (0, r.jsx)(u.zxk, {
                    onClick: _.j4,
                    color: u.zxk.Colors.PRIMARY,
                    style: { fontWeight: 600 },
                    children: I.intl.string(I.t.klSpfn)
                })
            ]
        })
    });
}
function R(e, t) {
    return (0, r.jsx)(
        j.B,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1)
        },
        e[0].id
    );
}
function D() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(!1),
        o = n ? u.kSu : u.kmB;
    return e
        ? null
        : (0, r.jsxs)(u.P3F, {
              onClick: () => t(!0),
              onMouseEnter: () => l(!0),
              onMouseLeave: () => l(!1),
              className: w.caughtUpContainer,
              children: [
                  (0, r.jsx)(u.Text, {
                      variant: n ? 'text-sm/medium' : 'text-sm/normal',
                      color: 'text-positive',
                      className: w.caughtUpText,
                      children: I.intl.string(I.t['6XMM+P'])
                  }),
                  (0, r.jsx)(o, {
                      size: 'sm',
                      className: w.caughtUpIcon,
                      color: p.Z.TEXT_POSITIVE
                  })
              ]
          });
}
function L(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        u.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: w.filterHeaderWrap,
            children: E.by[t]
        },
        'filter-header'
    );
}
function k() {
    let [e, t] = (0, i.useState)(!1);
    return (0, r.jsx)(u.ua7, {
        position: 'bottom',
        align: 'left',
        text: I.intl.string(I.t.h850Sk),
        shouldShow: e,
        forceOpen: e,
        hideOnClick: !0,
        children: (n) => {
            let { onClick: i } = n;
            return (0, r.jsx)(u.P3F, {
                className: w.headerButton,
                onMouseEnter: () => t(!0),
                onMouseLeave: () => t(!1),
                onClick: () => {
                    h.Z.open(P.oAB.NOTIFICATIONS, void 0), null == i || i();
                },
                children: (0, r.jsx)(u.ewm, {
                    size: 'xs',
                    color: e ? p.Z.INTERACTIVE_HOVER : p.Z.INTERACTIVE_NORMAL
                })
            });
        }
    });
}
