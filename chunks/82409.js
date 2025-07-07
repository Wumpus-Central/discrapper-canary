(n.d(t, { Z: () => Z }), n(388685), n(361932), n(187205));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(451463),
    c = n(442837),
    u = n(481060),
    d = n(235820);
(n(100527), n(906732));
var h = n(377171),
    p = n(315174),
    f = n(455199),
    g = n(768943),
    m = n(592125),
    b = n(594174),
    _ = n(709054),
    O = n(821020);
n(370774);
var y = n(334426),
    v = n(862149),
    C = n(739340),
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
        s = (0, c.Wu)([f.Z], () => {
            var e;
            return null != (e = f.Z.getSettingsFilteredMentions()) ? e : [];
        }),
        {
            hasMore: d,
            loading: h,
            hasLoadedEver: y
        } = (0, c.cj)([f.Z], () => ({
            hasMore: f.Z.hasMore,
            loading: f.Z.loading,
            hasLoadedEver: f.Z.hasLoadedEver,
            guildFilter: f.Z.guildFilter,
            roleFilter: f.Z.roleFilter,
            everyoneFilter: f.Z.everyoneFilter
        })),
        [v, j] = i.useState(x.V5.ALL),
        { messages: P, loadState: Z, loadMore: M, hasLoadedEver: k } = (0, C.ZP)(),
        U = (function (e) {
            let [t, n] = (0, i.useState)(!0);
            return (
                (0, i.useEffect)(() => {
                    t && e && n(!1);
                }, [e, t]),
                t
            );
        })(k && y && !h && Z !== C.jd.Loading);
    (0, i.useEffect)(() => {
        if (!y) return void T(null);
    }, [y]);
    let G = (0, c.e7)([b.default], () => b.default.getCurrentUser()),
        B = (0, c.e7)([g.Z], () => g.Z.getSavedMessages()),
        F = i.useMemo(() => {
            var e;
            return k
                ? v === x.V5.BOOKMARKS
                    ? B.flatMap((e) => {
                          let { message: t } = e;
                          return null != t
                              ? [
                                    {
                                        kind: x.fL.BOOKMARK,
                                        message: t
                                    }
                                ]
                              : [];
                      })
                    : (0, a.uniqBy)(
                          [
                              ...(null !=
                              (e =
                                  null == s
                                      ? void 0
                                      : s.map((e) => ({
                                            kind: x.fL.MENTION,
                                            message: e
                                        })))
                                  ? e
                                  : []),
                              ...P.filter((e) => e.author.id !== (null == G ? void 0 : G.id)).map((e) => ({
                                  message: e,
                                  kind: x.fL.ALL_MESSAGES_CHANNEL
                              }))
                          ],
                          (e) => {
                              let { message: t } = e;
                              return t.id;
                          }
                      ).filter((e) => {
                          let { message: t } = e;
                          if (t.author.id === (null == G ? void 0 : G.id) || _.default.age(t.id) > x.ib) return !1;
                          if (v === x.V5.ALL) return !0;
                          if (v === x.V5.MENTIONS) return t.mentioned;
                          if (v === x.V5.ANNOUNCEMENTS) {
                              let e = m.Z.getChannel(t.channel_id);
                              return (null == e ? void 0 : e.type) === I.d4z.GUILD_ANNOUNCEMENT;
                          }
                          return !1;
                      })
                : null;
        }, [v, s, G, B, P, k]),
        { filterStyle: V } = O.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        H = V === O.v8.DROPDOWN && v !== x.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(N.container, { [N.panelSpacing]: l }),
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
                        guild: x.F7
                    },
                    w
                )),
                (n = n =
                    {
                        children: (0, r.jsx)(u.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children:
                                V === O.v8.DROPDOWN &&
                                (0, r.jsx)(E.p, {
                                    selectedFilter: v,
                                    setSelectedFilter: j,
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
            V === O.v8.TABS &&
                (0, r.jsx)(E.Z, {
                    selectedFilter: v,
                    setSelectedFilter: j
                }),
            v === x.V5.ALL && (0, r.jsx)(D, { hideBanner: U || v !== x.V5.ALL }),
            H && (0, r.jsx)(L, { filter: v }),
            (0, r.jsx)(S.Z, {
                className: N.messageList,
                renderMessageGroup: R,
                messages: F,
                loadingInitial: U,
                loadingMore: Z === C.jd.Loading || h,
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != s && s.length > 0 ? s[s.length - 1].id : null;
                    ([x.V5.ALL, x.V5.MENTIONS, x.V5.ANNOUNCEMENTS].includes(v) && d && !h && T(null, t), [x.V5.ALL, x.V5.ANNOUNCEMENTS].includes(v) && Z !== C.jd.Done && Z !== C.jd.Loading && M(e));
                },
                renderLoadingState: A,
                ignoreGrouping: v === x.V5.BOOKMARKS
            })
        ]
    });
}
function T(e, t) {
    let n = f.Z.guildFilter,
        r = f.Z.roleFilter,
        i = f.Z.everyoneFilter,
        l = null;
    (null != e && null != n && (l = n === I.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, I.DJj, l, r, i));
}
function A() {
    return (0, r.jsx)(v.Z, {});
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
        n = (0, c.e7)([y.Z], () => y.Z.shouldHide),
        [l, a] = (0, i.useState)(!1);
    return (0, r.jsx)('div', {
        className: o()(N.caughtUpContainer, { [N.hide]: n || t }),
        children: (0, r.jsxs)('div', {
            className: N.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: 'text-sm/medium',
                    color: 'text-feedback-positive',
                    className: N.caughtUpText,
                    children: P.intl.string(P.t['6XMM+P'])
                }),
                (0, r.jsx)(u.W6s, {
                    size: 'sm',
                    color: h.Z.TEXT_FEEDBACK_POSITIVE
                }),
                (0, r.jsx)(u.Dio, {
                    size: 'sm',
                    onMouseEnter: () => a(!0),
                    onMouseLeave: () => a(!1),
                    className: N.caughtUpCloseIcon,
                    color: l ? h.Z.CONTROL_ICON_SECONDARY_HOVER : h.Z.ICON_TERTIARY,
                    onClickCapture: () => y.Z.dismiss()
                })
            ]
        })
    });
}
function L(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        u.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: N.filterHeaderWrap,
            children: x.by[t]
        },
        'filter-header'
    );
}
