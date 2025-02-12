n.d(t, { Z: () => N }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
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
    _ = n(981631),
    f = n(388032),
    E = n(994074);
function I(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let l = t.map((e) => {
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
                                      children: _.EOG[t]
                                  })
                                : null
                        ]
                    }),
                    (0, i.jsx)(a.P3F, {
                        className: E.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, i.jsx)(a.Dio, {
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
    return (0, i.jsxs)(a.hjN, {
        className: E.hiddenLibraryApplications,
        children: [
            (0, i.jsx)(a.vwX, {
                className: E.hiddenLibraryApplicationsTitle,
                children: f.intl.string(f.t['5PJtrK'])
            }),
            l
        ]
    });
}
class C extends l.PureComponent {
    handleToggleShortcutDesktop(e) {
        c.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        c.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        u.default.track(_.rMx.APPLICATION_SETTINGS_UPDATED, {
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
                    ? (0, i.jsxs)(l.Fragment, {
                          children: [
                              (0, i.jsx)(a.j7V, {
                                  value: t,
                                  onChange: this.handleToggleShortcutDesktop,
                                  note: f.intl.string(f.t.vT61Nz),
                                  children: f.intl.string(f.t['9ID+Ki'])
                              }),
                              (0, i.jsx)(a.j7V, {
                                  value: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                                  note: f.intl.string(f.t.cpYp0N),
                                  children: f.intl.string(f.t.vNpUMz)
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
                (0, i.jsx)(p.Z, { currentRoute: _.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, i.jsx)(a.w0Z, {
                    className: E.scroller,
                    children: this.renderBody()
                })
            ]
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleRestoreHiddenLibraryApplication'),
            (n = (e) => {
                let t = h.x9(e.getFlags(), _.eHb.HIDDEN);
                s.h(e.id, e.branchId, t), this.trackRestoreApplication(e, h.yE(t, _.eHb.HIDDEN));
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
function N() {
    let e = {
        installShortcutDesktop: c.Xc.useSetting(),
        installShortcutStartMenu: c.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, r.e7)([d.Z], () => d.Z.hiddenLibraryApplicationViewItems)
    };
    return (0, i.jsx)(C, { ...e });
}
