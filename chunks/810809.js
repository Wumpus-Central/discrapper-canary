"use strict";
n.d(t, { k: () => p });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(732955),
    o = n(397927),
    l = n(937008),
    u = n(156312),
    c = n(921925),
    d = n(482132),
    _ = n(985018),
    f = n(660846);
function p(e) {
    let { handleClose: t } = e,
        { skusById: n, selectedSkuId: i, application: p } = (0, u.P5)(),
        { isGift: h, giftRecipient: m } = (0, l.Pv)();
    s()(null != i, "Expected selectedSkuId"), s()(null != p, "Expected application");
    let E = n[i];
    s()(null != E, "Expected sku");
    let g = h
        ? _.intl.formatToPlainString(_.t["2VjPTw"], {
              itemName: E.name,
              giftRecipient: m?.username ?? "your recipient",
          })
        : _.intl.formatToPlainString(_.t.wK0IbP, { applicationName: p.name, itemName: E.name });
    return (0, r.jsxs)(d.dZ, {
        children: [
            (0, r.jsx)(c.A, {}),
            (0, r.jsxs)("div", {
                className: f.EL,
                children: [
                    (0, r.jsx)(o.Heading, { variant: "heading-xxl/bold", className: f.RS, children: "Success!" }),
                    (0, r.jsx)(o.Text, { variant: "text-md/normal", children: g }),
                    (0, r.jsx)("div", { className: f.yF }),
                    (0, r.jsx)(a.$nd, { onClick: t, text: _.intl.string(_.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
