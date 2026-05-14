n.d(t, { zX: () => R, kJ: () => g, r2: () => v, zK: () => P, hh: () => k });
var l = n(627968);
n(64700);
var i = n(295405),
    r = n(166532),
    s = n(735305),
    a = n(343834),
    o = n(926795),
    u = n(284009),
    c = n.n(u),
    d = n(821609),
    C = n(534514),
    p = n(834730),
    m = n(427675),
    E = n(94420),
    _ = n(937008),
    T = n(834252),
    A = n(921925),
    h = n(482132),
    O = n(375708),
    S = n(989553);
function I(e) {
    let { handleClose: t } = e,
        n = (0, E.t4)((e) => e.selectedSkuId),
        { application: i } = (0, T.P5)(),
        r = (0, m.gU)(),
        { isGift: s, giftRecipient: a } = (0, _.Pv)();
    c()(null != n, "Expected selectedSkuId"), c()(null != i, "Expected application");
    let o = r[n];
    c()(null != o, "Expected sku");
    let u = s
        ? O.intl.formatToPlainString(O.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: a?.username ?? "your recipient",
          })
        : O.intl.formatToPlainString(O.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(h.dZ, {
        children: [
            (0, l.jsx)(A.A, {}),
            (0, l.jsxs)("div", {
                className: S.EL,
                children: [
                    (0, l.jsx)(C.D, { variant: "heading-xxl/bold", className: S.RS, children: "Success!" }),
                    (0, l.jsx)(p.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: S.yF }),
                    (0, l.jsx)(d.$, { onClick: t, text: O.intl.string(O.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var f = n(862241),
    x = n(766734);
let g = { key: null, renderStep: (e) => (0, l.jsx)(x.B, { ...e }), options: { modalSizeGetter: () => "md" } },
    P = {
        key: r.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, l.jsx)(s.x, {
                ...e,
                breadcrumbSteps: [r.pn.ADD_PAYMENT_STEPS, r.pn.REVIEW, r.pn.CONFIRM],
                onReturn: () => {
                    0 === Object.keys(i.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(r.pn.REVIEW, { trackedFromStep: r.pn.ADD_PAYMENT_STEPS });
                },
            }),
        options: { renderHeader: !0 },
    },
    N = { key: r.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(o.A, {}) },
    y = { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(a.A, {}), options: { renderHeader: !0 } },
    v = {
        key: r.pn.REVIEW,
        renderStep: (e) => (0, l.jsx)(f._M, { ...e }),
        options: { useBreadcrumbLabel: () => O.intl.string(O.t.QBnNHq) },
    },
    R = { key: r.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(I, { ...e }) },
    k = [N, y];
