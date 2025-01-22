r.d(n, {
    r: function () {
        return c;
    },
    u: function () {
        return u;
    }
});
var i = r(674180),
    a = r(994592),
    o = r(652515),
    s = r(550951),
    l = r(981631);
function u(e) {
    let n = (0, o.RF)(null == e ? void 0 : e.id, 'channel_list'),
        r = (0, a.mY)(null == e ? void 0 : e.id),
        u = (0, s.g)(e, 'channel_list'),
        { shouldHideGuildPurchaseEntryPoints: c } = (0, i.uP)(null == e ? void 0 : e.id);
    return null != e && !c && (e.hasFeature(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && r) || u);
}
function c(e, n) {
    let r = (0, o.C4)(null == e ? void 0 : e.id, 'channel_list'),
        i = (0, a.on)(null == e ? void 0 : e.id, n);
    return null != e && (e.hasFeature(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (r && i));
}
