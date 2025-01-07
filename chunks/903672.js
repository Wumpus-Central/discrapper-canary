n.d(t, {
    Z: function () {
        return R;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(524437),
    o = n(481060),
    s = n(235820),
    c = n(494404),
    u = n(493773),
    d = n(110924),
    m = n(198620),
    h = n(294218),
    f = n(695346),
    p = n(592125),
    _ = n(731290),
    g = n(944486),
    E = n(455199),
    C = n(655354),
    I = n(999671),
    x = n(324081),
    N = n(240126),
    v = n(791914),
    T = n(981631),
    S = n(388032),
    A = n(227040);
let b = {
    offset: {
        left: 4,
        right: -12
    }
};
function j(e, t, n) {
    let i = t ? E.Z.guildFilter : null,
        r = t ? E.Z.roleFilter : null,
        l = t ? E.Z.everyoneFilter : null,
        a = null;
    null != e && null != i && (a = i === T.NgX.ALL_SERVERS ? null : e.getGuildId()), s.Z.fetchRecentMentions(n, T.DJj, a, r, l);
}
function R(e) {
    let { setTab: t, onJump: n, badgeState: o, closePopout: h } = e,
        f = (0, l.e7)([p.Z, g.Z], () => p.Z.getChannel(g.Z.getChannelId())),
        {
            messages: _,
            hasMore: C,
            loading: x,
            guildFilter: N,
            roleFilter: b,
            everyoneFilter: R
        } = (0, l.cj)([E.Z], () => ({
            messages: E.Z.getMentions(),
            hasMore: E.Z.hasMore,
            loading: E.Z.loading,
            guildFilter: E.Z.guildFilter,
            roleFilter: E.Z.roleFilter,
            everyoneFilter: E.Z.everyoneFilter
        })),
        Z = (0, d.Z)(N),
        L = (0, d.Z)(b),
        O = (0, d.Z)(R);
    r.useEffect(() => {
        if (!E.Z.hasLoadedEver) {
            j(f, !0);
            return;
        }
        ((null != Z && N !== Z) || (null != L && b !== L) || (null != O && R !== O)) && j(f, !0);
    }, [Z, N, L, b, O, R, f, !0]);
    (0, u.Z)(() => {
        (null == _ ? void 0 : _.some(m.k5)) && (s.Z.clearMentions(), j(f, !0));
    }),
        r.useEffect(
            () => () => {
                s.Z.truncateMentions(T.DJj);
            },
            []
        );
    let M = r.useCallback(
        () =>
            (0, i.jsx)(v.Z, {
                tab: a.X.MENTIONS,
                setTab: t,
                badgeState: o,
                closePopout: h,
                children: (0, i.jsx)(I.Z, {})
            }),
        [!0, t, o, h]
    );
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(c.ZP, {
            className: A.recentMentionsPopout,
            scrollerClassName: A.scroller,
            onFetch: () => null,
            onJump: n,
            onCloseMessage: function (e) {
                s.Z.deleteRecentMention(e.id);
            },
            channel: f,
            messages: _,
            loading: x,
            hasMore: C,
            analyticsName: 'Recent Mentions',
            loadMore: function () {
                j(f, !0, null != _ && _.length > 0 ? _[_.length - 1].id : null);
            },
            canCloseAllMessages: !0,
            renderHeader: M,
            renderEmptyState: y,
            renderMessage: P,
            'aria-label': S.intl.string(S.t.jbV6MD),
            listName: 'recents'
        })
    });
}
function Z(e, t) {
    return [
        (0, i.jsx)(
            L,
            {
                message: e,
                gotoMessage: t
            },
            e.id
        )
    ];
}
function P(e, t) {
    return [
        (0, i.jsx)(
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
    let { message: t, gotoMessage: n, dismissible: r } = e;
    if (null == t) return null;
    let l = p.Z.getChannel(t.channel_id);
    if (null == l) return null;
    let a = _.Z.didAgree(l.getGuildId()),
        c = !!l.isNSFW() && !a;
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            (0, i.jsx)(x.Z, {
                channel: l,
                gotoChannel: n,
                children:
                    null != r
                        ? (0, i.jsx)(o.CircleIconButton, {
                              className: A.closeButton,
                              tooltip: S.intl.string(S.t.cpT0Cg),
                              color: o.CircleIconButtonColors.TERTIARY,
                              icon: (0, i.jsx)(o.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              onClick: () => s.Z.deleteRecentMention(t.id)
                          })
                        : null
            }),
            (0, i.jsxs)('div', {
                className: A.messageContainer,
                children: [
                    (0, i.jsx)(C.Z, {
                        className: A.jumpMessageButton,
                        onJump: n
                    }),
                    (0, i.jsx)(
                        h.Z,
                        {
                            message: t,
                            channel: l,
                            className: A.message,
                            hideAccessories: c,
                            compact: f.jU.getSetting(),
                            animateAvatar: !1,
                            focusProps: b,
                            trackAnnouncementViews: !0
                        },
                        t.id
                    )
                ]
            })
        ]
    });
}
function y(e) {
    return (0, i.jsx)(N.Z, {
        Icon: o.AtIcon,
        header: S.intl.string(S.t['bgDz7+']),
        tip: S.intl.string(S.t.NS15vr)
    });
}
