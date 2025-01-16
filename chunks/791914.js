n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(524437),
    a = n(481060),
    o = n(494404),
    s = n(377171),
    c = n(317632),
    d = n(602478),
    u = n(2818),
    m = n(768943),
    h = n(742989),
    f = n(216789),
    p = n(818186),
    _ = n(388032),
    g = n(76334);
function E(e) {
    let { tab: t, setTab: n, children: E, badgeState: C, closePopout: I } = e,
        { showReminders: x } = h.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: N, inInbox: v } = u.Z.useExperiment({ location: 'RecentsPopout' }),
        T = (0, f.Us)({ location: 'RecentsHeader' }),
        { enabled: S } = d.Z.useExperiment({ location: 'RecentsHeader' }),
        A = (0, r.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        b = (0, r.e7)([m.Z], () => m.Z.getOverdueMessageReminderCount());
    return (0, i.jsxs)(o.h4, {
        className: g.header,
        children: [
            (0, i.jsxs)('div', {
                className: g.headerTitle,
                children: [
                    (0, i.jsx)(a.InboxIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.inboxIcon
                    }),
                    (0, i.jsx)(a.Text, {
                        className: g.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: _.intl.string(_.t.GSmTKC)
                    }),
                    (0, i.jsxs)('div', {
                        className: g.controls,
                        children: [E, (0, i.jsx)(p.Z, { closePopout: I })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: g.headerTabs,
                children: (0, i.jsxs)(a.TabBar, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: g.tabBar,
                    children: [
                        (0, i.jsxs)(a.TabBar.Item, {
                            id: l.X.FOR_YOU,
                            'aria-label': _.intl.string(_.t['En+D+v']),
                            className: g.tab,
                            children: [
                                _.intl.string(_.t['En+D+v']),
                                (null == C ? void 0 : C.badgeForYou)
                                    ? (0, i.jsx)(a.CircleBadge, {
                                          color: s.Z.STATUS_DANGER,
                                          className: g.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(a.TabBar.Item, {
                            id: l.X.UNREADS,
                            className: g.tab,
                            children: _.intl.string(_.t.sRUdBw)
                        }),
                        (0, i.jsx)(a.TabBar.Item, {
                            'aria-label': _.intl.string(_.t['GRZF9/']),
                            id: l.X.MENTIONS,
                            className: g.tab,
                            children: _.intl.string(_.t['GRZF9/'])
                        }),
                        S
                            ? (0, i.jsxs)(a.TabBar.Item, {
                                  'aria-label': 'game_invites',
                                  id: l.X.GAME_INVITES,
                                  className: g.tab,
                                  children: [
                                      _.intl.string(_.t.apq3cX),
                                      A > 0
                                          ? (0, i.jsx)(a.CircleBadge, {
                                                color: s.Z.STATUS_DANGER,
                                                className: g.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        N && v
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': _.intl.string(_.t['2pAkDA']),
                                  id: l.X.BOOKMARKS,
                                  className: g.tab,
                                  children: 0 === b ? _.intl.string(_.t['2pAkDA']) : _.intl.formatToPlainString(_.t.I4fryM, { count: b })
                              })
                            : null,
                        x && !N
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': 'todos',
                                  id: l.X.TODOS,
                                  className: g.tab,
                                  children: 0 === b ? _.intl.string(_.t.aUXxzc) : _.intl.formatToPlainString(_.t['5en8yc'], { count: b })
                              })
                            : null,
                        T
                            ? (0, i.jsx)(a.TabBar.Item, {
                                  'aria-label': 'scheduled',
                                  id: l.X.SCHEDULED,
                                  className: g.tab,
                                  children: _.intl.string(_.t.Fn6Odn)
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
