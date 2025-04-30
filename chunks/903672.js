n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(524437),
    c = n(481060),
    u = n(235820),
    d = n(494404),
    p = n(493773),
    m = n(110924),
    f = n(198620),
    h = n(294218),
    g = n(216789),
    _ = n(695346),
    b = n(592125),
    x = n(731290),
    y = n(944486),
    v = n(455199),
    E = n(655354),
    O = n(999671),
    j = n(324081),
    C = n(240126),
    S = n(791914),
    I = n(981631),
    N = n(388032),
    T = n(384323);
let P = {
    offset: {
        left: 4,
        right: -12
    }
};
function A(e, t, n) {
    let r = t ? v.Z.guildFilter : null,
        i = t ? v.Z.roleFilter : null,
        l = t ? v.Z.everyoneFilter : null,
        a = null;
    null != e && null != r && (a = r === I.NgX.ALL_SERVERS ? null : e.getGuildId()), u.Z.fetchRecentMentions(n, I.DJj, a, i, l);
}
function w(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: c } = e,
        h = (0, o.e7)([b.Z, y.Z], () => b.Z.getChannel(y.Z.getChannelId())),
        {
            messages: _,
            hasMore: x,
            loading: E,
            guildFilter: j,
            roleFilter: C,
            everyoneFilter: P
        } = (0, o.cj)([v.Z], () => ({
            messages: v.Z.getMentions(),
            hasMore: v.Z.hasMore,
            loading: v.Z.loading,
            guildFilter: v.Z.guildFilter,
            roleFilter: v.Z.roleFilter,
            everyoneFilter: v.Z.everyoneFilter
        })),
        w = (0, g.Us)({ location: 'RecentMentions' }),
        R = (0, m.Z)(j),
        D = (0, m.Z)(C),
        L = (0, m.Z)(P);
    i.useEffect(() => {
        if (!v.Z.hasLoadedEver) return void A(h, !0);
        ((null != R && j !== R) || (null != D && C !== D) || (null != L && P !== L)) && A(h, !0);
    }, [R, j, D, C, L, P, h, !0]),
        (0, p.ZP)(() => {
            (null == _ ? void 0 : _.some(f.k5)) && (u.Z.clearMentions(), A(h, !0));
        }),
        i.useEffect(
            () => () => {
                u.Z.truncateMentions(I.DJj);
            },
            []
        );
    let M = i.useCallback(
        () =>
            (0, r.jsx)(S.Z, {
                tab: s.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: c,
                children: (0, r.jsx)(O.Z, {})
            }),
        [!0, t, l, c]
    );
    return (0, r.jsx)(d.ZP, {
        className: a()(T.recentMentionsPopout, { [T.widerInbox]: w }),
        scrollerClassName: T.scroller,
        onFetch: () => null,
        onJump: n,
        onCloseMessage: function (e) {
            u.Z.deleteRecentMention(e.id);
        },
        channel: h,
        messages: _,
        loading: E,
        hasMore: x,
        analyticsName: 'Recent Mentions',
        loadMore: function () {
            A(h, !0, null != _ && _.length > 0 ? _[_.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: M,
        renderEmptyState: k,
        renderMessage: Z,
        'aria-label': N.intl.string(N.t.jbV6MD),
        listName: 'recents'
    });
}
function Z(e, t) {
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
    let l = b.Z.getChannel(t.channel_id);
    if (null == l) return null;
    let a = x.Z.didAgree(l.getGuildId()),
        o = !!l.isNSFW() && !a;
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            (0, r.jsx)(j.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(c.M0o, {
                              className: T.closeButton,
                              tooltip: N.intl.string(N.t.cpT0Cg),
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
                className: T.messageContainer,
                children: [
                    (0, r.jsx)(E.Z, {
                        className: T.jumpMessageButton,
                        onJump: n
                    }),
                    (0, r.jsx)(
                        h.Z,
                        {
                            message: t,
                            channel: l,
                            className: T.message,
                            hideAccessories: o,
                            compact: _.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: P,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function k(e) {
    return (0, r.jsx)(C.Z, {
        Icon: c.lOy,
        header: N.intl.string(N.t['bgDz7+']),
        tip: N.intl.string(N.t.NS15vr)
    });
}
