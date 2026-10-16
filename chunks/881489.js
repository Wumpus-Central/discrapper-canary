n.d(t, { QM: () => _, Zb: () => g, al: () => A, ds: () => h });
var i = n(477900);
n(582128);
var s = n(17928),
    l = n(554146);
if (221552 == n.j) var r = n(192308);
var a = n(496431),
    o = n(366999),
    c = n(826673),
    u = n(501419),
    d = n(287809),
    m = n(354670),
    f = n(469778),
    E = n(202541),
    I = n(652215);
function h() {
    return (0, s.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function g(e) {
    let t = (0, a.A)(e.toDate(), 36e5);
    return Math.max(1, (0, o.Vb)(t).days);
}
function p(e, t, s) {
    if ((0, r.hasAnyModalOpen)()) return;
    let { isDismissed: l } = (0, c.u$)(t, s);
    function a(e) {
        (0, u.qr)(t, s, { dismissAction: e, forceTrack: !0 });
    }
    l ||
        (0, r.openModalLazy)(
            async () => {
                if ("followup" === e) {
                    let { default: e } = await Promise.all([n.e("148942"), n.e("594161"), n.e("924580")]).then(
                        n.bind(n, 34255),
                    );
                    return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: a });
                }
                let { default: s } = await Promise.all([n.e("148942"), n.e("747948")]).then(n.bind(n, 166247));
                return (e) => (0, i.jsx)(s, { renderModalProps: e, dismissibleContent: t, markAsDismissed: a });
            },
            { modalKey: "ReverseTrialUpsellModal" },
        );
}
function A() {
    let e = d.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = f.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === I.GD.REVERSE_TRIAL);
    null != t && p("initial", l.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function _() {
    if (null == d.default.getCurrentUser()) return;
    let e = m.A.getUserTrialOffer(E.Tt);
    null != e && p("followup", l.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
