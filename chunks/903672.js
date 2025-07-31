n.d(t, { Z: () => R });
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
    f = n(81643),
    g = n(622822),
    m = n(198620),
    b = n(294218),
    _ = n(216789),
    O = n(695346),
    y = n(592125),
    C = n(731290),
    v = n(944486),
    j = n(455199),
    E = n(655354),
    S = n(999671),
    x = n(324081),
    I = n(240126),
    P = n(791914),
    N = n(981631),
    w = n(388032),
    T = n(384323);
let Z = {
    offset: {
        left: 4,
        right: -12
    }
};
function A(e, t, n) {
    let r = t ? j.ZP.guildFilter : null,
        i = t ? j.ZP.roleFilter : null,
        l = t ? j.ZP.everyoneFilter : null,
        o = null;
    (null != e && null != r && (o = r === N.NgX.ALL_SERVERS ? null : e.getGuildId()),
        u.Z.fetchRecentMentions({
            before: n,
            limit: N.DJj,
            guildId: o,
            roles: i,
            everyone: l
        }));
}
function R(e) {
    let { setTab: t, onJump: n, badgeState: l, closePopout: c } = e,
        f = (0, a.e7)([y.Z, v.Z], () => y.Z.getChannel(v.Z.getChannelId())),
        {
            messages: g,
            hasMore: b,
            loading: O,
            guildFilter: C,
            roleFilter: E,
            everyoneFilter: x
        } = (0, a.cj)([j.ZP], () => ({
            messages: j.ZP.getMentions(),
            hasMore: j.ZP.hasMore,
            loading: j.ZP.loading,
            guildFilter: j.ZP.guildFilter,
            roleFilter: j.ZP.roleFilter,
            everyoneFilter: j.ZP.everyoneFilter
        })),
        I = (0, _.Us)({ location: 'RecentMentions' }),
        Z = (0, p.Z)(C),
        R = (0, p.Z)(E),
        L = (0, p.Z)(x);
    (i.useEffect(() => {
        if (!j.ZP.hasLoadedEver) return void A(f, !0);
        ((null != Z && C !== Z) || (null != R && E !== R) || (null != L && x !== L)) && A(f, !0);
    }, [Z, C, R, E, L, x, f, !0]),
        (0, h.ZP)(() => {
            (null == g ? void 0 : g.some(m.k5)) && (u.Z.clearMentions(), A(f, !0));
        }),
        i.useEffect(
            () => () => {
                u.Z.truncateMentions(N.DJj);
            },
            []
        ));
    let k = i.useCallback(
        () =>
            (0, r.jsx)(P.Z, {
                tab: s.X.MENTIONS,
                setTab: t,
                badgeState: l,
                closePopout: c,
                children: (0, r.jsx)(S.Z, {})
            }),
        [!0, t, l, c]
    );
    return (0, r.jsx)(d.ZP, {
        className: o()(T.recentMentionsPopout, { [T.widerInbox]: I }),
        scrollerClassName: T.scroller,
        onFetch: () => null,
        onJump: n,
        onCloseMessage: function (e) {
            u.Z.deleteRecentMention(e.id);
        },
        channel: f,
        messages: g,
        loading: O,
        hasMore: b,
        analyticsName: 'Recent Mentions',
        loadMore: function () {
            A(f, !0, null != g && g.length > 0 ? g[g.length - 1].id : null);
        },
        canCloseAllMessages: !0,
        renderHeader: k,
        renderEmptyState: M,
        renderMessage: D,
        'aria-label': w.intl.string(w.t.jbV6MD),
        listName: 'recents'
    });
}
function D(e, t) {
    return [
        (0, r.jsx)(
            L,
            {
                message: e,
                gotoMessage: t,
                dismissible: !0
            },
            e.id
        )
    ];
}
function L(e) {
    let { message: t, gotoMessage: n, dismissible: i } = e;
    if (null == t) return null;
    let l = y.Z.getChannel(t.channel_id);
    if (null == l || ((0, g.aC)(l) && (0, f.sf)())) return null;
    let o = C.Z.didAgree(l.getGuildId()),
        a = !!(0, g.aC)(l) && !o;
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            (0, r.jsx)(x.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != i
                        ? (0, r.jsx)(c.M0o, {
                              className: T.closeButton,
                              tooltip: w.intl.string(w.t.cpT0Cg),
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
                        b.Z,
                        {
                            message: t,
                            channel: l,
                            className: T.message,
                            hideAccessories: a,
                            compact: O.jU.getSetting(),
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
function M() {
    return (0, r.jsx)(I.Z, {
        Icon: c.lOy,
        header: w.intl.string(w.t['bgDz7+']),
        tip: w.intl.string(w.t.NS15vr)
    });
}
