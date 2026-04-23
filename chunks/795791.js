n.d(t, { $w: () => s, uM: () => d });
var r = n(492462),
    a = n(873263);
n(809733), n(38405);
var i = n(26279),
    o = n(652215);
let l = (e, t, n) => {
        if (!e.startsWith(o.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === o.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return i.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (n === i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
        }
    },
    s = () => {
        let { search: e, pathname: t } = (0, a.zy)(),
            { deep_link_type: n, flow_type: i } = (0, r.parse)(e);
        return l(t, n, i);
    },
    d = () => {
        let e = window.location.pathname,
            { deep_link_type: t, flow_type: n } = (0, r.parse)(window.location.search);
        return l(e, t, n);
    };
