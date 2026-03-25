"use strict";
n.d(t, { b7: () => o, u6: () => l });
var r = n(492462),
    i = n(873263);
n(809733), n(728458);
var s = n(652215);
let a = (e, t) => !e.startsWith(s.BVt.BILLING_MANAGE_SUBSCRIPTION) && t === s.W6J.MOBILE_WEB_REDIRECT_CHECKOUT,
    o = () => {
        let { search: e, pathname: t } = (0, i.zy)(),
            { deep_link_type: n } = (0, r.parse)(e);
        return a(t, n);
    },
    l = () => {
        let e = window.location.pathname,
            { deep_link_type: t } = (0, r.parse)(window.location.search);
        return a(e, t);
    };
