n.d(t, { Z: () => Z });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(481060),
    c = n(235820),
    u = n(494404),
    d = n(493773),
    h = n(110924),
    p = n(81643),
    f = n(622822),
    g = n(198620),
    m = n(294218),
    b = n(216789),
    O = n(695346),
    _ = n(592125),
    y = n(731290),
    C = n(944486),
    v = n(455199),
    j = n(655354),
    E = n(324081),
    S = n(240126),
    x = n(981631),
    I = n(388032),
    P = n(193578);
let N = {
    offset: {
        left: 4,
        right: -12,
    },
};
function w(e, t, n) {
    let r = t ? v.ZP.guildFilter : null,
        i = t ? v.ZP.roleFilter : null,
        l = t ? v.ZP.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === x.NgX.ALL_SERVERS ? null : e.getGuildId()),
        c.Z.fetchRecentMentions({
            before: n,
            limit: x.DJj,
            guildId: o,
            roles: i,
            everyone: l,
        });
}
function Z(e) {
    let { onJump: t } = e,
        n = (0, s.e7)([_.Z, C.Z], () => _.Z.getChannel(C.Z.getChannelId())),
        {
            messages: l,
            hasMore: a,
            loading: p,
            guildFilter: f,
            roleFilter: m,
            everyoneFilter: O,
        } = (0, s.cj)([v.ZP], () => ({
            messages: v.ZP.getMentions(),
            hasMore: v.ZP.hasMore,
            loading: v.ZP.loading,
            guildFilter: v.ZP.guildFilter,
            roleFilter: v.ZP.roleFilter,
            everyoneFilter: v.ZP.everyoneFilter,
        })),
        y = (0, b.Us)({ location: "RecentMentions" }),
        j = (0, h.Z)(f),
        E = (0, h.Z)(m),
        S = (0, h.Z)(O);
    i.useEffect(() => {
        if (!v.ZP.hasLoadedEver) return void w(n, !0);
        ((null != j && f !== j) || (null != E && m !== E) || (null != S && O !== S)) && w(n, !0);
    }, [j, f, E, m, S, O, n, !0]),
        (0, d.ZP)(() => {
            (null == l ? void 0 : l.some(g.k5)) && (c.Z.clearMentions(), w(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(x.DJj);
            },
            [],
        );
    let N = i.useCallback(() => null, []);
    return (0, r.jsx)(u.ZP, {
        className: o()(P.recentMentionsPopout, { [P.widerInbox]: y }),
        scrollerClassName: P.scroller,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.Z.deleteRecentMention(e.id);
        },
        channel: n,
        messages: l,
        loading: p,
        hasMore: a,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            w(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: N,
        renderEmptyState: R,
        renderMessage: T,
        "aria-label": I.intl.string(I.t.jbV6MD),
        listName: "recents",
    });
}
function T(e, t) {
    return [
        (0, r.jsx)(
            A,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0,
            },
            e.id,
        ),
    ];
}
function A(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let l = _.Z.getChannel(t.channel_id);
    if (null == l || ((0, f.aC)(l) && (0, p.sf)())) return null;
    let o = y.Z.didAgree(l.getGuildId()),
        s = !!(0, f.aC)(l) && !o;
    return (0, r.jsxs)("div", {
        className: P.container,
        children: [
            (0, r.jsx)(E.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(a.M0o, {
                              className: P.closeButton,
                              tooltip: I.intl.string(I.t.cpT0Cg),
                              color: a.YX$.TERTIARY,
                              icon: (0, r.jsx)(a.Dio, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              onClick: () => c.Z.deleteRecentMention(t.id),
                          })
                        : null,
            }),
            (0, r.jsxs)("div", {
                className: P.messageContainer,
                children: [
                    (0, r.jsx)(j.Z, {
                        className: P.jumpMessageButton,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        m.Z,
                        {
                            message: t,
                            channel: l,
                            className: P.message,
                            hideAccessories: s,
                            compact: O.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: N,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function R() {
    return (0, r.jsx)(S.Z, {
        Icon: a.lOy,
        header: I.intl.string(I.t["bgDz7+"]),
        tip: I.intl.string(I.t.NS15vr),
    });
}
