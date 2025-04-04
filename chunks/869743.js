n.d(t, { Z: () => m });
var r = n(200651),
    i = n(481060),
    o = n(299206),
    a = n(726521),
    s = n(389052),
    l = n(388032),
    c = n(923492);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = (e) => {
        let { appRecord: t, closePopout: n, showAppReportingOption: s, selectedGuildId: c, selectedChannelId: u, children: d = null } = e,
            f = (0, o.Z)({
                id: t.id,
                label: l.NW.string(l.t['+NP/b2'])
            });
        return (0, r.jsxs)(i.v2r, {
            navId: 'authorized-app-action-menu',
            onClose: n,
            'aria-label': l.NW.string(l.t.tKobzc),
            onSelect: void 0,
            children: [
                s
                    ? (0, r.jsx)(i.sNh, {
                          id: 'report',
                          label: l.NW.string(l.t['+78Pfn']),
                          color: 'danger',
                          action: () =>
                              (0, a.uu)({
                                  application: t,
                                  entrypoint: 'authorized_apps_settings',
                                  contextualGuildId: c,
                                  contextualChannelId: u
                              })
                      })
                    : null,
                d,
                f
            ]
        });
    },
    h = (e) => {
        let { appRecord: t, botUser: n, closePopout: i, showAppReportingOption: o, selectedGuildId: a, selectedChannelId: l } = e;
        return (0, r.jsx)(p, {
            appRecord: t,
            closePopout: i,
            showAppReportingOption: o,
            selectedGuildId: a,
            selectedChannelId: l,
            children: (0, s.Z)({
                user: n,
                location: 'UserSettingsAuthedApps',
                color: 'danger'
            })
        });
    },
    m = (e) => {
        let { appRecord: t, showAppReportingOption: n, selectedGuildId: o, selectedChannelId: a } = e;
        return (0, r.jsx)(i.yRy, {
            renderPopout: (e) => {
                let { closePopout: i } = e;
                return null == t.bot
                    ? (0, r.jsx)(p, {
                          appRecord: t,
                          closePopout: i,
                          showAppReportingOption: n,
                          selectedGuildId: o,
                          selectedChannelId: a
                      })
                    : (0, r.jsx)(h, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: i,
                          showAppReportingOption: n,
                          selectedGuildId: o,
                          selectedChannelId: a
                      });
            },
            align: 'right',
            position: 'bottom',
            children: (e) =>
                (0, r.jsx)(
                    i.P3F,
                    _(
                        d(
                            {
                                className: c.actionMenuButton,
                                'aria-label': l.NW.string(l.t.UKOtz8)
                            },
                            e
                        ),
                        {
                            children: (0, r.jsx)(i.xhG, {
                                size: 'xs',
                                color: i.TVs.colors.INTERACTIVE_NORMAL
                            })
                        }
                    )
                )
        });
    };
