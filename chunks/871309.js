n.d(t, { A: () => C });
var i = n(477900);
n(582128);
var r = n(892491),
    a = n(192308),
    s = n(73153),
    l = n(80556),
    o = n(207560),
    d = n(287809),
    c = n(171576),
    u = n(945810);
let _ = (0, u.mj)({
    kind: "user",
    name: "2025-11-age-verification-expressive-everywhere",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function E(e) {
    return _.getConfig({ location: e }).enabled;
}
let A = (0, u.mj)({
    kind: "user",
    name: "2026-06-age-verification-incode",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function h(e) {
    return A.getConfig({ location: e }).enabled;
}
var f = n(36149),
    I = n(462924),
    p = n(895595),
    m = n(40449);
function g(e) {
    if (null != e) return (0, f.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
function T(e) {
    var t;
    let { entryPoint: r, onClose: s, onComplete: o, onCancel: d, incodeParameters: c } = e,
        u = (t = c?.method) === m.VF.FACIAL_AGE_ESTIMATION || t === m.VF.ID_VERIFICATION ? c.method : null,
        _ =
            null != c && null != u
                ? {
                      apiUrl: c.api_url,
                      sessionToken: c.session_token,
                      consentId: c.consent_id,
                      interviewId: c.interview_id,
                  }
                : null;
    (0, a.mM)(
        async () => {
            let { default: e } = await Promise.all([
                n.e(144909),
                n.e(520957),
                n.e(792783),
                n.e(832637),
                n.e(107701),
                n.e(20603),
                n.e(847727),
                n.e(300559),
                n.e(466344),
                n.e(454048),
                n.e(188941),
                n.e(600607),
                n.e(87109),
                n.e(384794),
                n.e(669464),
                n.e(902420),
            ]).then(n.bind(n, 112954));
            return (t) =>
                null != _ && null != u
                    ? (0, i.jsx)(e, {
                          initialSession: _,
                          initialMethod: u,
                          entryPoint: r,
                          onComplete: o,
                          onCancel: d,
                          ...t,
                      })
                    : (0, i.jsx)(e, { pickerMode: !0, entryPoint: r, onComplete: o, onCancel: d, ...t });
        },
        { modalKey: m.SW, onCloseCallback: s, backdropStyle: g(r), Layer: l.Ay },
    );
}
function S(e) {
    let {
        onClose: t,
        entryPoint: r,
        shouldShowExpressiveModal: s = !1,
        webviewUrl: o,
        verificationVendorName: d,
        incodeParameters: c,
        ...u
    } = e;
    if (d === m.XM.INCODE && h(r))
        return (
            !!(
                null != c &&
                ["api_url", "session_token", "interview_id", "consent_id"].every(
                    (e) => "string" == typeof c[e] && c[e].length > 0,
                )
            ) &&
            (T({ entryPoint: r, onClose: t, onComplete: u.onComplete, onCancel: u.onCancel, incodeParameters: c }), !0)
        );
    if (null == o) return !1;
    let _ = s || E(r),
        A = _ && (0, I.d)(r),
        f = { modalKey: m.SW, onCloseCallback: t, backdropStyle: g(r), Layer: l.Ay, dismissable: !A };
    return (
        _
            ? (0, a.mM)(async () => {
                  let { default: e } = await Promise.all([n.e(300559), n.e(918024), n.e(324947)]).then(
                      n.bind(n, 662558),
                  );
                  return (t) => (0, i.jsx)(e, { webviewUrl: o, isExpressiveModalV2: A, entryPoint: r, ...u, ...t });
              }, f)
            : (0, a.mM)(async () => {
                  let { default: e } = await Promise.all([
                      n.e(144909),
                      n.e(300559),
                      n.e(188941),
                      n.e(669464),
                      n.e(123425),
                  ]).then(n.bind(n, 745336));
                  return (t) => (0, i.jsx)(e, { webviewUrl: o, ...u, ...t });
              }, f),
        !0
    );
}
function N(e, t) {
    (0, a.mM)(
        async () => {
            let { default: e } = await Promise.all([n.e(585503), n.e(409609)]).then(n.bind(n, 475376));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: m.NC, backdropStyle: g(e), Layer: l.Ay, onCloseCallback: t },
    );
}
let C = {
    showAgeVerification: S,
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        if (h(r)) {
            let e = d.default.getCurrentUser()?.ageVerificationStatus;
            function c() {
                s.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: e });
            }
            (s.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" }),
                T({
                    entryPoint: r,
                    onClose: () => {
                        (c(), t?.());
                    },
                    onComplete: () => {},
                    onCancel: c,
                }));
            return;
        }
        (0, I.d)(r)
            ? (async () => {
                  (await (0, p.L)(r))
                      ? N(r, t)
                      : (0, a.mM)(
                            async () => {
                                let { default: e } = await Promise.all([
                                    n.e(32039),
                                    n.e(454048),
                                    n.e(253729),
                                    n.e(87109),
                                    n.e(637038),
                                    n.e(281610),
                                    n.e(774542),
                                    n.e(65436),
                                ]).then(n.bind(n, 12247));
                                return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                            },
                            { modalKey: m.NC, backdropStyle: g(r), Layer: l.Ay, onCloseCallback: t },
                        );
              })()
            : (0, f.Q9)() && (0, o.u0)()
              ? (0, a.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(847727),
                            n.e(469663),
                            n.e(454048),
                            n.e(600607),
                            n.e(87109),
                            n.e(384794),
                            n.e(281610),
                            n.e(518467),
                        ]).then(n.bind(n, 297102));
                        return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                    },
                    { modalKey: m.NC, backdropStyle: g(r), Layer: l.Ay, onCloseCallback: t },
                )
              : E(r)
                ? (0, a.mM)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e(144909),
                              n.e(847727),
                              n.e(760662),
                              n.e(454048),
                              n.e(188941),
                              n.e(600607),
                              n.e(87109),
                              n.e(384794),
                              n.e(281610),
                              n.e(233966),
                          ]).then(n.bind(n, 962877));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: m.NC, backdropStyle: g(r), Layer: l.Ay, onCloseCallback: t },
                  )
                : (0, a.mM)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e(847727),
                              n.e(67032),
                              n.e(538887),
                              n.e(600607),
                              n.e(718792),
                              n.e(87109),
                              n.e(281610),
                              n.e(152973),
                          ]).then(n.bind(n, 929180));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: m.NC, backdropStyle: g(r), Layer: l.Ay, onCloseCallback: t },
                  );
    },
    showManualReviewWebview: function (e, t) {
        return S({
            webviewUrl: e,
            verificationVendorName: m.XM.K_ID,
            entryPoint: c.q1.MANUAL_REVIEW,
            shouldShowExpressiveModal: !0,
            onComplete: () => {},
            onClose: t,
        });
    },
    showManualReviewDecidedTeenModal: function (e) {
        (0, a.mM)(
            async () => {
                let { default: t } = await Promise.all([n.e(585503), n.e(479054)]).then(n.bind(n, 130845));
                return (n) => (0, i.jsx)(t, { ...n, teenAgeRange: e });
            },
            { modalKey: m.xO },
        );
    },
    showManualReviewPendingModal: function () {
        (0, a.mM)(
            async () => {
                let { default: e } = await Promise.all([n.e(585503), n.e(492758)]).then(n.bind(n, 174453));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: m.v7 },
        );
    },
    showManualReviewFallbackModal: N,
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
