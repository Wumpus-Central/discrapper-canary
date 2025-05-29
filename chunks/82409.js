n.d(t, { Z: () => w }), n(388685), n(642613), n(361932), n(187205), n(415506);
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
    _ = n(207913),
    C = n(553984),
    j = n(333834),
    S = n(982183),
    E = n(981631),
    x = n(388032),
    P = n(21678);
let I = {
    controller: new a.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: S.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function w(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        {
            messages: a,
            hasMore: d,
            loading: p,
            hasLoadedEver: _
        } = (0, c.cj)([m.Z], () => ({
            messages: m.Z.getMentions(),
            hasMore: m.Z.hasMore,
            loading: m.Z.loading,
            hasLoadedEver: m.Z.hasLoadedEver,
            guildFilter: m.Z.guildFilter,
            roleFilter: m.Z.roleFilter,
            everyoneFilter: m.Z.everyoneFilter
        })),
        [w, A] = i.useState(S.V5.ALL),
        [D, L] = i.useState(S.xM.UNREAD);
    (0, i.useEffect)(() => {
        if (!_) return void N(null);
    }, [_]);
    let k = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        M = (0, c.e7)([b.Z], () => b.Z.getSavedMessages()),
        U = i.useMemo(() => {
            let e = (0, s.uniqBy)(
                [...(null != a ? a : [])].sort((e, t) => v.default.compare(t.id, e.id)),
                'id'
            );
            if (w === S.V5.ALL) return e;
            if (w === S.V5.ANNOUNCEMENTS)
                return null == e
                    ? void 0
                    : e.filter((e) => {
                          let t = y.Z.getChannel(e.channel_id);
                          return (null == t ? void 0 : t.type) === E.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (w === S.V5.MENTIONS) return null == e ? void 0 : e.filter((e) => (null == k ? void 0 : k.id) != null && e.mentioned && e.mentions.includes(null == k ? void 0 : k.id));
            if (w === S.V5.BOOKMARKS) return M.flatMap((e) => (null != e.message ? [e.message] : []));
            throw Error('Unknown filter: '.concat(w));
        }, [w, a, k, M]),
        G = D === S.xM.READ && w === S.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(P.container, { [P.panelSpacing]: l }),
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
                        guild: S.F7
                    },
                    I
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(g.JO, {
                            icon: u.ewm,
                            iconClassName: P.settingsButtonIcon,
                            className: P.settingsButton,
                            'aria-hidden': !0,
                            tooltip: x.intl.string(x.t.h850Sk),
                            onClick: () => h.Z.open(E.oAB.NOTIFICATIONS, void 0)
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
            (0, r.jsx)(C.Z, {
                selectedFilter: w,
                setSelectedFilter: A
            }),
            G && (0, r.jsx)(R, {}),
            (0, r.jsx)(j.Z, {
                className: P.messageList,
                renderMessageGroup: T,
                messages: U,
                loading: p,
                hasMore: d,
                analyticsName: 'Notifications Inbox',
                channel: null,
                listName: 'notifications-inbox',
                loadMore: function () {
                    N(null, null != a && a.length > 0 ? a[a.length - 1].id : null);
                },
                renderEmptyState: Z,
                setInboxReadState: L,
                ignoreGrouping: w !== S.V5.ALL
            })
        ]
    });
}
function N(e, t) {
    let n = m.Z.guildFilter,
        r = m.Z.roleFilter,
        i = m.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === E.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, E.DJj, l, r, i);
}
function Z() {
    return (0, r.jsx)(u.LZC, { size: 16 });
}
function T(e, t) {
    return (0, r.jsx)(
        _.B,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1)
        },
        e[0].id
    );
}
function R() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(!1),
        o = n ? u.kSu : u.kmB;
    return e
        ? null
        : (0, r.jsxs)(u.P3F, {
              onClick: () => t(!0),
              onMouseEnter: () => l(!0),
              onMouseLeave: () => l(!1),
              className: P.emptyStateContainer,
              children: [
                  (0, r.jsx)(u.Text, {
                      variant: n ? 'text-sm/medium' : 'text-sm/normal',
                      color: 'text-positive',
                      className: P.emptyStateText,
                      children: x.intl.string(x.t['6XMM+P'])
                  }),
                  (0, r.jsx)(o, {
                      size: 'sm',
                      className: P.emptyStateIcon,
                      color: p.Z.TEXT_POSITIVE
                  })
              ]
          });
}
