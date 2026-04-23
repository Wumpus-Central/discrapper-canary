n.d(t, { QM: () => R, Zb: () => S, al: () => O, ds: () => T });
var i = n(627968);
n(64700);
var r = n(17928),
    a = n(554146),
    s = n(192308),
    _ = n(496431),
    l = n(366999),
    o = n(826673),
    E = n(367727),
    d = n(287809),
    c = n(354670),
    u = n(469778),
    I = n(788868),
    A = n(652215);
function T() {
    return (0, r.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function S(e) {
    let t = (0, _.A)(e.toDate(), 36e5);
    return Math.max(1, (0, l.Vb)(t).days);
}
function N(e, t, r) {
    if ((0, s.hasAnyModalOpen)()) return;
    let { isDismissed: a } = (0, o.u$)(t, r);
    if (a) return;
    let _ = (e) => {
        (0, E.qr)(t, r, { dismissAction: e, forceTrack: !0 });
    };
    (0, s.openModalLazy)(
        async () => {
            if ("followup" === e) {
                let { default: e } = await n.e("24580").then(n.bind(n, 34255));
                return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: _ });
            }
            let { default: r } = await n.e("40350").then(n.bind(n, 900205));
            return (e) => (0, i.jsx)(r, { renderModalProps: e, dismissibleContent: t, markAsDismissed: _ });
        },
        { modalKey: "ReverseTrialUpsellModal" },
    );
}
function O() {
    let e = d.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = u.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === A.GD.REVERSE_TRIAL);
    null != t && N("initial", a.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function R() {
    if (null == d.default.getCurrentUser()) return;
    let e = c.A.getUserTrialOffer(I.Tt);
    null != e && N("followup", a.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
