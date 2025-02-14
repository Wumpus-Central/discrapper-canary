n.d(t, { Z: () => p });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(984370),
    s = n(703656),
    o = n(626135),
    d = n(804739),
    c = n(981631),
    u = n(388032),
    h = n(855154);
let m = (0, d.Q)() || !1,
    p = l.memo(function (e) {
        let { currentRoute: t, renderToolbar: n } = e,
            d = l.useContext(o.AnalyticsContext),
            p = m || t === c.Z5c.APPLICATION_LIBRARY_SETTINGS;
        return (0, i.jsxs)(a.Z, {
            className: h.libraryHeader,
            toolbar: null == n ? void 0 : n(),
            children: [
                (0, i.jsx)(a.Z.Icon, {
                    icon: r.vqy,
                    'aria-hidden': !0
                }),
                (0, i.jsx)(a.Z.Title, { children: u.intl.string(u.t.cw57am) }),
                (0, i.jsx)(a.Z.Divider, {}),
                (0, i.jsxs)(r.njP, {
                    type: 'top-pill',
                    selectedItem: t,
                    onItemSelect: function (e) {
                        e !== t &&
                            (0, s.uL)(e, {
                                state: {
                                    analyticsSource: {
                                        ...d.location,
                                        section: c.jXE.TABS,
                                        object: c.qAy.NAVIGATION_LINK
                                    }
                                }
                            });
                    },
                    children: [
                        (0, i.jsx)(r.njP.Item, {
                            id: c.Z5c.APPLICATION_LIBRARY,
                            children: u.intl.string(u.t.p7ARTE)
                        }),
                        p
                            ? (0, i.jsx)(r.njP.Item, {
                                  id: c.Z5c.APPLICATION_LIBRARY_SETTINGS,
                                  children: u.intl.string(u.t['3D5yo6'])
                              })
                            : null
                    ]
                })
            ]
        });
    });
