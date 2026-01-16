n.d(t, { Z: () => U }), n(361932), n(187205), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(81239),
    s = n(442837),
    c = n(692547);
n(28664);
var u = n(481060),
    d = n(570140),
    p = n(45114),
    f = n(493773);
n(100527), n(906732);
var h = n(315174),
    g = n(768943),
    m = n(592125),
    b = n(430824),
    y = n(375954),
    v = n(306680),
    O = n(709054),
    j = n(821020),
    x = n(948154),
    C = n(804932),
    E = n(725739),
    S = n(787879),
    _ = n(370774),
    I = n(334426),
    P = n(862149),
    Z = n(207913),
    N = n(333834),
    T = n(982183),
    A = n(981631),
    w = n(388032),
    R = n(422110);
function D(e) {
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
let M = [],
    k = {
        controller: new o.Controller({
            value: 1,
            immediate: !0,
        }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: T.$J,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function L(e) {
    let { includePanelSpacing: t } = e,
        n = (0, C.fJ)(),
        { selectedFilter: l } = (0, E.Z)(),
        o = (0, s.e7)([S.Z], () => S.Z.oldestDisplayedMessageId),
        c = (0, s.Wu)([S.Z], () => S.Z.getInboxMessages()),
        I = (0, s.Wu)([v.ZP, b.Z, S.Z], () =>
            c.filter(
                (e) =>
                    !(0, _.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: v.ZP,
                        GuildStore_: b.Z,
                    }) && !(0, _.Tj)(e, S.Z.selectedItemInfo),
            ),
        ),
        P = (0, s.Wu)([v.ZP, b.Z, S.Z], () =>
            c.filter(
                (e) =>
                    (0, _.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: v.ZP,
                        GuildStore_: b.Z,
                    }) || (0, _.Tj)(e, S.Z.selectedItemInfo),
            ),
        ),
        Z = i.useCallback(
            (e) => {
                l !== T.V5.BOOKMARKS &&
                    x.Z.loadMoreInbox({
                        viewId: n,
                        loadingTrigger: e,
                    });
            },
            [l, n],
        ),
        { hasLoadedEver: w, canLoadMore: L } = (0, s.cj)([S.Z], () => ({
            hasLoadedEver: S.Z.hasLoadedEver,
            canLoadMore: S.Z.canLoadMore({}),
        }));
    i.useEffect(() => {
        L && !w && Z(T.X.ON_OPEN);
    }, [L, w, Z]),
        (function (e) {
            let { unreadChannelIds: t } = (0, _.O4)();
            i.useEffect(() => {
                null != e &&
                    t.forEach((e) => {
                        var t;
                        let n = y.Z.getMessages(e),
                            r = null == (t = n.last()) ? void 0 : t.id,
                            i = v.ZP.ackMessageId(e),
                            l = n.hasPresent() && n.ready && !n.cached;
                        null != r &&
                            null != i &&
                            l &&
                            O.default.compare(i, r) >= 0 &&
                            p.ack(
                                e,
                                {
                                    section: A.jXE.NOTIFICATIONS_INBOX,
                                    object: A.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: A.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(w ? P : null);
    let U = (0, s.Wu)([g.Z], () => g.Z.getSavedMessages()),
        V = i.useMemo(
            () =>
                U.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? M
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = m.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: T.fL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [U],
        ),
        z = G(I, l, o),
        W = G(P, l, null);
    (0, f.ZP)(() => {
        var e;
        d.Z.dispatch({ type: "NOTIFICATIONS_INBOX_OPEN" });
        let t = (0, j.Ag)({ location: "NotificationsInboxSidebar" }).notificationCenterVariant,
            r = null == (e = S.Z.getDevOverrides().navOnClick) || e;
        if (t !== j.jP.SIDEBAR || !1 === r) return;
        let { message: i, isUnread: l } = (function (e, t) {
            var n, r, i;
            let l = null == (n = e[e.length - 1]) ? void 0 : n.message,
                a = null == (r = t[t.length - 1]) ? void 0 : r.message,
                o = null != a ? a : l;
            if (null != o)
                return {
                    message: o,
                    isUnread: null != a,
                };
            let s = S.Z.getNotifyingChannelIds();
            if (null == s || 0 === s.length)
                return {
                    message: null,
                    isUnread: !1,
                };
            let c = s[0],
                u = v.ZP.getTrackedAckMessageId(c);
            return null == u
                ? {
                      message: null,
                      isUnread: !1,
                  }
                : {
                      message: {
                          id: O.default.atNextMillisecond(u),
                          channel_id: c,
                      },
                      isUnread: null != (i = v.ZP.hasUnread(c)) && i,
                  };
        })(z, W);
        null != i &&
            x.Z.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: l,
                isSidebar: !0,
                track: !1,
                viewId: n,
            });
    }),
        (0, f.zq)(() => {
            d.Z.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: K } = (0, j.pN)({ location: "NotificationsInboxSidebar" }),
        Y = K === j.v8.DROPDOWN && l !== T.V5.ALL,
        q = (0, T.H_)(l);
    return (0, r.jsx)("nav", {
        className: a()(R.container, { [R.panelSpacing]: t }),
        children: (0, r.jsxs)(u.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(
                h.ZP,
                D(
                    {
                        hasSubheader: !0,
                        guild: q,
                    },
                    k,
                ),
            ),
            children: [
                l === T.V5.ALL && (0, r.jsx)(H, { hideBanner: !w || l !== T.V5.ALL }),
                Y && (0, r.jsx)(u.LZC, { size: 8 }),
                (0, r.jsx)(N.Z, {
                    className: R.messageList,
                    renderMessageGroup: F,
                    messages: l === T.V5.BOOKMARKS ? V : z,
                    unreadMessages: l === T.V5.BOOKMARKS ? [] : W,
                    listName: "notifications-inbox",
                    renderLoadingState: B,
                    ignoreGrouping: l === T.V5.BOOKMARKS,
                    loadMore: Z,
                }),
            ],
        }),
    });
}
function U(e) {
    return (0, r.jsx)(C.HP, { children: (0, r.jsx)(L, D({}, e)) });
}
function G(e, t, n) {
    return i.useMemo(
        () =>
            0 === e.length || t === T.V5.BOOKMARKS
                ? M
                : e.filter((e) => {
                      let { id: r } = e;
                      return (
                          !(O.default.age(r) > T.ib || (null != n && 0 >= O.default.compare(r, n))) && t === T.V5.ALL
                      );
                  }),
        [e, t, n],
    );
}
function B() {
    return (0, r.jsx)(P.Z, {});
}
function F(e, t) {
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
function H(e) {
    let { hideBanner: t } = e,
        n = (0, I.d)((e) => e.shouldHide());
    return (0, r.jsx)("div", {
        className: a()(R.caughtUpContainer, { [R.hide]: n || t }),
        children: (0, r.jsxs)("div", {
            className: R.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: R.caughtUpText,
                    children: w.intl.string(w.t["6XMM+D"]),
                }),
                (0, r.jsx)(u.W6s, {
                    size: "sm",
                    color: c.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
            ],
        }),
    });
}
