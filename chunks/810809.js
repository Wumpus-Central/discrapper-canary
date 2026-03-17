"use strict";
n.d(t, { k: () => h });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(732955),
    o = n(397927),
    l = n(937008),
    u = n(156312),
    c = n(921925),
    d = n(592362),
    _ = n(482132),
    f = n(985018),
    p = n(724788);
function h(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: i, application: h } = (0, u.P5)(),
        { isGift: m, giftRecipient: E } = (0, l.Pv)();
    s()(null != i, "Expected selectedSkuId"), s()(null != h, "Expected application");
    let g = n[i];
    s()(null != g, "Expected sku");
    let A = m
        ? f.intl.formatToPlainString(f.t["2VjPTw"], {
              itemName: g.name,
              giftRecipient: E?.username ?? "your recipient",
          })
        : f.intl.formatToPlainString(f.t.wK0IbP, { applicationName: h.name, itemName: g.name });
    return (0, r.jsxs)(_.dZ, {
        children: [
            (0, r.jsx)(d.A, {}),
            (0, r.jsx)(c.A, {}),
            (0, r.jsxs)("div", {
                className: p.EL,
                children: [
                    (0, r.jsx)(o.Heading, { variant: "heading-xxl/bold", className: p.RS, children: "Success!" }),
                    (0, r.jsx)(o.Text, { variant: "text-md/normal", children: A }),
                    (0, r.jsx)("div", { className: p.yF }),
                    (0, r.jsx)(a.$nd, { onClick: t, text: f.intl.string(f.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
