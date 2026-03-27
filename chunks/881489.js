"use strict";
n.d(t, { Zb: () => g, ds: () => E, wK: () => I });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(554146),
    a = n(397927),
    o = n(496431),
    l = n(366999),
    u = n(826673),
    c = n(367727),
    d = n(287809),
    _ = n(816733),
    f = n(469778),
    p = n(788868),
    h = n(652215);
let m = 36e5;
function E() {
    return (0, i.bG)([d.default], () => {
        let e = d.default.getCurrentUser();
        return e?.isOnReverseTrial() ?? !1;
    });
}
function g(e) {
    let t = (0, o.A)(e.toDate(), m);
    return Math.max(1, (0, l.Vb)(t).days);
}
let A = "ReverseTrialUpsellModal";
function I() {
    let e = null,
        t = null,
        i = "",
        o = d.default.getCurrentUser();
    if (null == o || (0, a.ueM)()) return;
    if (o.isOnReverseTrial()) {
        let n = f.A.getFractionalPremium({ excludeReverseTrial: !1 }).find((e) => e.sourceType === h.GD.REVERSE_TRIAL);
        null != n && ((e = "initial"), (t = s.M.ML_REVERSE_TRIAL_UPSELL_MODAL), (i = n.id));
    } else {
        let n = _.A.getUserTrialOffer(p.Tt);
        null != n && ((e = "followup"), (t = s.M.ML_REVERSE_TRIAL_FOLLOWUP_UPSELL_MODAL), (i = n.id));
    }
    if (null == t) return;
    let { isDismissed: l } = (0, u.u$)(t, i);
    if (l) return;
    let m = (e) => {
        (0, c.qr)(t, i, { dismissAction: e });
    };
    (0, a.mMO)(
        async () => {
            if ("followup" === e) {
                let { default: e } = await n.e("24580").then(n.bind(n, 34255));
                return (t) => (0, r.jsx)(e, { renderModalProps: t, markAsDismissed: m });
            }
            let { default: t } = await n.e("47948").then(n.bind(n, 166247));
            return (e) => (0, r.jsx)(t, { renderModalProps: e, markAsDismissed: m });
        },
        { modalKey: A },
    );
}
