r.d(t, { $w: () => a, uM: () => c });
var n = r(492462),
    u = r(873263);
r(809733), r(38405);
var l = r(26279),
    i = r(652215);
let s = (e, t, r) => {
        if (!e.startsWith(i.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === i.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return l.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (r === l.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return l.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
        }
    },
    a = () => {
        let { search: e, pathname: t } = (0, u.zy)(),
            { deep_link_type: r, flow_type: l } = (0, n.parse)(e);
        return s(t, r, l);
    },
    c = () => {
        let e = window.location.pathname,
            { deep_link_type: t, flow_type: r } = (0, n.parse)(window.location.search);
        return s(e, t, r);
    };
