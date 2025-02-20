n.d(t, {
    r: () => c,
    u: () => l
});
var r = n(674180),
    i = n(994592),
    o = n(652515),
    a = n(550951),
    s = n(981631);
function l(e) {
    let t = (0, o.RF)(null == e ? void 0 : e.id, 'channel_list'),
        n = (0, i.mY)(null == e ? void 0 : e.id),
        l = (0, a.g)(e, 'channel_list'),
        { shouldHideGuildPurchaseEntryPoints: c } = (0, r.uP)(null == e ? void 0 : e.id);
    return null != e && !c && (e.hasFeature(s.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (t && n) || l);
}
function c(e, t) {
    let n = (0, o.C4)(null == e ? void 0 : e.id, 'channel_list'),
        r = (0, i.on)(null == e ? void 0 : e.id, t);
    return null != e && (e.hasFeature(s.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (n && r));
}
