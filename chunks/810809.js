"use strict";
n.d(t, { k: () => m });
var r = n(627968);
n(64700);
var i = n(284009),
    s = n.n(i),
    a = n(732955),
    o = n(397927),
    l = n(413748),
    u = n(937008),
    c = n(156312),
    d = n(987616),
    _ = n(921925),
    f = n(482132),
    p = n(985018),
    h = n(660846);
function m(e) {
    let { handleClose: t } = e,
        n = (0, l.t)((e) => e.selectedSkuId),
        { application: i } = (0, c.P5)(),
        m = (0, d.gU)(),
        { isGift: E, giftRecipient: g } = (0, u.Pv)();
    s()(null != n, "Expected selectedSkuId"), s()(null != i, "Expected application");
    let A = m[n];
    s()(null != A, "Expected sku");
    let I = E
        ? p.intl.formatToPlainString(p.t["2VjPTw"], {
              itemName: A.name,
              giftRecipient: g?.username ?? "your recipient",
          })
        : p.intl.formatToPlainString(p.t.wK0IbP, { applicationName: i.name, itemName: A.name });
    return (0, r.jsxs)(f.dZ, {
        children: [
            (0, r.jsx)(_.A, {}),
            (0, r.jsxs)("div", {
                className: h.EL,
                children: [
                    (0, r.jsx)(o.Heading, { variant: "heading-xxl/bold", className: h.RS, children: "Success!" }),
                    (0, r.jsx)(o.Text, { variant: "text-md/normal", children: I }),
                    (0, r.jsx)("div", { className: h.yF }),
                    (0, r.jsx)(a.$nd, { onClick: t, text: p.intl.string(p.t.cpT0Cq), fullWidth: !0 }),
                ],
            }),
        ],
    });
}
