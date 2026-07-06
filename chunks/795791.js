r.d(t, { $w: () => l, uM: () => a });
var n = r(492462),
    u = r(873263);
r(809733), r(38405);
var i = r(26279),
    c = r(652215);
function s(e, t, r) {
    if (!e.startsWith(c.BVt.BILLING_MANAGE_SUBSCRIPTION)) {
        if (t === c.W6J.MOBILE_WEB_REDIRECT_CHECKOUT) return i.uH.MOBILE_WEB_REDIRECT_CHECKOUT;
        if (r === i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT) return i.uH.META_QUEST_WEB_REDIRECT_CHECKOUT;
    }
}
function l() {
    let { search: e, pathname: t } = (0, u.zy)(),
        { deep_link_type: r, flow_type: i } = (0, n.parse)(e);
    return s(t, r, i);
}
function a() {
    let e = window.location.pathname,
        { deep_link_type: t, flow_type: r } = (0, n.parse)(window.location.search);
    return s(e, t, r);
}
