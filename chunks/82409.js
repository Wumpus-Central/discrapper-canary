n.d(t, { Z: () => E }), n(388685), n(642613), n(361932), n(187205), n(415506);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(392711),
    a = n(240894),
    c = n(442837),
    u = n(481060),
    d = n(235820),
    h = n(315174),
    p = n(455199),
    f = n(768943),
    g = n(592125),
    m = n(594174),
    b = n(709054),
    y = n(207913),
    O = n(553984),
    v = n(333834),
    _ = n(982183),
    C = n(981631),
    j = n(21678);
let S = {
    controller: new a.Controller({
        value: 1,
        immediate: !0
    }),
    renderBanner: !1,
    bannerVisible: !1,
    communityInfoVisible: !1,
    shouldShowSubscribeTooltip: !1,
    bannerVisibleHeight: _.$J,
    hasGuildSubheader: !1,
    disableBannerAnimation: !0
};
function E(e) {
    let { includePanelSpacing: t } = e,
        {
            messages: n,
            hasMore: l,
            loading: a,
            hasLoadedEver: u
        } = (0, c.cj)([p.Z], () => ({
            messages: p.Z.getMentions(),
            hasMore: p.Z.hasMore,
            loading: p.Z.loading,
            hasLoadedEver: p.Z.hasLoadedEver,
            guildFilter: p.Z.guildFilter,
            roleFilter: p.Z.roleFilter,
            everyoneFilter: p.Z.everyoneFilter
        })),
        [d, y] = i.useState(_.V5.ALL);
    (0, i.useEffect)(() => {
        if (!u) return void x(null);
    }, [u]);
    let E = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
        w = (0, c.e7)([f.Z], () => f.Z.getSavedMessages()),
        N = i.useMemo(() => {
            let e = (0, s.uniqBy)(
                [...(null != n ? n : [])].sort((e, t) => b.default.compare(t.id, e.id)),
                'id'
            );
            if (d === _.V5.ALL) return e;
            if (d === _.V5.ANNOUNCEMENTS)
                return null == e
                    ? void 0
                    : e.filter((e) => {
                          let t = g.Z.getChannel(e.channel_id);
                          return (null == t ? void 0 : t.type) === C.d4z.GUILD_ANNOUNCEMENT;
                      });
            if (d === _.V5.MENTIONS) return null == e ? void 0 : e.filter((e) => (null == E ? void 0 : E.id) != null && e.mentioned && e.mentions.includes(null == E ? void 0 : E.id));
            if (d === _.V5.BOOKMARKS) return w.flatMap((e) => (null != e.message ? [e.message] : []));
            throw Error('Unknown filter: '.concat(d));
        }, [d, n, E, w]);
    return (0, r.jsxs)('nav', {
        className: o()(j.container, { [j.panelSpacing]: t }),
        children: [
            (0, r.jsx)(
                h.ZP,
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        hasSubheader: !0,
                        guild: _.F7
                    },
                    S
                )
            ),
            (0, r.jsx)(O.Z, {
                selectedFilter: d,
                setSelectedFilter: y
            }),
            (0, r.jsx)(v.ZP, {
                className: j.messageList,
                renderMessage: I,
                messages: N,
                loading: a,
                hasMore: l,
                analyticsName: 'Notifications Inbox',
                channel: null,
                listName: 'notifications-inbox',
                loadMore: function () {
                    x(null, null != n && n.length > 0 ? n[n.length - 1].id : null);
                },
                renderEmptyState: P
            })
        ]
    });
}
function x(e, t) {
    let n = p.Z.guildFilter,
        r = p.Z.roleFilter,
        i = p.Z.everyoneFilter,
        l = null;
    null != e && null != n && (l = n === C.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(t, C.DJj, l, r, i);
}
function P() {
    return (0, r.jsx)(u.LZC, { size: 16 });
}
function I(e, t) {
    return (0, r.jsx)(
        y.B,
        {
            message: e,
            goToSidebar: t
        },
        e.id
    );
}
