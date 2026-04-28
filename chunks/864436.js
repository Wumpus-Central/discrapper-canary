"use strict";
n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var a = n(503698),
    i = n.n(a),
    l = n(990078),
    s = n(133171),
    o = n(652215);
n(851883);
var c = n(124704);
function d(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: a, className: d, onTooltipShow: u } = e,
        _ = (0, s.S3)(o.clD.ONLINE);
    return null == n
        ? (0, r.jsx)(t, { size: "custom", color: _, className: i()(c.Kk, d) })
        : (0, r.jsx)(l.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: u,
              children: (0, r.jsx)(t, { size: "custom", color: _, className: i()(c.Kk, d), "aria-label": a }),
          });
}
