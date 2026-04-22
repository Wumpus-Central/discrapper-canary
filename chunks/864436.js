"use strict";
a.d(t, { A: () => c });
var r = a(627968);
a(64700);
var l = a(503698),
    n = a.n(l),
    i = a(990078),
    s = a(935154),
    o = a(652215);
a(851883);
var d = a(124704);
function c(e) {
    let { icon: t, tooltipText: a, tooltipAriaLabel: l, className: c, onTooltipShow: u } = e,
        h = (0, s.S3)(o.clD.ONLINE);
    return null == a
        ? (0, r.jsx)(t, { size: "custom", color: h, className: n()(d.Kk, c) })
        : (0, r.jsx)(i.m, {
              ariaHidden: !0,
              text: a,
              delay: 150,
              onTooltipShow: u,
              children: (0, r.jsx)(t, { size: "custom", color: h, className: n()(d.Kk, c), "aria-label": l }),
          });
}
