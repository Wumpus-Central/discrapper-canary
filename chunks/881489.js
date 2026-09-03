n.d(t, { QM: () => C, Zb: () => x, al: () => E, ds: () => g });
var l = n(477900);
n(582128);
var i = n(17928),
    s = n(554146);
if (221552 == n.j) var r = n(192308);
var a = n(496431),
    o = n(366999),
    u = n(826673),
    c = n(367727),
    d = n(287809),
    h = n(354670),
    m = n(469778),
    f = n(202541),
    p = n(652215);
function g() {
    return (0, i.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function x(e) {
    let t = (0, a.A)(e.toDate(), 36e5);
    return Math.max(1, (0, o.Vb)(t).days);
}
function A(e, t, i) {
    if ((0, r.hasAnyModalOpen)()) return;
    let { isDismissed: s } = (0, u.u$)(t, i);
    function a(e) {
        (0, c.qr)(t, i, { dismissAction: e, forceTrack: !0 });
    }
    s ||
        (0, r.openModalLazy)(
            async () => {
                if ("followup" === e) {
                    let { default: e } = await Promise.all([n.e("148942"), n.e("594161"), n.e("924580")]).then(
                        n.bind(n, 34255),
                    );
                    return (n) => (0, l.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: a });
                }
                let { default: i } = await Promise.all([n.e("148942"), n.e("747948")]).then(n.bind(n, 166247));
                return (e) => (0, l.jsx)(i, { renderModalProps: e, dismissibleContent: t, markAsDismissed: a });
            },
            { modalKey: "ReverseTrialUpsellModal" },
        );
}
function E() {
    let e = d.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = m.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === p.GD.REVERSE_TRIAL);
    null != t && A("initial", s.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function C() {
    if (null == d.default.getCurrentUser()) return;
    let e = h.A.getUserTrialOffer(f.Tt);
    null != e && A("followup", s.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
