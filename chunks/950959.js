t.d(n, { default: () => z });
var r = t(627968),
    l = t(64700),
    s = t(793574),
    a = t(688810),
    i = t(285871),
    o = t(937008),
    c = t(156312),
    u = t(166532),
    d = t(491057),
    p = t(546042),
    x = t(735305),
    A = t(343834),
    _ = t(926795),
    P = t(623020),
    C = t(766734),
    h = t(295405),
    I = t(284009),
    j = t.n(I),
    N = t(964486),
    S = t(427675),
    T = t(192308),
    k = t(17928),
    y = t(871109);
let E = l.createContext(void 0);
function g() {
    let e = l.useContext(E);
    return j()(null != e, "GuildProductPurchaseContext not found"), e;
}
function f(e) {
    let { children: n, guildProductListingId: t, ...l } = e,
        s = (0, k.bG)([y.A], () => y.A.getGuildProduct(t));
    return (
        j()(null != s, "guildProductListing cannot be null"),
        (0, r.jsx)(E.Provider, { value: { guildProductListing: s, ...l }, children: n })
    );
}
function m(e) {
    let { handleClose: n } = e,
        { guildProductListing: l, guildId: s } = g(),
        a = (0, S.Hf)();
    return (
        (0, N.Ay)(() => {
            var e;
            j()(null != a, "selectedSkuPricePreview cannot be null"),
                (e = { guildId: s, guildProductListingId: l.id, skuPricePreview: a }),
                (0, T.openModalLazy)(async () => {
                    let { default: n } = await t.e("28090").then(t.bind(t, 779457));
                    return (t) => (0, r.jsx)(n, { ...e, ...t });
                }),
                n();
        }),
        null
    );
}
var v = t(503698),
    D = t.n(v),
    R = t(939249),
    b = t(789645),
    G = t(935462),
    O = t(303612),
    w = t(916261),
    M = t(575650);
function L(e) {
    let { className: n, onClose: t } = e;
    return (0, r.jsx)(R.D, {
        className: D()(w.cG, n),
        onClick: t,
        children: (0, r.jsx)(b.P, { size: "xs", color: "currentColor", className: w.yP }),
    });
}
function U(e) {
    let { guildProductListing: n, onClose: t, className: l } = e;
    return (0, r.jsxs)(G.rQ, {
        className: D()(w.wx, M.GI, l),
        separator: !1,
        "data-migration-pending": !0,
        children: [
            (0, r.jsx)(O.A, { className: w.F0, listing: n, imageSize: 500, alt: "" }),
            (0, r.jsx)(L, { className: w.b, onClose: t }),
        ],
    });
}
var F = t(196617);
function H(e) {
    let { onClose: n } = e,
        { guildProductListing: t } = g();
    return (0, r.jsx)(U, { guildProductListing: t, className: F.w, onClose: n });
}
let B = (e, n, t) => (t === u.pn.CONFIRM ? null : (0, r.jsx)(H, { onClose: () => n(!1) }));
var V = t(818348);
let W = [
    { key: null, renderStep: (e) => (0, r.jsx)(C.B, { ...e }) },
    {
        key: u.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, r.jsx)(x.x, {
                ...e,
                onReturn: () => {
                    0 === Object.keys(h.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(u.pn.REVIEW, { trackedFromStep: u.pn.ADD_PAYMENT_STEPS });
                },
            }),
    },
    { key: u.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, r.jsx)(_.A, {}) },
    { key: u.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, r.jsx)(A.A, {}) },
    { key: u.pn.REVIEW, renderStep: (e) => (0, r.jsx)(P._, { ...e }) },
    { key: u.pn.CONFIRM, renderStep: (e) => (0, r.jsx)(m, { ...e }) },
];
function z(e) {
    let { guildProductContext: n, sourceAnalyticsLocations: t, applicationId: l, ...u } = e,
        { analyticsLocations: x } = (0, a.Ay)(t, s.A.GUILD_PRODUCT_PAYMENT_MODAL);
    return (0, r.jsx)(f, {
        ...n,
        children: (0, r.jsx)(a.f5, {
            value: x,
            children: (0, r.jsx)(c.PaymentContextProvider, {
                stepConfigs: W,
                applicationId: l,
                skuIDs: [u.skuId],
                activeSubscription: null,
                purchaseType: V.VV.ONE_TIME,
                unifiedCheckoutFlow: i.C.GUILD_PRODUCT_CHECKOUT,
                children: (0, r.jsx)(d.Qt, {
                    children: (0, r.jsx)(o.dX, {
                        children: (0, r.jsx)(p.PaymentModal, {
                            initialPlanId: null,
                            analyticsLocations: x,
                            renderHeader: B,
                            ...u,
                        }),
                    }),
                }),
            }),
        }),
    });
}
