n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(442837),
    s = n(524437),
    c = n(481060),
    d = n(235820),
    u = n(494404),
    p = n(493773),
    m = n(110924),
    f = n(198620),
    h = n(294218),
    g = n(216789),
    _ = n(695346),
    b = n(592125),
    v = n(731290),
    y = n(944486),
    x = n(455199),
    O = n(655354),
    E = n(999671),
    j = n(324081),
    N = n(240126),
    C = n(791914),
    I = n(981631),
    S = n(388032),
    P = n(404431);
let T = {
    offset: {
        left: 4,
        right: -12
    }
};
function A(e, t, n) {
    let r = t ? x.Z.guildFilter : null,
        i = t ? x.Z.roleFilter : null,
        a = t ? x.Z.everyoneFilter : null,
        o = null;
    null != e && null != r && (o = r === I.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(n, I.DJj, o, i, a);
}
function w(e) {
    let { setTab: t, onJump: n, badgeState: a, closePopout: c } = e,
        h = (0, l.e7)([b.Z, y.Z], () => b.Z.getChannel(y.Z.getChannelId())),
        {
            messages: _,
            hasMore: v,
            loading: O,
            guildFilter: j,
            roleFilter: N,
            everyoneFilter: T
        } = (0, l.cj)([x.Z], () => ({
            messages: x.Z.getMentions(),
            hasMore: x.Z.hasMore,
            loading: x.Z.loading,
            guildFilter: x.Z.guildFilter,
            roleFilter: x.Z.roleFilter,
            everyoneFilter: x.Z.everyoneFilter
        })),
        w = (0, g.Us)({ location: 'RecentMentions' }),
        k = (0, m.Z)(j),
        L = (0, m.Z)(N),
        D = (0, m.Z)(T);
    i.useEffect(() => {
        if (!x.Z.hasLoadedEver) {
            A(h, !0);
            return;
        }
        ((null != k && j !== k) || (null != L && N !== L) || (null != D && T !== D)) && A(h, !0);
    }, [k, j, L, N, D, T, h, !0]),
        (0, p.ZP)(() => {
            (null == _ ? void 0 : _.some(f.k5)) && (d.Z.clearMentions(), A(h, !0));
        }),
        i.useEffect(
            () => () => {
                d.Z.truncateMentions(I.DJj);
            },
            []
        );
    let M = i.useCallback(
        () =>
            (0, r.jsx)(C.Z, {
                tab: s.X.MENTIONS,
                setTab: t,
                badgeState: a,
                closePopout: c,
                children: (0, r.jsx)(E.Z, {})
            }),
        [!0, t, a, c]
    );
    return (0, r.jsx)(u.ZP, {
        className: o()(P.recentMentionsPopout, { [P.widerInbox]: w }),
        scrollerClassName: P.scroller,
        onFetch: () => null,
        onJump: n,
        onCloseMessage: function (e) {
            d.Z.deleteRecentMention(e.id);
        },
        channel: h,
        messages: _,
        loading: O,
        hasMore: v,
        analyticsName: 'Recent Mentions',
        loadMore: function () {
            A(h, !0, null != _ && _.length > 0 ? _[_.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: M,
        renderEmptyState: R,
        renderMessage: Z,
        'aria-label': S.NW.string(S.t.jbV6MD),
        listName: 'recents'
    });
}
function Z(e, t) {
    return [
        (0, r.jsx)(
            k,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function k(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let a = b.Z.getChannel(t.channel_id);
    if (null == a) return null;
    let o = v.Z.didAgree(a.getGuildId()),
        l = !!a.isNSFW() && !o;
    return (0, r.jsxs)('div', {
        className: P.container,
        children: [
            (0, r.jsx)(j.Z, {
                channel: a,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(c.M0o, {
                              className: P.closeButton,
                              tooltip: S.NW.string(S.t.cpT0Cg),
                              color: c.YX$.TERTIARY,
                              icon: (0, r.jsx)(c.Dio, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => d.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, r.jsxs)('div', {
                className: P.messageContainer,
                children: [
                    (0, r.jsx)(O.Z, {
                        className: P.jumpMessageButton,
                        onJump: n
                    }),
                    (0, r.jsx)(
                        h.Z,
                        {
                            message: t,
                            channel: a,
                            className: P.message,
                            hideAccessories: l,
                            compact: _.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: T,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function R(e) {
    return (0, r.jsx)(N.Z, {
        Icon: c.lOy,
        header: S.NW.string(S.t['bgDz7+']),
        tip: S.NW.string(S.t.NS15vr)
    });
}
