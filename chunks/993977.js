n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(95015),
    a = n(442837),
    s = n(481060),
    o = n(58642),
    c = n(600164),
    u = n(695346),
    d = n(490983),
    p = n(626135),
    f = n(804739),
    h = n(957657),
    g = n(34305),
    m = n(981631),
    _ = n(388032),
    b = n(77839);
function E(e, t, n) {
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
function O(e) {
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
                E(e, t, n[t]);
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
                className: b.hiddenLibraryApplication,
                children: [
                    (0, r.jsxs)(c.Z, {
                        direction: c.Z.Direction.VERTICAL,
                        className: b.hiddenLibraryApplicationContent,
                        children: [
                            (0, r.jsx)("div", {
                                className: b.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: b.applicationSubText,
                                      children: m.EOG[t],
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(s.P3F, {
                        className: b.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, r.jsx)(s.Dio, {
                            size: "md",
                            color: "currentColor",
                            className: b.restoreIcon,
                        }),
                    }),
                ],
            },
            e.key,
        );
    });
    return (0, r.jsxs)("div", {
        className: b.hiddenLibraryApplications,
        children: [
            (0, r.jsx)(s.Heading, {
                variant: "heading-md/semibold",
                className: b.hiddenLibraryApplicationsTitle,
                children: _.intl.string(_.t["5PJtrH"]),
            }),
            i,
        ],
    });
}
class v extends i.PureComponent {
    handleToggleShortcutDesktop(e) {
        u.Xc.updateSetting(e);
    }
    handleToggleShortcutStartMenu(e) {
        u.Pe.updateSetting(e);
    }
    trackRestoreApplication(e, t) {
        p.default.track(m.rMx.APPLICATION_SETTINGS_UPDATED, O({ hidden_enabled: t }, e.getAnalyticsData()));
    }
    renderBody() {
        let {
            hiddenLibraryApplicationViewItems: e,
            installShortcutDesktop: t,
            installShortcutStartMenu: n,
        } = this.props;
        return (0, r.jsxs)("div", {
            className: b.body,
            children: [
                (0, f.Q)()
                    ? (0, r.jsxs)(s.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(s.rsf, {
                                  label: _.intl.string(_.t["9ID+Kh"]),
                                  description: _.intl.string(_.t.vT61N0),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, r.jsx)(s.izJ, {}),
                              (0, r.jsx)(s.rsf, {
                                  label: _.intl.string(_.t.vNpUMz),
                                  description: _.intl.string(_.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, r.jsx)(s.izJ, {}),
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
                (0, r.jsx)(s.w0Z, {
                    className: b.scroller,
                    children: this.renderBody(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "handleRestoreHiddenLibraryApplication", (e) => {
                let t = l.x9(e.getFlags(), m.eHb.HIDDEN);
                o.h(e.id, e.branchId, t), this.trackRestoreApplication(e, l.yE(t, m.eHb.HIDDEN));
            });
    }
}
function I() {
    let e = {
        installShortcutDesktop: u.Xc.useSetting(),
        installShortcutStartMenu: u.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, a.e7)([d.Z], () => d.Z.hiddenLibraryApplicationViewItems),
    };
    return (0, r.jsx)(v, O({}, e));
}
