n.d(t, { Z: () => m });
var i = n(200651),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    s = n(726521),
    o = n(389052),
    c = n(388032),
    d = n(829598);
let p = (e) => {
        let { appRecord: t, closePopout: n, showAppReportingOption: r, selectedGuildId: l, selectedChannelId: o, children: d = null } = e;
        return (0, i.jsxs)(a.v2r, {
            navId: 'authorized-app-action-menu',
            onClose: n,
            'aria-label': c.NW.string(c.t.tKobzc),
            onSelect: void 0,
            children: [
                r
                    ? (0, i.jsx)(a.sNh, {
                          id: 'report',
                          label: c.NW.string(c.t['+78Pfn']),
                          color: 'danger',
                          action: () =>
                              (0, s.uu)({
                                  application: t,
                                  entrypoint: 'authorized_apps_settings',
                                  contextualGuildId: l,
                                  contextualChannelId: o
                              })
                      })
                    : null,
                d
            ]
        });
    },
    u = (e) => {
        let { appRecord: t, botUser: n, closePopout: r, showAppReportingOption: l, selectedGuildId: a, selectedChannelId: s } = e;
        return (0, i.jsx)(p, {
            appRecord: t,
            closePopout: r,
            showAppReportingOption: l,
            selectedGuildId: a,
            selectedChannelId: s,
            children: (0, o.Z)({
                user: n,
                location: 'UserSettingsAuthedApps',
                color: 'danger'
            })
        });
    },
    m = (e) => {
        let { appRecord: t, showAppReportingOption: n, selectedGuildId: r, selectedChannelId: s } = e;
        return (0, i.jsx)(a.yRy, {
            renderPopout: (e) => {
                let { closePopout: l } = e;
                return null == t.bot
                    ? (0, i.jsx)(p, {
                          appRecord: t,
                          closePopout: l,
                          showAppReportingOption: n,
                          selectedGuildId: r,
                          selectedChannelId: s
                      })
                    : (0, i.jsx)(u, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: l,
                          showAppReportingOption: n,
                          selectedGuildId: r,
                          selectedChannelId: s
                      });
            },
            align: 'right',
            position: 'bottom',
            children: (e) => {
                var t, n;
                return (0, i.jsx)(
                    a.P3F,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    (i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i);
                                });
                        }
                        return e;
                    })(
                        {
                            className: l()(d.actionMenuButton),
                            'aria-label': c.NW.string(c.t.UKOtz8)
                        },
                        e
                    )),
                    (n = n =
                        {
                            children: (0, i.jsx)(a.xhG, {
                                size: 'xs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL
                            })
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var i = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, i);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        });
    };
