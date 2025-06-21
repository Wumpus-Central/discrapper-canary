n.d(t, { Z: () => _ });
var r = n(255367);
n(73800);
var i = n(399606),
    l = n(524437),
    a = n(481060),
    o = n(494404),
    s = n(377171),
    c = n(317632),
    u = n(602478),
    d = n(2818),
    p = n(768943),
    m = n(216789),
    f = n(818186),
    h = n(388032),
    g = n(413813);
function _(e) {
    let { tab: t, setTab: n, children: _, badgeState: b, closePopout: E } = e,
        { enabled: y, inInbox: x } = d.Z.useExperiment({ location: 'RecentsPopout' }),
        v = (0, m.Us)({ location: 'RecentsHeader' }),
        { enabled: O } = u.Z.useExperiment({ location: 'RecentsHeader' }),
        C = (0, i.e7)([c.Z], () => c.Z.getUnseenInviteCount()),
        j = (0, i.e7)([p.Z], () => p.Z.getOverdueMessageReminderCount());
    return (0, r.jsxs)(o.h4, {
        className: g.header,
        children: [
            (0, r.jsxs)('div', {
                className: g.headerTitle,
                children: [
                    (0, r.jsx)(a.xx7, {
                        size: 'md',
                        color: 'currentColor',
                        className: g.inboxIcon
                    }),
                    (0, r.jsx)(a.Text, {
                        className: g.inboxTitle,
                        variant: 'text-lg/semibold',
                        color: 'interactive-active',
                        children: h.intl.string(h.t.GSmTKC)
                    }),
                    (0, r.jsxs)('div', {
                        className: g.controls,
                        children: [_, (0, r.jsx)(f.Z, { closePopout: E })]
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.headerTabs,
                children: (0, r.jsxs)(a.njP, {
                    selectedItem: t,
                    type: 'top',
                    look: 'brand',
                    onItemSelect: n,
                    className: g.tabBar,
                    children: [
                        (0, r.jsxs)(a.njP.Item, {
                            id: l.X.FOR_YOU,
                            'aria-label': h.intl.string(h.t['En+D+v']),
                            className: g.tab,
                            children: [
                                h.intl.string(h.t['En+D+v']),
                                (null == b ? void 0 : b.badgeForYou)
                                    ? (0, r.jsx)(a.fWl, {
                                          color: s.Z.STATUS_DANGER,
                                          className: g.iconBadge
                                      })
                                    : null
                            ]
                        }),
                        (0, r.jsx)(a.njP.Item, {
                            id: l.X.UNREADS,
                            className: g.tab,
                            children: h.intl.string(h.t.sRUdBw)
                        }),
                        (0, r.jsx)(a.njP.Item, {
                            'aria-label': h.intl.string(h.t['GRZF9/']),
                            id: l.X.MENTIONS,
                            className: g.tab,
                            children: h.intl.string(h.t['GRZF9/'])
                        }),
                        O
                            ? (0, r.jsxs)(a.njP.Item, {
                                  'aria-label': 'game_invites',
                                  id: l.X.GAME_INVITES,
                                  className: g.tab,
                                  children: [
                                      h.intl.string(h.t.apq3cX),
                                      C > 0
                                          ? (0, r.jsx)(a.fWl, {
                                                color: s.Z.STATUS_DANGER,
                                                className: g.iconBadge
                                            })
                                          : null
                                  ]
                              })
                            : null,
                        y && x
                            ? (0, r.jsx)(a.njP.Item, {
                                  'aria-label': h.intl.string(h.t['2pAkDA']),
                                  id: l.X.BOOKMARKS,
                                  className: g.tab,
                                  children: 0 === j ? h.intl.string(h.t['2pAkDA']) : h.intl.formatToPlainString(h.t.I4fryM, { count: j })
                              })
                            : null,
                        v
                            ? (0, r.jsx)(a.njP.Item, {
                                  'aria-label': 'scheduled',
                                  id: l.X.SCHEDULED,
                                  className: g.tab,
                                  children: h.intl.string(h.t.Fn6Odn)
                              })
                            : null
                    ]
                })
            })
        ]
    });
}
