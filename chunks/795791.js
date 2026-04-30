n.d(t, { $w: () => u, uM: () => s });
var o = n(492462),
    r = n(873263);
n(809733), n(38405);
var a = n(26279),
    i = n(652215);
let l = (e, t, n) => {
        if (!e.startsWith(i.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === i.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return a.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (n === a.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return a.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
        }
    },
    u = () => {
        let { search: e, pathname: t } = (0, r.zy)(),
            { deep_link_type: n, flow_type: a } = (0, o.parse)(e);
        return l(t, n, a);
    },
    s = () => {
        let e = window.location.pathname,
            { deep_link_type: t, flow_type: n } = (0, o.parse)(window.location.search);
        return l(e, t, n);
    };
