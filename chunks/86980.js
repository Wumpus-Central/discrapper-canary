n.d(t, { j: () => b });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(397927),
    o = n(800342),
    l = n(73825),
    c = n(851907),
    u = n(160946),
    d = n(342098),
    f = n(216678),
    p = n(869146),
    _ = n(143582),
    h = n(490744),
    m = n(67480),
    g = n(652215);
function E(e) {
    let t = (0, c.LU)({ applicationId: e }),
        n = null != t ? p.A.getWindow(t) : void 0;
    return null == n || n.closed ? s.SYi : s.KX8;
}
async function b(e) {
    let { applicationId: t, skuId: n, initialPlanId: r, analyticsLocations: i, analyticsLocationObject: s } = e,
        c = m.A.get(n);
    if (null == c) {
        let e = (await (0, o.JI)(t)).find((e) => e.sku.id === n);
        a()(null != e, "Could not find store listing for sku"),
            e.sku.type === g.Puh.SUBSCRIPTION_GROUP && (await (0, _.vz)(t, e.id));
    }
    (c = null != c ? c : m.A.get(n)),
        a()(null != c && c.applicationId === t, "SKU must belong to application"),
        c.type !== g.Puh.SUBSCRIPTION || (0, u.B)([c.id]) || (await (0, l.ur)(c.id));
    let d = E(t);
    if (c.type !== g.Puh.SUBSCRIPTION)
        return new Promise((e, r) => {
            let a = (t) => {
                    var n;
                    e(null != (n = null == t ? void 0 : t.entitlements) ? n : []);
                },
                o = (e) => {
                    e || r();
                };
            (0, f.A)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: s,
                analyticsLocations: i,
                contextKey: d,
                onComplete: a,
                onClose: o,
            });
        });
    await y(t, n, r, s, i);
}
function y(e, t, n, i, a) {
    let s = (e, t, n) =>
        (0, r.jsx)(h.fs, {
            step: n,
            onClose: () => t(!1),
        });
    return (0, d.l)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: i,
        analyticsLocations: a,
        renderHeader: s,
    });
}
