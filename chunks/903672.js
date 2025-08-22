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
    h = n(81643),
    f = n(974814),
    g = n(622822),
    m = n(198620),
    b = n(294218),
    O = n(216789),
    y = n(695346),
    _ = n(592125),
    j = n(731290),
    v = n(944486),
    x = n(455199),
    C = n(655354),
    E = n(324081),
    S = n(240126),
    P = n(981631),
    I = n(388032),
    N = n(889833);
let w = {
    offset: {
        left: 4,
        right: -12,
    },
};
function Z(e, t, n) {
    let r = t ? x.ZP.guildFilter : null,
        i = t ? x.ZP.roleFilter : null,
        l = t ? x.ZP.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === P.NgX.ALL_SERVERS ? null : e.getGuildId()),
        c.Z.fetchRecentMentions({
            before: n,
            limit: P.DJj,
            guildId: o,
            roles: i,
            everyone: l,
        });
}
function T(e) {
    let { onJump: t } = e,
        n = (0, a.e7)([_.Z, v.Z], () => _.Z.getChannel(v.Z.getChannelId())),
        {
            messages: l,
            hasMore: s,
            loading: h,
            guildFilter: f,
            roleFilter: g,
            everyoneFilter: b,
        } = (0, a.cj)([x.ZP], () => ({
            messages: x.ZP.getMentions(),
            hasMore: x.ZP.hasMore,
            loading: x.ZP.loading,
            guildFilter: x.ZP.guildFilter,
            roleFilter: x.ZP.roleFilter,
            everyoneFilter: x.ZP.everyoneFilter,
        })),
        y = (0, O.Us)({ location: "RecentMentions" }),
        j = (0, p.Z)(f),
        C = (0, p.Z)(g),
        E = (0, p.Z)(b);
    i.useEffect(() => {
        if (!x.ZP.hasLoadedEver) return void Z(n, !0);
        ((null != j && f !== j) || (null != C && g !== C) || (null != E && b !== E)) && Z(n, !0);
    }, [j, f, C, g, E, b, n, !0]),
        (0, d.ZP)(() => {
            (null == l ? void 0 : l.some(m.k5)) && (c.Z.clearMentions(), Z(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(P.DJj);
            },
            [],
        );
    let S = i.useCallback(() => null, []);
    return (0, r.jsx)(u.ZP, {
        className: o()(N.recentMentionsPopout, { [N.widerInbox]: y }),
        scrollerClassName: N.scroller,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.Z.deleteRecentMention(e.id);
        },
        channel: n,
        messages: l,
        loading: h,
        hasMore: s,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            Z(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: S,
        renderEmptyState: D,
        renderMessage: A,
        "aria-label": I.intl.string(I.t.jbV6MD),
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
        l = (0, f.s8)({ location: "recent-mentions" });
    if (null == t) return null;
    let o = _.Z.getChannel(t.channel_id);
    if (null == o || ((0, g.aC)(o) && l && (0, h.sf)())) return null;
    let a = j.Z.didAgree(o.getGuildId()),
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
                              tooltip: I.intl.string(I.t.cpT0Cg),
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
                    (0, r.jsx)(C.Z, {
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
                            compact: y.jU.getSetting(),
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
        header: I.intl.string(I.t["bgDz7+"]),
        tip: I.intl.string(I.t.NS15vr),
    });
}
