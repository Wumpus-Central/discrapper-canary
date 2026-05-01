n.d(t, { $w: () => s, uM: () => u });
var o = n(492462),
    r = n(873263);
n(809733), n(38405);
var i = n(26279),
    a = n(652215);
let l = (e, t, n) => {
        if (!e.startsWith(a.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === a.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return i.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (n === i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
        }
    },
    s = () => {
        let { search: e, pathname: t } = (0, r.zy)(),
            { deep_link_type: n, flow_type: i } = (0, o.parse)(e);
        return l(t, n, i);
    },
    u = () => {
        let e = window.location.pathname,
            { deep_link_type: t, flow_type: n } = (0, o.parse)(window.location.search);
        return l(e, t, n);
    };
