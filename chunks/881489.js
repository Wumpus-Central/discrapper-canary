n.d(t, { QM: () => _, Zb: () => h, al: () => A, ds: () => g });
var i = n(477900);
n(582128);
var s = n(447732),
    l = n(17928),
    r = n(554146);
if (221552 == n.j) var a = n(192308);
var o = n(496431),
    c = n(366999),
    u = n(826673),
    d = n(501419),
    m = n(287809),
    f = n(354670),
    E = n(469778),
    I = n(202541);
function g() {
    return (0, l.bG)([m.default], () => {
        let e = m.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function h(e) {
    let t = (0, o.A)(e.toDate(), 36e5);
    return Math.max(1, (0, c.Vb)(t).days);
}
function p(e, t, s) {
    if ((0, a.hasAnyModalOpen)()) return;
    let { isDismissed: l } = (0, u.u$)(t, s);
    function r(e) {
        (0, d.qr)(t, s, { dismissAction: e, forceTrack: !0 });
    }
    l ||
        (0, a.openModalLazy)(
            async () => {
                if ("followup" === e) {
                    let { default: e } = await Promise.all([n.e("148942"), n.e("594161"), n.e("924580")]).then(
                        n.bind(n, 34255),
                    );
                    return (n) => (0, i.jsx)(e, { renderModalProps: n, dismissibleContent: t, markAsDismissed: r });
                }
                let { default: s } = await Promise.all([n.e("148942"), n.e("334624"), n.e("747948")]).then(
                    n.bind(n, 166247),
                );
                return (e) => (0, i.jsx)(s, { renderModalProps: e, dismissibleContent: t, markAsDismissed: r });
            },
            { modalKey: "ReverseTrialUpsellModal" },
        );
}
function A() {
    let e = m.default.getCurrentUser();
    if (null == e || !e.isOnReverseTrial()) return;
    let t = E.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === s.G.REVERSE_TRIAL);
    null != t && p("initial", r.M.ML_REVERSE_TRIAL_UPSELL_MODAL, t.id);
}
function _() {
    if (null == m.default.getCurrentUser()) return;
    let e = f.A.getUserTrialOffer(I.Tt);
    null != e && p("followup", r.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL, e.id);
}
