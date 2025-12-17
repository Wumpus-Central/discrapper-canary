n.d(t, { Z: () => G }), n(361932), n(187205), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(236726),
    s = n(442837),
    c = n(692547);
n(28664);
var u = n(481060),
    d = n(570140),
    f = n(45114),
    h = n(493773);
n(100527), n(906732);
var p = n(315174),
    g = n(768943),
    b = n(592125),
    m = n(430824),
    y = n(375954),
    O = n(306680),
    v = n(709054),
    j = n(821020),
    C = n(948154),
    x = n(804932),
    E = n(725739),
    S = n(787879),
    I = n(370774),
    _ = n(334426),
    P = n(862149),
    N = n(207913),
    Z = n(333834),
    w = n(982183),
    T = n(981631),
    A = n(388032),
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
    L = {
        controller: new o.Controller({
            value: 1,
            immediate: !0,
        }),
        renderBanner: !1,
        bannerVisible: !1,
        communityInfoVisible: !1,
        shouldShowSubscribeTooltip: !1,
        bannerVisibleHeight: w.$J,
        hasGuildSubheader: !1,
        disableBannerAnimation: !0,
    };
function k(e) {
    let { includePanelSpacing: t } = e,
        n = (0, x.fJ)(),
        { selectedFilter: l } = (0, E.Z)(),
        o = (0, s.e7)([S.Z], () => S.Z.oldestDisplayedMessageId),
        c = (0, s.Wu)([S.Z], () => S.Z.getInboxMessages()),
        _ = (0, s.Wu)([O.ZP, m.Z, S.Z], () =>
            c.filter(
                (e) =>
                    !(0, I.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: O.ZP,
                        GuildStore_: m.Z,
                    }) && !(0, I.Tj)(e, S.Z.selectedItemInfo),
            ),
        ),
        P = (0, s.Wu)([O.ZP, m.Z, S.Z], () =>
            c.filter(
                (e) =>
                    (0, I.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: O.ZP,
                        GuildStore_: m.Z,
                    }) || (0, I.Tj)(e, S.Z.selectedItemInfo),
            ),
        ),
        N = i.useCallback(
            (e) => {
                l !== w.V5.BOOKMARKS &&
                    C.Z.loadMoreInbox({
                        viewId: n,
                        loadingTrigger: e,
                    });
            },
            [l, n],
        ),
        { hasLoadedEver: A, canLoadMore: k } = (0, s.cj)([S.Z], () => ({
            hasLoadedEver: S.Z.hasLoadedEver,
            canLoadMore: S.Z.canLoadMore({}),
        }));
    i.useEffect(() => {
        k && !A && N(w.X.ON_OPEN);
    }, [k, A, N]),
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
                                    section: T.jXE.NOTIFICATIONS_INBOX,
                                    object: T.qAy.ACK_INBOX_CHANNEL_NO_MESSAGES,
                                    objectType: T.AnalyticsObjectTypes.ACK_AUTOMATIC,
                                },
                                !0,
                            );
                    });
            }, [e, t]);
        })(A ? P : null);
    let G = (0, s.Wu)([g.Z], () => g.Z.getSavedMessages()),
        H = i.useMemo(
            () =>
                G.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? M
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = b.Z.getBasicChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: w.fL.BOOKMARK,
                                  message: n,
                              },
                          ];
                }),
            [G],
        ),
        z = U(_, l, o),
        W = U(P, l, null);
    (0, h.ZP)(() => {
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
        })(z, W);
        null != i &&
            C.Z.inboxItemClick({
                message: i,
                channel: { id: i.channel_id },
                isUnread: l,
                isSidebar: !0,
                track: !1,
                viewId: n,
            });
    }),
        (0, h.zq)(() => {
            d.Z.dispatch({ type: "NOTIFICATIONS_INBOX_CLOSE" });
        });
    let { filterStyle: K } = (0, j.pN)({ location: "NotificationsInboxSidebar" }),
        Y = K === j.v8.DROPDOWN && l !== w.V5.ALL,
        q = (0, w.H_)(l);
    return (0, r.jsx)("nav", {
        className: a()(R.container, { [R.panelSpacing]: t }),
        children: (0, r.jsxs)(u.y5t, {
            forceLevel: 1,
            component: (0, r.jsx)(
                p.ZP,
                D(
                    {
                        hasSubheader: !0,
                        guild: q,
                    },
                    L,
                ),
            ),
            children: [
                l === w.V5.ALL && (0, r.jsx)(V, { hideBanner: !A || l !== w.V5.ALL }),
                Y && (0, r.jsx)(u.LZC, { size: 8 }),
                (0, r.jsx)(Z.Z, {
                    className: R.messageList,
                    renderMessageGroup: F,
                    messages: l === w.V5.BOOKMARKS ? H : z,
                    unreadMessages: l === w.V5.BOOKMARKS ? [] : W,
                    listName: "notifications-inbox",
                    renderLoadingState: B,
                    ignoreGrouping: l === w.V5.BOOKMARKS,
                    loadMore: N,
                }),
            ],
        }),
    });
}
function G(e) {
    return (0, r.jsx)(x.HP, { children: (0, r.jsx)(k, D({}, e)) });
}
function U(e, t, n) {
    return i.useMemo(
        () =>
            0 === e.length || t === w.V5.BOOKMARKS
                ? M
                : e.filter((e) => {
                      let { id: r } = e;
                      return (
                          !(v.default.age(r) > w.ib || (null != n && 0 >= v.default.compare(r, n))) && t === w.V5.ALL
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
        N.Z,
        {
            message: e[0],
            groupedMessages: e.slice(1),
            isUnread: t,
        },
        e[0].id,
    );
}
function V(e) {
    let { hideBanner: t } = e,
        n = (0, _.d)((e) => e.shouldHide());
    return (0, r.jsx)("div", {
        className: a()(R.caughtUpContainer, { [R.hide]: n || t }),
        children: (0, r.jsxs)("div", {
            className: R.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/medium",
                    color: "text-feedback-positive",
                    className: R.caughtUpText,
                    children: A.intl.string(A.t["6XMM+D"]),
                }),
                (0, r.jsx)(u.W6s, {
                    size: "sm",
                    color: c.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
                }),
            ],
        }),
    });
}
