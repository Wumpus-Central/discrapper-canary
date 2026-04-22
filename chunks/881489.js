"use strict";
n.d(t, { QM: () => I, Zb: () => m, al: () => A, ds: () => p });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(554146),
    a = n(192308),
    o = n(496431),
    l = n(366999),
    u = n(826673),
    d = n(367727),
    c = n(287809),
    _ = n(816733),
    f = n(469778),
    E = n(788868),
    h = n(652215);
function p() {
    return (0, i.bG)([c.default], () => {
        let e = c.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function m(e) {
    let t = (0, o.A)(e.toDate(), 36e5);
    return Math.max(1, (0, l.Vb)(t).days);
}
function g(e, t, i) {
    if ((0, a.hasAnyModalOpen)()) return;
    let { isDismissed: s } = (0, u.u$)(t, i);
    if (s) return;
    let o = (e) => {
        (0, d.qr)(t, i, { dismissAction: e, forceTrack: !0 });
    };
    (0, a.openModalLazy)(
        async () => {
            if ("followup" === e) {
                let { default: e } = await n.e("24580").then(n.bind(n, 34255));
                return (n) => (0, r.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: o });
            }
            let { default: i } = await n.e("47948").then(n.bind(n, 166247));
            return (e) => (0, r.jsx)(i, { renderModalProps: e, dismissibleContent: t, markAsDismissed: o });
        },
        { modalKey: "ReverseTrialUpsellModal" },
    );
}
function A() {
    let e = c.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = f.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === h.GD.REVERSE_TRIAL);
    null != t && g("initial", s.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function I() {
    if (null == c.default.getCurrentUser()) return;
    let e = _.A.getUserTrialOffer(E.Tt);
    null != e && g("followup", s.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
