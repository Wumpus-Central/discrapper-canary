n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    o = n(58642),
    s = n(600164),
    c = n(695346),
    u = n(490983),
    d = n(626135),
    p = n(630388),
    f = n(804739),
    h = n(957657),
    g = n(34305),
    m = n(981631),
    b = n(388032),
    _ = n(77839);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function y(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let i = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, r.jsxs)(
            "div",
            {
                className: _.hiddenLibraryApplication,
                children: [
                    (0, r.jsxs)(s.Z, {
                        direction: s.Z.Direction.VERTICAL,
                        className: _.hiddenLibraryApplicationContent,
                        children: [
                            (0, r.jsx)("div", {
                                className: _.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: _.applicationSubText,
                                      children: m.EOG[t],
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(a.P3F, {
                        className: _.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, r.jsx)(a.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: _.restoreIcon,
                        }),
                    }),
                ],
            },
            e.key,
        );
    });
    return (0, r.jsxs)(a.hjN, {
        className: _.hiddenLibraryApplications,
        children: [
            (0, r.jsx)(a.vwX, {
                className: _.hiddenLibraryApplicationsTitle,
                children: b.intl.string(b.t["5PJtrK"]),
            }),
            i,
        ],
    });
}
class v extends i.PureComponent {
    handleToggleShortcutDesktop(e) {
        c.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        c.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        d.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, E({ hidden_enabled: t }, e.getAnalyticsData()));
    }
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, r.jsxs)("div", {
            className: _.body,
            children: [
                (0, f.Q)()
                    ? (0, r.jsxs)(a.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(a.rsf, {
                                  label: b.intl.string(b.t["9ID+Ki"]),
                                  description: b.intl.string(b.t.vT61Nz),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, r.jsx)(a.izJ, {}),
                              (0, r.jsx)(a.rsf, {
                                  label: b.intl.string(b.t.vNpUMz),
                                  description: b.intl.string(b.t.cpYp0N),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, r.jsx)(a.izJ, {}),
                              (0, r.jsx)(g.Z, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(y, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e,
                }),
            ],
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(h.Z, { currentRoute: m.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, r.jsx)(a.w0Z, {
                    className: _.scroller,
                    children: this.renderBody(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            O(this, "handleRestoreHiddenLibraryApplication", (e) => {
                let t = p.x9(e.getFlags(), m.eHb.HIDDEN);
                o.h(e.id, e.branchId, t), this.trackRestoreApplication(e, p.yE(t, m.eHb.HIDDEN));
            });
    }
}
function I() {
    let e = {
        installShortcutDesktop: c.Xc.useSetting(),
        installShortcutStartMenu: c.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, l.e7)([u.Z], () => u.Z.hiddenLibraryApplicationViewItems),
    };
    return (0, r.jsx)(v, E({}, e));
}
