(n.d(t, { Z: () => A }), n(361932), n(187205), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(71347),
    a = n(442837),
    c = n(481060);
(n(100527), n(906732));
var u = n(377171),
    d = n(315174),
    h = n(340541),
    p = n(768943),
    f = n(592125),
    g = n(430824),
    m = n(306680),
    b = n(709054),
    _ = n(821020),
    O = n(948154),
    y = n(725739),
    v = n(787879),
    C = n(370774),
    j = n(334426),
    E = n(862149),
    x = n(207913),
    S = n(553984),
    I = n(333834),
    P = n(982183),
    N = n(981631),
    w = n(388032),
    Z = n(21678);
let T = {
    controller: new s.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: P.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function A(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        { selectedFilter: s } = (0, y.Z)(),
        u = (0, a.e7)([v.Z], () => v.Z.oldestDisplayedMessageId),
        j = (0, a.Wu)([v.Z], () => v.Z.getInboxMessages()),
        E = (0, a.Wu)([m.ZP, g.Z], () =>
            j.filter(
                (e) =>
                    !(0, C.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: m.ZP,
                        GuildStore_: g.Z
                    }) && b.default.compare(e.id, u) > 0
            )
        ),
        x = (0, a.Wu)([m.ZP, g.Z], () =>
            j.filter((e) =>
                (0, C.YH)({
                    messageId: e.id,
                    channelId: e.channelId,
                    guildId: e.guildId,
                    ReadStateStore_: m.ZP,
                    GuildStore_: g.Z
                })
            )
        ),
        N = i.useCallback(
            (e) => {
                s !== P.V5.BOOKMARKS && O.Z.loadMoreInbox(e);
            },
            [s]
        ),
        { hasLoadedEver: w, hasNotifyingChannels: A } = (0, a.cj)([v.Z], () => ({
            hasLoadedEver: v.Z.hasLoadedEver,
            hasNotifyingChannels: null != v.Z.getNotifyingChannelIds()
        }));
    i.useEffect(() => {
        A && !w && N();
    }, [A, w, N]);
    let U = (0, a.Wu)([p.Z], () => p.Z.getSavedMessages()),
        G = i.useMemo(
            () =>
                U.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? []
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = f.Z.getChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: P.fL.BOOKMARK,
                                  message: n
                              }
                          ];
                }),
            [U]
        ),
        B = R(E, s),
        V = R(x, s),
        { filterStyle: F } = _.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        { entrypoints: H } = (0, h._k)({ location: 'NotificationsInboxSidebar' }),
        z = F === _.v8.DROPDOWN && s !== P.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(Z.container, { [Z.panelSpacing]: l }),
        children: [
            (0, r.jsx)(
                d.ZP,
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
                        guild: P.F7
                    },
                    T
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(c.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children: F === _.v8.DROPDOWN && !H && (0, r.jsx)(S.p, {})
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
            F === _.v8.TABS && (0, r.jsx)(S.Z, {}),
            s === P.V5.ALL && (0, r.jsx)(M, { hideBanner: !w || s !== P.V5.ALL }),
            z && (0, r.jsx)(k, { filter: s }),
            (0, r.jsx)(I.Z, {
                className: Z.messageList,
                renderMessageGroup: L,
                messages: s === P.V5.BOOKMARKS ? G : B,
                unreadMessages: s === P.V5.BOOKMARKS ? [] : V,
                listName: 'notifications-inbox',
                renderLoadingState: D,
                ignoreGrouping: s === P.V5.BOOKMARKS,
                loadMore: N
            })
        ]
    });
}
function R(e, t) {
    return i.useMemo(
        () =>
            0 === e.length
                ? []
                : e.filter((e) => {
                      let { id: n, channelId: r, kind: i } = e;
                      if (b.default.age(n) > P.ib) return !1;
                      if (t === P.V5.ALL) return !0;
                      if (t === P.V5.MENTIONS) return i === P.fL.MENTION;
                      if (t === P.V5.ANNOUNCEMENTS) {
                          let e = f.Z.getChannel(r);
                          return (null == e ? void 0 : e.type) === N.d4z.GUILD_ANNOUNCEMENT;
                      }
                      return !1;
                  }),
        [e, t]
    );
}
function D() {
    return (0, r.jsx)(E.Z, {});
}
function L(e, t, n) {
    return (0, r.jsx)(
        x.Z,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1),
            isUnread: n
        },
        e[0].id
    );
}
function M(e) {
    let { hideBanner: t } = e,
        n = (0, a.e7)([j.Z], () => j.Z.shouldHide);
    return (0, r.jsx)('div', {
        className: o()(Z.caughtUpContainer, { [Z.hide]: n || t }),
        children: (0, r.jsxs)('div', {
            className: Z.caughtUpContent,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-feedback-positive',
                    className: Z.caughtUpText,
                    children: w.intl.string(w.t['6XMM+P'])
                }),
                (0, r.jsx)(c.W6s, {
                    size: 'sm',
                    color: u.Z.TEXT_FEEDBACK_POSITIVE
                })
            ]
        })
    });
}
function k(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        c.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: Z.filterHeaderWrap,
            children: P.by[t]
        },
        'filter-header'
    );
}
