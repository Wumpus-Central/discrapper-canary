var l = n(492462),
    r = n(806163);
(n(809733), n(856383));
var i = n(26279),
    a = n(652215);
function s(e, t, n) {
    if (!e.startsWith(a.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
        if (t === a.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return i.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
        if (n === i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
}
n.d(
    t,
    {},
    {
        $w: function () {
            let { search: e, pathname: t } = (0, r.zy)(),
                { deep_link_type: n, flow_type: i } = (0, l.qg)(e);
            return s(t, n, i);
        },
        uM: function () {
            let e = window.location.pathname,
                { deep_link_type: t, flow_type: n } = (0, l.qg)(window.location.search);
            return s(e, t, n);
        },
    },
);
