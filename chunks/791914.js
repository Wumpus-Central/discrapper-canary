n.d(t, { Z: () => b });
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
    h = n(818186),
    g = n(388032),
    _ = n(829540);
function b(e) {
    let { tab: t, setTab: n, children: b, badgeState: v, closePopout: y } = e,
        { showReminders: x } = m.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: O, inInbox: E } = u.Z.useExperiment({ location: 'RecentsPopout' }),
        j = (0, f.Us)({ location: 'RecentsHeader' }),
        { enabled: N } = d.Z.useExperiment({ location: 'RecentsHeader' }),
        C = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        I = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(l.h4, {
        className: _.header,
        children: [
            (0, r.jsxs)('div', {
                className: _.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: 'md',
                        color: 'currentColor',
                        className: _.inboxIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        className: _.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: g.NW.string(g.t.GSmTKC)
                    }),
                    (0, r.jsxs)('div', {
                        className: _.controls,
                        children: [b, (0, r.jsx)(h.Z, { closePopout: y })]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: _.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: _.tabBar,
                    children: [
                        (0, r.jsxs)(o.njP.Item, {
                            id: a.X.FOR_YOU,
                            'aria-label': g.NW.string(g.t['En+D+v']),
                            className: _.tab,
                            children: [
                                g.NW.string(g.t['En+D+v']),
                                (null == v ? void 0 : v.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: s.Z.STATUS_DANGER,
                                          className: _.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: a.X.UNREADS,
                            className: _.tab,
                            children: g.NW.string(g.t.sRUdBw)
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            'aria-label': g.NW.string(g.t['GRZF9/']),
                            id: a.X.MENTIONS,
                            className: _.tab,
                            children: g.NW.string(g.t['GRZF9/'])
                        }),
                        N
                            ? (0, r.jsxs)(o.njP.Item, {
                                  'aria-label': 'game_invites',
                                  id: a.X.GAME_INVITES,
                                  className: _.tab,
                                  children: [
                                      g.NW.string(g.t.apq3cX),
                                      C > 0
                                          ? (0, r.jsx)(o.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: _.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        O && E
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': g.NW.string(g.t['2pAkDA']),
                                  id: a.X.BOOKMARKS,
                                  className: _.tab,
                                  children: 0 === I ? g.NW.string(g.t['2pAkDA']) : g.NW.formatToPlainString(g.t.I4fryM, { count: I })
                              })
                            : null,
                        x && !O
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': 'todos',
                                  id: a.X.TODOS,
                                  className: _.tab,
                                  children: 0 === I ? g.NW.string(g.t.aUXxzc) : g.NW.formatToPlainString(g.t['5en8yc'], { count: I })
                              })
                            : null,
                        j
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': 'scheduled',
                                  id: a.X.SCHEDULED,
                                  className: _.tab,
                                  children: g.NW.string(g.t.Fn6Odn)
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
