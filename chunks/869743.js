n.d(t, { Z: () => g });
var r = n(200651),
    i = n(120356),
    o = n.n(i),
    a = n(481060),
    s = n(726521),
    l = n(389052),
    c = n(388032),
    u = n(829598);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = (e) => {
        let { appRecord: t, closePopout: n, showAppReportingOption: i, selectedGuildId: o, selectedChannelId: l, children: u = null } = e;
        return (0, r.jsxs)(a.v2r, {
            navId: 'authorized-app-action-menu',
            onClose: n,
            'aria-label': c.NW.string(c.t.tKobzc),
            onSelect: void 0,
            children: [
                i
                    ? (0, r.jsx)(a.sNh, {
                          id: 'report',
                          label: c.NW.string(c.t['+78Pfn']),
                          color: 'danger',
                          action: () =>
                              (0, s.uu)({
                                  application: t,
                                  entrypoint: 'authorized_apps_settings',
                                  contextualGuildId: o,
                                  contextualChannelId: l
                              })
                      })
                    : null,
                u
            ]
        });
    },
    m = (e) => {
        let { appRecord: t, botUser: n, closePopout: i, showAppReportingOption: o, selectedGuildId: a, selectedChannelId: s } = e;
        return (0, r.jsx)(h, {
            appRecord: t,
            closePopout: i,
            showAppReportingOption: o,
            selectedGuildId: a,
            selectedChannelId: s,
            children: (0, l.Z)({
                user: n,
                location: 'UserSettingsAuthedApps',
                color: 'danger'
            })
        });
    },
    g = (e) => {
        let { appRecord: t, showAppReportingOption: n, selectedGuildId: i, selectedChannelId: s } = e;
        return (0, r.jsx)(a.yRy, {
            renderPopout: (e) => {
                let { closePopout: o } = e;
                return null == t.bot
                    ? (0, r.jsx)(h, {
                          appRecord: t,
                          closePopout: o,
                          showAppReportingOption: n,
                          selectedGuildId: i,
                          selectedChannelId: s
                      })
                    : (0, r.jsx)(m, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: o,
                          showAppReportingOption: n,
                          selectedGuildId: i,
                          selectedChannelId: s
                      });
            },
            align: 'right',
            position: 'bottom',
            children: (e) =>
                (0, r.jsx)(
                    a.P3F,
                    _(
                        f(
                            {
                                className: o()(u.actionMenuButton),
                                'aria-label': c.NW.string(c.t.UKOtz8)
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(a.xhG, {
                                size: 'xs',
                                color: a.TVs.colors.INTERACTIVE_NORMAL
                            })
                        }
                    )
                )
        });
    };
