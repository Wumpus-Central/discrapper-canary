n.d(t, { Z: () => v });
var r = n(200651);
n(192379);
var i = n(399606),
    a = n(524437),
    o = n(481060),
    l = n(494404),
    s = n(377171),
    c = n(317632),
    d = n(602478),
    u = n(2818),
    p = n(768943),
    m = n(742989),
    f = n(216789),
    h = n(932232),
    g = n(818186),
    _ = n(388032),
    b = n(215921);
function v(e) {
    let { tab: t, setTab: n, children: v, badgeState: y, closePopout: x } = e,
        { showReminders: E } = m.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: O, inInbox: j } = u.Z.useExperiment({ location: 'RecentsPopout' }),
        N = (0, f.Us)({ location: 'RecentsHeader' }),
        { enabled: C } = d.Z.useExperiment({ location: 'RecentsHeader' }),
        I = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        S = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount()),
        { showForYouTab: T } = h.V.useExperiment({ location: 'RecentsHeader' });
    return (0, r.jsxs)(l.h4, {
        className: b.header,
        children: [
            (0, r.jsxs)('div', {
                className: b.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.inboxIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        className: b.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: _.NW.string(_.t.GSmTKC)
                    }),
                    (0, r.jsxs)('div', {
                        className: b.controls,
                        children: [v, (0, r.jsx)(g.Z, { closePopout: x })]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: b.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: b.tabBar,
                    children: [
                        T
                            ? (0, r.jsxs)(o.njP.Item, {
                                  id: a.X.FOR_YOU,
                                  'aria-label': _.NW.string(_.t['En+D+v']),
                                  className: b.tab,
                                  children: [
                                      _.NW.string(_.t['En+D+v']),
                                      (null == y ? void 0 : y.badgeForYou)
                                          ? (0, r.jsx)(o.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: b.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        (0, r.jsx)(o.njP.Item, {
                            id: a.X.UNREADS,
                            className: b.tab,
                            children: _.NW.string(_.t.sRUdBw)
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            'aria-label': _.NW.string(_.t['GRZF9/']),
                            id: a.X.MENTIONS,
                            className: b.tab,
                            children: _.NW.string(_.t['GRZF9/'])
                        }),
                        C
                            ? (0, r.jsxs)(o.njP.Item, {
                                  'aria-label': 'game_invites',
                                  id: a.X.GAME_INVITES,
                                  className: b.tab,
                                  children: [
                                      _.NW.string(_.t.apq3cX),
                                      I > 0
                                          ? (0, r.jsx)(o.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: b.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        O && j
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': _.NW.string(_.t['2pAkDA']),
                                  id: a.X.BOOKMARKS,
                                  className: b.tab,
                                  children: 0 === S ? _.NW.string(_.t['2pAkDA']) : _.NW.formatToPlainString(_.t.I4fryM, { count: S })
                              })
                            : null,
                        E && !O
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': 'todos',
                                  id: a.X.TODOS,
                                  className: b.tab,
                                  children: 0 === S ? _.NW.string(_.t.aUXxzc) : _.NW.formatToPlainString(_.t['5en8yc'], { count: S })
                              })
                            : null,
                        N
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': 'scheduled',
                                  id: a.X.SCHEDULED,
                                  className: b.tab,
                                  children: _.NW.string(_.t.Fn6Odn)
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
