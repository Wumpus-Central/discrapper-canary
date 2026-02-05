"use strict";
n.d(t, { j: () => A });
var r = n(627968);
n(64700);
var i = n(284009),
    a = n.n(i),
    s = n(397927),
    o = n(800342),
    l = n(73825),
    u = n(851907),
    c = n(160946),
    d = n(342098),
    _ = n(216678),
    f = n(869146),
    p = n(143582),
    h = n(490744),
    m = n(67480),
    g = n(652215);
function E(e) {
    let t = (0, u.LU)({ applicationId: e }),
        n = null != t ? f.A.getWindow(t) : void 0;
    return null == n || n.closed ? s.SYi : s.KX8;
}
async function A(e) {
    let { applicationId: t, skuId: n, initialPlanId: r, analyticsLocations: i, analyticsLocationObject: s } = e,
        u = m.A.get(n);
    if (null == u) {
        let e = (await (0, o.JI)(t)).find((e) => e.sku.id === n);
        a()(null != e, "Could not find store listing for sku"),
            e.sku.type === g.Puh.SUBSCRIPTION_GROUP && (await (0, p.vz)(t, e.id));
    }
    (u = u ?? m.A.get(n)),
        a()(null != u && u.applicationId === t, "SKU must belong to application"),
        u.type !== g.Puh.SUBSCRIPTION || (0, c.B)([u.id]) || (await (0, l.ur)(u.id));
    let d = E(t);
    if (u.type !== g.Puh.SUBSCRIPTION)
        return new Promise((e, r) => {
            let a = (t) => {
                    e(t?.entitlements ?? []);
                },
                o = (e) => {
                    e || r();
                };
            (0, _.A)({
                applicationId: t,
                skuId: n,
                analyticsLocationObject: s,
                analyticsLocations: i,
                contextKey: d,
                onComplete: a,
                onClose: o,
            });
        });
    await I(t, n, r, s, i);
}
function I(e, t, n, i, a) {
    let s = (e, t, n) => (0, r.jsx)(h.fs, { step: n, onClose: () => t(!1) });
    return (0, d.l)({
        applicationId: e,
        skuId: t,
        initialPlanId: n,
        analyticsLocationObject: i,
        analyticsLocations: a,
        renderHeader: s,
    });
}
