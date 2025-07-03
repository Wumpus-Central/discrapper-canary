n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(524437),
    o = n(481060),
    a = n(494404),
    s = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(2818),
    h = n(768943),
    p = n(216789),
    f = n(818186),
    g = n(388032),
    m = n(413813);
function b(e) {
    let { tab: t, setTab: n, children: b, badgeState: _, closePopout: O } = e,
        { enabled: y, inInbox: v } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        C = (0, p.Us)({ location: 'RecentsHeader' }),
        { enabled: j } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        E = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        S = (0, i.e7)([h.Z], () => h.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(a.h4, {
        className: m.header,
        children: [
            (0, r.jsxs)('div', {
                className: m.headerTitle,
                children: [
                    (0, r.jsx)(o.xx7, {
                        size: 'md',
                        color: 'currentColor',
                        className: m.inboxIcon
                    }),
                    (0, r.jsx)(o.Text, {
                        className: m.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: g.intl.string(g.t.GSmTKC)
                    }),
                    (0, r.jsxs)('div', {
                        className: m.controls,
                        children: [b, (0, r.jsx)(f.Z, { closePopout: O })]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: m.headerTabs,
                children: (0, r.jsxs)(o.njP, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: m.tabBar,
                    children: [
                        (0, r.jsxs)(o.njP.Item, {
                            id: l.X.FOR_YOU,
                            'aria-label': g.intl.string(g.t['En+D+v']),
                            className: m.tab,
                            children: [
                                g.intl.string(g.t['En+D+v']),
                                (null == _ ? void 0 : _.badgeForYou)
                                    ? (0, r.jsx)(o.fWl, {
                                          color: s.Z.STATUS_DANGER,
                                          className: m.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            id: l.X.UNREADS,
                            className: m.tab,
                            children: g.intl.string(g.t.sRUdBw)
                        }),
                        (0, r.jsx)(o.njP.Item, {
                            'aria-label': g.intl.string(g.t['GRZF9/']),
                            id: l.X.MENTIONS,
                            className: m.tab,
                            children: g.intl.string(g.t['GRZF9/'])
                        }),
                        j
                            ? (0, r.jsxs)(o.njP.Item, {
                                  'aria-label': 'game_invites',
                                  id: l.X.GAME_INVITES,
                                  className: m.tab,
                                  children: [
                                      g.intl.string(g.t.apq3cX),
                                      E > 0
                                          ? (0, r.jsx)(o.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: m.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        y && v
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': g.intl.string(g.t['2pAkDA']),
                                  id: l.X.BOOKMARKS,
                                  className: m.tab,
                                  children: 0 === S ? g.intl.string(g.t['2pAkDA']) : g.intl.formatToPlainString(g.t.I4fryM, { count: S })
                              })
                            : null,
                        C
                            ? (0, r.jsx)(o.njP.Item, {
                                  'aria-label': 'scheduled',
                                  id: l.X.SCHEDULED,
                                  className: m.tab,
                                  children: g.intl.string(g.t.Fn6Odn)
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
