n.d(t, { Z: () => B }), n(361932), n(187205), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(205120),
    s = n(442837),
    c = n(692547);
n(28664);
var u = n(481060),
    d = n(570140),
    f = n(45114),
    h = n(493773);
n(100527), n(906732);
var p = n(315174),
    g = n(340541),
    m = n(768943),
    b = n(592125),
    _ = n(430824),
    y = n(375954),
    O = n(306680),
    v = n(709054),
    j = n(821020),
    x = n(948154),
    C = n(804932),
    E = n(725739),
    S = n(787879),
    I = n(370774),
    P = n(334426),
    N = n(862149),
    Z = n(207913),
    w = n(553984),
    T = n(333834),
    A = n(982183),
    R = n(981631),
    D = n(388032),
    M = n(567133);
function L(e) {
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
let k = [],
    G = {
        controller: new a.Controller({
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
        a = (0, C.fJ)(),
        { selectedFilter: c } = (0, E.Z)(),
        P = (0, s.e7)([S.Z], () => S.Z.oldestDisplayedMessageId),
        N = (0, s.Wu)([S.Z], () => S.Z.getInboxMessages()),
        Z = (0, s.Wu)([O.ZP, _.Z, S.Z], () =>
            N.filter(
                (e) =>
                    !(0, I.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: O.ZP,
                        GuildStore_: _.Z,
                    }) && !(0, I.Tj)(e, S.Z.selectedItemInfo),
            ),
        ),
        D = (0, s.Wu)([O.ZP, _.Z, S.Z], () =>
            N.filter(
                (e) =>
                    (0, I.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: O.ZP,
                        GuildStore_: _.Z,
                    }) || (0, I.Tj)(e, S.Z.selectedItemInfo),
            ),
        ),
        U = i.useCallback(
            (e) => {
                c !== A.V5.BOOKMARKS &&
                    x.Z.loadMoreInbox({
                        viewId: a,
                        loadingTrigger: e,
                    });
            },
            [c, a],
        ),
        { hasLoadedEver: B, canLoadMore: z } = (0, s.cj)([S.Z], () => ({
            hasLoadedEver: S.Z.hasLoadedEver,
            canLoadMore: S.Z.canLoadMore({}),
        }));
    i.useEffect(() => {
        z && !B && U(A.X.ON_OPEN);
    }, [z, B, U]),
        (function (e) {
            let { unreadChannelIds: t } = (0, I.O4)();
            i.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        var t;
                        let n = y.Z.getMessages(e),
                            r = null == (t = n.last()) ? void 0 : t.id,
                            i = O.ZP.ackMessageId(e),
                            l = n.hasPresent() && n.ready && !n.cached;
                        null != r &&
                            null != i &&
                            l &&
                            v.default.compare(i, r) >= 0 &&
                            f.ack(
                                e,
                                {
                                    section: R.jXE.NOTIFICATIONS_INBOX,
                                    object: R.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: R.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(B ? D : null);
    let K = (0, s.Wu)([m.Z], () => m.Z.getSavedMessages()),
        Y = i.useMemo(
            () =>
                K.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? k
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
        q = F(Z, c, P),
        Q = F(D, c, null);
    (0, h.ZP)(() => {
        var e;
        d.Z.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let t = (0, j.Ag)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            n = null == (e = S.Z.getDevOverrides().navOnClick) || e;
        if (t !== j.jP.SIDEBAR || !1 === n) return;
        let { message: r, isUnread: i } = (function (e, t) {
            var n, r, i;
            let l = null == (n = e[e.length - 1]) ? void 0 : n.message,
                o = null == (r = t[t.length - 1]) ? void 0 : r.message,
                a = null != o ? o : l;
            if (null != a)
                return {
                    message: a,
                    isUnread: null != o,
                };
            let s = S.Z.getNotifyingChannelIds();
            if (null == s || 0 === s.length)
                return {
                    message: null,
                    isUnread: !1,
                };
            let c = s[0],
                u = O.ZP.getTrackedAckMessageId(c);
            return null == u
                ? {
                      message: null,
                      isUnread: !1,
                  }
                : {
                      message: {
                          id: v.default.atNextMillisecond(u),
                          channel_id: c,
                      },
                      isUnread: null != (i = O.ZP.hasUnread(c)) && i,
                  };
        })(q, Q);
        null != r &&
            x.Z.inboxItemClick({
                message: r,
                channel: { id: r.channel_id },
                isUnread: i,
                isSidebar: !0,
                track: !1,
                viewId: a,
            });
    }),
        (0, h.zq)(() => {
            d.Z.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: X } = (0, j.pN)({ location: "NotificationsInboxSidebar" }),
        J = (0, g._k)({ location: "NotificationsInboxSidebar" }),
        $ = X === j.v8.DROPDOWN && c !== A.V5.ALL,
        ee = (0, A.H_)(c);
    return (0, r.jsx)("nav", {
        className: o()(M.container, { [M.panelSpacing]: l }),
        children: (0, r.jsxs)(u.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(
                p.ZP,
                ((t = L(
                    {
                        hasSubheader: !0,
                        guild: ee,
                    },
                    G,
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(u.Kqy, {
                            direction: "horizontal",
                            gap: 4,
                            style: { marginRight: -4 },
                            children: X === j.v8.DROPDOWN && !J.isGuildEntrypointEnabled && (0, r.jsx)(w.p, {}),
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
                c === A.V5.ALL && (0, r.jsx)(W, { hideBanner: !B || c !== A.V5.ALL }),
                $ && (0, r.jsx)(u.LZC, { size: 8 }),
                (0, r.jsx)(T.Z, {
                    className: M.messageList,
                    renderMessageGroup: H,
                    messages: c === A.V5.BOOKMARKS ? Y : q,
                    unreadMessages: c === A.V5.BOOKMARKS ? [] : Q,
                    listName: "notifications-inbox",
                    renderLoadingState: V,
                    ignoreGrouping: c === A.V5.BOOKMARKS,
                    loadMore: U,
                }),
            ],
        }),
    });
}
function B(e) {
    return (0, r.jsx)(C.HP, { children: (0, r.jsx)(U, L({}, e)) });
}
function F(e, t, n) {
    return i.useMemo(
        () =>
            0 === e.length || t === A.V5.BOOKMARKS
                ? k
                : e.filter((e) => {
                      let { id: r } = e;
                      return (
                          !(v.default.age(r) > A.ib || (null != n && 0 >= v.default.compare(r, n))) && t === A.V5.ALL
                      );
                  }),
        [e, t, n],
    );
}
function V() {
    return (0, r.jsx)(N.Z, {});
}
function H(e, t) {
    return (0, r.jsx)(
        Z.Z,
        {
            message: e[0],
            groupedMessages: e.slice(1),
            isUnread: t,
        },
        e[0].id,
    );
}
function W(e) {
    let { hideBanner: t } = e,
        n = (0, P.d)((e) => e.shouldHide());
    return (0, r.jsx)("div", {
        className: o()(M.caughtUpContainer, { [M.hide]: n || t }),
        children: (0, r.jsxs)("div", {
            className: M.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: M.caughtUpText,
                    children: D.intl.string(D.t["6XMM+D"]),
                }),
                (0, r.jsx)(u.W6s, {
                    size: "sm",
                    color: c.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
            ],
        }),
    });
}
