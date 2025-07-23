(n.d(t, { Z: () => M }), n(361932), n(187205), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(42133),
    a = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(45114),
    h = n(493773);
(n(100527), n(906732));
var p = n(377171),
    f = n(315174),
    g = n(340541),
    m = n(768943),
    b = n(592125),
    _ = n(430824),
    O = n(375954),
    y = n(306680),
    v = n(709054),
    C = n(821020),
    j = n(948154),
    E = n(725739),
    x = n(787879),
    S = n(370774),
    I = n(334426),
    P = n(862149),
    N = n(207913),
    w = n(553984),
    Z = n(333834),
    T = n(982183),
    A = n(981631),
    R = n(388032),
    D = n(21678);
let L = {
    controller: new s.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: T.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function M(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        { selectedFilter: s } = (0, E.Z)(),
        p = (0, a.e7)([x.Z], () => x.Z.oldestDisplayedMessageId),
        I = (0, a.Wu)([x.Z], () => x.Z.getInboxMessages()),
        P = (0, a.Wu)([y.ZP, _.Z, x.Z], () =>
            I.filter(
                (e) =>
                    !(0, S.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: y.ZP,
                        GuildStore_: _.Z
                    }) &&
                    v.default.compare(e.id, p) > 0 &&
                    e.id !== x.Z.lastClickedUnreadMessageId
            )
        ),
        N = (0, a.Wu)([y.ZP, _.Z, x.Z], () =>
            I.filter(
                (e) =>
                    (0, S.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: y.ZP,
                        GuildStore_: _.Z
                    }) || e.id === x.Z.lastClickedUnreadMessageId
            )
        ),
        R = i.useCallback(
            (e) => {
                s !== T.V5.BOOKMARKS && j.Z.loadMoreInbox(e);
            },
            [s]
        ),
        { hasLoadedEver: M, hasNotifyingChannels: F } = (0, a.cj)([x.Z], () => ({
            hasLoadedEver: x.Z.hasLoadedEver,
            hasNotifyingChannels: null != x.Z.getNotifyingChannelIds()
        }));
    (i.useEffect(() => {
        F && !M && R();
    }, [F, M, R]),
        (function (e) {
            let { unreadChannelIds: t } = (0, S.O4)();
            i.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        var t;
                        let n = O.Z.getMessages(e),
                            r = null == (t = n.last()) ? void 0 : t.id,
                            i = y.ZP.ackMessageId(e);
                        null != r &&
                            null != i &&
                            n.hasPresent() &&
                            v.default.compare(i, r) > 0 &&
                            d.In(
                                e,
                                {
                                    section: A.jXE.NOTIFICATIONS_INBOX,
                                    object: A.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: A.Qqv.ACK_AUTOMATIC
                                },
                                !0
                            );
                    });
            }, [e, t]);
        })(M ? N : null));
    let H = (0, a.Wu)([m.Z], () => m.Z.getSavedMessages()),
        z = i.useMemo(
            () =>
                H.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? []
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = b.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: T.fL.BOOKMARK,
                                  message: n
                              }
                          ];
                }),
            [H]
        ),
        W = k(P, s),
        K = k(N, s);
    ((0, h.ZP)(() => {
        var e, t;
        if (C.Lk.getCurrentConfig({ location: 'NotificationsInboxSidebar' }).notificationCenterVariant !== C.jP.SIDEBAR) return;
        let n = null == (e = W[W.length - 1]) ? void 0 : e.message,
            r = null == (t = K[K.length - 1]) ? void 0 : t.message,
            i = null != r ? r : n;
        null != i &&
            j.Z.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: null != r,
                isSidebar: !0,
                track: !1
            });
    }),
        (0, h.zq)(() => {
            u.Z.dispatch({ type: 'NOTIFICATIONS_INBOX_CLOSE' });
        }));
    let { filterStyle: Y } = C.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        { entrypoints: q } = (0, g._k)({ location: 'NotificationsInboxSidebar' }),
        X = Y === C.v8.DROPDOWN && s !== T.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(D.container, { [D.panelSpacing]: l }),
        children: [
            (0, r.jsx)(
                f.ZP,
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
                        guild: T.F7
                    },
                    L
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(c.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children: Y === C.v8.DROPDOWN && !q && (0, r.jsx)(w.p, {})
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
            Y === C.v8.TABS && (0, r.jsx)(w.Z, {}),
            s === T.V5.ALL && (0, r.jsx)(B, { hideBanner: !M || s !== T.V5.ALL }),
            X && (0, r.jsx)(V, { filter: s }),
            (0, r.jsx)(Z.Z, {
                className: D.messageList,
                renderMessageGroup: G,
                messages: s === T.V5.BOOKMARKS ? z : W,
                unreadMessages: s === T.V5.BOOKMARKS ? [] : K,
                listName: 'notifications-inbox',
                renderLoadingState: U,
                ignoreGrouping: s === T.V5.BOOKMARKS,
                loadMore: R
            })
        ]
    });
}
function k(e, t) {
    return i.useMemo(
        () =>
            0 === e.length
                ? []
                : e.filter((e) => {
                      let { id: n, channelId: r, kind: i } = e;
                      if (v.default.age(n) > T.ib) return !1;
                      if (t === T.V5.ALL) return !0;
                      if (t === T.V5.MENTIONS) return i === T.fL.MENTION;
                      if (t === T.V5.ANNOUNCEMENTS) {
                          let e = b.Z.getBasicChannel(r);
                          return (null == e ? void 0 : e.type) === A.d4z.GUILD_ANNOUNCEMENT;
                      }
                      return !1;
                  }),
        [e, t]
    );
}
function U() {
    return (0, r.jsx)(P.Z, {});
}
function G(e, t) {
    return (0, r.jsx)(
        N.Z,
        {
            message: e[0],
            groupedMessages: e.slice(1),
            isUnread: t
        },
        e[0].id
    );
}
function B(e) {
    let { hideBanner: t } = e,
        n = (0, a.e7)([I.Z], () => I.Z.shouldHide);
    return (0, r.jsx)('div', {
        className: o()(D.caughtUpContainer, { [D.hide]: n || t }),
        children: (0, r.jsxs)('div', {
            className: D.caughtUpContent,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-feedback-positive',
                    className: D.caughtUpText,
                    children: R.intl.string(R.t['6XMM+P'])
                }),
                (0, r.jsx)(c.W6s, {
                    size: 'sm',
                    color: p.Z.TEXT_FEEDBACK_POSITIVE
                })
            ]
        })
    });
}
function V(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        c.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: D.filterHeaderWrap,
            children: T.by[t]
        },
        'filter-header'
    );
}
