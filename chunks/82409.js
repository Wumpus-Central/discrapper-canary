(n.d(t, { Z: () => Z }), n(388685), n(361932), n(187205));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(264738),
    a = n(442837),
    c = n(481060);
(n(100527), n(906732));
var u = n(377171),
    d = n(315174),
    h = n(768943),
    p = n(592125),
    f = n(430824),
    g = n(306680),
    m = n(709054),
    b = n(821020),
    _ = n(948154),
    O = n(787879),
    y = n(370774),
    v = n(334426),
    C = n(862149),
    j = n(207913),
    E = n(553984),
    S = n(333834),
    x = n(982183),
    I = n(981631),
    P = n(388032),
    N = n(21678);
let w = {
    controller: new s.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: x.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function Z(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        [s, u] = i.useState(x.V5.ALL),
        v = (0, a.e7)([O.Z], () => O.Z.oldestDisplayedMessageId),
        C = (0, a.Wu)([O.Z], () => O.Z.getInboxMessages()),
        j = (0, a.Wu)([g.ZP, f.Z], () =>
            C.filter(
                (e) =>
                    !(0, y.YH)({
                        messageId: e.id,
                        channelId: e.channelId,
                        guildId: e.guildId,
                        ReadStateStore_: g.ZP,
                        GuildStore_: f.Z
                    }) && m.default.compare(e.id, v) > 0
            )
        ),
        I = (0, a.Wu)([g.ZP, f.Z], () =>
            C.filter((e) =>
                (0, y.YH)({
                    messageId: e.id,
                    channelId: e.channelId,
                    guildId: e.guildId,
                    ReadStateStore_: g.ZP,
                    GuildStore_: f.Z
                })
            )
        ),
        P = i.useCallback(
            (e) => {
                s !== x.V5.BOOKMARKS && _.Z.loadMoreInbox(e);
            },
            [s]
        ),
        { hasLoadedEver: Z, hasNotifyingChannels: M } = (0, a.cj)([O.Z], () => ({
            hasLoadedEver: O.Z.hasLoadedEver,
            hasNotifyingChannels: null != O.Z.getNotifyingChannelIds()
        }));
    i.useEffect(() => {
        M && !Z && P();
    }, [M, Z, P]);
    let k = (0, a.Wu)([h.Z], () => h.Z.getSavedMessages()),
        U = i.useMemo(
            () =>
                k.flatMap((e) => {
                    var t;
                    let { message: n } = e;
                    return null == n
                        ? []
                        : [
                              {
                                  id: n.id,
                                  channelId: n.channel_id,
                                  guildId: null == (t = p.Z.getChannel(n.channel_id)) ? void 0 : t.guild_id,
                                  kind: x.fL.BOOKMARK,
                                  message: n
                              }
                          ];
                }),
            [k]
        ),
        G = T(j, s),
        B = T(I, s),
        { filterStyle: V } = b.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        F = V === b.v8.DROPDOWN && s !== x.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(N.container, { [N.panelSpacing]: l }),
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
                        guild: x.F7
                    },
                    w
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(c.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children:
                                V === b.v8.DROPDOWN &&
                                (0, r.jsx)(E.p, {
                                    selectedFilter: s,
                                    setSelectedFilter: u,
                                    className: N.headerButton
                                })
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
            V === b.v8.TABS &&
                (0, r.jsx)(E.Z, {
                    selectedFilter: s,
                    setSelectedFilter: u
                }),
            s === x.V5.ALL && (0, r.jsx)(D, { hideBanner: !Z || s !== x.V5.ALL }),
            F && (0, r.jsx)(L, { filter: s }),
            (0, r.jsx)(S.Z, {
                className: N.messageList,
                renderMessageGroup: R,
                messages: s === x.V5.BOOKMARKS ? U : G,
                unreadMessages: s === x.V5.BOOKMARKS ? [] : B,
                listName: 'notifications-inbox',
                renderLoadingState: A,
                ignoreGrouping: s === x.V5.BOOKMARKS,
                loadMore: P
            })
        ]
    });
}
function T(e, t) {
    return i.useMemo(
        () =>
            0 === e.length
                ? []
                : e.filter((e) => {
                      let { id: n, channelId: r, kind: i } = e;
                      if (m.default.age(n) > x.ib) return !1;
                      if (t === x.V5.ALL) return !0;
                      if (t === x.V5.MENTIONS) return i === x.fL.MENTION;
                      if (t === x.V5.ANNOUNCEMENTS) {
                          let e = p.Z.getChannel(r);
                          return (null == e ? void 0 : e.type) === I.d4z.GUILD_ANNOUNCEMENT;
                      }
                      return !1;
                  }),
        [e, t]
    );
}
function A() {
    return (0, r.jsx)(C.Z, {});
}
function R(e, t, n) {
    return (0, r.jsx)(
        j.Z,
        {
            message: e[0],
            goToSidebar: t,
            groupedMessages: e.slice(1),
            isUnread: n
        },
        e[0].id
    );
}
function D(e) {
    let { hideBanner: t } = e,
        n = (0, a.e7)([v.Z], () => v.Z.shouldHide),
        [l, s] = (0, i.useState)(!1);
    return (0, r.jsx)('div', {
        className: o()(N.caughtUpContainer, { [N.hide]: n || t }),
        children: (0, r.jsxs)('div', {
            className: N.caughtUpContent,
            children: [
                (0, r.jsx)(c.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-feedback-positive',
                    className: N.caughtUpText,
                    children: P.intl.string(P.t['6XMM+P'])
                }),
                (0, r.jsx)(c.W6s, {
                    size: 'sm',
                    color: u.Z.TEXT_FEEDBACK_POSITIVE
                }),
                (0, r.jsx)(c.Dio, {
                    size: 'sm',
                    onMouseEnter: () => s(!0),
                    onMouseLeave: () => s(!1),
                    className: N.caughtUpCloseIcon,
                    color: l ? u.Z.CONTROL_ICON_SECONDARY_HOVER : u.Z.ICON_TERTIARY,
                    onClickCapture: () => v.Z.dismiss()
                })
            ]
        })
    });
}
function L(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        c.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: N.filterHeaderWrap,
            children: x.by[t]
        },
        'filter-header'
    );
}
