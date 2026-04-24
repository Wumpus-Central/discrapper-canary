n.d(t, { zX: () => P, kJ: () => O, r2: () => b, zK: () => y, hh: () => L });
var l = n(627968);
n(64700);
var r = n(295405),
    i = n(166532),
    a = n(735305),
    s = n(343834),
    o = n(926795),
    u = n(284009),
    d = n.n(u),
    c = n(821609),
    C = n(534514),
    p = n(834730),
    m = n(427675),
    h = n(94420),
    _ = n(937008),
    E = n(156312),
    A = n(921925),
    g = n(482132),
    f = n(985018),
    T = n(989553);
function S(e) {
    let { handleClose: t } = e,
        n = (0, h.t4)((e) => e.selectedSkuId),
        { application: r } = (0, E.P5)(),
        i = (0, m.gU)(),
        { isGift: a, giftRecipient: s } = (0, _.Pv)();
    d()(null != n, "Expected selectedSkuId"), d()(null != r, "Expected application");
    let o = i[n];
    d()(null != o, "Expected sku");
    let u = a
        ? f.intl.formatToPlainString(f.t["2VjPTw"], {
              itemName: o.name,
              giftRecipient: s?.username ?? "your recipient",
          })
        : f.intl.formatToPlainString(f.t.wK0IbP, { applicationName: r.name, itemName: o.name });
    return (0, l.jsxs)(g.dZ, {
        children: [
            (0, l.jsx)(A.A, {}),
            (0, l.jsxs)("div", {
                className: T.EL,
                children: [
                    (0, l.jsx)(C.D, { variant: "heading-xxl/bold", className: T.RS, children: "Success!" }),
                    (0, l.jsx)(p.E, { variant: "text-md/normal", children: u }),
                    (0, l.jsx)("div", { className: T.yF }),
                    (0, l.jsx)(c.$, { onClick: t, text: f.intl.string(f.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
var I = n(623020),
    x = n(766734);
let O = { key: null, renderStep: (e) => (0, l.jsx)(x.B, { ...e }), options: { modalSizeGetter: () => "md" } },
    y = {
        key: i.pn.ADD_PAYMENT_STEPS,
        renderStep: (e) =>
            (0, l.jsx)(a.x, {
                ...e,
                breadcrumbSteps: [i.pn.ADD_PAYMENT_STEPS, i.pn.REVIEW, i.pn.CONFIRM],
                onReturn: () => {
                    0 === Object.keys(r.A.paymentSources).length
                        ? e.handleClose()
                        : e.handleStepChange(i.pn.REVIEW, { trackedFromStep: i.pn.ADD_PAYMENT_STEPS });
                },
            }),
        options: { renderHeader: !0 },
    },
    R = { key: i.pn.AWAITING_PURCHASE_TOKEN_AUTH, renderStep: () => (0, l.jsx)(o.A, {}) },
    N = { key: i.pn.AWAITING_AUTHENTICATION, renderStep: () => (0, l.jsx)(s.A, {}), options: { renderHeader: !0 } },
    b = {
        key: i.pn.REVIEW,
        renderStep: (e) => (0, l.jsx)(I._, { ...e }),
        options: { useBreadcrumbLabel: () => f.intl.string(f.t.QBnNHq) },
    },
    P = { key: i.pn.CONFIRM, renderStep: (e) => (0, l.jsx)(S, { ...e }) },
    L = [R, N];
