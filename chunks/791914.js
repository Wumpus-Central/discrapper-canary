n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(399606),
    a = n(524437),
    l = n(481060),
    o = n(494404),
    s = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(2818),
    p = n(768943),
    m = n(742989),
    f = n(216789),
    h = n(932232),
    g = n(818186),
    _ = n(388032),
    b = n(413813);
function x(e) {
    let { tab: t, setTab: n, children: x, badgeState: y, closePopout: E } = e,
        { showReminders: v } = m.Z.useExperiment({ location: 'RecentsHeader' }, { autoTrackExposure: !1 }),
        { enabled: N, inInbox: O } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        j = (0, f.Us)({ location: 'RecentsHeader' }),
        { enabled: C } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        S = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        I = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount()),
        { showForYouTab: T } = h.V.useExperiment({ location: 'RecentsHeader' });
    return (0, r.jsxs)(o.h4, {
        className: b.header,
        children: [
            (0, r.jsxs)('div', {
                className: b.headerTitle,
                children: [
                    (0, r.jsx)(l.xx7, {
                        size: 'md',
                        color: 'currentColor',
                        className: b.inboxIcon
                    }),
                    (0, r.jsx)(l.Text, {
                        className: b.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: _.NW.string(_.t.GSmTKC)
                    }),
                    (0, r.jsxs)('div', {
                        className: b.controls,
                        children: [x, (0, r.jsx)(g.Z, { closePopout: E })]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: b.headerTabs,
                children: (0, r.jsxs)(l.njP, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: b.tabBar,
                    children: [
                        T
                            ? (0, r.jsxs)(l.njP.Item, {
                                  id: a.X.FOR_YOU,
                                  'aria-label': _.NW.string(_.t['En+D+v']),
                                  className: b.tab,
                                  children: [
                                      _.NW.string(_.t['En+D+v']),
                                      (null == y ? void 0 : y.badgeForYou)
                                          ? (0, r.jsx)(l.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: b.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        (0, r.jsx)(l.njP.Item, {
                            id: a.X.UNREADS,
                            className: b.tab,
                            children: _.NW.string(_.t.sRUdBw)
                        }),
                        (0, r.jsx)(l.njP.Item, {
                            'aria-label': _.NW.string(_.t['GRZF9/']),
                            id: a.X.MENTIONS,
                            className: b.tab,
                            children: _.NW.string(_.t['GRZF9/'])
                        }),
                        C
                            ? (0, r.jsxs)(l.njP.Item, {
                                  'aria-label': 'game_invites',
                                  id: a.X.GAME_INVITES,
                                  className: b.tab,
                                  children: [
                                      _.NW.string(_.t.apq3cX),
                                      S > 0
                                          ? (0, r.jsx)(l.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: b.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        N && O
                            ? (0, r.jsx)(l.njP.Item, {
                                  'aria-label': _.NW.string(_.t['2pAkDA']),
                                  id: a.X.BOOKMARKS,
                                  className: b.tab,
                                  children: 0 === I ? _.NW.string(_.t['2pAkDA']) : _.NW.formatToPlainString(_.t.I4fryM, { count: I })
                              })
                            : null,
                        v && !N
                            ? (0, r.jsx)(l.njP.Item, {
                                  'aria-label': 'todos',
                                  id: a.X.TODOS,
                                  className: b.tab,
                                  children: 0 === I ? _.NW.string(_.t.aUXxzc) : _.NW.formatToPlainString(_.t['5en8yc'], { count: I })
                              })
                            : null,
                        j
                            ? (0, r.jsx)(l.njP.Item, {
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
