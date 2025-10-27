n.d(t, { Z: () => Z });
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
    f = n(622822),
    h = n(198620),
    g = n(294218),
    m = n(216789),
    b = n(695346),
    _ = n(592125),
    O = n(731290),
    y = n(944486),
    j = n(455199),
    v = n(655354),
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
    let r = t ? j.ZP.guildFilter : null,
        i = t ? j.ZP.roleFilter : null,
        l = t ? j.ZP.everyoneFilter : null,
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
        n = (0, a.e7)([_.Z, y.Z], () => _.Z.getChannel(y.Z.getChannelId())),
        {
            messages: l,
            hasMore: s,
            loading: f,
            guildFilter: g,
            roleFilter: b,
            everyoneFilter: O,
        } = (0, a.cj)([j.ZP], () => ({
            messages: j.ZP.getMentions(),
            hasMore: j.ZP.hasMore,
            loading: j.ZP.loading,
            guildFilter: j.ZP.guildFilter,
            roleFilter: j.ZP.roleFilter,
            everyoneFilter: j.ZP.everyoneFilter,
        })),
        v = (0, m.Us)({ location: "RecentMentions" }),
        x = (0, p.Z)(g),
        C = (0, p.Z)(b),
        P = (0, p.Z)(O);
    i.useEffect(() => {
        if (!j.ZP.hasLoadedEver) return void N(n, !0);
        ((null != x && g !== x) || (null != C && b !== C) || (null != P && O !== P)) && N(n, !0);
    }, [x, g, C, b, P, O, n, !0]),
        (0, d.ZP)(() => {
            (null == l ? void 0 : l.some(h.k5)) && (c.Z.clearMentions(), N(n, !0));
        }),
        i.useEffect(
            () => () => {
                c.Z.truncateMentions(E.DJj);
            },
            [],
        );
    let Z = i.useCallback(() => null, []);
    return (0, r.jsx)(u.ZP, {
        className: o()(I.recentMentionsPopout, { [I.widerInbox]: v }),
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
            N(n, !0, null != l && l.length > 0 ? l[l.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: Z,
        renderEmptyState: A,
        renderMessage: T,
        "aria-label": S.intl.string(S.t.jbV6MM),
        listName: "recents",
    });
}
function T(e, t) {
    return [
        (0, r.jsx)(
            w,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0,
            },
            e.id,
        ),
    ];
}
function w(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let l = _.Z.getChannel(t.channel_id);
    if (null == l || (0, f._t)(l) || (0, f.ft)(l)) return null;
    let o = O.Z.didAgree(l.getGuildId()),
        a = !!(0, f.qF)(l) && !o;
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
                    (0, r.jsx)(v.Z, {
                        className: I.jumpMessageButton,
                        onJump: n,
                    }),
                    (0, r.jsx)(
                        g.Z,
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
