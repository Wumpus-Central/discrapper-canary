"use strict";
n.d(t, { z: () => o });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(769708),
    l = n(476912);
function o(e) {
    let {
        value: t,
        minValue: n = 0,
        maxValue: r = 100,
        isIndeterminate: o,
        valueLabel: d,
        formatOptions: c,
        size: u = "lg",
        animate: _ = !0,
        className: E,
        "aria-label": A,
        "aria-labelledby": h,
    } = e;
    return (0, i.jsx)(s.z, {
        value: t,
        minValue: n,
        maxValue: r,
        isIndeterminate: o,
        valueLabel: d,
        formatOptions: c,
        "aria-label": A,
        "aria-labelledby": h,
        className: a()(l.track, l[u], E),
        children: (e) => {
            let { percentage: t } = e;
            return o
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: a()(l.indeterminateBar1, l[u], _ && l.animating) }),
                          (0, i.jsx)("div", { className: a()(l.indeterminateBar2, l[u], _ && l.animating) }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: a()(l.fill, l[u], _ && l.animating),
                      style: { transform: `translate3d(${(t ?? 0) - 100}%, 0, 0)` },
                  });
        },
    });
}
