n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(73153),
    a = n(361158),
    s = n(80556),
    o = n(159329),
    c = n(163679),
    u = n(446868),
    d = n(524134),
    p = n(961350),
    f = n(287809),
    h = n(536194),
    A = n(639719),
    g = n(652215),
    m = n(53516),
    b = n(87404),
    _ = n(818348);
let E = {
    init() {
        l.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction),
            l.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction),
            l.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate),
            p.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !h.P.isDisallowPopupsSet() &&
            null != f.default.getCurrentUser() &&
            (t === g.a3B.REQUIRE_CAPTCHA ||
            t === g.a3B.REQUIRE_VERIFIED_EMAIL ||
            t === g.a3B.REQUIRE_VERIFIED_PHONE ||
            t === g.a3B.REQUIRE_REVERIFIED_PHONE ||
            t === g.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE ||
            t === g.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === g.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            u.A.isEmailReverification(t)
                ? (0, o.P3)({ location: "verification-legacy" })
                    ? (0, a.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, r.jsx)(c.A, { onClose: t });
                          },
                          {
                              layerKey: b._s,
                              Layer: s.Ay,
                          },
                      )
                    : (0, a.B8)(() => (0, r.jsx)(d.A, {}), {
                          layerKey: b._s,
                          Layer: s.Ay,
                      })
                : t === g.a3B.AGREEMENTS
                  ? (0, i.qfG)(
                        (e) =>
                            (0, r.jsx)(
                                A.default,
                                (function (e) {
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
                                                var r;
                                                (r = n[t]),
                                                    t in e
                                                        ? Object.defineProperty(e, t, {
                                                              value: r,
                                                              enumerable: !0,
                                                              configurable: !0,
                                                              writable: !0,
                                                          })
                                                        : (e[t] = r);
                                            });
                                    }
                                    return e;
                                })({}, e),
                            ),
                        {
                            modalKey: b.i$,
                            onCloseRequest: _.FX,
                            dismissable: !1,
                        },
                    )
                  : t === g.a3B.REQUIRE_SAFETY_FLOWS
                    ? (0, a.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, r.jsx)(c.A, { onClose: t });
                          },
                          {
                              layerKey: b._s,
                              Layer: s.Ay,
                          },
                      )
                    : null == t && ((0, a.dF)(b._s), (0, i.kBI)(b.i$) && (0, i.OoC)(b.i$)));
    },
    handleAuthenticationStoreChanged() {
        null == p.default.getId() &&
            ((0, a.dF)(b._s), (0, i.OoC)(b.i$), (0, i.OoC)(b.Pr), (0, i.OoC)(b.H1), (0, i.OoC)(m.V));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, i.OoC)(b.H1);
    },
};
