n.d(t, { Z: () => Z });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(235820),
    u = n(493773),
    d = n(110924),
    f = n(622822),
    h = n(198620),
    p = n(294218),
    g = n(598999),
    b = n(216789),
    m = n(695346),
    y = n(592125),
    O = n(731290),
    v = n(944486),
    j = n(455199),
    C = n(655354),
    x = n(324081),
    E = n(240126),
    S = n(981631),
    I = n(388032),
    _ = n(771047);
let P = {
    offset: {
        left: 4,
        right: -12,
    },
};
function N(e, t, n) {
    let r = t ? j.ZP.guildFilter : null,
        i = t ? j.ZP.roleFilter : null,
        l = t ? j.ZP.everyoneFilter : null,
        a = null;
    null != e && null != r && (a = r === S.NgX.ALL_SERVERS ? null : e.getGuildId()),
        c.Z.fetchRecentMentions({
            before: n,
            limit: S.DJj,
            guildId: a,
            roles: i,
            everyone: l,
        });
}
function Z(e) {
    let { onJump: t } = e,
        n = (0, o.e7)([y.Z, v.Z], () => y.Z.getChannel(v.Z.getChannelId())),
        {
            messages: l,
            hasMore: s,
            loading: f,
            guildFilter: p,
            roleFilter: m,
            everyoneFilter: O,
        } = (0, o.cj)([j.ZP], () => ({
            messages: j.ZP.getMentions(),
            hasMore: j.ZP.hasMore,
            loading: j.ZP.loading,
            guildFilter: j.ZP.guildFilter,
            roleFilter: j.ZP.roleFilter,
            everyoneFilter: j.ZP.everyoneFilter,
        })),
        C = (0, b.Us)({ location: "RecentMentions" }),
        x = (0, d.Z)(p),
        E = (0, d.Z)(m),
        P = (0, d.Z)(O);
    i.useEffect(() => {
        if (!j.ZP.hasLoadedEver) return void N(n, !0);
        ((null != x && p !== x) || (null != E && m !== E) || (null != P && O !== P)) && N(n, !0);
    }, [x, p, E, m, P, O, n, !0]),
        (0, u.ZP)(() => {
            (null == l ? void 0 : l.some(h.k5)) && (c.Z.clearMentions(), N(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(S.DJj);
            },
            [],
        );
    let Z = i.useCallback(() => null, []);
    return (0, r.jsx)(g.ZP, {
        className: a()(_.recentMentionsPopout, { [_.widerInbox]: C }),
        scrollerClassName: _.scroller,
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
            N(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: Z,
        renderEmptyState: A,
        renderMessage: w,
        "aria-label": I.intl.string(I.t.jbV6MM),
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
    let l = y.Z.getChannel(t.channel_id);
    if (null == l || (0, f._t)(l) || (0, f.ft)(l)) return null;
    let a = O.Z.didAgree(l.getGuildId()),
        o = !!(0, f.qF)(l) && !a;
    return (0, r.jsxs)("div", {
        className: _.container,
        children: [
            (0, r.jsx)(x.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(s.PZ7, {
                              size: "sm",
                              onClick: () => c.Z.deleteRecentMention(t.id),
                          })
                        : null,
            }),
            (0, r.jsxs)("div", {
                className: _.messageContainer,
                children: [
                    (0, r.jsx)(C.Z, {
                        className: _.jumpMessageButton,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        p.Z,
                        {
                            message: t,
                            channel: l,
                            className: _.message,
                            hideAccessories: o,
                            compact: m.jU.getSetting(),
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
    return (0, r.jsx)(E.Z, {
        Icon: s.lOy,
        header: I.intl.string(I.t.bgDz74),
        tip: I.intl.string(I.t.NS15vk),
    });
}
