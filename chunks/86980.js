"use strict";
n.d(t, { j: () => R });
var i = n(627968);
n(64700);
var r = n(284009),
    l = n.n(r),
    s = n(397927),
    a = n(800342),
    o = n(73825),
    E = n(851907),
    c = n(160946),
    _ = n(342098),
    d = n(216678),
    A = n(869146),
    u = n(143582),
    T = n(490744),
    I = n(67480),
    N = n(652215);
async function R(e) {
    var t, n, r, R, S;
    let O,
        C,
        { applicationId: p, skuId: P, initialPlanId: D, analyticsLocations: M, analyticsLocationObject: g } = e,
        U = I.A.get(P);
    if (null == U) {
        let e = (await (0, a.JI)(p)).find((e) => e.sku.id === P);
        l()(null != e, "Could not find store listing for sku"),
            e.sku.type === N.Puh.SUBSCRIPTION_GROUP && (await (0, u.vz)(p, e.id));
    }
    (U = U ?? I.A.get(P)),
        l()(null != U && U.applicationId === p, "SKU must belong to application"),
        U.type !== N.Puh.SUBSCRIPTION || (0, c.B)([U.id]) || (await (0, o.ur)(U.id));
    let m =
        null == (C = null != (O = (0, E.LU)({ applicationId: p })) ? A.A.getWindow(O) : void 0) || C.closed
            ? s.SYi
            : s.KX8;
    if (U.type !== N.Puh.SUBSCRIPTION)
        return new Promise((e, t) => {
            (0, d.A)({
                applicationId: p,
                skuId: P,
                analyticsLocationObject: g,
                analyticsLocations: M,
                contextKey: m,
                onComplete: (t) => {
                    e(t?.entitlements ?? []);
                },
                onClose: (e) => {
                    e || t();
                },
            });
        });
    await ((t = p),
    (n = P),
    (r = D),
    (R = g),
    (S = M),
    (0, _.l)({
        applicationId: t,
        skuId: n,
        initialPlanId: r,
        analyticsLocationObject: R,
        analyticsLocations: S,
        renderHeader: (e, t, n) => (0, i.jsx)(T.fs, { step: n, onClose: () => t(!1) }),
    }));
}
