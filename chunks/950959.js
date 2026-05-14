t.d(n, { default: () => Y });
var l = t(627968),
    r = t(64700),
    s = t(793574),
    i = t(688810),
    a = t(75304),
    u = t(937008),
    o = t(834252),
    d = t(166532),
    c = t(491057),
    p = t(546042),
    x = t(735305),
    C = t(343834),
    A = t(926795),
    P = t(862241),
    j = t(766734),
    h = t(295405),
    I = t(284009),
    y = t.n(I),
    N = t(964486),
    T = t(666646),
    _ = t(192308),
    k = t(17928),
    S = t(871109);
let E = r.createContext(void 0);
function g() {
    let e = r.useContext(E);
    return y()(null != e, "GuildProductPurchaseContext not found"), e;
}
function f(e) {
    let { children: n, guildProductListingId: t, ...r } = e,
        s = (0, k.bG)([S.A], () => S.A.getGuildProduct(t));
    return (
        y()(null != s, "guildProductListing cannot be null"),
        (0, l.jsx)(E.Provider, { value: { guildProductListing: s, ...r }, children: n })
    );
}
function m(e) {
    let { handleClose: n } = e,
        { guildProductListing: r, guildId: s } = g(),
        i = (0, T.sw)();
    return (
        (0, N.Ay)(() => {
            var e;
            y()(null != i, "invoicePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: r.id, invoicePreview: i }),
                (0, _.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                        t.e("62170"),
                        t.e("35778"),
                        t.e("47812"),
                        t.e("13583"),
                        t.e("28090"),
                    ]).then(t.bind(t, 779457));
                    return (t) => (0, l.jsx)(n, { ...e, ...t });
                }),
                n();
        }),
        null
    );
}
var v = t(503698),
    D = t.n(v),
    M = t(939249),
    O = t(789645),
    b = t(935462),
    G = t(303612),
    w = t(916261),
    L = t(575650);
function R(e) {
    let { className: n, onClose: t } = e;
    return (0, l.jsx)(M.D, {
        className: D()(w.cG, n),
        onClick: t,
        children: (0, l.jsx)(O.P, { size: "xs", color: "currentColor", className: w.yP }),
    });
}
function U(e) {
    let { guildProductListing: n, onClose: t, className: r } = e;
    return (0, l.jsxs)(b.rQ, {
        className: D()(w.wx, L.GI, r),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, l.jsx)(G.A, { className: w.F0, listing: n, imageSize: 500, alt: "" }),
            (0, l.jsx)(R, { className: w.b, onClose: t }),
        ],
    });
}
var F = t(196617);
function H(e) {
    let { onClose: n } = e,
        { guildProductListing: t } = g();
    return (0, l.jsx)(U, { guildProductListing: t, className: F.w, onClose: n });
}
let V = (e, n, t) => (t === d.pn.CONFIRM ? null : (0, l.jsx)(H, { onClose: () => n(!1) }));
var W = t(818348);
let z = [
    { key: null, renderStep: (e) => (0, l.jsx)(j.B, { ...e }) },
    {
        key: d.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, l.jsx)(x.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(h.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(d.pn.REVIEW, { trackedFromStep: d.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: d.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(A.A, {}) },
    { key: d.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(C.A, {}) },
    { key: d.pn.REVIEW, renderStep: (e) => (0, l.jsx)(P._M, { ...e }) },
    { key: d.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(m, { ...e }) },
];
function Y(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: r, ...d } = e,
        { analyticsLocations: x } = (0, i.Ay)(t, s.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, l.jsx)(f, {
        ...n,
        children: (0, l.jsx)(i.f5, {
            value: x,
            children: (0, l.jsx)(o.PaymentContextProvider, {
                stepConfigs: z,
                applicationId: r,
                skuIDs: [d.skuId],
                activeSubscription: null,
                purchaseType: W.VV.ONE_TIME,
                unifiedCheckoutFlow: a.C.GUILD_PRODUCT_CHECKOUT,
                children: (0, l.jsx)(c.Qt, {
                    children: (0, l.jsx)(u.dX, {
                        children: (0, l.jsx)(p.PaymentModal, {
                            initialPlanId: null,
                            analyticsLocations: x,
                            renderHeader: V,
                            ...d,
                        }),
                    }),
                }),
            }),
        }),
    });
}
