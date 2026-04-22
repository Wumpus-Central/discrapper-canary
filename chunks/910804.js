n.d(t, { $K: () => A, KF: () => c, Mx: () => m, iH: () => h, kj: () => d, ri: () => p });
var l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    r = n(534514),
    s = n(138869),
    o = n(386971),
    u = n(137089);
let c = (e) => {
        let { application: t, asset: n, className: i, ...a } = e;
        return (0, l.jsx)(s.A, { application: t, size: s.V.MEDIUM, asset: n, className: i, ...a });
    },
    d = (e) => {
        let { children: t, className: n, id: i, ...s } = e;
        return (0, l.jsx)(r.D, { className: a()(u.wx, n), variant: "heading-xl/extrabold", id: i, ...s, children: t });
    };
function p() {
    return (0, l.jsx)("hr", { className: u.yF });
}
let m = (e) => {
        let { className: t, title: n, description: i, ...a } = e;
        return (0, l.jsxs)("div", {
            className: t,
            ...a,
            children: [
                (0, l.jsx)(r.D, { variant: "heading-md/bold", color: "text-strong", children: n }),
                (0, l.jsx)(r.D, { variant: "heading-sm/normal", color: "text-default", children: i }),
            ],
        });
    },
    h = (e) => {
        let { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: r, ...s } = e;
        return (0, l.jsx)("div", {
            className: a()(u.iq, r),
            ...s,
            children: (0, l.jsx)(o.mc, { applicationId: t, storeListingBenefits: n, skuBenefits: i, className: u.gX }),
        });
    },
    A = (e) => {
        let { children: t, className: n, ...i } = e;
        return (0, l.jsx)("div", { className: a()(u.kL, n), ...i, children: t });
    };
