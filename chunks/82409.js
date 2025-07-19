(n.d(t, { Z: () => D }), n(361932), n(187205), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(42133),
    a = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(493773);
(n(100527), n(906732));
var h = n(377171),
    p = n(315174),
    f = n(340541),
    g = n(768943),
    m = n(592125),
    b = n(430824),
    _ = n(306680),
    O = n(709054),
    y = n(821020),
    v = n(948154),
    C = n(725739),
    j = n(787879),
    E = n(370774),
    x = n(334426),
    S = n(862149),
    I = n(207913),
    P = n(553984),
    N = n(333834),
    w = n(982183),
    Z = n(981631),
    T = n(388032),
    A = n(21678);
let R = {
    controller: new s.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: w.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function D(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        { selectedFilter: s } = (0, C.Z)(),
        h = (0, a.e7)([j.Z], () => j.Z.oldestDisplayedMessageId),
        x = (0, a.Wu)([j.Z], () => j.Z.getInboxMessages()),
        S = (0, a.Wu)([_.ZP, b.Z, j.Z], () =>
            x.filter(
                (e) =>
                    !(0, E.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: _.ZP,
                        GuildStore_: b.Z
                    }) &&
                    O.default.compare(e.id, h) > 0 &&
                    e.id !== j.Z.lastClickedUnreadMessageId
            )
        ),
        I = (0, a.Wu)([_.ZP, b.Z, j.Z], () =>
            x.filter(
                (e) =>
                    (0, E.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: _.ZP,
                        GuildStore_: b.Z
                    }) || e.id === j.Z.lastClickedUnreadMessageId
            )
        ),
        Z = i.useCallback(
            (e) => {
                s !== w.V5.BOOKMARKS && v.Z.loadMoreInbox(e);
            },
            [s]
        ),
        { hasLoadedEver: T, hasNotifyingChannels: D } = (0, a.cj)([j.Z], () => ({
            hasLoadedEver: j.Z.hasLoadedEver,
            hasNotifyingChannels: null != j.Z.getNotifyingChannelIds()
        }));
    i.useEffect(() => {
        D && !T && Z();
    }, [D, T, Z]);
    let B = (0, a.Wu)([g.Z], () => g.Z.getSavedMessages()),
        V = i.useMemo(
            () =>
                B.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? []
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = m.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: w.fL.BOOKMARK,
                                  message: n
                              }
                          ];
                }),
            [B]
        ),
        F = L(S, s),
        H = L(I, s);
    ((0, d.ZP)(() => {
        var e, t;
        if (y.Lk.getCurrentConfig({ location: 'NotificationsInboxSidebar' }).notificationCenterVariant !== y.jP.SIDEBAR) return;
        let n = null == (e = F[F.length - 1]) ? void 0 : e.message,
            r = null == (t = H[H.length - 1]) ? void 0 : t.message,
            i = null != r ? r : n;
        null != i &&
            v.Z.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: null != r,
                isSidebar: !0,
                track: !1
            });
    }),
        (0, d.zq)(() => {
            u.Z.dispatch({ type: 'NOTIFICATIONS_INBOX_CLOSE' });
        }));
    let { filterStyle: z } = y.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        { entrypoints: W } = (0, f._k)({ location: 'NotificationsInboxSidebar' }),
        K = z === y.v8.DROPDOWN && s !== w.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(A.container, { [A.panelSpacing]: l }),
        children: [
            (0, r.jsx)(
                p.ZP,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        hasSubheader: !0,
                        guild: w.F7
                    },
                    R
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(c.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children: z === y.v8.DROPDOWN && !W && (0, r.jsx)(P.p, {})
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
            z === y.v8.TABS && (0, r.jsx)(P.Z, {}),
            s === w.V5.ALL && (0, r.jsx)(U, { hideBanner: !T || s !== w.V5.ALL }),
            K && (0, r.jsx)(G, { filter: s }),
            (0, r.jsx)(N.Z, {
                className: A.messageList,
                renderMessageGroup: k,
                messages: s === w.V5.BOOKMARKS ? V : F,
                unreadMessages: s === w.V5.BOOKMARKS ? [] : H,
                listName: 'notifications-inbox',
                renderLoadingState: M,
                ignoreGrouping: s === w.V5.BOOKMARKS,
                loadMore: Z
            })
        ]
    });
}
function L(e, t) {
    return i.useMemo(
        () =>
            0 === e.length
                ? []
                : e.filter((e) => {
                      let { id: n, channelId: r, kind: i } = e;
                      if (O.default.age(n) > w.ib) return !1;
                      if (t === w.V5.ALL) return !0;
                      if (t === w.V5.MENTIONS) return i === w.fL.MENTION;
                      if (t === w.V5.ANNOUNCEMENTS) {
                          let e = m.Z.getBasicChannel(r);
                          return (null == e ? void 0 : e.type) === Z.d4z.GUILD_ANNOUNCEMENT;
                      }
                      return !1;
                  }),
        [e, t]
    );
}
function M() {
    return (0, r.jsx)(S.Z, {});
}
function k(e, t) {
    return (0, r.jsx)(
        I.Z,
        {
            message: e[0],
            groupedMessages: e.slice(1),
            isUnread: t
        },
        e[0].id
    );
}
function U(e) {
    let { hideBanner: t } = e,
        n = (0, a.e7)([x.Z], () => x.Z.shouldHide);
    return (0, r.jsx)('div', {
        className: o()(A.caughtUpContainer, { [A.hide]: n || t }),
        children: (0, r.jsxs)('div', {
            className: A.caughtUpContent,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-feedback-positive',
                    className: A.caughtUpText,
                    children: T.intl.string(T.t['6XMM+P'])
                }),
                (0, r.jsx)(c.W6s, {
                    size: 'sm',
                    color: h.Z.TEXT_FEEDBACK_POSITIVE
                })
            ]
        })
    });
}
function G(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        c.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: A.filterHeaderWrap,
            children: w.by[t]
        },
        'filter-header'
    );
}
