"use strict";
r.d(t, { A: () => d });
var n = r(627968);
r(64700);
var i = r(503698),
    a = r.n(i),
    s = r(990078),
    l = r(133171),
    o = r(652215);
r(851883);
var c = r(124704);
function d(e) {
    let { icon: t, tooltipText: r, tooltipAriaLabel: i, className: d, onTooltipShow: u } = e,
        _ = (0, l.S3)(o.clD.ONLINE);
    return null == r
        ? (0, n.jsx)(t, { size: "custom", color: _, className: a()(c.Kk, d) })
        : (0, n.jsx)(s.m, {
              ariaHidden: !0,
              text: r,
              delay: 150,
              onTooltipShow: u,
              children: (0, n.jsx)(t, { size: "custom", color: _, className: a()(c.Kk, d), "aria-label": i }),
          });
}
