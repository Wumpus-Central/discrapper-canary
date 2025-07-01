(n.d(t, { Z: () => R }), n(388685), n(361932), n(187205));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(695469),
    c = n(442837),
    u = n(481060),
    d = n(235820),
    h = n(100527),
    p = n(906732),
    f = n(377171),
    g = n(315174),
    m = n(455199),
    b = n(768943),
    _ = n(592125),
    O = n(594174),
    y = n(709054),
    v = n(821020),
    C = n(370774),
    j = n(334426),
    S = n(862149),
    E = n(739340),
    x = n(207913),
    I = n(553984),
    P = n(333834),
    N = n(982183),
    w = n(981631),
    Z = n(388032),
    T = n(21678);
let A = {
    controller: new s.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: N.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function R(e) {
    var t, n;
    let { includePanelSpacing: l } = e,
        s = (0, c.Wu)([m.Z], () => {
            var e;
            return null != (e = m.Z.getSettingsFilteredMentions()) ? e : [];
        }),
        {
            hasMore: d,
            loading: h,
            hasLoadedEver: p
        } = (0, c.cj)([m.Z], () => ({
            hasMore: m.Z.hasMore,
            loading: m.Z.loading,
            hasLoadedEver: m.Z.hasLoadedEver,
            guildFilter: m.Z.guildFilter,
            roleFilter: m.Z.roleFilter,
            everyoneFilter: m.Z.everyoneFilter
        })),
        [f, C] = i.useState(N.V5.ALL),
        { messages: j, loadState: S, loadMore: x, hasLoadedEver: Z } = (0, E.ZP)(),
        R = (function (e) {
            let [t, n] = (0, i.useState)(!0);
            return (
                (0, i.useEffect)(() => {
                    t && e && n(!1);
                }, [e, t]),
                t
            );
        })(Z && p && !h && S !== E.jd.Loading);
    (0, i.useEffect)(() => {
        if (!p) return void D(null);
    }, [p]);
    let B = (0, c.e7)([O.default], () => O.default.getCurrentUser()),
        F = (0, c.e7)([b.Z], () => b.Z.getSavedMessages()),
        V = i.useMemo(() => {
            var e;
            return Z
                ? f === N.V5.BOOKMARKS
                    ? F.flatMap((e) => {
                          let { message: t } = e;
                          return null != t
                              ? [
                                    {
                                        kind: N.fL.BOOKMARK,
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
                                            kind: N.fL.MENTION,
                                            message: e
                                        })))
                                  ? e
                                  : []),
                              ...j
                                  .filter((e) => e.author.id !== (null == B ? void 0 : B.id))
                                  .map((e) => ({
                                      message: e,
                                      kind: N.fL.ALL_MESSAGES_CHANNEL
                                  }))
                          ],
                          (e) => {
                              let { message: t } = e;
                              return t.id;
                          }
                      ).filter((e) => {
                          let { message: t } = e;
                          if (t.author.id === (null == B ? void 0 : B.id) || y.default.age(t.id) > N.ib) return !1;
                          if (f === N.V5.ALL) return !0;
                          if (f === N.V5.MENTIONS) return t.mentioned;
                          if (f === N.V5.ANNOUNCEMENTS) {
                              let e = _.Z.getChannel(t.channel_id);
                              return (null == e ? void 0 : e.type) === w.d4z.GUILD_ANNOUNCEMENT;
                          }
                          return !1;
                      })
                : null;
        }, [f, s, B, F, j, Z]),
        { filterStyle: H } = v.Lk.useExperiment({ location: 'NotificationsInboxSidebar' }),
        z = H === v.v8.DROPDOWN && f !== N.V5.ALL;
    return (0, r.jsxs)('nav', {
        className: o()(T.container, { [T.panelSpacing]: l }),
        children: [
            (0, r.jsx)(
                g.ZP,
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
                        guild: N.F7
                    },
                    A
                )),
                (n = n =
                    {
                        children: (0, r.jsxs)(u.Kqy, {
                            direction: 'horizontal',
                            gap: 4,
                            style: { marginRight: -4 },
                            children: [
                                H === v.v8.DROPDOWN &&
                                    (0, r.jsx)(I.p, {
                                        selectedFilter: f,
                                        setSelectedFilter: C,
                                        className: T.headerButton
                                    }),
                                (0, r.jsx)(G, {})
                            ]
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
            H === v.v8.TABS &&
                (0, r.jsx)(I.Z, {
                    selectedFilter: f,
                    setSelectedFilter: C
                }),
            f === N.V5.ALL && (0, r.jsx)(k, { hideBanner: R || f !== N.V5.ALL }),
            z && (0, r.jsx)(U, { filter: f }),
            (0, r.jsx)(P.Z, {
                className: T.messageList,
                renderMessageGroup: M,
                messages: V,
                loadingInitial: R,
                loadingMore: S === E.jd.Loading || h,
                listName: 'notifications-inbox',
                loadMore: function (e) {
                    let t = null != s && s.length > 0 ? s[s.length - 1].id : null;
                    ([N.V5.ALL, N.V5.MENTIONS, N.V5.ANNOUNCEMENTS].includes(f) && d && !h && D(null, t), [N.V5.ALL, N.V5.ANNOUNCEMENTS].includes(f) && S !== E.jd.Done && S !== E.jd.Loading && x(e));
                },
                renderLoadingState: L,
                ignoreGrouping: f === N.V5.BOOKMARKS
            })
        ]
    });
}
function D(e, t) {
    let n = m.Z.guildFilter,
        r = m.Z.roleFilter,
        i = m.Z.everyoneFilter,
        l = null;
    (null != e && null != n && (l = n === w.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, w.DJj, l, r, i));
}
function L() {
    return (0, r.jsx)(S.Z, {});
}
function M(e, t, n) {
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
function k(e) {
    let { hideBanner: t } = e,
        [n, l] = i.useState(!1),
        a = (0, c.e7)([j.Z], () => j.Z.shouldHide),
        s = n ? u.kSu : u.kmB;
    return (0, r.jsx)(u.P3F, {
        onClick: () => j.Z.dismiss(),
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        className: o()(T.caughtUpContainer, { [T.hide]: a || t }),
        children: (0, r.jsxs)('div', {
            className: T.caughtUpContent,
            children: [
                (0, r.jsx)(u.Text, {
                    variant: n ? 'text-sm/medium' : 'text-sm/normal',
                    color: 'text-feedback-positive',
                    className: T.caughtUpText,
                    children: Z.intl.string(Z.t['6XMM+P'])
                }),
                (0, r.jsx)(s, {
                    size: 'sm',
                    className: T.caughtUpIcon,
                    color: f.Z.TEXT_FEEDBACK_POSITIVE
                })
            ]
        })
    });
}
function U(e) {
    let { filter: t } = e;
    return (0, r.jsx)(
        u.X6q,
        {
            color: 'text-primary',
            variant: 'text-sm/semibold',
            className: T.filterHeaderWrap,
            children: N.by[t]
        },
        'filter-header'
    );
}
function G() {
    let [e, t] = (0, i.useState)(!1),
        { analyticsLocations: n } = (0, p.ZP)(h.Z.NOTIFICATIONS_INBOX);
    return (0, r.jsx)(u.ua7, {
        position: 'bottom',
        align: 'left',
        text: Z.intl.string(Z.t.h850Sk),
        shouldShow: e,
        forceOpen: e,
        hideOnClick: !0,
        children: (i) => {
            let { onClick: l } = i;
            return (0, r.jsx)(u.P3F, {
                className: T.headerButton,
                onMouseEnter: () => t(!0),
                onMouseLeave: () => t(!1),
                onClick: () => {
                    ((0, C.j4)(n), null == l || l());
                },
                children: (0, r.jsx)(u.ewm, {
                    size: 'xs',
                    color: e ? f.Z.INTERACTIVE_HOVER : f.Z.INTERACTIVE_NORMAL
                })
            });
        }
    });
}
