"use strict";
n.d(t, { zX: () => L, kJ: () => R, r2: () => D, zK: () => O, hh: () => b });
var i = n(627968);
n(64700);
var r = n(295405),
    s = n(166532),
    a = n(735305),
    o = n(343834),
    l = n(926795),
    d = n(284009),
    _ = n.n(d),
    u = n(821609),
    c = n(534514),
    E = n(834730),
    h = n(427675),
    m = n(94420),
    f = n(937008),
    g = n(156312),
    p = n(921925),
    A = n(482132),
    I = n(985018),
    T = n(989553);
function S(e) {
    let { handleClose: t } = e,
        n = (0, m.t4)((e) => e.selectedSkuId),
        { application: r } = (0, g.P5)(),
        s = (0, h.gU)(),
        { isGift: a, giftRecipient: o } = (0, f.Pv)();
    _()(null != n, "Expected selectedSkuId"), _()(null != r, "Expected application");
    let l = s[n];
    _()(null != l, "Expected sku");
    let d = a
        ? I.intl.formatToPlainString(I.t["2VjPTw"], {
              itemName: l.name,
              giftRecipient: o?.username ?? "your recipient",
          })
        : I.intl.formatToPlainString(I.t.wK0IbP, { applicationName: r.name, itemName: l.name });
    return (0, i.jsxs)(A.dZ, {
        children: [
            (0, i.jsx)(p.A, {}),
            (0, i.jsxs)("div", {
                className: T.EL,
                children: [
                    (0, i.jsx)(c.D, { variant: "heading-xxl/bold", className: T.RS, children: "Success!" }),
                    (0, i.jsx)(E.E, { variant: "text-md/normal", children: d }),
                    (0, i.jsx)("div", { className: T.yF }),
                    (0, i.jsx)(u.$, { onClick: t, text: I.intl.string(I.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var N = n(623020),
    C = n(766734);
let R = { key: null, renderStep: (e) => (0, i.jsx)(C.B, { ...e }), options: { modalSizeGetter: () => "md" } },
    O = {
        key: s.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, i.jsx)(a.x, {
                ...e,
                breadcrumbSteps: [s.pn.ADD_PAYMENT_STEPS, s.pn.REVIEW, s.pn.CONFIRM],
                onReturn: () => {
                    0 === Object.keys(r.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(s.pn.REVIEW, { trackedFromStep: s.pn.ADD_PAYMENT_STEPS });
                },
            }),
        options: { renderHeader: !0 },
    },
    y = { key: s.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, i.jsx)(l.A, {}) },
    v = { key: s.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, i.jsx)(o.A, {}), options: { renderHeader: !0 } },
    D = {
        key: s.pn.REVIEW,
        renderStep: (e) => (0, i.jsx)(N._, { ...e }),
        options: { useBreadcrumbLabel: () => I.intl.string(I.t.QBnNHq) },
    },
    L = { key: s.pn.CONFIRM, renderStep: (e) => (0, i.jsx)(S, { ...e }) },
    b = [y, v];
