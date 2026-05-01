t.d(n, { default: () => Y });
var r = t(627968),
    l = t(64700),
    s = t(793574),
    i = t(688810),
    a = t(285871),
    u = t(937008),
    c = t(156312),
    d = t(166532),
    o = t(491057),
    p = t(546042),
    x = t(735305),
    P = t(343834),
    C = t(926795),
    A = t(623020),
    j = t(766734),
    h = t(295405),
    I = t(284009),
    k = t.n(I),
    y = t(964486),
    N = t(427675),
    S = t(192308),
    T = t(17928),
    _ = t(871109);
let E = l.createContext(void 0);
function f() {
    let e = l.useContext(E);
    return k()(null != e, "GuildProductPurchaseContext not found"), e;
}
function g(e) {
    let { children: n, guildProductListingId: t, ...l } = e,
        s = (0, T.bG)([_.A], () => _.A.getGuildProduct(t));
    return (
        k()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(E.Provider, { value: { guildProductListing: s, ...l }, children: n })
    );
}
function m(e) {
    let { handleClose: n } = e,
        { guildProductListing: l, guildId: s } = f(),
        i = (0, N.Hf)();
    return (
        (0, y.Ay)(() => {
            var e;
            k()(null != i, "selectedSkuPricePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: l.id, skuPricePreview: i }),
                (0, S.openModalLazy)(async () => {
                    let { default: n } = await Promise.all([
                        t.e("62170"),
                        t.e("35778"),
                        t.e("47812"),
                        t.e("13583"),
                        t.e("28090"),
                    ]).then(t.bind(t, 779457));
                    return (t) => (0, r.jsx)(n, { ...e, ...t });
                }),
                n();
        }),
        null
    );
}
var v = t(503698),
    D = t.n(v),
    O = t(939249),
    b = t(789645),
    G = t(935462),
    M = t(303612),
    w = t(916261),
    L = t(575650);
function R(e) {
    let { className: n, onClose: t } = e;
    return (0, r.jsx)(O.D, {
        className: D()(w.cG, n),
        onClick: t,
        children: (0, r.jsx)(b.P, { size: "xs", color: "currentColor", className: w.yP }),
    });
}
function U(e) {
    let { guildProductListing: n, onClose: t, className: l } = e;
    return (0, r.jsxs)(G.rQ, {
        className: D()(w.wx, L.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(M.A, { className: w.F0, listing: n, imageSize: 500, alt: "" }),
            (0, r.jsx)(R, { className: w.b, onClose: t }),
        ],
    });
}
var H = t(196617);
function F(e) {
    let { onClose: n } = e,
        { guildProductListing: t } = f();
    return (0, r.jsx)(U, { guildProductListing: t, className: H.w, onClose: n });
}
let V = (e, n, t) => (t === d.pn.CONFIRM ? null : (0, r.jsx)(F, { onClose: () => n(!1) }));
var W = t(818348);
let z = [
    { key: null, renderStep: (e) => (0, r.jsx)(j.B, { ...e }) },
    {
        key: d.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(x.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(h.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(d.pn.REVIEW, { trackedFromStep: d.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: d.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(C.A, {}) },
    { key: d.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(P.A, {}) },
    { key: d.pn.REVIEW, renderStep: (e) => (0, r.jsx)(A._, { ...e }) },
    { key: d.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(m, { ...e }) },
];
function Y(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: l, ...d } = e,
        { analyticsLocations: x } = (0, i.Ay)(t, s.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(g, {
        ...n,
        children: (0, r.jsx)(i.f5, {
            value: x,
            children: (0, r.jsx)(c.PaymentContextProvider, {
                stepConfigs: z,
                applicationId: l,
                skuIDs: [d.skuId],
                activeSubscription: null,
                purchaseType: W.VV.ONE_TIME,
                unifiedCheckoutFlow: a.C.GUILD_PRODUCT_CHECKOUT,
                children: (0, r.jsx)(o.Qt, {
                    children: (0, r.jsx)(u.dX, {
                        children: (0, r.jsx)(p.PaymentModal, {
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
