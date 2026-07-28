"use strict";
n.d(t, { QM: () => m, Zb: () => f, al: () => T, ds: () => I });
var i = n(477900);
n(582128);
var r = n(17928),
    a = n(554146),
    s = n(192308),
    l = n(496431),
    o = n(366999),
    d = n(826673),
    c = n(367727),
    u = n(287809),
    _ = n(354670),
    E = n(469778),
    A = n(202541),
    h = n(652215);
function I() {
    return (0, r.bG)([u.default], () => {
        let e = u.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function f(e) {
    let t = (0, l.A)(e.toDate(), 36e5);
    return Math.max(1, (0, o.Vb)(t).days);
}
function p(e, t, r) {
    if ((0, s.hasAnyModalOpen)()) return;
    let { isDismissed: a } = (0, d.u$)(t, r);
    function l(e) {
        (0, c.qr)(t, r, { dismissAction: e, forceTrack: !0 });
    }
    a ||
        (0, s.openModalLazy)(
            async () => {
                if ("followup" === e) {
                    let { default: e } = await Promise.all([n.e("84295"), n.e("94161"), n.e("24580")]).then(
                        n.bind(n, 34255),
                    );
                    return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: l });
                }
                let { default: r } = await Promise.all([n.e("84295"), n.e("47948")]).then(n.bind(n, 166247));
                return (e) => (0, i.jsx)(r, { renderModalProps: e, dismissibleContent: t, markAsDismissed: l });
            },
            { modalKey: "ReverseTrialUpsellModal" },
        );
}
function T() {
    let e = u.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = E.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === h.GD.REVERSE_TRIAL);
    null != t && p("initial", a.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function m() {
    if (null == u.default.getCurrentUser()) return;
    let e = _.A.getUserTrialOffer(A.Tt);
    null != e && p("followup", a.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
