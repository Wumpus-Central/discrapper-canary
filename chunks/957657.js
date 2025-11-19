n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(984370),
    s = n(703656),
    o = n(626135),
    c = n(804739),
    u = n(981631),
    d = n(388032),
    p = n(225930);
let f = (0, c.Q)() || !1,
    h = i.memo(function (e) {
        let { currentRoute: t, renderToolbar: n } = e,
            c = i.useContext(o.AnalyticsContext),
            h = f || t === u.Z5c.APPLICATION_LIBRARY_SETTINGS;
        return (0, r.jsxs)(a.Z, {
            className: p.libraryHeader,
            toolbar: null == n ? void 0 : n(),
            children: [
                (0, r.jsx)(a.Z.Icon, {
                    icon: l.vqy,
                    "aria-hidden": !0,
                }),
                (0, r.jsx)(a.Z.Title, { children: d.intl.string(d.t.cw57ar) }),
                (0, r.jsx)(a.Z.Divider, {}),
                (0, r.jsxs)(l.njP, {
                    type: "top-pill",
                    selectedItem: t,
                    onItemSelect: function (e) {
                        var n, r;
                        e !== t &&
                            (0, s.uL)(e, {
                                state: {
                                    analyticsSource:
                                        ((n = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    r = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (r = r.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    r.forEach(function (t) {
                                                        var r;
                                                        (r = n[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: r,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = r);
                                                    });
                                            }
                                            return e;
                                        })({}, c.location)),
                                        (r = r =
                                            {
                                                section: u.jXE.TABS,
                                                object: u.qAy.NAVIGATION_LINK,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(r)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                                              }),
                                        n),
                                },
                            });
                    },
                    children: [
                        (0, r.jsx)(l.njP.Item, {
                            id: u.Z5c.APPLICATION_LIBRARY,
                            children: d.intl.string(d.t.p7ARTB),
                        }),
                        h
                            ? (0, r.jsx)(l.njP.Item, {
                                  id: u.Z5c.APPLICATION_LIBRARY_SETTINGS,
                                  children: d.intl.string(d.t["3D5yo/"]),
                              })
                            : null,
                    ],
                }),
            ],
        });
    });
