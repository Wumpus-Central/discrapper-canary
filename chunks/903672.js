n.d(t, { Z: () => Z });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(235820),
    u = n(494404),
    d = n(493773),
    p = n(110924),
    f = n(81643),
    h = n(622822),
    g = n(198620),
    m = n(294218),
    b = n(216789),
    O = n(695346),
    _ = n(592125),
    y = n(731290),
    v = n(944486),
    j = n(455199),
    C = n(655354),
    E = n(324081),
    x = n(240126),
    S = n(981631),
    P = n(388032),
    I = n(889833);
let N = {
    offset: {
        left: 4,
        right: -12,
    },
};
function w(e, t, n) {
    let r = t ? j.ZP.guildFilter : null,
        i = t ? j.ZP.roleFilter : null,
        l = t ? j.ZP.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === S.NgX.ALL_SERVERS ? null : e.getGuildId()),
        c.Z.fetchRecentMentions({
            before: n,
            limit: S.DJj,
            guildId: o,
            roles: i,
            everyone: l,
        });
}
function Z(e) {
    let { onJump: t } = e,
        n = (0, a.e7)([_.Z, v.Z], () => _.Z.getChannel(v.Z.getChannelId())),
        {
            messages: l,
            hasMore: s,
            loading: f,
            guildFilter: h,
            roleFilter: m,
            everyoneFilter: O,
        } = (0, a.cj)([j.ZP], () => ({
            messages: j.ZP.getMentions(),
            hasMore: j.ZP.hasMore,
            loading: j.ZP.loading,
            guildFilter: j.ZP.guildFilter,
            roleFilter: j.ZP.roleFilter,
            everyoneFilter: j.ZP.everyoneFilter,
        })),
        y = (0, b.Us)({ location: "RecentMentions" }),
        C = (0, p.Z)(h),
        E = (0, p.Z)(m),
        x = (0, p.Z)(O);
    i.useEffect(() => {
        if (!j.ZP.hasLoadedEver) return void w(n, !0);
        ((null != C && h !== C) || (null != E && m !== E) || (null != x && O !== x)) && w(n, !0);
    }, [C, h, E, m, x, O, n, !0]),
        (0, d.ZP)(() => {
            (null == l ? void 0 : l.some(g.k5)) && (c.Z.clearMentions(), w(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(S.DJj);
            },
            [],
        );
    let N = i.useCallback(() => null, []);
    return (0, r.jsx)(u.ZP, {
        className: o()(I.recentMentionsPopout, { [I.widerInbox]: y }),
        scrollerClassName: I.scroller,
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
            w(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: N,
        renderEmptyState: R,
        renderMessage: T,
        "aria-label": P.intl.string(P.t.jbV6MD),
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
    if (null == l || ((0, h.aC)(l) && (0, f.sf)())) return null;
    let o = y.Z.didAgree(l.getGuildId()),
        a = !!(0, h.aC)(l) && !o;
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            (0, r.jsx)(E.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(s.M0o, {
                              className: I.closeButton,
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
                className: I.messageContainer,
                children: [
                    (0, r.jsx)(C.Z, {
                        className: I.jumpMessageButton,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        m.Z,
                        {
                            message: t,
                            channel: l,
                            className: I.message,
                            hideAccessories: a,
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
    return (0, r.jsx)(x.Z, {
        Icon: s.lOy,
        header: P.intl.string(P.t["bgDz7+"]),
        tip: P.intl.string(P.t.NS15vr),
    });
}
