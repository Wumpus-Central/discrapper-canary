n.d(t, { Z: () => m });
var i = n(200651),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    r = n(726521),
    o = n(389052),
    c = n(388032),
    d = n(273066);
let p = (e) => {
        let { appRecord: t, closePopout: n, showAppReportingOption: l, selectedGuildId: s, selectedChannelId: o, children: d = null } = e;
        return (0, i.jsxs)(a.v2r, {
            navId: 'authorized-app-action-menu',
            onClose: n,
            'aria-label': c.intl.string(c.t.tKobzc),
            onSelect: void 0,
            children: [
                l
                    ? (0, i.jsx)(a.sNh, {
                          id: 'report',
                          label: c.intl.string(c.t['+78Pfn']),
                          color: 'danger',
                          action: () =>
                              (0, r.uu)({
                                  application: t,
                                  entrypoint: 'authorized_apps_settings',
                                  contextualGuildId: s,
                                  contextualChannelId: o
                              })
                      })
                    : null,
                d
            ]
        });
    },
    u = (e) => {
        let { appRecord: t, botUser: n, closePopout: l, showAppReportingOption: s, selectedGuildId: a, selectedChannelId: r } = e;
        return (0, i.jsx)(p, {
            appRecord: t,
            closePopout: l,
            showAppReportingOption: s,
            selectedGuildId: a,
            selectedChannelId: r,
            children: (0, o.Z)({
                user: n,
                location: 'UserSettingsAuthedApps',
                color: 'danger'
            })
        });
    },
    m = (e) => {
        let { appRecord: t, showAppReportingOption: n, selectedGuildId: l, selectedChannelId: r } = e;
        return (0, i.jsx)(a.yRy, {
            renderPopout: (e) => {
                let { closePopout: s } = e;
                return null == t.bot
                    ? (0, i.jsx)(p, {
                          appRecord: t,
                          closePopout: s,
                          showAppReportingOption: n,
                          selectedGuildId: l,
                          selectedChannelId: r
                      })
                    : (0, i.jsx)(u, {
                          appRecord: t,
                          botUser: t.bot,
                          closePopout: s,
                          showAppReportingOption: n,
                          selectedGuildId: l,
                          selectedChannelId: r
                      });
            },
            align: 'right',
            position: 'bottom',
            children: (e) =>
                (0, i.jsx)(a.P3F, {
                    className: s()(d.actionMenuButton),
                    'aria-label': c.intl.string(c.t.UKOtz8),
                    ...e,
                    children: (0, i.jsx)(a.xhG, {
                        size: 'xs',
                        color: a.TVs.colors.INTERACTIVE_NORMAL
                    })
                })
        });
    };
