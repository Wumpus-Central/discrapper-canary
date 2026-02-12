"use strict";
n.d(t, { $K: () => p, KF: () => c, Mx: () => f, iH: () => h, kj: () => d, ri: () => _ });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(138869),
    l = n(386971),
    u = n(775486);
let c = (e) => {
        let { application: t, asset: n, className: i, ...a } = e;
        return (0, r.jsx)(o.A, { application: t, size: o.V.MEDIUM, asset: n, className: i, ...a });
    },
    d = (e) => {
        let { children: t, className: n, id: i, ...o } = e;
        return (0, r.jsx)(s.Heading, {
            className: a()(u.wx, n),
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
        let { className: t, title: n, description: i, ...a } = e;
        return (0, r.jsxs)("div", {
            className: t,
            ...a,
            children: [
                (0, r.jsx)(s.Heading, { variant: "heading-md/bold", color: "text-strong", children: n }),
                (0, r.jsx)(s.Heading, { variant: "heading-sm/normal", color: "text-default", children: i }),
            ],
        });
    },
    h = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: s, ...o } = e;
        return (0, r.jsx)("div", {
            className: a()(u.iq, s),
            ...o,
            children: (0, r.jsx)(l.mc, { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: u.gX }),
        });
    },
    p = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, r.jsx)("div", { className: a()(u.kL, n), ...i, children: t });
    };
