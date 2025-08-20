n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(235820),
    u = n(494404),
    d = n(493773),
    p = n(110924),
    f = n(81643),
    h = n(974814),
    g = n(622822),
    m = n(198620),
    b = n(294218),
    O = n(216789),
    _ = n(695346),
    y = n(592125),
    v = n(731290),
    j = n(944486),
    C = n(455199),
    x = n(655354),
    E = n(324081),
    S = n(240126),
    I = n(981631),
    P = n(388032),
    N = n(889833);
let w = {
    offset: {
        left: 4,
        right: -12,
    },
};
function Z(e, t, n) {
    let r = t ? C.ZP.guildFilter : null,
        i = t ? C.ZP.roleFilter : null,
        l = t ? C.ZP.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === I.NgX.ALL_SERVERS ? null : e.getGuildId()),
        c.Z.fetchRecentMentions({
            before: n,
            limit: I.DJj,
            guildId: o,
            roles: i,
            everyone: l,
        });
}
function T(e) {
    let { onJump: t } = e,
        n = (0, a.e7)([y.Z, j.Z], () => y.Z.getChannel(j.Z.getChannelId())),
        {
            messages: l,
            hasMore: s,
            loading: f,
            guildFilter: h,
            roleFilter: g,
            everyoneFilter: b,
        } = (0, a.cj)([C.ZP], () => ({
            messages: C.ZP.getMentions(),
            hasMore: C.ZP.hasMore,
            loading: C.ZP.loading,
            guildFilter: C.ZP.guildFilter,
            roleFilter: C.ZP.roleFilter,
            everyoneFilter: C.ZP.everyoneFilter,
        })),
        _ = (0, O.Us)({ location: "RecentMentions" }),
        v = (0, p.Z)(h),
        x = (0, p.Z)(g),
        E = (0, p.Z)(b);
    i.useEffect(() => {
        if (!C.ZP.hasLoadedEver) return void Z(n, !0);
        ((null != v && h !== v) || (null != x && g !== x) || (null != E && b !== E)) && Z(n, !0);
    }, [v, h, x, g, E, b, n, !0]),
        (0, d.ZP)(() => {
            (null == l ? void 0 : l.some(m.k5)) && (c.Z.clearMentions(), Z(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(I.DJj);
            },
            [],
        );
    let S = i.useCallback(() => null, []);
    return (0, r.jsx)(u.ZP, {
        className: o()(N.recentMentionsPopout, { [N.widerInbox]: _ }),
        scrollerClassName: N.scroller,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.Z.deleteRecentMention(e.id);
        },
        channel: n,
        messages: l,
        loading: f,
        hasMore: s,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            Z(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: S,
        renderEmptyState: D,
        renderMessage: A,
        "aria-label": P.intl.string(P.t.jbV6MD),
        listName: "recents",
    });
}
function A(e, t) {
    return [
        (0, r.jsx)(
            R,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0,
            },
            e.id,
        ),
    ];
}
function R(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e,
        l = (0, h.s8)({ location: "recent-mentions" });
    if (null == t) return null;
    let o = y.Z.getChannel(t.channel_id);
    if (null == o || ((0, g.aC)(o) && l && (0, f.sf)())) return null;
    let a = v.Z.didAgree(o.getGuildId()),
        u = !!(0, g.aC)(o) && !a;
    return (0, r.jsxs)("div", {
        className: N.container,
        children: [
            (0, r.jsx)(E.Z, {
                channel: o,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(s.M0o, {
                              className: N.closeButton,
                              tooltip: P.intl.string(P.t.cpT0Cg),
                              color: s.YX$.TERTIARY,
                              icon: (0, r.jsx)(s.Dio, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              onClick: () => c.Z.deleteRecentMention(t.id),
                          })
                        : null,
            }),
            (0, r.jsxs)("div", {
                className: N.messageContainer,
                children: [
                    (0, r.jsx)(x.Z, {
                        className: N.jumpMessageButton,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        b.Z,
                        {
                            message: t,
                            channel: o,
                            className: N.message,
                            hideAccessories: u,
                            compact: _.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: w,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function D() {
    return (0, r.jsx)(S.Z, {
        Icon: s.lOy,
        header: P.intl.string(P.t["bgDz7+"]),
        tip: P.intl.string(P.t.NS15vr),
    });
}
