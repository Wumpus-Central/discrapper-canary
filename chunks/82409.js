n.d(t, { Z: () => N }), n(388685), n(642613), n(361932), n(187205), n(415506);
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
    g = n(665149),
    m = n(455199),
    b = n(768943),
    y = n(592125),
    O = n(594174),
    v = n(709054),
    _ = n(739340),
    C = n(207913),
    j = n(553984),
    S = n(333834),
    E = n(982183),
    x = n(981631),
    P = n(388032),
    I = n(21678);
let w = {
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
function N(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        {
            messages: a,
            hasMore: d,
            loading: p,
            hasLoadedEver: C
        } = (0, c.cj)([m.Z], () => ({
            messages: m.Z.getMentions(),
            hasMore: m.Z.hasMore,
            loading: m.Z.loading,
            hasLoadedEver: m.Z.hasLoadedEver,
            guildFilter: m.Z.guildFilter,
            roleFilter: m.Z.roleFilter,
            everyoneFilter: m.Z.everyoneFilter
        })),
        [N, D] = i.useState(E.V5.ALL),
        [L, k] = i.useState(E.xM.UNREAD),
        { messages: M, loadState: U, loadMore: G, hasLoadedEver: B } = (0, _.ZP)();
    (0, i.useEffect)(() => {
        if (!C) return void Z(null);
    }, [C]);
    let V = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        H = (0, c.e7)([b.Z], () => b.Z.getSavedMessages()),
        F = i.useMemo(() => {
            if (!B) return null;
            let e = (0, s.uniqBy)(
                [...(null != a ? a : []), ...M.filter((e) => e.author.id !== (null == V ? void 0 : V.id))].sort((e, t) => v.default.compare(t.id, e.id)),
                'id'
            ).filter((e) => e.author.id !== (null == V ? void 0 : V.id) && v.default.age(e.id) < E.ib);
            if (N === E.V5.ALL) return e;
            if (N === E.V5.ANNOUNCEMENTS)
                return null == e
                    ? void 0
                    : e.filter((e) => {
                          let t = y.Z.getChannel(e.channel_id);
                          return (null == t ? void 0 : t.type) === x.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (N === E.V5.MENTIONS) return null == e ? void 0 : e.filter((e) => (null == V ? void 0 : V.id) != null && e.mentioned && e.mentions.includes(null == V ? void 0 : V.id));
            if (N === E.V5.BOOKMARKS) return H.flatMap((e) => (null != e.message ? [e.message] : []));
            throw Error('Unknown filter: '.concat(N));
        }, [N, a, V, H, M, B]),
        z = L === E.xM.READ && N === E.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(I.container, { [I.panelSpacing]: l }),
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
                    w
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(g.JO, {
                            icon: u.ewm,
                            iconClassName: I.settingsButtonIcon,
                            className: I.settingsButton,
                            'aria-hidden': !0,
                            tooltip: P.intl.string(P.t.h850Sk),
                            onClick: () => h.Z.open(x.oAB.NOTIFICATIONS, void 0)
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
            (0, r.jsx)(j.Z, {
                selectedFilter: N,
                setSelectedFilter: D
            }),
            z && (0, r.jsx)(A, {}),
            (0, r.jsx)(S.Z, {
                className: I.messageList,
                renderMessageGroup: R,
                messages: F,
                loading: p || U === _.jd.Loading,
                analyticsName: 'Notifications Inbox',
                channel: null,
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != a && a.length > 0 ? a[a.length - 1].id : null;
                    d && !p && Z(null, t), U !== _.jd.Done && U !== _.jd.Loading && G(e);
                },
                renderEmptyState: T,
                setInboxReadState: k,
                ignoreGrouping: N !== E.V5.ALL
            })
        ]
    });
}
function Z(e, t) {
    let n = m.Z.guildFilter,
        r = m.Z.roleFilter,
        i = m.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === x.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, x.DJj, l, r, i);
}
function T() {
    return (0, r.jsx)(u.LZC, { size: 16 });
}
function R(e, t) {
    return (0, r.jsx)(
        C.B,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1)
        },
        e[0].id
    );
}
function A() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(!1),
        o = n ? u.kSu : u.kmB;
    return e
        ? null
        : (0, r.jsxs)(u.P3F, {
              onClick: () => t(!0),
              onMouseEnter: () => l(!0),
              onMouseLeave: () => l(!1),
              className: I.emptyStateContainer,
              children: [
                  (0, r.jsx)(u.Text, {
                      variant: n ? 'text-sm/medium' : 'text-sm/normal',
                      color: 'text-positive',
                      className: I.emptyStateText,
                      children: P.intl.string(P.t['6XMM+P'])
                  }),
                  (0, r.jsx)(o, {
                      size: 'sm',
                      className: I.emptyStateIcon,
                      color: p.Z.TEXT_POSITIVE
                  })
              ]
          });
}
