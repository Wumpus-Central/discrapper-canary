n.d(t, { Z: () => Z });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(235820),
    u = n(493773),
    d = n(110924),
    p = n(622822),
    f = n(198620),
    h = n(294218),
    g = n(598999),
    m = n(216789),
    b = n(695346),
    _ = n(592125),
    y = n(731290),
    O = n(944486),
    v = n(455199),
    j = n(655354),
    x = n(324081),
    C = n(240126),
    E = n(981631),
    S = n(388032),
    I = n(889833);
let P = {
    offset: {
        left: 4,
        right: -12,
    },
};
function N(e, t, n) {
    let r = t ? v.ZP.guildFilter : null,
        i = t ? v.ZP.roleFilter : null,
        l = t ? v.ZP.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === E.NgX.ALL_SERVERS ? null : e.getGuildId()),
        c.Z.fetchRecentMentions({
            before: n,
            limit: E.DJj,
            guildId: o,
            roles: i,
            everyone: l,
        });
}
function Z(e) {
    let { onJump: t } = e,
        n = (0, a.e7)([_.Z, O.Z], () => _.Z.getChannel(O.Z.getChannelId())),
        {
            messages: l,
            hasMore: s,
            loading: p,
            guildFilter: h,
            roleFilter: b,
            everyoneFilter: y,
        } = (0, a.cj)([v.ZP], () => ({
            messages: v.ZP.getMentions(),
            hasMore: v.ZP.hasMore,
            loading: v.ZP.loading,
            guildFilter: v.ZP.guildFilter,
            roleFilter: v.ZP.roleFilter,
            everyoneFilter: v.ZP.everyoneFilter,
        })),
        j = (0, m.Us)({ location: "RecentMentions" }),
        x = (0, d.Z)(h),
        C = (0, d.Z)(b),
        P = (0, d.Z)(y);
    i.useEffect(() => {
        if (!v.ZP.hasLoadedEver) return void N(n, !0);
        ((null != x && h !== x) || (null != C && b !== C) || (null != P && y !== P)) && N(n, !0);
    }, [x, h, C, b, P, y, n, !0]),
        (0, u.ZP)(() => {
            (null == l ? void 0 : l.some(f.k5)) && (c.Z.clearMentions(), N(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(E.DJj);
            },
            [],
        );
    let Z = i.useCallback(() => null, []);
    return (0, r.jsx)(g.ZP, {
        className: o()(I.recentMentionsPopout, { [I.widerInbox]: j }),
        scrollerClassName: I.scroller,
        onFetch: () => null,
        onJump: t,
        onCloseMessage: function (e) {
            c.Z.deleteRecentMention(e.id);
        },
        channel: n,
        messages: l,
        loading: p,
        hasMore: s,
        analyticsName: "Recent Mentions",
        loadMore: function () {
            N(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: Z,
        renderEmptyState: A,
        renderMessage: w,
        "aria-label": S.intl.string(S.t.jbV6MM),
        listName: "recents",
    });
}
function w(e, t) {
    return [
        (0, r.jsx)(
            T,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0,
            },
            e.id,
        ),
    ];
}
function T(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let l = _.Z.getChannel(t.channel_id);
    if (null == l || (0, p._t)(l) || (0, p.ft)(l)) return null;
    let o = y.Z.didAgree(l.getGuildId()),
        a = !!(0, p.qF)(l) && !o;
    return (0, r.jsxs)("div", {
        className: I.container,
        children: [
            (0, r.jsx)(x.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(s.M0o, {
                              className: I.closeButton,
                              tooltip: S.intl.string(S.t.cpT0Cq),
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
                    (0, r.jsx)(j.Z, {
                        className: I.jumpMessageButton,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        h.Z,
                        {
                            message: t,
                            channel: l,
                            className: I.message,
                            hideAccessories: a,
                            compact: b.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: P,
                            trackAnnouncementViews: !0,
                        },
                        t.id,
                    ),
                ],
            }),
        ],
    });
}
function A() {
    return (0, r.jsx)(C.Z, {
        Icon: s.lOy,
        header: S.intl.string(S.t.bgDz74),
        tip: S.intl.string(S.t.NS15vk),
    });
}
