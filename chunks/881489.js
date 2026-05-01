"use strict";
n.d(t, { QM: () => I, Zb: () => m, al: () => A, ds: () => E });
var i = n(627968);
n(64700);
var r = n(17928),
    s = n(554146),
    a = n(192308),
    o = n(496431),
    l = n(366999),
    u = n(826673),
    c = n(281678),
    d = n(287809),
    _ = n(354670),
    f = n(469778),
    h = n(788868),
    p = n(652215);
function E() {
    return (0, r.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function m(e) {
    let t = (0, o.A)(e.toDate(), 36e5);
    return Math.max(1, (0, l.Vb)(t).days);
}
function g(e, t, r) {
    if ((0, a.hasAnyModalOpen)()) return;
    let { isDismissed: s } = (0, u.u$)(t, r);
    if (s) return;
    let o = (e) => {
        (0, c.qr)(t, r, { dismissAction: e, forceTrack: !0 });
    };
    (0, a.openModalLazy)(
        async () => {
            if ("followup" === e) {
                let { default: e } = await Promise.all([n.e("77535"), n.e("94161"), n.e("24580")]).then(
                    n.bind(n, 34255),
                );
                return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: o });
            }
            let { default: r } = await Promise.all([n.e("77535"), n.e("47948")]).then(n.bind(n, 166247));
            return (e) => (0, i.jsx)(r, { renderModalProps: e, dismissibleContent: t, markAsDismissed: o });
        },
        { modalKey: "ReverseTrialUpsellModal" },
    );
}
function A() {
    let e = d.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = f.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === p.GD.REVERSE_TRIAL);
    null != t && g("initial", s.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function I() {
    if (null == d.default.getCurrentUser()) return;
    let e = _.A.getUserTrialOffer(h.Tt);
    null != e && g("followup", s.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
