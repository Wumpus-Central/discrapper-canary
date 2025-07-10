n.d(t, { Z: () => A });
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
    f = n(622822),
    g = n(198620),
    m = n(294218),
    b = n(216789),
    _ = n(695346),
    O = n(592125),
    y = n(731290),
    v = n(944486),
    C = n(455199),
    j = n(655354),
    E = n(999671),
    S = n(324081),
    x = n(240126),
    I = n(791914),
    P = n(981631),
    N = n(388032),
    w = n(384323);
let Z = {
    offset: {
        left: 4,
        right: -12
    }
};
function T(e, t, n) {
    let r = t ? C.ZP.guildFilter : null,
        i = t ? C.ZP.roleFilter : null,
        l = t ? C.ZP.everyoneFilter : null,
        o = null;
    (null != e && null != r && (o = r === P.NgX.ALL_SERVERS ? null : e.getGuildId()), u.Z.fetchRecentMentions(n, P.DJj, o, i, l));
}
function A(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: c } = e,
        f = (0, a.e7)([O.Z, v.Z], () => O.Z.getChannel(v.Z.getChannelId())),
        {
            messages: m,
            hasMore: _,
            loading: y,
            guildFilter: j,
            roleFilter: S,
            everyoneFilter: x
        } = (0, a.cj)([C.ZP], () => ({
            messages: C.ZP.getMentions(),
            hasMore: C.ZP.hasMore,
            loading: C.ZP.loading,
            guildFilter: C.ZP.guildFilter,
            roleFilter: C.ZP.roleFilter,
            everyoneFilter: C.ZP.everyoneFilter
        })),
        Z = (0, b.Us)({ location: 'RecentMentions' }),
        A = (0, p.Z)(j),
        D = (0, p.Z)(S),
        M = (0, p.Z)(x);
    (i.useEffect(() => {
        if (!C.ZP.hasLoadedEver) return void T(f, !0);
        ((null != A && j !== A) || (null != D && S !== D) || (null != M && x !== M)) && T(f, !0);
    }, [A, j, D, S, M, x, f, !0]),
        (0, h.ZP)(() => {
            (null == m ? void 0 : m.some(g.k5)) && (u.Z.clearMentions(), T(f, !0));
        }),
        i.useEffect(
            () => () => {
                u.Z.truncateMentions(P.DJj);
            },
            []
        ));
    let k = i.useCallback(
        () =>
            (0, r.jsx)(I.Z, {
                tab: s.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: c,
                children: (0, r.jsx)(E.Z, {})
            }),
        [!0, t, l, c]
    );
    return (0, r.jsx)(d.ZP, {
        className: o()(w.recentMentionsPopout, { [w.widerInbox]: Z }),
        scrollerClassName: w.scroller,
        onFetch: () => null,
        onJump: n,
        onCloseMessage: function (e) {
            u.Z.deleteRecentMention(e.id);
        },
        channel: f,
        messages: m,
        loading: y,
        hasMore: _,
        analyticsName: 'Recent Mentions',
        loadMore: function () {
            T(f, !0, null != m && m.length > 0 ? m[m.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: k,
        renderEmptyState: L,
        renderMessage: R,
        'aria-label': N.intl.string(N.t.jbV6MD),
        listName: 'recents'
    });
}
function R(e, t) {
    return [
        (0, r.jsx)(
            D,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function D(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let l = O.Z.getChannel(t.channel_id);
    if (null == l) return null;
    let o = y.Z.didAgree(l.getGuildId()),
        a = !!(0, f.aC)(l) && !o;
    return (0, r.jsxs)('div', {
        className: w.container,
        children: [
            (0, r.jsx)(S.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(c.M0o, {
                              className: w.closeButton,
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
                className: w.messageContainer,
                children: [
                    (0, r.jsx)(j.Z, {
                        className: w.jumpMessageButton,
                        onJump: n
                    }),
                    (0, r.jsx)(
                        m.Z,
                        {
                            message: t,
                            channel: l,
                            className: w.message,
                            hideAccessories: a,
                            compact: _.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: Z,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function L() {
    return (0, r.jsx)(x.Z, {
        Icon: c.lOy,
        header: N.intl.string(N.t['bgDz7+']),
        tip: N.intl.string(N.t.NS15vr)
    });
}
