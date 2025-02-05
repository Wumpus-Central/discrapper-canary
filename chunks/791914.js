n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var l = n(399606),
    a = n(524437),
    r = n(481060),
    s = n(494404),
    o = n(377171),
    c = n(317632),
    d = n(602478),
    u = n(2818),
    m = n(768943),
    _ = n(742989),
    h = n(216789),
    p = n(818186),
    g = n(388032),
    f = n(76334);
function x(e) {
    let { tab: t, setTab: n, children: x, badgeState: C, closePopout: v } = e,
        { showReminders: E } = _.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: I, inInbox: N } = u.Z.useExperiment({ location: 'RecentsPopout' }),
        S = (0, h.Us)({ location: 'RecentsHeader' }),
        { enabled: T } = d.Z.useExperiment({ location: 'RecentsHeader' }),
        b = (0, l.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        A = (0, l.e7)([m.Z], () => m.Z.getOverdueMessageReminderCount());
    return (0, i.jsxs)(s.h4, {
        className: f.header,
        children: [
            (0, i.jsxs)('div', {
                className: f.headerTitle,
                children: [
                    (0, i.jsx)(r.xx7, {
                        size: 'md',
                        color: 'currentColor',
                        className: f.inboxIcon
                    }),
                    (0, i.jsx)(r.Text, {
                        className: f.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: g.intl.string(g.t.GSmTKC)
                    }),
                    (0, i.jsxs)('div', {
                        className: f.controls,
                        children: [x, (0, i.jsx)(p.Z, { closePopout: v })]
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: f.headerTabs,
                children: (0, i.jsxs)(r.njP, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: f.tabBar,
                    children: [
                        (0, i.jsxs)(r.njP.Item, {
                            id: a.X.FOR_YOU,
                            'aria-label': g.intl.string(g.t['En+D+v']),
                            className: f.tab,
                            children: [
                                g.intl.string(g.t['En+D+v']),
                                (null == C ? void 0 : C.badgeForYou)
                                    ? (0, i.jsx)(r.fWl, {
                                          color: o.Z.STATUS_DANGER,
                                          className: f.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, i.jsx)(r.njP.Item, {
                            id: a.X.UNREADS,
                            className: f.tab,
                            children: g.intl.string(g.t.sRUdBw)
                        }),
                        (0, i.jsx)(r.njP.Item, {
                            'aria-label': g.intl.string(g.t['GRZF9/']),
                            id: a.X.MENTIONS,
                            className: f.tab,
                            children: g.intl.string(g.t['GRZF9/'])
                        }),
                        T
                            ? (0, i.jsxs)(r.njP.Item, {
                                  'aria-label': 'game_invites',
                                  id: a.X.GAME_INVITES,
                                  className: f.tab,
                                  children: [
                                      g.intl.string(g.t.apq3cX),
                                      b > 0
                                          ? (0, i.jsx)(r.fWl, {
                                                color: o.Z.STATUS_DANGER,
                                                className: f.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        I && N
                            ? (0, i.jsx)(r.njP.Item, {
                                  'aria-label': g.intl.string(g.t['2pAkDA']),
                                  id: a.X.BOOKMARKS,
                                  className: f.tab,
                                  children: 0 === A ? g.intl.string(g.t['2pAkDA']) : g.intl.formatToPlainString(g.t.I4fryM, { count: A })
                              })
                            : null,
                        E && !I
                            ? (0, i.jsx)(r.njP.Item, {
                                  'aria-label': 'todos',
                                  id: a.X.TODOS,
                                  className: f.tab,
                                  children: 0 === A ? g.intl.string(g.t.aUXxzc) : g.intl.formatToPlainString(g.t['5en8yc'], { count: A })
                              })
                            : null,
                        S
                            ? (0, i.jsx)(r.njP.Item, {
                                  'aria-label': 'scheduled',
                                  id: a.X.SCHEDULED,
                                  className: f.tab,
                                  children: g.intl.string(g.t.Fn6Odn)
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
