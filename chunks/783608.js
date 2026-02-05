"use strict";
n.d(t, { A: () => u });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(985018),
    o = n(6646),
    l = (function (e) {
        return (e[(e.VIEW_MORE = 0)] = "VIEW_MORE"), (e[(e.VIEW_LESS = 1)] = "VIEW_LESS"), e;
    })(l || {});
function u(e) {
    let { title: t, buttonType: n, onClickViewButton: i } = e;
    return (0, r.jsxs)("div", {
        className: o.wx,
        children: [
            (0, r.jsx)(a.Text, { variant: "text-md/medium", color: "text-strong", children: t }),
            null != n &&
                null != i &&
                (0, r.jsx)(a.DUT, {
                    className: o.Vc,
                    onClick: i,
                    "aria-label": s.intl.formatToPlainString(s.t["bj/2kV"], { title: t }),
                    children: (0, r.jsx)(a.Text, {
                        variant: "text-md/medium",
                        color: "text-brand",
                        children: 0 === n ? s.intl.format(s.t.gVw57p, {}) : s.intl.string(s.t.nPGLFQ),
                    }),
                }),
        ],
    });
}
(u.buttonTypes = l),
    (u.Loading = function () {
        let e = i.useMemo(() => ({ width: `${10 + 20 * Math.random()}%` }), []);
        return (0, r.jsx)("div", {
            className: o.uH,
            style: e,
            children: (0, r.jsx)(a.Text, {
                className: o.R,
                variant: "text-md/medium",
                color: "text-strong",
                children: "_",
            }),
        });
    });
