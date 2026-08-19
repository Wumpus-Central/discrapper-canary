n.d(t, { $w: () => o, uM: () => u });
var l = n(492462),
    i = n(806163);
n(809733), n(38405);
var r = n(26279),
    a = n(652215);
function s(e, t, n) {
    if (!e.startsWith(a.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
        if (t === a.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return r.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
        if (n === r.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return r.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
}
function o() {
    let { search: e, pathname: t } = (0, i.zy)(),
        { deep_link_type: n, flow_type: r } = (0, l.parse)(e);
    return s(t, n, r);
}
function u() {
    let e = window.location.pathname,
        { deep_link_type: t, flow_type: n } = (0, l.parse)(window.location.search);
    return s(e, t, n);
}
