n.d(t, { QM: () => f, Zb: () => h, al: () => N, ds: () => T });
var i = n(627968);
n(64700);
var a = n(17928),
    r = n(554146),
    s = n(192308),
    l = n(496431),
    o = n(366999),
    d = n(826673),
    c = n(367727),
    _ = n(287809),
    E = n(354670),
    u = n(469778),
    A = n(788868),
    I = n(652215);
function T() {
    return (0, a.bG)([_.default], () => {
        let e = _.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function h(e) {
    let t = (0, l.A)(e.toDate(), 36e5);
    return Math.max(1, (0, o.Vb)(t).days);
}
function S(e, t, a) {
    if ((0, s.hasAnyModalOpen)()) return;
    let { isDismissed: r } = (0, d.u$)(t, a);
    if (r) return;
    let l = (e) => {
        (0, c.qr)(t, a, { dismissAction: e, forceTrack: !0 });
    };
    (0, s.openModalLazy)(
        async () => {
            if ("followup" === e) {
                let { default: e } = await Promise.all([n.e("77535"), n.e("94161"), n.e("83089"), n.e("24580")]).then(
                    n.bind(n, 34255),
                );
                return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: l });
            }
            let { default: a } = await Promise.all([n.e("77535"), n.e("10126"), n.e("47948")]).then(n.bind(n, 166247));
            return (e) => (0, i.jsx)(a, { renderModalProps: e, dismissibleContent: t, markAsDismissed: l });
        },
        { modalKey: "ReverseTrialUpsellModal" },
    );
}
function N() {
    let e = _.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = u.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === I.GD.REVERSE_TRIAL);
    null != t && S("initial", r.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function f() {
    if (null == _.default.getCurrentUser()) return;
    let e = E.A.getUserTrialOffer(A.Tt);
    null != e && S("followup", r.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
