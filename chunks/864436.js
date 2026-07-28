"use strict";
n.d(t, { A: () => c });
var i = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    s = n(935154),
    l = n(652215),
    o = n(866665);
n(851883);
var d = n(491160);
function c(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: r, className: c, onTooltipShow: u } = e,
        _ = (0, s.S3)(l.clD.ONLINE);
    return null == n
        ? (0, i.jsx)(t, { size: "custom", color: _, className: a()(d.Kk, c) })
        : (0, i.jsx)(o.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: u,
              children: (0, i.jsx)(t, { size: "custom", color: _, className: a()(d.Kk, c), "aria-label": r }),
          });
}
