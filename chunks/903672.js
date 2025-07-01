n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(524437),
    c = n(481060),
    u = n(235820),
    d = n(494404),
    h = n(493773),
    p = n(110924),
    f = n(198620),
    g = n(294218),
    m = n(216789),
    b = n(695346),
    _ = n(592125),
    O = n(731290),
    y = n(944486),
    v = n(455199),
    C = n(655354),
    j = n(999671),
    E = n(324081),
    S = n(240126),
    x = n(791914),
    I = n(981631),
    P = n(388032),
    N = n(384323);
let w = {
    offset: {
        left: 4,
        right: -12
    }
};
function Z(e, t, n) {
    let r = t ? v.Z.guildFilter : null,
        i = t ? v.Z.roleFilter : null,
        l = t ? v.Z.everyoneFilter : null,
        o = null;
    (null != e && null != r && (o = r === I.NgX.ALL_SERVERS ? null : e.getGuildId()), u.Z.fetchRecentMentions(n, I.DJj, o, i, l));
}
function T(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: c } = e,
        g = (0, a.e7)([_.Z, y.Z], () => _.Z.getChannel(y.Z.getChannelId())),
        {
            messages: b,
            hasMore: O,
            loading: C,
            guildFilter: E,
            roleFilter: S,
            everyoneFilter: w
        } = (0, a.cj)([v.Z], () => ({
            messages: v.Z.getMentions(),
            hasMore: v.Z.hasMore,
            loading: v.Z.loading,
            guildFilter: v.Z.guildFilter,
            roleFilter: v.Z.roleFilter,
            everyoneFilter: v.Z.everyoneFilter
        })),
        T = (0, m.Us)({ location: 'RecentMentions' }),
        R = (0, p.Z)(E),
        L = (0, p.Z)(S),
        M = (0, p.Z)(w);
    (i.useEffect(() => {
        if (!v.Z.hasLoadedEver) return void Z(g, !0);
        ((null != R && E !== R) || (null != L && S !== L) || (null != M && w !== M)) && Z(g, !0);
    }, [R, E, L, S, M, w, g, !0]),
        (0, h.ZP)(() => {
            (null == b ? void 0 : b.some(f.k5)) && (u.Z.clearMentions(), Z(g, !0));
        }),
        i.useEffect(
            () => () => {
                u.Z.truncateMentions(I.DJj);
            },
            []
        ));
    let k = i.useCallback(
        () =>
            (0, r.jsx)(x.Z, {
                tab: s.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: c,
                children: (0, r.jsx)(j.Z, {})
            }),
        [!0, t, l, c]
    );
    return (0, r.jsx)(d.ZP, {
        className: o()(N.recentMentionsPopout, { [N.widerInbox]: T }),
        scrollerClassName: N.scroller,
        onFetch: () => null,
        onJump: n,
        onCloseMessage: function (e) {
            u.Z.deleteRecentMention(e.id);
        },
        channel: g,
        messages: b,
        loading: C,
        hasMore: O,
        analyticsName: 'Recent Mentions',
        loadMore: function () {
            Z(g, !0, null != b && b.length > 0 ? b[b.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: k,
        renderEmptyState: D,
        renderMessage: A,
        'aria-label': P.intl.string(P.t.jbV6MD),
        listName: 'recents'
    });
}
function A(e, t) {
    return [
        (0, r.jsx)(
            R,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function R(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let l = _.Z.getChannel(t.channel_id);
    if (null == l) return null;
    let o = O.Z.didAgree(l.getGuildId()),
        a = !!l.isNSFW() && !o;
    return (0, r.jsxs)('div', {
        className: N.container,
        children: [
            (0, r.jsx)(E.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(c.M0o, {
                              className: N.closeButton,
                              tooltip: P.intl.string(P.t.cpT0Cg),
                              color: c.YX$.TERTIARY,
                              icon: (0, r.jsx)(c.Dio, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => u.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: N.messageContainer,
                children: [
                    (0, r.jsx)(C.Z, {
                        className: N.jumpMessageButton,
                        onJump: n
                    }),
                    (0, r.jsx)(
                        g.Z,
                        {
                            message: t,
                            channel: l,
                            className: N.message,
                            hideAccessories: a,
                            compact: b.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: w,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function D() {
    return (0, r.jsx)(S.Z, {
        Icon: c.lOy,
        header: P.intl.string(P.t['bgDz7+']),
        tip: P.intl.string(P.t.NS15vr)
    });
}
