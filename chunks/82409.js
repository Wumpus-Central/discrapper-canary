n.d(t, { Z: () => G }), n(361932), n(187205), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(717976),
    a = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(45114),
    h = n(493773);
n(100527), n(906732);
var p = n(377171),
    f = n(315174),
    g = n(340541),
    m = n(768943),
    b = n(592125),
    O = n(430824),
    _ = n(375954),
    y = n(306680),
    C = n(709054),
    v = n(821020),
    j = n(948154),
    E = n(804932),
    S = n(725739),
    x = n(787879),
    I = n(370774),
    P = n(334426),
    N = n(862149),
    w = n(207913),
    Z = n(553984),
    T = n(333834),
    A = n(982183),
    R = n(981631),
    D = n(388032),
    L = n(548265);
function M(e) {
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
let k = {
    controller: new s.Controller({
        value: 1,
        immediate: !0,
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: A.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0,
};
function U(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        s = (0, E.fJ)(),
        { selectedFilter: p } = (0, S.Z)(),
        P = (0, a.e7)([x.Z], () => x.Z.oldestDisplayedMessageId),
        N = (0, a.Wu)([x.Z], () => x.Z.getInboxMessages()),
        w = (0, a.Wu)([y.ZP, O.Z, x.Z], () =>
            N.filter(
                (e) =>
                    !(0, I.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: y.ZP,
                        GuildStore_: O.Z,
                    }) &&
                    C.default.compare(e.id, P) > 0 &&
                    !(0, I.Tj)(e, x.Z.selectedItemInfo),
            ),
        ),
        D = (0, a.Wu)([y.ZP, O.Z, x.Z], () =>
            N.filter(
                (e) =>
                    (0, I.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: y.ZP,
                        GuildStore_: O.Z,
                    }) || (0, I.Tj)(e, x.Z.selectedItemInfo),
            ),
        ),
        U = i.useCallback(
            (e) => {
                p !== A.V5.BOOKMARKS &&
                    j.Z.loadMoreInbox({
                        viewId: s,
                        loadingTrigger: e,
                    });
            },
            [p, s],
        ),
        { hasLoadedEver: G, canLoadMore: W } = (0, a.cj)([x.Z], () => ({
            hasLoadedEver: x.Z.hasLoadedEver,
            canLoadMore: x.Z.canLoadMore({}),
        }));
    i.useEffect(() => {
        W && !G && U(A.X.ON_OPEN);
    }, [W, G, U]),
        (function (e) {
            let { unreadChannelIds: t } = (0, I.O4)();
            i.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        var t;
                        let n = _.Z.getMessages(e),
                            r = null == (t = n.last()) ? void 0 : t.id,
                            i = y.ZP.ackMessageId(e),
                            l = n.hasPresent() && n.ready && !n.cached;
                        null != r &&
                            null != i &&
                            l &&
                            C.default.compare(i, r) >= 0 &&
                            d.In(
                                e,
                                {
                                    section: R.jXE.NOTIFICATIONS_INBOX,
                                    object: R.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: R.Qqv.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(G ? D : null);
    let K = (0, a.Wu)([m.Z], () => m.Z.getSavedMessages()),
        Y = i.useMemo(
            () =>
                K.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? []
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = b.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: A.fL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [K],
        ),
        q = B(w, p),
        X = B(D, p);
    (0, h.ZP)(() => {
        var e;
        u.Z.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let t = (0, v.Ag)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            n = null == (e = x.Z.getDevOverrides().navOnClick) || e;
        if (t !== v.jP.SIDEBAR || !1 === n) return;
        let { message: r, isUnread: i } = (function (e, t) {
            var n, r, i;
            let l = null == (n = e[e.length - 1]) ? void 0 : n.message,
                o = null == (r = t[t.length - 1]) ? void 0 : r.message,
                s = null != o ? o : l;
            if (null != s)
                return {
                    message: s,
                    isUnread: null != o,
                };
            let a = x.Z.getNotifyingChannelIds();
            if (null == a || 0 === a.length)
                return {
                    message: null,
                    isUnread: !1,
                };
            let c = a[0],
                u = y.ZP.getTrackedAckMessageId(c);
            return null == u
                ? {
                      message: null,
                      isUnread: !1,
                  }
                : {
                      message: {
                          id: C.default.atNextMillisecond(u),
                          channel_id: c,
                      },
                      isUnread: null != (i = y.ZP.hasUnread(c)) && i,
                  };
        })(q, X);
        null != r &&
            j.Z.inboxItemClick({
                message: r,
                channel: { id: r.channel_id },
                isUnread: i,
                isSidebar: !0,
                track: !1,
                viewId: s,
            });
    }),
        (0, h.zq)(() => {
            u.Z.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: Q } = (0, v.pN)({ location: "NotificationsInboxSidebar" }),
        { entrypoints: J } = (0, g._k)({ location: "NotificationsInboxSidebar" }),
        $ = Q === v.v8.DROPDOWN && p !== A.V5.ALL,
        ee = (0, A.H_)();
    return (0, r.jsx)("nav", {
        className: o()(L.container, { [L.panelSpacing]: l }),
        children: (0, r.jsxs)(c.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(
                f.ZP,
                ((t = M(
                    {
                        hasSubheader: !0,
                        guild: ee,
                    },
                    k,
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(c.Kqy, {
                            direction: "horizontal",
                            gap: 4,
                            style: { marginRight: -4 },
                            children: Q === v.v8.DROPDOWN && !J && (0, r.jsx)(Z.p, {}),
                        }),
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
                t),
            ),
            children: [
                Q === v.v8.TABS && (0, r.jsx)(Z.Z, {}),
                p === A.V5.ALL && (0, r.jsx)(H, { hideBanner: !G || p !== A.V5.ALL }),
                $ && (0, r.jsx)(z, { filter: p }),
                (0, r.jsx)(T.Z, {
                    className: L.messageList,
                    renderMessageGroup: F,
                    messages: p === A.V5.BOOKMARKS ? Y : q,
                    unreadMessages: p === A.V5.BOOKMARKS ? [] : X,
                    listName: "notifications-inbox",
                    renderLoadingState: V,
                    ignoreGrouping: p === A.V5.BOOKMARKS,
                    loadMore: U,
                }),
            ],
        }),
    });
}
function G(e) {
    return (0, r.jsx)(E.HP, { children: (0, r.jsx)(U, M({}, e)) });
}
function B(e, t) {
    return i.useMemo(
        () =>
            0 === e.length
                ? []
                : e.filter((e) => {
                      let { id: n, channelId: r, kind: i } = e;
                      if (C.default.age(n) > A.ib) return !1;
                      if (t === A.V5.ALL) return !0;
                      if (t === A.V5.MENTIONS) return i === A.fL.MENTION;
                      if (t === A.V5.ANNOUNCEMENTS) {
                          let e = b.Z.getBasicChannel(r);
                          return (null == e ? void 0 : e.type) === R.d4z.GUILD_ANNOUNCEMENT;
                      }
                      return !1;
                  }),
        [e, t],
    );
}
function V() {
    return (0, r.jsx)(N.Z, {});
}
function F(e, t) {
    return (0, r.jsx)(
        w.Z,
        {
            message: e[0],
            groupedMessages: e.slice(1),
            isUnread: t,
        },
        e[0].id,
    );
}
function H(e) {
    let { hideBanner: t } = e,
        n = (0, P.d)((e) => e.shouldHide());
    return (0, r.jsx)("div", {
        className: o()(L.caughtUpContainer, { [L.hide]: n || t }),
        children: (0, r.jsxs)("div", {
            className: L.caughtUpContent,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: L.caughtUpText,
                    children: D.intl.string(D.t["6XMM+P"]),
                }),
                (0, r.jsx)(c.W6s, {
                    size: "sm",
                    color: p.Z.TEXT_FEEDBACK_POSITIVE,
                }),
            ],
        }),
    });
}
function z(e) {
    let { filter: t } = e,
        n = (0, A.NV)();
    return (0, r.jsx)(
        c.X6q,
        {
            color: "text-primary",
            variant: "text-sm/semibold",
            className: L.filterHeaderWrap,
            children: n[t],
        },
        "filter-header",
    );
}
