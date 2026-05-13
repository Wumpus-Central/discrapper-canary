"use strict";
n.d(t, { z: () => l });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(127747),
    o = n(678773);
function l(e) {
    let {
        value: t,
        minValue: n = 0,
        maxValue: r = 100,
        isIndeterminate: l,
        valueLabel: u,
        formatOptions: c,
        size: d = "lg",
        animate: _ = !0,
        className: f,
        "aria-label": h,
        "aria-labelledby": p,
    } = e;
    return (0, i.jsx)(a.z, {
        value: t,
        minValue: n,
        maxValue: r,
        isIndeterminate: l,
        valueLabel: u,
        formatOptions: c,
        "aria-label": h,
        "aria-labelledby": p,
        className: s()(o.track, o[d], f),
        children: (e) => {
            let { percentage: t } = e;
            return l
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)("div", { className: s()(o.indeterminateBar1, o[d], _ && o.animating) }),
                          (0, i.jsx)("div", { className: s()(o.indeterminateBar2, o[d], _ && o.animating) }),
                      ],
                  })
                : (0, i.jsx)("div", {
                      className: s()(o.fill, o[d], _ && o.animating),
                      style: { transform: `translate3d(${(t ?? 0) - 100}%, 0, 0)` },
                  });
        },
    });
}
