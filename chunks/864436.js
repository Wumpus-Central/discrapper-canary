"use strict";
n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(503698),
    s = n.n(r),
    a = n(990078),
    o = n(133171),
    l = n(652215);
n(851883);
var u = n(124704);
function c(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: r, className: c, onTooltipShow: d } = e,
        _ = (0, o.S3)(l.clD.ONLINE);
    return null == n
        ? (0, i.jsx)(t, { size: "custom", color: _, className: s()(u.Kk, c) })
        : (0, i.jsx)(a.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: d,
              children: (0, i.jsx)(t, { size: "custom", color: _, className: s()(u.Kk, c), "aria-label": r }),
          });
}
