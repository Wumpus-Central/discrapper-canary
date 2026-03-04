n.d(t, { j: () => R });
var i = n(627968);
n(64700);
var l = n(284009),
    r = n.n(l),
    a = n(397927),
    s = n(800342),
    o = n(73825),
    c = n(851907),
    _ = n(160946),
    E = n(342098),
    d = n(216678),
    u = n(869146),
    A = n(143582),
    T = n(490744),
    I = n(67480),
    N = n(652215);
async function R(e) {
    var t, n, l, R, S;
    let C,
        O,
        { applicationId: p, skuId: m, initialPlanId: P, analyticsLocations: D, analyticsLocationObject: g } = e,
        U = I.A.get(m);
    if (null == U) {
        let e = (await (0, s.JI)(p)).find((e) => e.sku.id === m);
        r()(null != e, "Could not find store listing for sku"),
            e.sku.type === N.Puh.SUBSCRIPTION_GROUP && (await (0, A.vz)(p, e.id));
    }
    (U = U ?? I.A.get(m)),
        r()(null != U && U.applicationId === p, "SKU must belong to application"),
        U.type !== N.Puh.SUBSCRIPTION || (0, _.B)([U.id]) || (await (0, o.ur)(U.id));
    let M =
        null == (O = null != (C = (0, c.LU)({ applicationId: p })) ? u.A.getWindow(C) : void 0) || O.closed
            ? a.SYi
            : a.KX8;
    if (U.type !== N.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, d.A)({
                applicationId: p,
                skuId: m,
                analyticsLocationObject: g,
                analyticsLocations: D,
                contextKey: M,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
            });
        });
    await ((t = p),
    (n = m),
    (l = P),
    (R = g),
    (S = D),
    (0, E.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: l,
        analyticsLocationObject: R,
        analyticsLocations: S,
        renderHeader: (e, t, n) => (0, i.jsx)(T.fs, { step: n, onClose: () => t(!1) }),
    }));
}
