"use strict";
n.d(t, { A: () => u });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(990078),
    o = n(397927);
n(851883);
var l = n(123511);
function u(e) {
    let { icon: t, tooltipText: n, tooltipAriaLabel: i, className: u, onTooltipShow: c } = e,
        d = (0, o.S31)(o.clD.ONLINE);
    return null == n
        ? (0, r.jsx)(t, { size: "custom", color: d, className: a()(l.Kk, u) })
        : (0, r.jsx)(s.m, {
              ariaHidden: !0,
              text: n,
              delay: 150,
              onTooltipShow: c,
              children: (0, r.jsx)(t, { size: "custom", color: d, className: a()(l.Kk, u), "aria-label": i }),
          });
}
