n.d(t, { Z: () => Z }), n(388685), n(642613), n(361932), n(187205), n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(240894),
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
    E = n(333834),
    x = n(982183),
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
    bannerVisibleHeight: x.$J,
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
        [_, j] = i.useState(x.V5.ALL),
        [I, Z] = i.useState(x.xM.UNREAD),
        { messages: k, loadState: M, loadMore: U, hasLoadedEver: G } = (0, C.ZP)();
    (0, i.useEffect)(() => {
        if (!p) return void T(null);
    }, [p]);
    let B = (0, c.e7)([y.default], () => y.default.getCurrentUser()),
        V = (0, c.e7)([m.Z], () => m.Z.getSavedMessages()),
        H = i.useMemo(() => {
            if (!G) return null;
            let e = (0, s.uniqBy)(
                [...(null != a ? a : []), ...k.filter((e) => e.author.id !== (null == B ? void 0 : B.id))].sort((e, t) => O.default.compare(t.id, e.id)),
                'id'
            ).filter((e) => e.author.id !== (null == B ? void 0 : B.id) && O.default.age(e.id) < x.ib);
            if (_ === x.V5.ALL) return e;
            if (_ === x.V5.ANNOUNCEMENTS)
                return null == e
                    ? void 0
                    : e.filter((e) => {
                          let t = b.Z.getChannel(e.channel_id);
                          return (null == t ? void 0 : t.type) === P.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (_ === x.V5.MENTIONS) return null == e ? void 0 : e.filter((e) => (null == B ? void 0 : B.id) != null && e.mentioned && e.mentions.includes(null == B ? void 0 : B.id));
            if (_ === x.V5.BOOKMARKS) return V.flatMap((e) => (null != e.message ? [e.message] : []));
            throw Error('Unknown filter: '.concat(_));
        }, [_, a, B, V, k, G]),
        F = I === x.xM.READ && _ === x.V5.ALL,
        { notificationCenterVariant: z } = v.L.useExperiment({ location: 'NotificationsInboxSidebar' });
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
                        guild: x.F7
                    },
                    N
                )),
                (n = n =
                    {
                        children: (0, r.jsxs)(u.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            children: [
                                'sidebar' === z &&
                                    (0, r.jsx)(S.p, {
                                        selectedFilter: _,
                                        setSelectedFilter: j,
                                        className: w.headerButton
                                    }),
                                (0, r.jsx)(L, {})
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
            'popout' === z &&
                (0, r.jsx)(S.Z, {
                    selectedFilter: _,
                    setSelectedFilter: j
                }),
            F && (0, r.jsx)(D, {}),
            (0, r.jsx)(E.Z, {
                className: w.messageList,
                renderMessageGroup: A,
                messages: H,
                loading: h || M === C.jd.Loading,
                analyticsName: 'Notifications Inbox',
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != a && a.length > 0 ? a[a.length - 1].id : null;
                    d && !h && T(null, t), M !== C.jd.Done && M !== C.jd.Loading && U(e);
                },
                renderEmptyState: R,
                setInboxReadState: Z,
                ignoreGrouping: _ !== x.V5.ALL
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
function R() {
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
function A(e, t) {
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
function L() {
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
