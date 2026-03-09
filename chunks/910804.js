"use strict";
n.d(t, { $K: () => h, KF: () => c, Mx: () => f, iH: () => p, kj: () => d, ri: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(138869),
    l = n(386971),
    u = n(775486);
let c = (e) => {
        let { application: t, asset: n, className: i, ...s } = e;
        return (0, r.jsx)(o.A, { application: t, size: o.V.MEDIUM, asset: n, className: i, ...s });
    },
    d = (e) => {
        let { children: t, className: n, id: i, ...o } = e;
        return (0, r.jsx)(a.Heading, {
            className: s()(u.wx, n),
            variant: "heading-xl/extrabold",
            id: i,
            ...o,
            children: t,
        });
    };
function _() {
    return (0, r.jsx)("hr", { className: u.yF });
}
let f = (e) => {
        let { className: t, title: n, description: i, ...s } = e;
        return (0, r.jsxs)("div", {
            className: t,
            ...s,
            children: [
                (0, r.jsx)(a.Heading, { variant: "heading-md/bold", color: "text-strong", children: n }),
                (0, r.jsx)(a.Heading, { variant: "heading-sm/normal", color: "text-default", children: i }),
            ],
        });
    },
    p = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: a, ...o } = e;
        return (0, r.jsx)("div", {
            className: s()(u.iq, a),
            ...o,
            children: (0, r.jsx)(l.mc, { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: u.gX }),
        });
    },
    h = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, r.jsx)("div", { className: s()(u.kL, n), ...i, children: t });
    };
