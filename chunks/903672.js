n.d(t, { Z: () => L });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(524437),
    c = n(481060),
    d = n(235820),
    u = n(494404),
    m = n(493773),
    _ = n(110924),
    h = n(198620),
    p = n(294218),
    g = n(216789),
    f = n(695346),
    x = n(592125),
    C = n(731290),
    v = n(944486),
    E = n(455199),
    I = n(655354),
    N = n(999671),
    S = n(324081),
    T = n(240126),
    b = n(791914),
    A = n(981631),
    j = n(388032),
    y = n(884596);
let Z = {
    offset: {
        left: 4,
        right: -12
    }
};
function R(e, t, n) {
    let i = t ? E.Z.guildFilter : null,
        l = t ? E.Z.roleFilter : null,
        a = t ? E.Z.everyoneFilter : null,
        r = null;
    null != e && null != i && (r = i === A.NgX.ALL_SERVERS ? null : e.getGuildId()), d.Z.fetchRecentMentions(n, A.DJj, r, l, a);
}
function L(e) {
    let { setTab: t, onJump: n, badgeState: a, closePopout: c } = e,
        p = (0, s.e7)([x.Z, v.Z], () => x.Z.getChannel(v.Z.getChannelId())),
        {
            messages: f,
            hasMore: C,
            loading: I,
            guildFilter: S,
            roleFilter: T,
            everyoneFilter: Z
        } = (0, s.cj)([E.Z], () => ({
            messages: E.Z.getMentions(),
            hasMore: E.Z.hasMore,
            loading: E.Z.loading,
            guildFilter: E.Z.guildFilter,
            roleFilter: E.Z.roleFilter,
            everyoneFilter: E.Z.everyoneFilter
        })),
        L = (0, g.Us)({ location: 'RecentMentions' }),
        k = (0, _.Z)(S),
        O = (0, _.Z)(T),
        D = (0, _.Z)(Z);
    l.useEffect(() => {
        if (!E.Z.hasLoadedEver) {
            R(p, !0);
            return;
        }
        ((null != k && S !== k) || (null != O && T !== O) || (null != D && Z !== D)) && R(p, !0);
    }, [k, S, O, T, D, Z, p, !0]),
        (0, m.ZP)(() => {
            (null == f ? void 0 : f.some(h.k5)) && (d.Z.clearMentions(), R(p, !0));
        }),
        l.useEffect(
            () => () => {
                d.Z.truncateMentions(A.DJj);
            },
            []
        );
    let w = l.useCallback(
        () =>
            (0, i.jsx)(b.Z, {
                tab: o.X.MENTIONS,
                setTab: t,
                badgeState: a,
                closePopout: c,
                children: (0, i.jsx)(N.Z, {})
            }),
        [!0, t, a, c]
    );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(u.ZP, {
            className: r()(y.recentMentionsPopout, { [y.widerInbox]: L }),
            scrollerClassName: y.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                d.Z.deleteRecentMention(e.id);
            },
            channel: p,
            messages: f,
            loading: I,
            hasMore: C,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                R(p, !0, null != f && f.length > 0 ? f[f.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: w,
            renderEmptyState: M,
            renderMessage: P,
            'aria-label': j.intl.string(j.t.jbV6MD),
            listName: 'recents'
        })
    });
}
function P(e, t) {
    return [
        (0, i.jsx)(
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
    let { message: t, gotoMessage: n, dismissible: l } = e;
    if (null == t) return null;
    let a = x.Z.getChannel(t.channel_id);
    if (null == a) return null;
    let r = C.Z.didAgree(a.getGuildId()),
        s = !!a.isNSFW() && !r;
    return (0, i.jsxs)('div', {
        className: y.container,
        children: [
            (0, i.jsx)(S.Z, {
                channel: a,
                gotoChannel: n,
                children:
                    null != l
                        ? (0, i.jsx)(c.M0o, {
                              className: y.closeButton,
                              tooltip: j.intl.string(j.t.cpT0Cg),
                              color: c.YX$.TERTIARY,
                              icon: (0, i.jsx)(c.Dio, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => d.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: y.messageContainer,
                children: [
                    (0, i.jsx)(I.Z, {
                        className: y.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        p.Z,
                        {
                            message: t,
                            channel: a,
                            className: y.message,
                            hideAccessories: s,
                            compact: f.jU.getSetting(),
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
function M(e) {
    return (0, i.jsx)(T.Z, {
        Icon: c.lOy,
        header: j.intl.string(j.t['bgDz7+']),
        tip: j.intl.string(j.t.NS15vr)
    });
}
