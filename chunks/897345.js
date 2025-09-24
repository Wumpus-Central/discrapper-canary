n.d(t, {
    r: () => u,
    u: () => c,
});
var r = n(674180),
    i = n(994592),
    a = n(164670),
    o = n(652515),
    s = n(550951),
    l = n(981631);
function c(e) {
    let t = (0, o.RF)(null == e ? void 0 : e.id, "channel_list"),
        n = (0, i.mY)(null == e ? void 0 : e.id),
        c = (0, s.g)(e, "channel_list"),
        { shouldHideGuildPurchaseEntryPoints: u } = (0, r.uP)(null == e ? void 0 : e.id);
    return null != e && !u && (e.features.has(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (0, a.w)(e) || (t && n) || c);
}
function u(e, t) {
    let n = (0, o.C4)(null == e ? void 0 : e.id, "channel_list"),
        r = (0, i.on)(null == e ? void 0 : e.id, t);
    return null != e && (e.features.has(l.oNc.PRODUCTS_AVAILABLE_FOR_PURCHASE) || (0, a.w)(e) || (n && r));
}
