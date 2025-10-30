n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(442837),
    a = n(481060),
    s = n(58642),
    o = n(600164),
    c = n(695346),
    u = n(490983),
    d = n(626135),
    p = n(630388),
    f = n(804739),
    m = n(957657),
    h = n(34305),
    g = n(981631),
    _ = n(388032),
    b = n(936390);
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
function I(e) {
    let { applicationViewItems: t, restoreApplication: n } = e;
    if (0 === t.length) return null;
    let i = t.map((e) => {
        let t = e.libraryApplication.getDistributor();
        return (0, r.jsxs)(
            "div",
            {
                className: b.hiddenLibraryApplication,
                children: [
                    (0, r.jsxs)(o.Z, {
                        direction: o.Z.Direction.VERTICAL,
                        className: b.hiddenLibraryApplicationContent,
                        children: [
                            (0, r.jsx)("div", {
                                className: b.applicationName,
                                children: e.libraryApplication.getBranchedName(e.application),
                            }),
                            null != t
                                ? (0, r.jsx)("div", {
                                      className: b.applicationSubText,
                                      children: g.EOG[t],
                                  })
                                : null,
                        ],
                    }),
                    (0, r.jsx)(a.P3F, {
                        className: b.restoreButton,
                        onClick: () => n(e.libraryApplication),
                        children: (0, r.jsx)(a.Dio, {
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
            (0, r.jsx)(a.Heading, {
                variant: "heading-md/semibold",
                className: b.hiddenLibraryApplicationsTitle,
                children: _.intl.string(_.t["5PJtrH"]),
            }),
            i,
        ],
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
        d.default.track(g.rMx.APPLICATION_SETTINGS_UPDATED, O({ hidden_enabled: t }, e.getAnalyticsData()));
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
                    ? (0, r.jsxs)(a.Kqy, {
                          gap: 16,
                          children: [
                              (0, r.jsx)(a.rsf, {
                                  label: _.intl.string(_.t["9ID+Kh"]),
                                  description: _.intl.string(_.t.vT61N0),
                                  checked: t,
                                  onChange: this.handleToggleShortcutDesktop,
                              }),
                              (0, r.jsx)(a.izJ, {}),
                              (0, r.jsx)(a.rsf, {
                                  label: _.intl.string(_.t.vNpUMz),
                                  description: _.intl.string(_.t.cpYp0H),
                                  checked: n,
                                  onChange: this.handleToggleShortcutStartMenu,
                              }),
                              (0, r.jsx)(a.izJ, {}),
                              (0, r.jsx)(h.Z, {}),
                          ],
                      })
                    : null,
                (0, r.jsx)(I, {
                    restoreApplication: this.handleRestoreHiddenLibraryApplication,
                    applicationViewItems: e,
                }),
            ],
        });
    }
    render() {
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(m.Z, { currentRoute: g.Z5c.APPLICATION_LIBRARY_SETTINGS }),
                (0, r.jsx)(a.w0Z, {
                    className: b.scroller,
                    children: this.renderBody(),
                }),
            ],
        });
    }
    constructor(...e) {
        super(...e),
            E(this, "handleRestoreHiddenLibraryApplication", (e) => {
                let t = p.x9(e.getFlags(), g.eHb.HIDDEN);
                s.h(e.id, e.branchId, t), this.trackRestoreApplication(e, p.yE(t, g.eHb.HIDDEN));
            });
    }
}
function v() {
    let e = {
        installShortcutDesktop: c.Xc.useSetting(),
        installShortcutStartMenu: c.Pe.useSetting(),
        hiddenLibraryApplicationViewItems: (0, l.e7)([u.Z], () => u.Z.hiddenLibraryApplicationViewItems),
    };
    return (0, r.jsx)(y, O({}, e));
}
