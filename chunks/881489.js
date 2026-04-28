n.d(t, { QM: () => f, Zb: () => S, al: () => O, ds: () => A });
var i = n(627968);
n(64700);
var a = n(17928),
    r = n(554146),
    _ = n(192308),
    s = n(496431),
    l = n(366999),
    o = n(826673),
    E = n(367727),
    d = n(287809),
    c = n(354670),
    u = n(469778),
    I = n(788868),
    T = n(652215);
function A() {
    return (0, a.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function S(e) {
    let t = (0, s.A)(e.toDate(), 36e5);
    return Math.max(1, (0, l.Vb)(t).days);
}
function N(e, t, a) {
    if ((0, _.hasAnyModalOpen)()) return;
    let { isDismissed: r } = (0, o.u$)(t, a);
    if (r) return;
    let s = (e) => {
        (0, E.qr)(t, a, { dismissAction: e, forceTrack: !0 });
    };
    (0, _.openModalLazy)(
        async () => {
            if ("followup" === e) {
                let { default: e } = await Promise.all([n.e("77535"), n.e("94161"), n.e("83089"), n.e("24580")]).then(
                    n.bind(n, 34255),
                );
                return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: s });
            }
            let { default: a } = await Promise.all([n.e("77535"), n.e("10126"), n.e("47948")]).then(n.bind(n, 166247));
            return (e) => (0, i.jsx)(a, { renderModalProps: e, dismissibleContent: t, markAsDismissed: s });
        },
        { modalKey: "ReverseTrialUpsellModal" },
    );
}
function O() {
    let e = d.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = u.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === T.GD.REVERSE_TRIAL);
    null != t && N("initial", r.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function f() {
    if (null == d.default.getCurrentUser()) return;
    let e = c.A.getUserTrialOffer(I.Tt);
    null != e && N("followup", r.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
