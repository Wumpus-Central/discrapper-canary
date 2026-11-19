n.d(t, { A: () => T });
var i = n(477900);
n(582128);
var r = n(892491),
    a = n(192308),
    s = n(73153),
    l = n(80556),
    o = n(287809),
    d = n(171576),
    c = n(945810);
let u = (0, c.mj)({
        kind: "user",
        name: "2025-11-age-verification-expressive-everywhere",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    _ = (0, c.mj)({
        kind: "user",
        name: "2026-06-age-verification-incode",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function E(e) {
    return _.getConfig({ location: e }).enabled;
}
var A = n(36149),
    f = n(895595),
    h = n(40449);
function I(e) {
    if (null != e) return (0, A.Sr)(e) ? r.F.LIGHTBOX : void 0;
}
function p(e) {
    var t;
    let { entryPoint: r, onClose: s, onComplete: o, onCancel: d, incodeParameters: c } = e,
        u = (t = c?.method) === h.VF.FACIAL_AGE_ESTIMATION || t === h.VF.ID_VERIFICATION ? c.method : null,
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
                n.e(384794),
                n.e(87109),
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
        { modalKey: h.SW, onCloseCallback: s, backdropStyle: I(r), Layer: l.Ay },
    );
}
function m(e) {
    let {
        onClose: t,
        entryPoint: r,
        shouldShowExpressiveModal: s = !1,
        webviewUrl: o,
        verificationVendorName: d,
        incodeParameters: c,
        ..._
    } = e;
    if (d === h.XM.INCODE && E(r))
        return (
            !!(
                null != c &&
                ["api_url", "session_token", "interview_id", "consent_id"].every(
                    (e) => "string" == typeof c[e] && c[e].length > 0,
                )
            ) &&
            (p({ entryPoint: r, onClose: t, onComplete: _.onComplete, onCancel: _.onCancel, incodeParameters: c }), !0)
        );
    if (null == o) return !1;
    let A = s || u.getConfig({ location: r }).enabled,
        f = { modalKey: h.SW, onCloseCallback: t, backdropStyle: I(r), Layer: l.Ay, dismissable: !A };
    return (
        A
            ? (0, a.mM)(async () => {
                  let { default: e } = await Promise.all([n.e(300559), n.e(918024), n.e(324947)]).then(
                      n.bind(n, 662558),
                  );
                  return (t) => (0, i.jsx)(e, { webviewUrl: o, entryPoint: r, ..._, ...t });
              }, f)
            : (0, a.mM)(async () => {
                  let { default: e } = await Promise.all([
                      n.e(144909),
                      n.e(300559),
                      n.e(188941),
                      n.e(669464),
                      n.e(123425),
                  ]).then(n.bind(n, 745336));
                  return (t) => (0, i.jsx)(e, { webviewUrl: o, ..._, ...t });
              }, f),
        !0
    );
}
function g(e, t) {
    (0, a.mM)(
        async () => {
            let { default: e } = await Promise.all([n.e(585503), n.e(409609)]).then(n.bind(n, 475376));
            return (t) => (0, i.jsx)(e, { ...t });
        },
        { modalKey: h.NC, backdropStyle: I(e), Layer: l.Ay, onCloseCallback: t },
    );
}
let T = {
    showAgeVerification: m,
    showAgeVerificationGetStartedModal: function (e) {
        let { onClose: t, entryPoint: r } = e;
        if (E(r)) {
            let e = o.default.getCurrentUser()?.ageVerificationStatus;
            function d() {
                s.h.dispatch({ type: "CLOSE_AGE_VERIFICATION_MODAL", status: e });
            }
            (s.h.dispatch({ type: "INITIATE_AGE_VERIFICATION" }),
                p({
                    entryPoint: r,
                    onClose: () => {
                        (d(), t?.());
                    },
                    onComplete: () => {},
                    onCancel: d,
                }));
            return;
        }
        (async () => {
            (await (0, f.L)(r))
                ? g(r, t)
                : (0, a.mM)(
                      async () => {
                          let { default: e } = await Promise.all([
                              n.e(32039),
                              n.e(454048),
                              n.e(253729),
                              n.e(637038),
                              n.e(774542),
                              n.e(748582),
                              n.e(87109),
                              n.e(281610),
                              n.e(107186),
                              n.e(252175),
                              n.e(65436),
                          ]).then(n.bind(n, 12247));
                          return (t) => (0, i.jsx)(e, { ...t, entryPoint: r });
                      },
                      { modalKey: h.NC, backdropStyle: I(r), Layer: l.Ay, onCloseCallback: t },
                  );
        })();
    },
    showManualReviewWebview: function (e, t) {
        return m({
            webviewUrl: e,
            verificationVendorName: h.XM.K_ID,
            entryPoint: d.q1.MANUAL_REVIEW,
            shouldShowExpressiveModal: !0,
            onComplete: () => {},
            onClose: t,
        });
    },
    showManualReviewDecidedTeenModal: function (e) {
        let { teenAgeRange: t, decidedPassed: r } = e;
        (0, a.mM)(
            async () => {
                let { default: e } = await Promise.all([n.e(585503), n.e(272647)]).then(n.bind(n, 986362));
                return (n) => (0, i.jsx)(e, { ...n, teenAgeRange: t, decidedPassed: r });
            },
            { modalKey: h.xO },
        );
    },
    showManualReviewPendingModal: function () {
        (0, a.mM)(
            async () => {
                let { default: e } = await Promise.all([n.e(585503), n.e(492758)]).then(n.bind(n, 174453));
                return (t) => (0, i.jsx)(e, { ...t });
            },
            { modalKey: h.v7 },
        );
    },
    showManualReviewFallbackModal: g,
    openUrl: function (e) {
        window.open(e, "_blank");
    },
};
