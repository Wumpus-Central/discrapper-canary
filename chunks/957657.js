var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(984370),
    s = n(703656),
    o = n(626135),
    c = n(804739),
    d = n(981631),
    u = n(388032),
    h = n(144402);
let m = (0, c.Q)() || !1;
t.Z = r.memo(function (e) {
    let { currentRoute: t, renderToolbar: n } = e,
        c = r.useContext(o.AnalyticsContext),
        p = m || t === d.Z5c.APPLICATION_LIBRARY_SETTINGS;
    return (0, i.jsxs)(a.Z, {
        className: h.libraryHeader,
        toolbar: null == n ? void 0 : n(),
        children: [
            (0, i.jsx)(a.Z.Icon, {
                icon: l.InventoryIcon,
                'aria-hidden': !0
            }),
            (0, i.jsx)(a.Z.Title, { children: u.intl.string(u.t.cw57am) }),
            (0, i.jsx)(a.Z.Divider, {}),
            (0, i.jsxs)(l.TabBar, {
                type: 'top-pill',
                selectedItem: t,
                onItemSelect: function (e) {
                    e !== t &&
                        (0, s.uL)(e, {
                            state: {
                                analyticsSource: {
                                    ...c.location,
                                    section: d.jXE.TABS,
                                    object: d.qAy.NAVIGATION_LINK
                                }
                            }
                        });
                },
                children: [
                    (0, i.jsx)(l.TabBar.Item, {
                        id: d.Z5c.APPLICATION_LIBRARY,
                        children: u.intl.string(u.t.p7ARTE)
                    }),
                    p
                        ? (0, i.jsx)(l.TabBar.Item, {
                              id: d.Z5c.APPLICATION_LIBRARY_SETTINGS,
                              children: u.intl.string(u.t['3D5yo6'])
                          })
                        : null
                ]
            })
        ]
    });
});
