n.d(t, { zX: () => j, kJ: () => P, r2: () => y, zK: () => f, hh: () => R });
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
    _ = n(671744),
    T = n(937008),
    E = n(834252),
    A = n(921925),
    O = n(482132),
    h = n(375708),
    I = n(989553);
function S(e) {
    let { handleClose: t } = e,
        n = (0, _.t4)((e) => e.selectedSkuId),
        { application: i } = (0, E.P5)(),
        r = (0, m.gU)(),
        { isGift: s, giftRecipient: a } = (0, T.Pv)();
    c()(null != n, "Expected selectedSkuId"), c()(null != i, "Expected application");
    let o = r[n];
    c()(null != o, "Expected sku");
    let u = s
        ? h.intl.formatToPlainString(h.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: a?.username ?? "your recipient",
          })
        : h.intl.formatToPlainString(h.t.wK0IbP, { applicationName: i.name, itemName: o.name });
    return (0, l.jsxs)(O.dZ, {
        children: [
            (0, l.jsx)(A.A, {}),
            (0, l.jsxs)("div", {
                className: I.EL,
                children: [
                    (0, l.jsx)(C.D, { variant: "heading-xxl/bold", className: I.RS, children: "Success!" }),
                    (0, l.jsx)(p.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: I.yF }),
                    (0, l.jsx)(d.$, { onClick: t, text: h.intl.string(h.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var g = n(862241),
    x = n(766734);
let P = { key: null, renderStep: (e) => (0, l.jsx)(x.B, { ...e }), options: { modalSizeGetter: () => "md" } },
    f = {
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
    v = { key: r.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(a.A, {}), options: { renderHeader: !0 } },
    y = {
        key: r.pn.REVIEW,
        renderStep: (e) => (0, l.jsx)(g._M, { ...e }),
        options: { useBreadcrumbLabel: () => h.intl.string(h.t.QBnNHq) },
    },
    j = { key: r.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(S, { ...e }) },
    R = [N, v];
