n.d(t, { Z: () => P }), n(388685), n(642613), n(361932), n(187205), n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(240894),
    c = n(442837),
    u = n(481060),
    d = n(235820),
    h = n(377171),
    p = n(315174),
    f = n(455199),
    g = n(768943),
    m = n(592125),
    b = n(594174),
    y = n(709054),
    O = n(207913),
    v = n(553984),
    _ = n(333834),
    C = n(982183),
    j = n(981631),
    S = n(388032),
    E = n(21678);
let x = {
    controller: new a.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: C.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function P(e) {
    let { includePanelSpacing: t } = e,
        {
            messages: n,
            hasMore: l,
            loading: a,
            hasLoadedEver: u
        } = (0, c.cj)([f.Z], () => ({
            messages: f.Z.getMentions(),
            hasMore: f.Z.hasMore,
            loading: f.Z.loading,
            hasLoadedEver: f.Z.hasLoadedEver,
            guildFilter: f.Z.guildFilter,
            roleFilter: f.Z.roleFilter,
            everyoneFilter: f.Z.everyoneFilter
        })),
        [d, h] = i.useState(C.V5.ALL),
        [O, S] = i.useState(C.xM.UNREAD);
    (0, i.useEffect)(() => {
        if (!u) return void I(null);
    }, [u]);
    let P = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        T = (0, c.e7)([g.Z], () => g.Z.getSavedMessages()),
        A = i.useMemo(() => {
            let e = (0, s.uniqBy)(
                [...(null != n ? n : [])].sort((e, t) => y.default.compare(t.id, e.id)),
                'id'
            );
            if (d === C.V5.ALL) return e;
            if (d === C.V5.ANNOUNCEMENTS)
                return null == e
                    ? void 0
                    : e.filter((e) => {
                          let t = m.Z.getChannel(e.channel_id);
                          return (null == t ? void 0 : t.type) === j.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (d === C.V5.MENTIONS) return null == e ? void 0 : e.filter((e) => (null == P ? void 0 : P.id) != null && e.mentioned && e.mentions.includes(null == P ? void 0 : P.id));
            if (d === C.V5.BOOKMARKS) return T.flatMap((e) => (null != e.message ? [e.message] : []));
            throw Error('Unknown filter: '.concat(d));
        }, [d, n, P, T]),
        R = O === C.xM.READ && d === C.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(E.container, { [E.panelSpacing]: t }),
        children: [
            (0, r.jsx)(
                p.ZP,
                (function (e) {
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
                        guild: C.F7
                    },
                    x
                )
            ),
            (0, r.jsx)(v.Z, {
                selectedFilter: d,
                setSelectedFilter: h
            }),
            R && (0, r.jsx)(Z, {}),
            (0, r.jsx)(_.Z, {
                className: E.messageList,
                renderMessageGroup: N,
                messages: A,
                loading: a,
                hasMore: l,
                analyticsName: 'Notifications Inbox',
                channel: null,
                listName: 'notifications-inbox',
                loadMore: function () {
                    I(null, null != n && n.length > 0 ? n[n.length - 1].id : null);
                },
                renderEmptyState: w,
                setInboxReadState: S
            })
        ]
    });
}
function I(e, t) {
    let n = f.Z.guildFilter,
        r = f.Z.roleFilter,
        i = f.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === j.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, j.DJj, l, r, i);
}
function w() {
    return (0, r.jsx)(u.LZC, { size: 16 });
}
function N(e, t) {
    return (0, r.jsx)(
        O.B,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1)
        },
        e[0].id
    );
}
function Z() {
    let [e, t] = i.useState(!1),
        [n, l] = i.useState(!1),
        o = n ? u.kSu : u.kmB;
    return e
        ? null
        : (0, r.jsxs)(u.P3F, {
              onClick: () => t(!0),
              onMouseEnter: () => l(!0),
              onMouseLeave: () => l(!1),
              className: E.emptyStateContainer,
              children: [
                  (0, r.jsx)(u.Text, {
                      variant: n ? 'text-sm/medium' : 'text-sm/normal',
                      color: 'text-positive',
                      className: E.emptyStateText,
                      children: S.intl.string(S.t['6XMM+P'])
                  }),
                  (0, r.jsx)(o, {
                      size: 'sm',
                      className: E.emptyStateIcon,
                      color: h.Z.TEXT_POSITIVE
                  })
              ]
          });
}
