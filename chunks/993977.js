n.d(t, {
    Z: function () {
        return v;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    s = n(58642),
    o = n(600164),
    c = n(695346),
    d = n(490983),
    u = n(626135),
    h = n(630388),
    m = n(804739),
    p = n(957657),
    g = n(34305),
    f = n(981631),
    _ = n(388032),
    E = n(330580);
function I(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let r = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, i.jsxs)(
            'div',
            {
                className: E.hiddenLibraryApplication,
                children: [
                    (0, i.jsxs)(o.Z, {
                        direction: o.Z.Direction.VERTICAL,
                        className: E.hiddenLibraryApplicationContent,
                        children: [
                            (0, i.jsx)('div', {
                                className: E.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application)
                            }),
                            null != t
                                ? (0, i.jsx)('div', {
                                      className: E.applicationSubText,
                                      children: f.EOG[t]
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(a.Clickable, {
                        className: E.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, i.jsx)(a.XSmallIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: E.restoreIcon
                        })
                    })
                ]
            },
            e.key
        );
    });
    return (0, i.jsxs)(a.FormSection, {
        className: E.hiddenLibraryApplications,
        children: [
            (0, i.jsx)(a.FormTitle, {
                className: E.hiddenLibraryApplicationsTitle,
                children: _.intl.string(_.t['5PJtrK'])
            }),
            r
        ]
    });
}
class C extends r.PureComponent {
    handleToggleShortcutDesktop(e) {
        c.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        c.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        u.default.track(f.rMx.APPLICATION_SETTINGS_UPDATED, {
            hidden_enabled: t,
            ...e.getAnalyticsData()
        });
    }
    renderBody() {
        let { hiddenLibraryApplicationViewItems: e, installShortcutDesktop: t, installShortcutStartMenu: n } = this.props;
        return (0, i.jsxs)('div', {
            className: E.body,
            children: [
                (0, m.Q)()
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(a.FormSwitch, {
                                  value: t,
                                  onChange: this.handleToggleShortcutDesktop,
                                  note: _.intl.string(_.t.vT61Nz),
                                  children: _.intl.string(_.t['9ID+Ki'])
                              }),
                              (0, i.jsx)(a.FormSwitch, {
                                  value: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                                  note: _.intl.string(_.t.cpYp0N),
                                  children: _.intl.string(_.t.vNpUMz)
                              }),
                              (0, i.jsx)(g.Z, {})
                          ]
                      })
                    : null,
                (0, i.jsx)(I, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e
                })
            ]
        });
    }
    render() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(p.Z, { currentRoute: f.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(a.ScrollerAuto, {
                    className: E.scroller,
                    children: this.renderBody()
                })
            ]
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleRestoreHiddenLibraryApplication'),
            (i = (e) => {
                let t = h.x9(e.getFlags(), f.eHb.HIDDEN);
                s.h(e.id, e.branchId, t), this.trackRestoreApplication(e, h.yE(t, f.eHb.HIDDEN));
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
function v() {
    let e = {
        installShortcutDesktop: c.Xc.useSetting(),
        installShortcutStartMenu: c.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, l.e7)([d.Z], () => d.Z.hiddenLibraryApplicationViewItems)
    };
    return (0, i.jsx)(C, { ...e });
}
