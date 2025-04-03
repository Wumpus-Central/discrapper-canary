n.d(t, { Z: () => I }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(58642),
    s = n(600164),
    c = n(695346),
    u = n(490983),
    d = n(626135),
    p = n(630388),
    h = n(804739),
    f = n(957657),
    g = n(34305),
    m = n(981631),
    b = n(388032),
    _ = n(876733);
function E(e, t, n) {
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
function O(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function N(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let i = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, r.jsxs)(
            'div',
            {
                className: _.hiddenLibraryApplication,
                children: [
                    (0, r.jsxs)(s.Z, {
                        direction: s.Z.Direction.VERTICAL,
                        className: _.hiddenLibraryApplicationContent,
                        children: [
                            (0, r.jsx)('div', {
                                className: _.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application)
                            }),
                            null != t
                                ? (0, r.jsx)('div', {
                                      className: _.applicationSubText,
                                      children: m.EOG[t]
                                  })
                                : null
                        ]
                    }),
                    (0, r.jsx)(a.P3F, {
                        className: _.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, r.jsx)(a.Dio, {
                            size: 'md',
                            color: 'currentColor',
                            className: _.restoreIcon
                        })
                    })
                ]
            },
            e.key
        );
    });
    return (0, r.jsxs)(a.hjN, {
        className: _.hiddenLibraryApplications,
        children: [
            (0, r.jsx)(a.vwX, {
                className: _.hiddenLibraryApplicationsTitle,
                children: b.NW.string(b.t['5PJtrK'])
            }),
            i
        ]
    });
}
class y extends i.PureComponent {
    handleToggleShortcutDesktop(e) {
        c.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        c.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        d.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, O({ hidden_enabled: t }, e.getAnalyticsData()));
    }
    renderBody() {
        let { hiddenLibraryApplicationViewItems: e, installShortcutDesktop: t, installShortcutStartMenu: n } = this.props;
        return (0, r.jsxs)('div', {
            className: _.body,
            children: [
                (0, h.Q)()
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(a.j7V, {
                                  value: t,
                                  onChange: this.handleToggleShortcutDesktop,
                                  note: b.NW.string(b.t.vT61Nz),
                                  children: b.NW.string(b.t['9ID+Ki'])
                              }),
                              (0, r.jsx)(a.j7V, {
                                  value: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                                  note: b.NW.string(b.t.cpYp0N),
                                  children: b.NW.string(b.t.vNpUMz)
                              }),
                              (0, r.jsx)(g.Z, {})
                          ]
                      })
                    : null,
                (0, r.jsx)(N, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e
                })
            ]
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(f.Z, { currentRoute: m.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, r.jsx)(a.w0Z, {
                    className: _.scroller,
                    children: this.renderBody()
                })
            ]
        });
    }
    constructor(...e) {
        super(...e),
            E(this, 'handleRestoreHiddenLibraryApplication', (e) => {
                let t = p.x9(e.getFlags(), m.eHb.HIDDEN);
                o.h(e.id, e.branchId, t), this.trackRestoreApplication(e, p.yE(t, m.eHb.HIDDEN));
            });
    }
}
function I() {
    let e = {
        installShortcutDesktop: c.Xc.useSetting(),
        installShortcutStartMenu: c.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, l.e7)([u.Z], () => u.Z.hiddenLibraryApplicationViewItems)
    };
    return (0, r.jsx)(y, O({}, e));
}
