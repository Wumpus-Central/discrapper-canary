n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var r = n(192308),
    a = n(73153),
    l = n(361158),
    s = n(80556),
    o = n(159329),
    d = n(163679),
    u = n(446868),
    c = n(524134),
    A = n(961350),
    h = n(287809),
    _ = n(536194),
    E = n(639719),
    p = n(652215),
    m = n(53516),
    g = n(87404),
    I = n(818348);
let C = {
    init() {
        a.h.subscribe("CONNECTION_OPEN", this.handleRequiredAction),
            a.h.subscribe("USER_REQUIRED_ACTION_UPDATE", this.handleRequiredAction),
            a.h.subscribe("CURRENT_USER_UPDATE", this.handleCurrentUserUpdate),
            A.default.addChangeListener(this.handleAuthenticationStoreChanged);
    },
    handleRequiredAction(e) {
        let t = e.requiredAction;
        !_.P.isDisallowPopupsSet() &&
            null != h.default.getCurrentUser() &&
            (t === p.a3B.REQUIRE_CAPTCHA ||
            t === p.a3B.REQUIRE_VERIFIED_EMAIL ||
            t === p.a3B.REQUIRE_VERIFIED_PHONE ||
            t === p.a3B.REQUIRE_REVERIFIED_PHONE ||
            t === p.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE ||
            t === p.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            t === p.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            u.A.isEmailReverification(t)
                ? (0, o.P3)({ location: "verification-legacy" })
                    ? (0, l.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, i.jsx)(d.A, { onClose: t });
                          },
                          { layerKey: g._s, Layer: s.Ay },
                      )
                    : (0, l.B8)(() => (0, i.jsx)(c.A, {}), { layerKey: g._s, Layer: s.Ay })
                : t === p.a3B.AGREEMENTS
                  ? (0, r.openModal)((e) => (0, i.jsx)(E.default, { ...e }), {
                        modalKey: g.i$,
                        onCloseRequest: I.FX,
                        dismissable: !1,
                    })
                  : t === p.a3B.REQUIRE_SAFETY_FLOWS
                    ? (0, l.B8)(
                          (e) => {
                              let { closeLayer: t } = e;
                              return (0, i.jsx)(d.A, { onClose: t });
                          },
                          { layerKey: g._s, Layer: s.Ay },
                      )
                    : null == t && ((0, l.dF)(g._s), (0, r.hasModalOpen)(g.i$) && (0, r.closeModal)(g.i$)));
    },
    handleAuthenticationStoreChanged() {
        null == A.default.getId() &&
            ((0, l.dF)(g._s),
            (0, r.closeModal)(g.i$),
            (0, r.closeModal)(g.Pr),
            (0, r.closeModal)(g.H1),
            (0, r.closeModal)(m.V));
    },
    handleCurrentUserUpdate(e) {
        let { user: t } = e;
        t.verified && (0, r.closeModal)(g.H1);
    },
};
