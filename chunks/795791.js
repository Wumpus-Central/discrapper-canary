"use strict";
n.d(t, { $w: () => l, uM: () => u });
var i = n(492462),
    r = n(873263);
n(809733), n(38405);
var s = n(26279),
    a = n(652215);
let o = (e, t, n) => {
        if (!e.startsWith(a.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
            if (t === a.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return s.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
            if (n === s.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return s.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
        }
    },
    l = () => {
        let { search: e, pathname: t } = (0, r.zy)(),
            { deep_link_type: n, flow_type: s } = (0, i.parse)(e);
        return o(t, n, s);
    },
    u = () => {
        let e = window.location.pathname,
            { deep_link_type: t, flow_type: n } = (0, i.parse)(window.location.search);
        return o(e, t, n);
    };
